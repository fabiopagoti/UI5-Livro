sap.ui.jsview("controls_layout.splitter_layout",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.splitter_layout
     */
    getControllerName: function()
    {
        return "controls_layout.splitter_layout";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.splitter_layout
     */
    createContent: function(oController)
    {
        var splitter_layout = new sap.ui.commons.Splitter(
        {
            splitterOrientation: sap.ui.core.Orientation.Vertical,
            splitterPosition: "50%",
            minSizeFirstPane: "20%",
            minSizeSecondPane: "10%",
            width: "600px",
            height: "300px",
            showScrollBars: false,
            splitterBarVisible: true,
            firstPaneContent: [
                new sap.ui.commons.Image(
                {
                    src: "http://openui5.org/resources/OpenUI5_text_right_small.png"
                })
            ],
            secondPaneContent: [
                new sap.ui.commons.Image(
                {
                    src: "//openui5.org/resources/OpenUI5_text_below_small.png"
                })
            ]
        });

        return splitter_layout;
    }

});