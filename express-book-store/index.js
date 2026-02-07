require("dotenv/config");
const express = require("express");
const bookRouter = require("./routes/book.routes");
const authorRouter = require("./routes/author.routes.js");
const { loggerMiddleware } = require("./middlewares/logger");
const app = express();
const PORT = 8000;

//middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});
