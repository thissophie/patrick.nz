import { Hono } from "hono";

const app = new Hono();

app.get("/make-contact/", (c) => c.redirect("https://www.thisisme.nz/contact"));
app.get("/make-contact", (c) => c.redirect("https://www.thisisme.nz/contact"));

app.get("/talks/", (c) => c.redirect("https://www.thisisme.nz/talks"));
app.get("/talks", (c) => c.redirect("https://www.thisisme.nz/talks"));

app.get("/*", (c) => c.redirect("https://www.thisisme.nz/"));

app.get("/", (c) => c.redirect("https://www.thisisme.nz/"));

export default app;
