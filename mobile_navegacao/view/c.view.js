sap.ui.jsview("view.c", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.c
	*/ 
	getControllerName : function() {
		return "view.c";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.c
	*/ 
	createContent : function(oController) {
		var page = new sap.m.Page({
			title: "View C",
			footer: new sap.m.Bar({
				contentLeft: new sap.m.Button({
					text: "Voltar",
					press: oController.onPressBack
				})
				
			})
		});
		
		return page;
	
	}

});