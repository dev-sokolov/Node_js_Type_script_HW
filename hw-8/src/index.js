import 'dotenv/config';

import startServer from './server.js';
import { connectionDatabase } from './db/sequelize.js';

// import Book from './db/Book.js';

const bootstrap = async () => {
    await connectionDatabase();
    startServer();
}

bootstrap();