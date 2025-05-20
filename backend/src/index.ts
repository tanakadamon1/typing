import * as express from 'express'
import * as cors from 'cors'
import questionsRouter from './routes/questions'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.use('/questions', questionsRouter)

app.listen(PORT, () => {
  console.log(`サーバー起動：http://localhost:${PORT}`)
})
