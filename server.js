import { createServer } from "https"
import { readFileSync } from "fs"
import next from "next"

const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(
    {
      key: readFileSync("./localhost.key"),
      cert: readFileSync("./localhost.crt"),
    },
    (req, res) => handle(req, res)
  ).listen(3001, "0.0.0.0", () => {
    console.log("HTTPS server running on https://127.0.0.1:3000")
  })
})
