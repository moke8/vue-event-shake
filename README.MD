# vue-event-shake
## English
### introduce
Add a quick anti shake event modifier to your vue project

### install
```
npm i vue-event-shake
```
### Refer to vite configuration
```
// vite.config.ts
...
    plugins: [
        shake()
    ]
...
```

### use in project
```
// .vue file
<div @click.shake="onClick()">click me!</div>
<input @input.shake="onInput()"/>
```

### eslint rule
```
    'vue/valid-v-on': ['error', {
        modifiers: ['shake'],
    }],
```

## 中文
### 介绍
为您的vue项目增加快捷的防抖事件修饰器

### 安装
```
npm i vue-event-shake
```
### 配置
```
// vite.config.ts
...
    plugins: [
        shake()
    ]
...
```

### 在项目中使用
```
// .vue file
<div @click.shake="onClick()">click me!</div>
<input @input.shake="onInput()"/>
```

### eslint规则配置
```
    'vue/valid-v-on': ['error', {
        modifiers: ['shake'],
    }],
```