({ 
    init: function (component, event, helper) {    
        helper.getColumnDefinitions(component, event);
        helper.fetchData(component, event);    
    },
    addTradeline : function(component, event, helper){  
        $A.createComponent(
            "c:addTradeline",{},
            function(tradeLine){                
                if (component.isValid()) {
                    var targetCmp = component.find('addTradeline');
                    var body = targetCmp.get("v.body");
                    body.push(tradeLine);
                    targetCmp.set("v.body", body); 
                }
            }
        ); 
        component.set('v.showModalAddTradeline', true);
    },
    handleCancelAddTradeline: function(component) {
        component.set('v.showModalAddTradeline', false);
        var targetCmp = component.find('addTradeline');
        targetCmp.set("v.body", "");      
    },  
    handleAddTradeline: function(component, event, helper) {
        helper.handleAddTradeline(component, event, helper);
        
    },
    updateSelectedText: function (component, event, helper) {
       helper.updateSelectedText(component, event, helper);
    },
    removeSelectedRows: function(component, event, helper){
        helper.removeSelectedRows(component, event, helper);
    }   
})