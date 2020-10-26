class Row {
    constructor(item, columns, height) {
        this.item = item;
        this.height = height;
        this.columns = columns;
        this.rowId = item.id;
        this.width = columns.reduce((a, b) => a + b, 0)
        this.columnObjects = [];
        this.createRow();
        this.rowNode;
    }

    createRow() {

        this.rowNode = document.createElement('div');
        this.rowNode.className = 'table-row';

        this.rowNode.style.width = (this.width + 'px');
        let columnId = 1;
        let cell;
        let count = 0;

        for (var key in this.item) {
            if (this.item.hasOwnProperty(key) && key != 'id') {
                cell = new Cell(this.item[key], key, this.height, this.columns[count], columnId, this.rowId)
                this.rowNode.append(cell.getCell());
                count += 1;
                this.columnObjects.push(cell);
            }
        }
    }

    getRow() {
        return this.rowNode;
    }


    getHtml() {
        let html = `<div class='table-row' style='width:${this.width}px'>`;
        let columnId = 1;
        let cell;
        let count = 0;

        for (var key in this.item) {



            if (this.item.hasOwnProperty(key) && key != 'id') {
                cell = new Cell(this.item[key], key, this.height, this.columns[count], columnId, this.rowId)

                html += cell.getHtml();
                count += 1;
                this.columnObjects.push(cell);
            }



        }

        html += `</div>`;
        return html;
    }

    getHeaderHtml() {
        let html = `<div id='heading-row' class='table-row' style='line-height:${this.height}px;width:${this.width}px'>`;
        let columnId = 1;
        let cell;
        let count = 0;


        for (var key in this.item) {
            if (this.item.hasOwnProperty(key) && key != 'id') {
                cell = new Cell(this.item[key], key, this.height, this.columns[count], columnId, this.rowId)
                html += cell.getHeaderHtml();
                count += 1;
                this.columnObjects.push(cell);
            }
        }

        html += `</div>`;
        return html;
    }

    getColumns() {
        return this.columnObjects;
    }

}