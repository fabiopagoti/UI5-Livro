sap.ui.jsview("back_end_json.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf back_end_json.main
	*/ 
	getControllerName : function() {
		return "back_end_json.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf back_end_json.main
	*/ 
	createContent : function(oController) {

		var label_city = new sap.ui.commons.Label({
			labelFor: "txt_city",
			text: "Cidade",
		});
		
		var text_field_city = new sap.ui.commons.TextField("txt_city");
		
		var text_view_weather = new sap.ui.commons.TextView({
			text : {
				path : "/main/temp",
				formatter : function(t) {
//					if (t) {
						return t - 273.15; // Kelvin to Celcius
//					} 
//					else {
//						return "???";
//					}
					
				}
			}
		});
	
		var button_get = new sap.ui.commons.Button({
			text : "Buscar temperatura",
			press : oController.selectWeather
		});

		// Layout
		var layout = new sap.ui.layout.HorizontalLayout();

		layout.addContent(label_city);
		layout.addContent(text_field_city);
		layout.addContent(button_get);
		layout.addContent(text_view_weather);

		layout.placeAt("content");
	}

});
