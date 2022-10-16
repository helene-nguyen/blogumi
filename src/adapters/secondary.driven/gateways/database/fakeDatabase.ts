interface DatabaseProps {
    add?: () => void;
    values?: () => void;
    delete?: () => void;
}

interface DataObj {
    username: string;
    content: string;
    role: string;
}

export default class Database {
    database;

    constructor() {
        //Create a new instance of Set object to let us simulate
        this.database = new Set();
    }
    //~Methods
    async create(dataObj: DataObj) {
        // the .add() method will add in the Set object
        return this.database.add(dataObj);
    }

    async read() {
        //return all data from database
        // the .values() method will get all data from the database
        return [...this.database.values()];
    }
    async update() {
        return;
    }

    async delete() {
        return this.database.delete();
    }
}