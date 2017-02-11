sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("controller.S0", {

		onPressAlert: function(oEvent) {
			var oParameters = oEvent.getParameters();
			var oButton = oEvent.getSource();
			MessageToast.show(this.byId("input_name").getValue());
		},

		onPressMessageBox: function(oEvent) {
			MessageBox.information(this.getText());
		}

	});

});