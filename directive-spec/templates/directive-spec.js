describe('<%=camelCaseName %>', function() {<% services.forEach(function(service) { %>
    var <%=service %>;<% }) %>

    beforeEach(module('<%=module %>'));

    beforeEach(inject(function(<%=services.map(function(service){ return '_' + service + '_' }).join(', ') %>) {<% services.forEach(function(service) { %>
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