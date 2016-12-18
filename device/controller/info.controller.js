sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("controller.info", {

		onInit: function() {

			var browserName = this.getBrowserName(sap.ui.Device.browser.name);
			var osName = this.getOSName(sap.ui.Device.os.name);
			var device;

			//		Refactor: Using generic functions
			//		browserName = this.getGenericName(
			//							sap.ui.Device.browser.name,
			//							sap.ui.Device.browser.BROWSER
			//						);
			//
			//		osName = this.getGenericName(
			//							sap.ui.Device.os.name,
			//							sap.ui.Device.os.OS
			//						);

			device = this.getGenericName(
				true,
				sap.ui.Device.system
			);

			this.byId("browser").setText(browserName);
			this.byId("os").setText(osName);
			this.byId("device").setText(device);
			
		},

		/**
		 * Given a browser abbreviation, get its name 
		 */
		getBrowserName: function(browserShortName) {
			for (var browserName in sap.ui.Device.browser.BROWSER) {
				if (browserShortName === sap.ui.Device.browser.BROWSER[browserName]) {
					return browserName.toLowerCase();
				}
			}
		},

		/**
		 * Given a OS abbreviation, get its name 
		 */
		getOSName: function(osShortName) {
			for (var osName in sap.ui.Device.os.OS) {
				if (osShortName === sap.ui.Device.os.OS[osName]) {
					return osName.toLowerCase();
				}
			}
		},

		/**
		 * Given a enum and a value, get the object property whose value is equal that value  
		 */
		getGenericName: function(stuffShortName, stuffEnum) {
			for (var stuffName in stuffEnum) {
				if (stuffShortName === stuffEnum[stuffName]) {
					return stuffName.toLowerCase();
				}
			}
		}

	});

});