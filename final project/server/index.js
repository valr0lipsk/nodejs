const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars')
const fs = require('fs')

const postsRoutes = require('./routes/posts');
const categoriesRoutes = require('./routes/categories');
const tagsRoutes = require('./routes/tags');
const authorsRouter = require('./routes/authors');
const LogModel = require('./models/log');
let logs = [];

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))


app.set('view engine', 'hbs');
app.set('views', './views');

// app.use((req, res, next) => {
//     const log = { url: req.url, method: req.method, query: req.query, body: req.body };
//     logs = JSON.parse(fs.readFileSync('./logs.json'));
//     logs.push(log);
//     fs.writeFile('./logs.json', JSON.stringify(logs), (error) => { 
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log('log added');
//         }
//     })
//     next();
// })

app.use(bodyParser.json())
    .use(postsRoutes)
    .use(categoriesRoutes)
    .use(tagsRoutes)
    .use(authorsRouter);

app.get('/', (req, res) => {
    res.render('home')
});


const url = 'mongodb+srv://root:fns&frb975@cluster0.vu8ug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, (error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('It is connected')
    app.listen(3000, () => {
        console.log('It is running')
    })
})