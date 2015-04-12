sap.ui.jsview("controls_layout.horizontal_divider",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.horizontal_divider
     */
    getControllerName: function()
    {
        return "controls_layout.horizontal_divider";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.horizontal_divider
     */
    createContent: function(oController)
    {
        var main_layout = new sap.ui.layout.VerticalLayout(
        {
            content: [
                new sap.ui.commons.TextView(
                {
                    text: "Area 1"
                }),

                new sap.ui.commons.HorizontalDivider(
                {
                    type: sap.ui.commons.HorizontalDividerType.Area,
                    height: sap.ui.commons.HorizontalDividerHeight.Large
                }),

                new sap.ui.commons.TextView(
                {
                    text: "Area 2 - Page 1"
                }),

                new sap.ui.commons.HorizontalDivider(
                {
                    type: sap.ui.commons.HorizontalDividerType.Page,
                    height: sap.ui.commons.HorizontalDividerHeight.Ruleheight
                }),

                new sap.ui.commons.TextView(
                {
                    text: "Area 2 - Page 2"
                })
            ]
        });

        return main_layout;
    }

});