class Table {

    constructor(items, tableDiv, columns = [200, 200, 200, 200], rows = { height: 40 }) {
        this.columns = columns;
        this.numColumns = columns.length;
        this.items = items;
        this.tableDiv = tableDiv;
        this.rows = rows;
        this.selectedHeader = null;
        this.columnObjects = [[], [], [], []];

    }

    updateItems(items) {
        if (items.length == 0) {
            document.getElementById(this.tableDiv).innerHTML = '';
            return;
        }
        this.items = items;
        // this.draw();
    }

    draw() {

        let html = this.getHtml();
        let tableNode = document.createElement('div');

        tableNode.innerHTML = html;
        tableNode.className = 'tabilization-table';
        let tableDiv = document.getElementById(this.tableDiv);
        tableDiv.innerHTML = '';
        tableDiv.append(tableNode);

        let elements = document.getElementsByClassName("table-cell-input");

        Array.from(elements).forEach(function (element) {
            element.addEventListener('input', () => {
                let id = element.getAttribute('data-row-id')
                let key = element.getAttribute('data-key')
                let value = element.value;
                items.forEach(function (item) {
                    if (item.id == id) {
                        item[key] = value;
                    };
                })
            }, false);
        });

        let resizeHandles = document.getElementsByClassName("resize-handle");

        // Array.from(resizeHandles).forEach(function (handle) {
        //     handle.addEventListener('mousedown', () => {
        //         console.log("mousedown");
        //         document.body.addEventListener('mouseup', function endResize() {
        //             console.log("mouseup");
        //             document.body.removeEventListener('mouseup', endResize);
        //         });

        //         document.body.addEventListener('mousemove', function mouseMoveEvent() {
        //             console.log("mousemove");
        //         });

        //     });
        // });

    }



    resizeColumn(columnNum, newWidth) {
        let array = this.columnObjects[columnNum];
        array.forEach(function (cell) {
            cell.cellNode.style.width = (newWidth + "px");
        });
    }


    clearTable() {
        document.getElementById(this.tableDiv).innerHTML = '';
        return;
    }

    createTable() {

        let row;
        let columnObjects = [];
        for (let i = 0; i < this.numColumns; i++) {
            columnObjects.push([]);
        }

        let tableNode = document.createElement('div');
        tableNode.className = 'tabilization-table';

        // Make header row
        this.items.forEach((item) => {
            row = new Row(item, this.columns, this.rows.height)
            tableNode.append(row.getRow());
            let cellsCreated = row.getColumns();
            cellsCreated.forEach(function (cell, i) {
                columnObjects[i].push(cell);
            });
        });

        this.clearTable();
        let tableDiv = document.getElementById(this.tableDiv);
        tableDiv.append(tableNode);

        this.columnObjects = columnObjects;


    }

    getTable() {

    }

    getHtml() {
        let html = ``;
        let row;
        let count = 0;
        let columnObjects = []

        // Make header row
        if (this.items.length > 0) {
            row = new Row(items[0], this.columns, this.rows.height)
            html += row.getHeaderHtml();
            let cellsCreated = row.getColumns();
            cellsCreated.forEach(function (cell) {
                columnObjects.push([cell]);
            });
        }


        // Make data rows
        this.items.forEach((item) => {
            row = new Row(item, this.columns, this.rows.height)
            html += row.getHtml();
            let cellsCreated = row.getColumns();
            cellsCreated.forEach(function (cell, i) {
                columnObjects[i].push(cell);
            });
        });

        this.columnObjects = columnObjects;

        return html;
    }

}