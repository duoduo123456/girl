var webpack = require('webpack');
var path = require('path');
module.exports={
	devServer:{
		contentBase:"./public",  //本地服务器所加载的页面所在的目录
		colors:true,   //终端中输出结果为彩色
		inline:true,    //实时刷新
		historyApiFallback:true, //不跳转
		port:8081		//设置默认监听端口,默认8080
	},
    entry:{
        banner:'./js/banner.js',
        gender:'./js/gender.js',
        illness:'./js/illness.js',
        alleray:'./js/allergy.js',
        basicInfo:'./js/basicInfo.js',
        howFeel:'./js/howFeel.js',
        status:'./js/status.js'
    },
    output:{
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:'style!css'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test:/\.(png|jpg|gif)$/, loader:'url-loader?limit=8192&name=img/[name].[ext]'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]
};