import { Server } from "socket.io";
import { createServer } from "node:http";

const startWebsocketServer = () => {
    const httpServer = createServer();
    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    })

    wsServer.on("connection", (socket) => {
        console.log(`Пользователь подключен`);

        socket.on('messageHandler', (msg) => {
            console.log(`Сообщение получено: ${msg}`);

            // Отправляем подтверждение клиенту, который отправил сообщение
            socket.emit('message received', `Сообщение получено`);
        });

        socket.on('disconnect', () => {
            console.log(`Пользователь отключился`);
        });
        //   socket.disconnect();
    }); 

    const wsPort = process.env.SOCKET_PORT
    httpServer.listen(wsPort, () => console.log(`wsServer running on ${wsPort} port`))
}

export default startWebsocketServer;



