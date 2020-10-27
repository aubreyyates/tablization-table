class Row {
    // constructor(item, columns, height) {
    //     this.item = item;
    //     this.height = height;
    //     this.columns = columns;
    //     this.rowId = item.id;
    //     //this.width = columns.reduce((a, b) => a + b, 0)
    //     this.columnObjects = [];
    //     this.rowNode;
    // }

    constructor(item, columnWidths, columnNames, rowWidth, rowConfig, buttons, buttonFunctions) {

        this.item = item;
        this.columnWidths = columnWidths;
        this.columnNames = columnNames;
        this.rowWidth = rowWidth;
        this.rowConfig = rowConfig;
        this.buttonFunctions = buttonFunctions;

        this.columnCells = [];
        this.row;
        this.buttons = buttons;

    }

    createRow() {

        this.row = document.createElement('div');
        this.row.className = 'table-row';

        this.row.style.width = (this.rowWidth + 'px');
        let cell;
        let count = 0;
        let columnCells = [];

        let rowCellDiv = document.createElement('div');
        rowCellDiv.className = 'table-row-cells';

        for (var key in this.item) {
            if (this.item.hasOwnProperty(key) && key != 'id') {
                cell = new Cell(this.item[key], key, 50, this.columnWidths[count], count, this.item);
                rowCellDiv.append(cell.getCell());
                count += 1;
                columnCells.push(cell);
            }
        }

        this.row.append(rowCellDiv);

        for (let i = 0; i < this.buttons.length; i++) {
            let button = document.createElement('button');
            button.className = this.buttons[i] + ' table-button';
            button.addEventListener("click", () => {
                this.buttonFunctions[i](this.item);
            }, false);
            this.row.append(button);
        }

        this.columnCells = columnCells;
    }

    createHeaderRow() {

        this.row = document.createElement('div');
        this.row.className = 'table-row';
        this.row.style.width = (this.rowWidth + 'px');
        let cell;
        let count = 0;

        for (var key in this.columnNames) {

            cell = new Cell('', this.columnNames[count], 50, this.columnWidths[count], -1);
            this.row.append(cell.getHeaderCell());
            count += 1;
            this.columnCells.push(cell);

        }




    }

    getRow() {
        this.createRow();
        return this.row;
    }

    getHeaderRow() {
        this.createHeaderRow();
        return this.row;
    }


    getHtml() {
        // let html = `<div class='table-row' style='width:${this.width}px'>`;
        // let columnId = 1;
        // let cell;
        // let count = 0;

        // for (var key in this.item) {



        //     if (this.item.hasOwnProperty(key) && key != 'id') {
        //         cell = new Cell(this.item[key], key, this.height, this.columns[count], columnId, this.rowId)

        //         html += cell.getHtml();
        //         count += 1;
        //         this.columnObjects.push(cell);
        //     }



        // }

        // html += `</div>`;
        // return html;
    }

    getHeaderHtml() {
        // let html = `<div id='heading-row' class='table-row' style='line-height:${this.height}px;width:${this.width}px'>`;
        // let columnId = 1;
        // let cell;
        // let count = 0;


        // for (var key in this.item) {
        //     if (this.item.hasOwnProperty(key) && key != 'id') {
        //         cell = new Cell(this.item[key], key, this.height, this.columns[count], columnId, this.rowId)
        //         html += cell.getHeaderHtml();
        //         count += 1;
        //         this.columnObjects.push(cell);
        //     }
        // }

        // html += `</div>`;
        // return html;
    }

    getColumns() {
        return this.columnCells;
    }

}