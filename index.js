const app = require('express')();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello World from Express');
})