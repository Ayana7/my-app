const { override, fixBabelImports, addLessLoader} = require('customize-cra');
const { getThemeVariables } = require('antd/dist/theme');
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
);