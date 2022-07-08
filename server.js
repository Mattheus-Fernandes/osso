const express = require("express")
const app = express()


app.set("view engine", "ejs")

app.use(express.static("public"))


app.get("/", (req,res) => {
    res.render("index")
})







const port = process.env.PORT || 8080
app.listen(8080, () => console.log(`The server is listening on the port ${port}`))