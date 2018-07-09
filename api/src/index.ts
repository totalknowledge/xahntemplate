import "reflect-metadata";
import {createConnection} from "typeorm";
import {Api} from "./api"

createConnection().then(async (connection) => {
  let api = new Api(connection);
  try {
      await api.start();
  }
  catch (err) {
      console.log(err);
      process.exit(1);
  }
}).catch((err)=> {console.log("TypeORM connection error: ", err)});
