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
