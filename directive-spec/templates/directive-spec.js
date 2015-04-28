describe('<%=camelCaseName %>', function() {
    var $compile, $rootScope<% services.forEach(function(service) { %>, <%=service %><% }) %>;

    beforeEach(module('moduleName'));

    beforeEach(inject(function(_$compile_, _$rootScope_<% services.forEach(function(service) { %>, _<%=service %>_<% }) %>) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;<% services.forEach(function(service) { %>
        <%=service %> = _<%=service %>_;<% }) %><% if(mockHttp){ %>

        $httpBackend.expectGET('rest/').respond(200, {});<% } %>
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
        var elem = compile(scope);<% if(mockHttp){ %>

        $httpBackend.flush();<% } %>


    });<% if(mockHttp){ %>

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });<% } %>
});