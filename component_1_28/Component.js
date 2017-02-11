sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent){
	"use strict";

	return UIComponent.extend("com.privatetraining.component128.Component", {

		metadata: {
			"version": "1.0.0",
			"rootView": {
				viewName: "com.privatetraining.component128.view.S0",
				type: sap.ui.core.mvc.ViewType.XML
			},
			"dependencies": {
				"libs": ["sap.ui.core", "sap.m", "sap.ui.layout"]
			},
			"config": {
				"i18nBundle": "com.privatetraining.component128.i18n.i18n",
				"icon": "",
				"favIcon": "",
				"phone": "",
				"phone@2": "",
				"tablet": "",
				"tablet@2": ""
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this method, the resource and application models are set.
		 * @public
		 * @override
		 */
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});