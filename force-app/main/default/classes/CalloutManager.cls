public class CalloutManager {
    @AuraEnabled
    public static String initiateCallout(){
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json');
        req.setMethod('GET');
        req.setHeader('Content-Type','application/json; charset=UTF-8');
        //Get Response
        Http http = new Http();
        HttpResponse res= http.send(req);
        return res.getBody();
    }
}