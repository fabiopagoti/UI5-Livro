sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.privatetraining.model.xml.controller.S0", {
		onBeforeRendering: function(oEvent){
			window.xmlmodel = this.getView().getModel();
		}
	});
});