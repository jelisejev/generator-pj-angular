# PJ Angular Generator for Yeoman
A Yeoman generator for generating various Angular JS components.

## Installation

```bash
git clone https://github.com/jelisejev/generator-pj-angular.git
cd generator-pj-angular
npm install
npm link
```

## Generators
The following generators are provided.
### service-spec
Generates a Jasmine test for a service.

```bash
Usage:
  yo pj-angular:service-spec [options] <module> <name>

Options:
  -h,   --help        # Print the generator's options and usage
        --skip-cache  # Do not remember prompt answers              Default: false
        --methods     # Comma separated list of service methods to test
        --inject      # Comma separated list of services to inject
        --mock-http   # Whether to mock the HTTP backend

Arguments:
  module  # Name of the module   Type: String  Required: true
  name    # Name of the service  Type: String  Required: true
```
### directive-spec
Generates a Jasmine test for a directive.
```bash
Usage:
  yo pj-angular:directive-spec [options] <module> <name>

Options:
  -h,   --help        # Print the generator's options and usage
        --skip-cache  # Do not remember prompt answers              Default: false
        --inject      # Comma separated list of services to inject
        --mock-http   # Whether to mock the HTTP backend

Arguments:
  module  # Name of the module                   Type: String  Required: true
  name    # Name of the directive in snake case  Type: String  Required: true
```

### controller-spec
Generates a Jasmine test for a controller.
```bash
Usage:
  yo pj-angular:controller-spec [options] <module> <name>

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers                          Default: false
        --template-url  # URL of a template to test together with the controller
        --inject        # Comma separated list of services to inject
        --mock-http     # Whether to mock the HTTP backend

Arguments:
  module  # Name of the module      Type: String  Required: true
  name    # Name of the controller  Type: String  Required: true
```