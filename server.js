const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.get('/*', (request, response) => {
    response.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
