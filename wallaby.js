const babel = require('babel-core');

module.exports = (w) => {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.spec.ts',
    ],

    tests: [
      'src/**/*spec.ts',
    ],

    testFramework: 'mocha',

    compilers: {
      'src/**/*.ts': w.compilers.typeScript({
        orderFilesByReferenceComments: true
      }),
    },

    preprocessors: {
      'src/**/*.js': file => babel.transform(file.content, {
        sourceMap: true,
        presets: ['es2015']
      }),
    },
  };
};
