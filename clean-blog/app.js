const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT);

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/", (req, res) => {
  res.status(200).header("Content-Type: text/html").send(blog);
});
