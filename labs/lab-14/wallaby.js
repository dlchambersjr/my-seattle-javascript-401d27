module.exports = function (wallaby) {

  return {

    files: ['src/**/*.js'],

    tests: ['test/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        'presets': [
          'env',
          'react',
          'stage-0',
        ],
        'plugins': [
          'transform-class-properties',
          'transform-decorators',
          'transform-react-constant-elements',
          'transform-react-inline-elements',
        ],
      }),
    },

    setup: function () {
      require('babel-core');
    },

  };

};