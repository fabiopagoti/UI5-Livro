sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.privatetraining.translation.controller.S0", {
		
		onInit: function() {
			var sText = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("sales_order", "22");
			this.byId("page").setTitle(sText);
		}
	});
});