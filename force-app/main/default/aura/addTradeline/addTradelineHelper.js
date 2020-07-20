({
	handleSaveTradeline : function(component, event) {
        var addTradelineEvent = $A.get("e.c:saveTradelineEvent");
        addTradelineEvent.setParams({
            'newTradeline': component.get('v.newTradeline')
        }).fire(); 
       
	},
    handleAddTradelineCancel: function(component,event) {
        var cancelAddTradelineEvent = $A.get("e.c:cancelAddTradelineEvent");
        cancelAddTradelineEvent.fire();
     }
})