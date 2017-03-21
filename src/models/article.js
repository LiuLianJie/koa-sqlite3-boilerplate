'use strict';

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("tmp.db");

/*
 * run
 */
module.exports.run = (sql) => {
	return new Promise( (resolve, reject) => {
		db.run(sql, (err) => {
			if(err){
				reject(err)
			} else {
				resolve(true);
			}
		}).catch((err) => {
			console.log("Database Error: " + err);
		});
	})
}

/*
 * list articles
 */

module.exports.list = () => {
	return new Promise((resolve, reject) => {
		db.all("select * from longPage", (err, data) => {
			//console.log(err);
			//console.log(data);
			if(err){
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}
