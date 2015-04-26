'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Name of the directive'
    });

  },

  writing: function () {
    var camelCaseName = _.camelCase(this.name);

    this.fs.copyTpl(
      this.templatePath('directive-spec.js'),
      this.destinationPath(camelCaseName + 'Spec.js'),
      {
        name: this.name,
        camelCaseName: camelCaseName
      }
    );
  }
});
