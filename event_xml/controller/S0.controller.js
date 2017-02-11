sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("controller.S0", {
		
		onSave: function(oEvent){
			var oParameters = oEvent.getParameters();
			var oButton = oEvent.getSource();
			
			console.log("Clique em:" + oButton.getMetadata().getName());
			
			MessageToast.show(this.byId("input_name").getValue());
		}
	});

});