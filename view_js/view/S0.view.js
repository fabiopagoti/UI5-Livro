sap.ui.jsview("view.S0", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view_js.view.S0
	 */
	getControllerName: function() {
		return "controller.S0";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view_js.view.S0
	 */
	createContent: function(oController) {
		
		var app = new sap.m.App();
		
		var oPage = new sap.m.Page({
			title: "Página 1",
			content: []
		});

		app.addPage(oPage);
		return app;
	}

});