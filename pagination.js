class Pagination {

    constructor(numPages) {

        this.numPages = numPages;

    }

    update(numPages) {
        this.numPages = numPages;
    }

    create() {
        let pagination = document.createElement('div');

        pagination.className = 'pagination-container';

        for (let i = 1; i <= this.numPages; i++) {
            let buttonDiv = document.createElement('div');
            buttonDiv.innerHTML = `<button class='table-page-number' data-search-page='0'>${i}</button>`;
            pagination.append(buttonDiv)
        }

        this.pagination = pagination;
    }

    get() {
        this.create();
        return this.pagination;
    }


}


