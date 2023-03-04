let cp = require('child_process');
let children = [];
let max = 500;
let CountData = 0;
let Timer = setInterval(CreateInstance, 10);
setInterval(CollectData, 10000);

async function CreateInstance(){
	let Instance = cp.fork('./ClientInstance.js');

	Instance.on('message', (msg) => {
		CountData += parseInt(msg);
	});

	children.push(Instance);
	if (children.length >= max){
		clearInterval(Timer);
	}
}

function CollectData(){
	// let	CurrentData = 0;
	// children.forEach(item =>{
	// 	console.log(item)
	// 	CurrentData += item.GetData;
	// });

	console.log(`Received Data: ${Math.round(CountData/1024)} kb/s`);
	CountData = 0;
}