import express from 'express'
import paymentRouter from './routers/payment.router.js'

const app = express()
app.use(express.static('./src/public'))
app.use('/api', paymentRouter)

app.listen(8080,  () => console.log('Server Up!'))