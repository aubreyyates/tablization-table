class Cell {

    constructor(data, key, height, width, columnId, rowId) {
        this.height = height;
        this.width = width;
        this.columnId = columnId;
        this.data = data;
        this.key = key;
        this.rowId = rowId;
        this.createCell();
    }

    createCell() {
        this.cellNode = document.createElement('div');
        this.cellNode.className = 'table-cell';
        this.cellNode.style.width = (this.width + 'px');
        this.cellNode.innerHTML = `<input data-row-id='${this.rowId}' data-key='${this.key}' class='table-cell-input' value='${this.data}'>`;
    }

    getCell() {
        return this.cellNode;
    }



    getHtml() {

        let html =
            `
                <div class='table-cell' style='width:${this.width}px;'>
                    <input data-rowId='${this.rowId}' data-key='${this.key}' class='table-cell-input' value='${this.data}'>
                </div >
            `;

        return html;

    }

    getHeaderHtml() {
        let html =
            `
                <div class='table-cell heading-cell' style='width:${this.width}px;'>
                    <div class='header-cell-text'><p>${this.key}</p></div>
                    <div class='resize-handle'></div>
                </div>
            `;

        return html;
    }



    // input() {
    //     if ()
    // }
}