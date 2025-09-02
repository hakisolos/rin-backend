import { Hono } from "hono"
import rin from "./src/routes/rin"

const app = new Hono()
app.route("/rin", rin)






Bun.serve({
  fetch: app.fetch,
  port: 8080,
})

console.log(`app running on port 8080`)
