const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.request.url == "/") {
    ctx.body = "<h1>Ana sayfaya hoş geldiniz :)</h1>";
  } else if (ctx.request.url == "/hakkimda") {
    ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz :)</h1>";
  } else if (ctx.request.url == "/iletisim") {
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz :)</h1>";
  }
});

app.listen(3000);
