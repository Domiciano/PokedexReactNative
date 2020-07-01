/*
  Se importo usando los comandos:
  npm install --save react-native-sqlite-storage
  cd ios && pod install && cd ..
*/
import SQLite from "react-native-sqlite-storage";
import {databaseName, databaseVersion} from '../app.json';

class DatabaseHandler{

    constructor(name, version){
        this.db = SQLite.openDatabase(name, version, "Test Database", 200000, this.openCB, this.errorCB);
    }

    errorCB(err) {
        console.log("SQL Error: " + err);
    }
 
    successCB() {
        console.log("SQL executed fine");
        
    }
 
    openCB() {
        console.log("Database OPENED");
    } 

    execute(sql){
       this._beginExecution(sql);
    }

    query(sql, func){
        this._beginTransaction(sql, func);
    }

    _beginTransaction = (sql, func) => {
        this.db.transaction(tx => {
            tx.executeSql(
                sql,
                [],
                func,
                this.errorCB
            );
        });
    }

    _beginExecution = (sql) => {
        this.db.transaction(tx => {
            tx.executeSql(
                sql,
                [],
                this.successCB,
                this.errorCB
            );
        });
    }
}

const db = new DatabaseHandler(databaseName,databaseVersion);

export {db}
