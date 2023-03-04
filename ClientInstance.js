let ws = require("ws")

const ID = Math.round(Math.random() * 99999999).toString();

console.log(`Instace Create: ${ID}`);

let connection = new ws("ws://localhost:3000", "ws");

connection.on("open", async function open()
{
	connection.send(`login;${ID};${ID}`);
});

connection.on('message', async function message(data)
{
	const size = new Blob([data]).size;
	process.send(size);
});

function GetData(){
	const cacheData = RecievedData;
	RecievedData = 0;
	return cacheData;
}
module.exports = {GetData}
