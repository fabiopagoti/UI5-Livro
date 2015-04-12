sap.ui.jsview("controls_layout.horizontal_layout",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.horizontal_layout
     */
    getControllerName: function()
    {
        return "controls_layout.horizontal_layout";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.horizontal_layout
     */
    createContent: function(oController)
    {

        var text_field = new sap.ui.commons.TextField(
        {
            value: "Fabio",
        });

        var horizontal_layout = new sap.ui.layout.HorizontalLayout(
        {
            allowWrapping: true,
            content: [
                new sap.ui.commons.Label(
                {
                    text: "Name",
                    labelFor: text_field
                }),

                text_field
            ]
        })

        horizontal_layout.addContent(
            new sap.ui.commons.CheckBox(
            {
                text: "Writting this book during Easter?",
                value: true,
            })
        );

        var link = sap.ui.commons.Link(
        {
            text: "hanabrasil.com.br",
            href: "//www.hanabrasil.com.br",
            target: "_blank"
        });

        horizontal_layout.insertContent(link, 2);

        return horizontal_layout;

    }
});