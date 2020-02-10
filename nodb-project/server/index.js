const express = require(`express`);

const cors = require('cors')

const movieCtrl = require('./Controllers/Movie_Controller')
const searchCtrl = require('./Controllers/Search_Controller')

const app = express()

const PORT = 4060

app.use(express.json())

app.use(cors())


app.get('/api/movies', movieCtrl.showMovies)
app.post('/api/movies', movieCtrl.addMovies)
app.put('/api/movies/:id', movieCtrl.rateMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovies)



app.listen(PORT, () => {
    console.log(`${PORT} Is Workinnn!`)
})

