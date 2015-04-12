sap.ui.jsview("hello_eclipse.main2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf hello_eclipse.main
	*/ 
	getControllerName : function() {
		return "hello_eclipse.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf hello_eclipse.main
	*/ 
	createContent : function(oController) {
		var but_press_me = new sap.ui.commons.Button({
			text : "Press me!",
			press : oController.onPressButton
		});
		
		return but_press_me;
	}

});
