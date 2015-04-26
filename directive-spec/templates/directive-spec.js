describe('<%=camelCaseName %>', function() {
    var $compile, $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_<% services.forEach(function(service) { %>, <%=service %><% }) %>) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        <% services.forEach(function(service) { %><%=service %> = _<%=service %>_
        <% }) %>
    }));

    function compile(scope) {
        scope = scope || $rootScope.$new();
        var elem = '<<%=name %>></<%=name %>>';

        elem = $compile(elem)(scope);
        scope.$digest();

        return elem;
    }

    it('should be rendered correctly', function() {
        var scope = $rootScope.$new();
        var elem = compile(scope);
    });
});