function pluginShake() {
    let timer = -1
    return function (millisecond = 300) {
        return new Promise((resolve) => {
            clearTimeout(timer)
            timer = setTimeout(resolve, millisecond)
        })
    }
}

export const pluginShakeFunction = pluginShake()
