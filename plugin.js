const { readFileSync,writeFileSync }=require('fs')

class Plugin {
    constructor(options) {
        this.options = options
    }
    //compiler编译器
    apply(compiler) {
        //hooks钩子 emit发射器 tap
        compiler.hooks.emit.tap('Plugin', (compilation) => { 
            const _assets=compilation.assets;  
            
            debugger;
            // console.log(compilation)
            // writeFileSync('./test.txt',JSON.stringify(compilation))
            // console.log("e")
            //_assets['index.html']._value=compilation.assets
        })
    }
}

module.exports=Plugin;

