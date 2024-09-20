import  "dotenv/config"
import e from "express"

const app = e()

app.listen(process.env.API_PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.API_PORT}`)
})