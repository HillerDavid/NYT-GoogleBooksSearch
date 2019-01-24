const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const PORT = process.env.PORT || 3001
const app = express()

const MONGOD_URI = process.env.MONGOD_URI || "mongodb://localhost/savedbookslist"

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

// Add routes
app.use(routes)

mongoose.connect(MONGOD_URI, { useNewUrlParser: true })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
