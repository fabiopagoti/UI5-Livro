sap.ui.controller("controls_layout.matrix_layout", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controls_layout.matrix_layout
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controls_layout.matrix_layout
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controls_layout.matrix_layout
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controls_layout.matrix_layout
*/
//	onExit: function() {
//
//	}
    current_value: 1,

    // Cria uma nova linha
    myCreateRow: function(matrix)
    {
        var row = new sap.ui.commons.layout.MatrixLayoutRow(
        {
            height: "100px",
            cells: []
        });

        matrix.addRow(row);

        this.myCreateCell(row, this.current_value++);
        this.myCreateCell(row, this.current_value++);
        this.myCreateCell(row, this.current_value++);
    },
    
    // Cria uma célula 
    myCreateCell: function(row, value)
    {
        var cell = new sap.ui.commons.layout.MatrixLayoutCell(
        {
            backgroundDesign: sap.ui.commons.layout.BackgroundDesign.Fill1,
            colSpan: 1,
            hAlign: sap.ui.commons.layout.HAlign.Center,
            padding: sap.ui.commons.layout.Padding.End,
            rowSpan: 1,
            separation: sap.ui.commons.layout.Separation.SmallWithLine,
            vAlign: sap.ui.commons.layout.VAlign.Middle,
            content: [
                new sap.ui.commons.TextView(
                {
                    text: value,
                })
            ]

        });

        row.addCell(cell);
    }

    

});