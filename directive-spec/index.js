'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('module', {
      required: true,
      type: String,
      desc: 'Name of the module'
    });
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Name of the directive in snake case'
    });
    this.option('inject', {
      required: false,
      type: String,
      desc: 'Comma separated list of services to inject'
    });
    this.option('mock-http', {
      required: false,
      type: Boolean,
      desc: 'Whether to mock the HTTP backend'
    });
  },

  writing: function () {
    var camelCaseName = _.camelCase(this.name);

    var services = this.options.inject ? this.options.inject.split(',') : [];
    services.unshift('$rootScope', '$compile');

    if (this.options.mockHttp) {
      services.push('$httpBackend');
    }

    this.fs.copyTpl(
      this.templatePath('directive-spec.js'),
      this.destinationPath(camelCaseName + 'Spec.js'),
      {
        name: this.name,
        camelCaseName: camelCaseName,
        services: services,
        mockHttp: this.options.mockHttp,
        module: this.module
      }
    );
  }
});
