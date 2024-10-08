function functionShake(code, functionName) {
    const reg = new RegExp(`(async\\s)?(function\\s+)?${functionName}\\s?\\([\\s\\S]*?\\)\\s+?{`)
    const fun = code.match(reg)
    const functionHeader = fun[0]
    if (!fun[0]) return code
    const isAsync = functionHeader.includes('async')
    code = code.replace(reg, `${isAsync ? '' : 'async '}${functionHeader}\nawait pluginShakeFunction()\n`)
    return code
}
class AAA {
    async abc() {}
}
module.exports = function rollupRewrite() {
    return {
        name: 'vue-event-shake',
        enforce: 'pre', // 标注必须在vite核心插件之前介入

        // 处理文件引入 Processing file import
        transform(code, id) {
            if (!/\.vue$/.test(id))
                return code

            const matchs = code.match(/\.shake=["'](.+?)["']/g)
            if (matchs) {
                const scriptHeader = code.match(/<script .+?>/)
                code = code.replace(scriptHeader, `${scriptHeader}\nimport { pluginShakeFunction } from 'vue-event-shake/shake.js'\n`)
                for (const str of matchs) {
                    const functionMatch = str.match(/["'](.+?)(\(.+?\))?["']/)
                    const functionName = functionMatch[1]
                    code = functionShake(code, functionName)
                }
            }

            return code
        },
    }
}
