TypeScript Isomorphic Request in Node and Web Demo
==================================================

如何定义一个isomorphic的request库，可以在node与web环境同时使用。

关键点：

1. 使用`declare module`声明了一个用于占位的module: `#request`，并定义了相关的接口
2. 使用request库（node)与jquery（web）分别实现该`#requset`接口
3. 使用两个webpack的配置，分别定义alias，将`#request`替换为该环境下真实的实现

## Node

```
npm install
npm run demo-node
```

它可以正常打包、运行、并打印出得到的结果。

## Web

```
npm run demo-web
```

它打包完成后，将在浏览器中打开生成的`dist/index.html`文件，从浏览器的console中可以看到如下错误：

```
Access to XMLHttpRequest at 'https://postman-echo.com/get?hello=request' from origin 'null' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
on the requested resource.
```

说明代码已经正常运行向目标网站发出请求，只是因为浏览器的安全策略被限制。

