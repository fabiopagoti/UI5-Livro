sap.ui.jsview("controls_layout.panel_layout",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.panel_layout
     */
    getControllerName: function()
    {
        return "controls_layout.panel_layout";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.panel_layout
     */
    createContent: function(oController)
    {
        var panel_layout = new sap.ui.commons.Panel(
        {
            width: "auto",
            height: "auto",
            scrollLeft: 0,
            scrollTop: 0,
            applyContentPadding: true,
            collapsed: false,
            areaDesign: sap.ui.commons.enums.AreaDesign.Plain,
            borderDesign: sap.ui.commons.enums.BorderDesign.Box,
            showCollapseIcon: true,
            // text: "Employee",
            content: [
                new sap.ui.layout.VerticalLayout(
                {
                    content: [
                        new sap.ui.commons.Label(
                        {
                            labelFor: "txf_name",
                            text: "Name",
                        }),
                        new sap.ui.commons.TextField("txf_name")
                    ]
                })
            ],
            title: new sap.ui.core.Title(
            {
                text: "Employee",
                icon: "sap-icon://employee"

            }),
            buttons: [
                new sap.ui.commons.Button(
                {
                    text: "Create"
                }),
                new sap.ui.commons.Button(
                {
                    text: "Change"
                }),
                new sap.ui.commons.Button(
                {
                    text: "Delete"
                })
            ]
        });

        return panel_layout;
    }

});