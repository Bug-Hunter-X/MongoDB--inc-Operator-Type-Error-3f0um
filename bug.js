```javascript
const query = { name: 'John Doe' };

// Incorrect use of $inc operator
db.collection('users').updateOne(query, { $inc: { age: '1' } });
```