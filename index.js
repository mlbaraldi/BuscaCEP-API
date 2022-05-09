import app from "./app.js"
import config from "./src/config/config.js"



const port = config.port || 3000

app.listen(port, (req, res) => {
    console.log(`listening to port ${port}`)
})