sap.ui.controller("back_end_xml.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf back_end_xml.main
	 */
	onInit : function() {
		weather.attachRequestCompleted({}, this.set_path_when_completed, this);
		weather.attachRequestFailed({}, this.onError, this);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf back_end_xml.main
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf back_end_xml.main
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf back_end_xml.main
	 */
	// onExit: function() {
	//
	// }
	selectWeather : function() {

		sap.ui.getCore().getModel().loadData(
				"//api.openweathermap.org/data/2.5/weather", {
					q : sap.ui.getCore().byId("txt_city").getValue(),
					mode : "xml"
				}, true);
	},

	set_path_when_completed : function(answer) {
		if (!answer.getParameter("success")) {
			return;
		}
		function kelvin_to_celcius(t) {
			return t - 273.15; // Kelvin to Celcius}
		}
		;

		sap.ui.getCore().byId("txt_weather").bindProperty("text", {
			path : "/temperature/@value",
			formatter : kelvin_to_celcius
		});

		sap.ui.getCore().byId("txt_city").setValueState(
				sap.ui.core.ValueState.Success);

	},

	onError : function() {
		sap.ui.getCore().byId("txt_city").setValueState(
				sap.ui.core.ValueState.Error);

		sap.ui.getCore().byId("txt_weather").setText();

	}

});