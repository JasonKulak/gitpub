const express = require("express")

const drinks = require("./models/drinks.js")

const app = express()

//middleware
//app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})

app.get("/drinks/:id", (req, res) => {
    //res.send(req.params.id)
    const id = req.params.id
    const drink = drinks[id]

    res.render("show.ejs", {drink})
})



app.listen(3000, () => {console.log("The pub is open!")})