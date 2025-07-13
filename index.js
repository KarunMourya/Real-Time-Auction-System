import expess, { response } from "express"
import "dotenv/config"

const app = expess()

app.get('/ping', (_ , response) => {
    response.status(200).send({
        data: [],
        message: "Server setup properly",
        error: []
    })
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on', process.env.PORT)
})      