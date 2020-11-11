const express = require("express");
const port = process.env.PORT || 8080;

class App {
  constructor() {
    this.express = express();

    this.routes();
    this.middlewares();

    this.express.listen(port, () =>
      console.log(`App listening at http://localhost:${port}`)
    );
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use('/v1', require("./src/routes"));
  }
}

module.exports = new App().express; 