'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    this.argument('module', {
      required: true,
      type: String,
      desc: 'Name of the module'
    });
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Name of the controller'
    });
    this.option('template-url', {
      required: false,
      type: String,
      desc: 'URL of a template to test together with the controller'
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
    var services = this.options.inject ? this.options.inject.split(',') : [];
    services.unshift('$rootScope', '$controller');

    if (this.options.mockHttp) {
      services.push('$httpBackend');
    }

    if (this.options.templateUrl) {
      services.unshift('$compile', '$templateCache');
    }

    this.fs.copyTpl(
      this.templatePath('controller-spec.js'),
      this.destinationPath(this.name + 'Spec.js'),
      {
        name: this.name,
        services: services,
        mockHttp: this.options.mockHttp,
        module: this.module,
        templateUrl: this.options.templateUrl
      }
    );
  }
});
