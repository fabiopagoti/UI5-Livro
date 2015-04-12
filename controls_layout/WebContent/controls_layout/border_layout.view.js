sap.ui.jsview("controls_layout.border_layout",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.border_layout
     */
    getControllerName: function()
    {
        return "controls_layout.border_layout";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.border_layout
     */
    createContent: function(oController)
    {
        var border_layout = new sap.ui.commons.layout.BorderLayout(
        {
            width: "500px",
            height: "500px",
            top: new sap.ui.commons.layout.BorderLayoutArea(
            {
                overflowX: "visible",
                overflowY: "visible",
                contentAlign: "center",
                content: [
                    new sap.ui.commons.Image(
                    {
                        src: "http://openui5.org/images/OpenUI5_new_big_side.png"
                    })
                ]
            }),
            begin: new sap.ui.commons.layout.BorderLayoutArea(
            {
                overflowX: "visible",
                overflowY: "visible",
                contentAlign: "center",
                content: [
                    new sap.ui.commons.Link(
                    {
                        text: "Begin"
                    })
                ]
            }),
            center: new sap.ui.commons.layout.BorderLayoutArea(
            {
                overflowX: "visible",
                overflowY: "visible",
                contentAlign: "center",
                content: [
                    new sap.ui.commons.TextArea(
                    {
                        value: "Center",
                        rows: 20
                    })
                ]
            }),
            end: new sap.ui.commons.layout.BorderLayoutArea(
            {
                overflowX: "visible",
                overflowY: "visible",
                contentAlign: "center",
                content: [
                    new sap.ui.commons.CheckBox(
                    {
                        text: "End"
                    })
                ]
            }),
            bottom: new sap.ui.commons.layout.BorderLayoutArea(
            {
                overflowX: "visible",
                overflowY: "visible",
                contentAlign: "center",
                content: [
                    new sap.ui.commons.Button(
                    {
                        text: "Bottom",
                        width: "100%"
                    })
                ]
            })
        });

        return border_layout;
    }

});