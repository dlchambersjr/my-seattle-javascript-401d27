module.exports = function (wallaby) {

  return {

    files: ['src/**/*.js', 'test/supergoose.js'],

    tests: ['tests/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    setup: function () {
      require('babel-core');
    },

  };

};