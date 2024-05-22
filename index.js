const sqlite3=require('sqlite3')
const db=new sqlite3.Database('mini.db')
function get_bones(key, table){return new Promise((resolve, reject)=>{db.all(`SELECT value FROM ${table} WHERE key = ?`, [key], (err, rows)=>{if(rows.length == []){resolve(undefined);}else{resolve(rows[0]['value']);}})})}
class MiniDB {constructor(table_name){this.table=table_name;}initilize(){db.run(`CREATE TABLE IF NOT EXISTS ${this.table}(key TEXT, value TEXT)`)}set(key, value){db.run(`INSERT INTO ${this.table} (key, value) VALUES (?, ?)`, [key, value])}update(key, new_value){db.run(`UPDATE ${this.table} SET value = ? WHERE key = ?`, [new_value, key])}remove(key){db.run(`DELETE FROM ${this.table} WHERE key = ?`, [key])}async get(key){let data=await get_bones(key, this.table);return data;}}
module.exports={MiniDB}