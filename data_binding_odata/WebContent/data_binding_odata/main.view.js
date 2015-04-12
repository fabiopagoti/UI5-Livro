sap.ui.jsview("data_binding_odata.main",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf data_binding_odata.main
     */
    getControllerName: function()
    {
        return "data_binding_odata.main";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf data_binding_odata.main
     */
    createContent: function(oController)
    {
        var model = new sap.ui.model.odata.ODataModel("http://services.odata.org/Northwind/Northwind.svc/");
        // var model = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V2/OData/OData.svc");

        sap.ui.getCore().setModel(model);

        var layout = new sap.ui.layout.VerticalLayout();

        var o = new sap.ui.commons.TextView(
        {
            text: "{/Products}",
        });

        layout.addContent(o);
        return layout;
    }

});