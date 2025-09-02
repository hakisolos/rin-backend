import { Hono } from "hono"
import { cors } from "hono/cors"
import rin from "./src/routes/rin"

const app = new Hono()

app.use("/*", cors())


app.route("/rin", rin)

Bun.serve({
  fetch: app.fetch,
  port: 8080,
})

console.log("app running on port 8080")
