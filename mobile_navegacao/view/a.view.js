sap.ui.jsview("view.a", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.a
	*/ 
	getControllerName : function() {
		return "view.a";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.a
	*/ 
	createContent : function(oController) {
		var page = new sap.m.Page({
			title: "View A",
			footer: new sap.m.Bar({
//				contentLeft: new sap.m.Button({
//					text: "Voltar"
//				}),				
				contentRight: new sap.m.Button({
					text: "Próximo",
					press: oController.onPressNext
				})
				
			})
		});
		

		var oLayout1 = new sap.ui.layout.form.GridLayout({
			// singleColumn: true,
		});

	     var oLayout2 = new sap.ui.layout.form.ResponsiveLayout();
	     var oLayout3 = new sap.ui.layout.form.ResponsiveGridLayout();


		var lay_navigation = new sap.ui.commons.layout.HorizontalLayout();
		lay_navigation.addStyleClass("layout_navigation");
		
		var lay_form = new sap.ui.layout.form.Form({
			layout: oLayout3, // Layout
			
			formContainers: 
				[
					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									label: "Name",
									fields: 
										[
											// new sap.ui.commons.Label({text:"Name"}),
							                new sap.ui.commons.TextField("txf_name", {
							                	required: true,
							                	value: "Fabio Pagoti",
							                }),
										]
								})
							]
					}),

					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									label: "E-mail",
									fields: 
										[
							                new sap.ui.commons.TextField("txf_email", {
							                	required: true,
							                	value: "fabiopagoti@gmail.com",
							                }),
										]
								})
							]
					}),
					
					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									fields: 
										[
											lay_navigation
										]
								})
							]
					}),


				],

		});

		page.addContent(lay_form);

		return page;
	
	}

});