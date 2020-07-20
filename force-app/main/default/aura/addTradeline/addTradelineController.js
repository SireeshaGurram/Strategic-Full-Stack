({
	handleSaveTradeline : function(component, event, helper) {
        var allValid = component.find('field').reduce(function (validSoFar, inputCmp) {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        if (allValid) {
            helper.handleSaveTradeline(component, event, helper);}
	},
    handleAddTradelineCancel: function(component, event, helper) {
       helper.handleAddTradelineCancel(component, event, helper);
     },
   
})