import "dotenv/config"
import startServer from "./server.js";
import startWebsocketServer from "./webServer.js";

const bootStrap = () => {
    startServer();
    startWebsocketServer();
}

bootStrap();

