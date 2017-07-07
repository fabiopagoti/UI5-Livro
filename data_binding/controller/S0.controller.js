sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.privatetraining.databinding.controller.S0", {

		formatAgeState: function(sValue){
			switch (sValue) {
				case "0":
					return "Error";
				case "1":
					return "Success";
			}
		}


	});
});