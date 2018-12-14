const atImport = require('postcss-import');
const apply = require('postcss-apply');
const postcssPresetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');

// TODO 可添加插件 https://juejin.im/post/581bfc368ac247004fe174af

// 已支持的插件
// 1、postcss-cssnext 已经包含 postcss-cssnext
//  使用方法：http://cssnext.io/usage/
// 2、解析器：postcss-scss

module.exports = {
  // ident: 'postcss',
  // parser: 'postcss-scss',
  plugins: [
    atImport(),
    apply(),
    postcssPresetEnv({
      browsers: ['last 3 versions', 'Android >= 4.0'],
    }),
    nested({
      preserveEmpty: true,
    }),
  ],
};
