const path=require("path")

module.exports={
    devServer:{
        port:8080,
        open:true,
        proxy:{
            "/api":{
                target:"http://product.m.dangdang.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            },
            "/h5ajax.php":{
                target:"http://touch.m.dangdang.com",
                changeOrigin:true
            },
            "/ddcategory.php":{
                target:"http://search.m.dangdang.com",
                changeOrigin:true
            },
            
           
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@mock":path.join(__dirname,"./src/mock")
            }
        }
    }
}


