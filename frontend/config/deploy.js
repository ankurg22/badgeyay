/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
  };

  ENV.pipeline = {
    disabled: {
      git: true
    }
  };

  if (deployTarget === 'gh-pages-with-domain' || deployTarget === 'gh-pages') {
    ENV.pipeline = {
      disabled: {}
    };
    ENV.git = {
      repo: `https://ankurg22:${process.env.GH_TOKEN}@github.com/ankurg22/badgeyay`,
      branch: 'gh-pages',
      commitMessage: 'Travis CI Clean Deploy %@'
    };
  }

  return ENV;
};
