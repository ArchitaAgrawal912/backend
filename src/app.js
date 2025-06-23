import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors( {
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))
//data Setting preparartion
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"})) // for encoding urls and specials charcaters
app.use(express.static("public")) //for images vagera  type asset

//To use Cookies of users for server
app.use(cookieParser())


export {app} 