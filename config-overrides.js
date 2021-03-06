const { override, fixBabelImports, addLessLoader} = require('customize-cra');
const { getThemeVariables } = require('antd/dist/theme');
const { removeModuleScopePlugin } = require('customize-cra')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'}, // 更换主题色
        // modifyVars: getThemeVariables({
        //     dark: true, // 开启暗黑模式
        //     compact: true, // 开启紧凑模式
        // }),
    }),
    removeModuleScopePlugin(), //移除CRA的插件来防止从src意外的文件夹导入模块

);