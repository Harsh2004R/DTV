const express = require("express")
require("dotenv").config()
const cors = require('cors')
const { connection } = require("./DataBase.js")
const { UserRouter } = require("./Routes/user.router.js")
const { Darkurl } = require("./Routes/darkweburl.router.js")
const { PodcastRouter } = require("./Routes/podcast.router.js")
const { VideoRouter } = require("./Routes/video.router.js")
const { UploadRouter } = require("./Routes/uploadRouter.js")
const { PostUploadRouter } = require("./Routes/post.upload.router.js")
const app = express();
app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
    res.send("Server is running........")
})
app.use("/api/user", UserRouter)
app.use("/api", Darkurl)
app.use("/api", PodcastRouter)
app.use("/api", VideoRouter)
app.use("/api", UploadRouter)
app.use("/api", PostUploadRouter)
const PORT = process.env.PORT
const HOST = '0.0.0.0';
app.listen(PORT, HOST, async () => {
    try {
        console.log(`http://localhost:${PORT}`)
        await connection;
        console.log("connected to MongoDb")
    } catch (error) {
        console.log("<------------------Error in connection DB error---------------->", error)
    }
})

