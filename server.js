const express = require("express");
const port = process.env.PORT || 8080;

class App {
  constructor() {
    this.express = express();

    this.routes();
    this.middlewares();

    this.express.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    console.log("inside routes")
    this.express.use(require("./src/routes/routes"));
  }
}

module.exports = new App().express; 