({ 
    init: function (component, event, helper) {    
        helper.getColumnDefinitions(component, event);
        helper.fetchData(component, event);    
    },
    addTradeline : function(component){   
        component.set('v.showModalAddTradeline', true);
    },
    handleCancelAddTradeline: function(component) {
        component.set('v.showModalAddTradeline', false);
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