import Sequelize from "sequelize";
import RequestModel from "./Request.js";
import SignsModel from "./Signs.js";

const db = new Sequelize("postgres://btayler@localhost:5432/ASL", {
    logging: false,
});

const Request = RequestModel(db);
const Signs = SignsModel(db);

const connectToDB = async () => {
    try {
        //12A Try and run a query
        await db.authenticate();
        //13 If it works, print out we're connected
        console.log("Connected to database");

        db.sync();
    } catch (error) {
        //12B If 12A fails, show an error message
        console.error(error);
        console.error("PANIC! DB ISSUE.");
    }
};

connectToDB();

export { db, Request, Signs };
