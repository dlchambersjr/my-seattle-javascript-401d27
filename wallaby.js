module.exports = function () {

  return {

    files: ['/03-asynchronous-callbacks/lab/libs/**/*.js'],

    tests: ['03-asynchronous-callbacks/lab/tests/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

  };

};