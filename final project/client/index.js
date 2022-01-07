const express = require('express');
const router = express.Router();
const handlebars = require('express-handlebars')

const postsController = require('./controllers/posts');
const { connect } = require('./utils/dbConnect')
const app = express()
const postsRoutes = require('./routes/posts')
app.use(postsRoutes)

app.use(express.static('public'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))


app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Connected. Working...')
})

connect((error) => {
    if (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('It is running')
    })
});


