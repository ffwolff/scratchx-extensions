const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    console.log("CONECTOU");

    wss.on("close", () =>{
        console.log("DESCONECTOU");
    });
});