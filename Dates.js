class Dates {
    constructor() {
        this.date = new Date();
    }

    getCurrentDate() {
    const day = this.date.getDate().toString().padStart(2, '0');
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
    const year = this.date.getFullYear().toString();
    return `${day}/${month}/${year}`;
    }

}

module.exports = Dates;