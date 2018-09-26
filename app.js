const  express = require('express');
const path = require('path');

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rajkumar'
    });
});

// Add Route
app.get('/articles/add', (req, res) => {
    let articles = [
        {
            id: 1,
            title: 'Article One',
            author: 'Rajkumar Patoliya',
            body: 'This is article one'
        },
        {
            id: 2,
            title: 'Article Two',
            author: 'Raj Patel',
            body: 'This is article two'
        },
        {
            id: 3,
            title: 'Article Three',
            author: 'Hiral Patoliya',
            body: 'This is article Three'
        },

    ]
    res.render('add_article', {
        title: 'Add Articles',
        articles: articles
    });
})

// Start Server
app.listen(3000, () => {
    console.log('Server Started on port 3000...');
});