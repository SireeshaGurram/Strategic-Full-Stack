/**
 * @author Sireesha Gurram
 * @date July 2020
 * @description Test class for CalloutManager
 **/
@isTest
private class CalloutManagerTest {
     @isTest static void testCallout() {
        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new MockCalloutManagerTest());
        
        // Call method to test.
        // This causes a fake response to be sent
        // from the class that implements HttpCalloutMock. 
        String res = CalloutManager.initiateCallout();
        
        // Verify response received contains fake values
        String expectedValue = '[{"id": 1,"creditorName": "CBNA","firstName": "Suman","lastName": "Tester79","minPaymentPercentage": 2.00,"balance": 1363.00}]';
        System.assertEquals(res, expectedValue);
     }
}