# MiniDB

MiniDB is a lightweight JavaScript-based database that uses key-value pairs to store data. It provides simple functions to initialize, set, get, update, and remove data from the database.

## How to Get Started

To get started with MiniDB, follow these steps:

1. Import MiniDB into your project:

    ```javascript
    // Import MiniDB
    const {MiniDB} = require('MiniDB');

    // Create new db instance for `test_table`
    const db = new MiniDB('test_table');
    ```

2. Initialize the database:

    ```javascript
    // Create `test_table` table in the database.
    db.initialize();
    ```

## Functions

### `set(key, value)`

Stores a key-value pair in the database.

```javascript
// Create `test` key in database with value `1234` attached to it.
db.set('test', 1234);
```

### `get(key)`
Retrieves the value associated with a key from the database.
```javascript
// Return whatever is behind key `test`.
db.get('test').then(resp => console.log(resp));
```

### `update(key, newValue)`
Updates the value associated with a key in the database.
```javascript
// Update value behind key `test` from `1234` to `12345`
db.update('test', 12345);
```

### `remove(key)`
Removes a key-value pair from the database.
```javascript
// Removes key `test` along with its value `12345` from table `test_table`
db.remove('test');
```
## Important Note
Make sure to call initialize() function after creating a new MiniDB instance to create the necessary table in the database.


## Example Usage
```javascript
const {MiniDB} = require('MiniDB');

const db = new MiniDB('test_table');

db.initialize();

db.set('test', 1234);

db.get('test').then(resp => console.log(resp));

db.update('test', 12345);

db.remove('test');
```
This summarizes the basic functionalities of MiniDB. For more details, refer to the code comments and documentation.
