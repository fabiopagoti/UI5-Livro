sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("controller.S0", {
		
		onInit: function(){
			// @type sap.m.Button
			var oButton = this.byId("but");
			oButton.attachPress(this.onPressMessageBox, this);
		},

		onPressAlert: function(oEvent) {
			var oParameters = oEvent.getParameters();
			var oButton = oEvent.getSource();
			sap.m.MessageToast.show(this.byId("input_name").getValue());
		},

		onPressMessageBox: function(oEvent) {
			this._showMessage(oEvent.getSource().getText());
		},
		
		
		_showMessage: function(sMessage){
			MessageBox.information(sMessage);
		}
		
		

	});

});