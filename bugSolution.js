```javascript
const query = { name: 'John Doe' };

// Correct use of $inc operator
db.collection('users').updateOne(query, { $inc: { age: 1 } });
```