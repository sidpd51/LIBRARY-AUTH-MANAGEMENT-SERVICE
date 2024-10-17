const express = require("express");

const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require('./routes/index.js')


const setupAndStartServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',ApiRoutes)

    app.listen(PORT, () => {
        console.log(`server is listening on port no: ${PORT}`);
    });
};

setupAndStartServer();
