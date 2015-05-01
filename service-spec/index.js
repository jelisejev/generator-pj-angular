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
      desc: 'Name of the service'
    });
    this.option('methods', {
      required: false,
      type: String,
      desc: 'Comma separated list of service methods to test'
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
    var methods = this.options.methods ? this.options.methods.split(',') : ['someMethod'];
    var services = this.options.inject ? this.options.inject.split(',') : [];
    services.push(this.name);

    if (this.options.mockHttp) {
      services.push('$httpBackend');
    }

    this.fs.copyTpl(
      this.templatePath('service-spec.js'),
      this.destinationPath(this.name + 'Spec.js'),
      {
        name: this.name,
        services: services,
        mockHttp: this.options.mockHttp,
        module: this.module,
        methods: methods,
      }
    );
  }
});
