var thinkGear = require('node-thinkgear-sockets');
const { fromEvent } = require('rxjs')
const io = require('socket.io')(4501)


const client = thinkGear.createClient({ enableRawOutput: true });
console.log(client.connect())
client.connect();

client.on('data', function(data){
	console.log("DATAAA", data)
});

client.on('blink_data', function(blink){
	console.log("BLINKKKKKK", blink.blinkStrength)
	blink.blinkStrength > 40 ? console.log("Have you got something in your eye?") : console.log("That's a soft blink")
	
});

fromEvent(client, 'data')
    .subscribe(eeg => io.emit('metric/eeg', eeg));







