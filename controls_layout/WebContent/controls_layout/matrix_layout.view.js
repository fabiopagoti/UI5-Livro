sap.ui.jsview("controls_layout.matrix_layout",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_layout.matrix_layout
     */
    getControllerName: function()
    {
        return "controls_layout.matrix_layout";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_layout.matrix_layout
     */
    createContent: function(oController)
    {
        var matrix_layout = new sap.ui.commons.layout.MatrixLayout(
        {
            width: "500px",
            // height: "500px", // Altura pode ser determinada pelas linhas
            layoutFixed: true,
            columns: 3,
            widths: ["10%", "20%", "70%"],
            rows: []

        });

        oController.myCreateRow(matrix_layout);
        oController.myCreateRow(matrix_layout);
        oController.myCreateRow(matrix_layout);

        return matrix_layout;
    },

});