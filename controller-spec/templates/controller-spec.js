describe('<%=name %>', function() {<% services.forEach(function(service) { %>
    var <%=service %>;<% }) %>

    beforeEach(module('<%=module %>'));

    beforeEach(inject(function(<%=services.map(function(service){ return '_' + service + '_' }).join(', ') %>) {<% services.forEach(function(service) { %>
        <%=service %> = _<%=service %>_;<% }) %><% if(mockHttp){ %>

        $httpBackend.expectGET('rest/').respond(200, {});<% } %>
    }));

    function controller(scope) {
        return $controller('<%=name %>', {
            '$scope': scope
        });
    }<% if(templateUrl) { %>

    function compile(scope) {
        return $compile($templateCache.get('<%=templateUrl %>'))(scope);
    }
    <% } %>

    it('should initially run correctly', function() {
        var scope = $rootScope.$new();
        var ctrl = controller(scope);<% if(templateUrl) { %>
        var elem = compile(scope);<% } %><% if(mockHttp){ %>

        $httpBackend.flush();<% } %>


    });<% if(mockHttp){ %>

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });<% } %>
});