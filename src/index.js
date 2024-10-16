const { PORT } = require("./config/serverConfig.js");

const express = require("express");

const setupAndStartServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`server is listening on port no: ${PORT}`);
    });
};

setupAndStartServer();
