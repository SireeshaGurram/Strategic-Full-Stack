/**
 * @author Sireesha Gurram
 * @date July 2020
 * @description Class that mocks the HTTP response for CalloutManager
 **/
@isTest
global class MockCalloutManagerTest implements HttpCalloutMock {
    // Implement this interface method
    global HTTPResponse respond(HTTPRequest req) {
        // Optionally, only send a mock response for a specific endpoint
        // and method.
        System.assertEquals('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json', req.getEndpoint());
        System.assertEquals('GET', req.getMethod());
        
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('[{"id": 1,"creditorName": "CBNA","firstName": "Suman","lastName": "Tester79","minPaymentPercentage": 2.00,"balance": 1363.00}]');
        res.setStatusCode(200);
        return res;
    }
}