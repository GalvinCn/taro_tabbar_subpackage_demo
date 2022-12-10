const { override, addLessLoader, fixBabelImports, addPostcssPlugins, addDecoratorsLegacy } = require('customize-cra');

 
module.exports = override(
	addDecoratorsLegacy(),
	addLessLoader({
		lessOptions: {
			modifyVars: { '@brand-primary': '#3BBE64', '@brand-primary-tap': '#B22222', '@hd': '1px' },
			// 设置自定义主题样式
			// 配置参数：https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
			javascriptEnabled: true, // 允许js更改antd-mobile中的less变量
		},
	}),
	fixBabelImports('import', {
		libraryName: 'antd-mobile', // 对哪个库进行按需引入
		libraryDirectory: 'es', // 样式模块作为es6模块引入
		style: true, // 处理原样式文件
	}),
	//****************************************************
	addPostcssPlugins([require('postcss-px2rem')({ remUnit: 37.5 })])
	//****************************************************
);
 