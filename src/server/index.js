import InitServer from './server';
import InitDB from './db';

(async () => {
    InitDB(); // Establishing DB Connection
    await InitServer(); // Starting Server
})();