import "dotenv/config";

import { connectDatabase } from "./bd/sequelize.js";
import startServer from "./server.js";

const bootstrap = async () => {
    await connectDatabase();
    startServer();
}

bootstrap();

