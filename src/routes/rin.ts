import { ama } from "../rin"
import { Hono } from "hono"
const rin = new Hono()
rin.get("/", (c) => {
  return c.json("rin is running")
})

rin.post("/chat", async (c) => {
  const body = await c.req.json()
  const q = body.query
  const id = body.id   

  if (!q) {
    return c.json({ error: "provide query" })
  }
  if (!id) {
    return c.json({ error: "id required" })
  }

  try {
    const res = await ama(q.trim(), id)
    return c.json({ result: res })  
  } catch (e) {
    console.log(e)
    return c.json({ error: `an error occured: ${e}` })
  }
})


export default rin