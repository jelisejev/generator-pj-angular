describe('<%=name %>', function() {<% services.forEach(function(service) { %>
    var <%=service %>;<% }) %>

    beforeEach(module('<%=module %>'));

    beforeEach(inject(function(<%=services.map(function(service){ return '_' + service + '_' }).join(', ') %>) {<% services.forEach(function(service) { %>
        <%=service %> = _<%=service %>_;<% }) %>
    }));<% methods.forEach(function(method) { %>

    it('<%=method %>() should', function() {

    });<% }) %><% if(mockHttp){ %>

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });<% } %>
});