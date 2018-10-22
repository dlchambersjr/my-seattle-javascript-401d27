module.exports = function () {

  return {

    files: ['04-binary-data/lab-04/**/*.js'],

    tests: ['04-binary-data/lab-04/tests/**/*.test.js'],

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