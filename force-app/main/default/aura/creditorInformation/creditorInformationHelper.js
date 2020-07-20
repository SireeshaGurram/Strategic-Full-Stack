({
    getColumnDefinitions: function (component, event) {
        var columns = [
            {label: 'Creditor', fieldName: 'creditorName',hideDefaultActions: true},
            {label: 'First Name', fieldName: 'firstName',hideDefaultActions: true},
            {label: 'Last Name', fieldName: 'lastName',hideDefaultActions: true},
            {label: 'Min Pay%', fieldName: 'minPaymentPercentage', cellAttributes: { alignment: 'left' },hideDefaultActions: true},
            {label: 'Balance', fieldName: 'balance',type:'currency', cellAttributes: { alignment: 'left' },hideDefaultActions: true}   
        ];
        component.set('v.columns', columns);
    },
    fetchData: function (component, event) {
        const action = component.get('c.initiateCallout');
        action.setCallback(this,function(response){   
            const state = response.getState();
            if(component.isValid() && state === 'SUCCESS'){
                let returnData = response.getReturnValue();
                component.set("v.data",JSON.parse(returnData));
            }
            else{
                if (component.isValid() && state === 'ERROR') {
                    this.toastError(response.getError());
                }
            }
        });
        $A.enqueueAction(action);
    }, updateSelectedText: function (component, event, helper) {
        var selectedRows = event.getParam('selectedRows'); 
        component.set('v.selectedRows',selectedRows);
        let total = 0;
        for(var i in selectedRows){
            total = (total *100 + selectedRows[i].balance * 100)/100;
        }
        if(selectedRows.length > 0 ){
            component.set('v.disableButton', false);
        }else{
            component.set('v.disableButton', true);
        }
        component.set('v.totalDebt', total);
        component.set('v.selectedRowsCount', selectedRows.length);
    },
    removeSelectedRows: function(component, event, helper){
        var indexToDelete = 1;
        var myData = component.get("v.data");
        var selectedRows = component.get('v.selectedRows'); 
        for( var i = 0; i < myData.length; i++)
        { 
            for(var j = 0; j < selectedRows.length; j++){
                if ( myData[i].id === selectedRows[j].id) {
                    myData.splice(i, 1);     
                }
            }
        }
        selectedRows.splice(1,selectedRows.length);
        component.set("v.data",myData);
        component.set("v.selectedRows",selectedRows);
        component.set('v.disableButton', true);
    },
    handleAddTradeline: function(component, event, helper) {
        var ts = event.getParam("newTradeline");
        var myData = component.get("v.data");
        myData.push(ts);
        component.set("v.data", myData);
        component.set('v.showModalAddTradeline', false);
    }
});