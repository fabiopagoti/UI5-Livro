sap.ui.jsview("view.b", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.b
	*/ 
	getControllerName : function() {
		return "view.b";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.b
	*/ 
	createContent : function(oController) {
		var page = new sap.m.Page({
			title: "View B",
			footer: new sap.m.Bar({
				contentLeft: new sap.m.Button({
					text: "Voltar",
					press: oController.onPressBack
				}),				
				contentRight: new sap.m.Button({
					text: "Próximo",
					press: oController.onPressNext
				})
			}),
			content: new sap.m.RatingIndicator({
				maxValue: 10,
			})
		});
		
		return page;
		
	}

});