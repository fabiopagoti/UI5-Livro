sap.ui.jsview("view.S0", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 */
	getControllerName: function() {
		return "controller.S0";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 */
	createContent: function(oController) {
		

		var oApp = new sap.m.App({
			pages: new sap.m.Page({
				content: [
					new sap.m.semantic.FullscreenPage("full", {
						title: "Evento Visão JS",
						content: [
							new sap.m.Input(this.createId("input_name"), {
								placeholder: "Nome completo",
								type: sap.m.InputType.Text
							}),
							new sap.m.Button({
								text:"Show Alert",
								press: oController.onPressAlert.bind(oController)
							}),
							new sap.m.Button({
								text:"Show Message Box",
								press: oController.onPressMessageBox
							})
						]
						
					})
				]
			})
		});
		
		return oApp;
	}

});