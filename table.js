class Table {

    constructor(items, tableDivId, columnWidths, columnsNames, rowConfig, buttons, buttonFunctions) {

        this.items = items;
        this.tableDivId = tableDivId;
        this.columnWidths = columnWidths;
        this.columnsNames = columnsNames;
        this.rowConfig = rowConfig;
        this.buttons = buttons;
        this.buttonFunctions = buttonFunctions;
        // this.numColumns = columns.length;

        this.tableDiv = document.getElementById(tableDivId);
        this.columns;

        // Temp code
        this.numColumns = this.columnWidths.length;
        this.rowWidth = this.columnWidths.reduce((a, b) => a + b, 0) + buttons.length * 40;
        this.columnCells = [];
        this.rows = [];
    }

    updateItems(items) {
        if (items.length == 0) {
            document.getElementById(this.tableDiv).innerHTML = '';
            return;
        }
        this.items = items;
        this.draw();
    }

    draw() {

        this.clearTable();
        let table = this.createTable();
        this.tableDiv.append(table);

    }



    resizeColumn(columnNum, newWidth) {
        let array = this.columnCells[columnNum];

        array.forEach(function (cell) {
            cell.cell.style.width = (newWidth + "px");
        });

        this.columnWidths[columnNum] = newWidth;
        let rowWidth = this.columnWidths.reduce((a, b) => a + b, 0);

        this.rows.forEach(function (row) {
            row.row.style.width = (rowWidth) + "px";
        })

        this.rowWidth = rowWidth;
    }


    clearTable() {
        this.tableDiv.innerHTML = '';
    }

    createTable() {

        let row;
        for (let i = 0; i < this.numColumns; i++) {
            this.columnCells.push([]);
        }

        let table = document.createElement('div');
        table.className = 'tabilization-table';

        let header = this.createHeader();
        table.append(header);

        let columnCells = this.columnCells;

        // Make header row
        this.items.forEach((item) => {
            row = new Row(item, this.columnWidths, this.columnsNames, this.rowWidth, this.rowConfig, this.buttons, this.buttonFunctions);
            this.rows.push(row);
            table.append(row.getRow());
            let cellsCreated = row.getColumns();
            cellsCreated.forEach(function (cell, i) {
                columnCells[i].push(cell);
            });
        });

        this.columnCells = columnCells;

        return table;


    }

    createHeader() {
        let row = new Row([], this.columnWidths, this.columnsNames, this.rowWidth, this.rowConfig);
        this.rows.push(row);
        let header = row.getHeaderRow();
        let cellsCreated = row.getColumns();
        let columnCells = this.columnCells;

        cellsCreated.forEach(function (cell, i) {
            columnCells[i].push(cell);
        });

        this.columnCells = columnCells;
        return header;
    }

    // getTable() {

    // }

    // getHtml() {
    //     let html = ``;
    //     let row;
    //     let count = 0;
    //     let columnCells = []

    //     // Make header row
    //     if (this.items.length > 0) {
    //         row = new Row(items[0], this.columns, this.rows.height)
    //         html += row.getHeaderHtml();
    //         let cellsCreated = row.getColumns();
    //         cellsCreated.forEach(function (cell) {
    //             columnCells.push([cell]);
    //         });
    //     }


    //     // Make data rows
    //     this.items.forEach((item) => {
    //         row = new Row(item, this.columns, this.rows.height)
    //         html += row.getHtml();
    //         let cellsCreated = row.getColumns();
    //         cellsCreated.forEach(function (cell, i) {
    //             columnCells[i].push(cell);
    //         });
    //     });

    //     this.columnCells = columnCells;

    //     return html;
    // }

}