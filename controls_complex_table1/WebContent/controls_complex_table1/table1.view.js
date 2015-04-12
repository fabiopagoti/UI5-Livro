sap.ui.jsview("controls_complex_table1.table1",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf controls_complex_table1.table1
     */
    getControllerName: function()
    {
        return "controls_complex_table1.table1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf controls_complex_table1.table1
     */
    createContent: function(oController)
    {

        var table = new sap.ui.table.Table("tab",
        {
            width: "90%",
            visibleRowCount: 5,
            selectionMode: sap.ui.table.SelectionMode.Multi,
            selectionBehavior: sap.ui.table.SelectionBehavior.RowSelector,
            selectedIndex: -1,
            allowColumnReordering: true,
            navigationMode: sap.ui.table.NavigationMode.Paginator,
            enableColumnReordering: true,
            showNoData: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Fixed,
            fixedRowCount: 0,
            minAutoRowCount: 5,
            noDataText: "Nenhum dado encontrado",
            title: "Funcionários",
            columns: [
                new sap.ui.table.Column(
                {
                    width: "auto",
                    label: "Nome",
                    template: new sap.ui.commons.TextView()
                        .bindProperty("text", "name"),
                }),

                new sap.ui.table.Column(
                {
                    label: "Sobrenome",
                    template: new sap.ui.commons.TextField(
                    {
                        value: "{last_name}"
                    }),
                }),
                new sap.ui.table.Column(
                {
                    label: "Sexo",
                    template: new sap.ui.commons.TextView(
                    {
                        text:
                        {
                            path: "gender",
                            formatter: function(g)
                            {
                                if (g === "M")
                                {
                                    return "Masculino";
                                }
                                else
                                {
                                    return "Feminino";
                                };
                            }
                        }
                    })
                }),
                new sap.ui.table.Column(
                {
                    label: "Em Férias",
                    template: new sap.ui.commons.CheckBox(
                    {
                        checked: "{vacation}",
                        editable: false,
                    })
                }),
                new sap.ui.table.Column(
                {
                    label: "Localização",
                    template: new sap.ui.core.Icon(
                    {
                        src:
                        {
                            path: "location",
                            formatter: function(i)
                            {
                                return "sap-icon://" + i;

                            }
                        },
                        size: "2em",
                        color: "darkblue"
                    })
                }),
                new sap.ui.table.Column(
                {
                    label: "Histórico",
                    autoResizable: true,
                    template: new sap.ui.commons.Button(
                    {
                        width: "100%",
                        height: "100%",
                        text: "Visualizar"
                    })

                }),
            ],
            toolbar: new sap.ui.commons.Toolbar(
            {
                items: [
                    new sap.ui.commons.Button(
                    {
                        text: "Adicionar",
                        style: sap.ui.commons.ButtonStyle.Accept
                    }),
                    new sap.ui.commons.Button(
                    {
                        text: "Remover",
                        style: sap.ui.commons.ButtonStyle.Reject
                    }),
                    new sap.ui.commons.ToolbarSeparator(
                    {

                    }),
                    new sap.ui.commons.SegmentedButton(
                    {
                        buttons: [
                            new sap.ui.commons.Button("but_exibir",
                            {
                                text: "Exibir"
                            }),
                            new sap.ui.commons.Button("but_editar",
                            {
                                text: "Editar"
                            })
                        ],
                    }),
                    new sap.ui.commons.Link(
                    {
                        text: "Mais"
                    })

                ]
            })
        });

        table.bindRows("/");

        var layout = new sap.ui.commons.layout.MatrixLayout(
        {
            rows: [
                new sap.ui.commons.layout.MatrixLayoutRow(
                {
                    cells: sap.ui.commons.layout.MatrixLayoutCell(
                    {
                        content: table,
                        hAlign: sap.ui.commons.layout.HAlign.Center
                    })
                })
            ]
        });
        return layout;
    }

});