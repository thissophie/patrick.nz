import { Hono } from "hono";

const app = new Hono();

app.get("/make-contact/", (c) => c.redirect("https://www.thisisme.nz/contact"));
app.get("/make-contact", (c) => c.redirect("https://www.thisisme.nz/contact"));

app.get("/talks/", (c) => c.redirect("https://www.thisisme.nz/talks"));
app.get("/talks", (c) => c.redirect("https://www.thisisme.nz/talks"));

app.get("/", (c) => {
  // return c.text(welcomeStrings.join('\n\n'))

  return c.redirect("https://www.thisisme.nz/");
});

export default app;
