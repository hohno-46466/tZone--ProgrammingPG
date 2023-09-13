// -----------------------------------------------------------------------------

const WSURL = 'ws://broker.hivemq.com:8000/mqtt'
const MQTTtopic = 'hohno/wstest00'

var message = "あいうえお"

// -----------------------------------------------------------------------------

var client = mqtt.connect(WSURL)

client.subscribe(MQTTtopic) // subscribe Topic

client.on('message', function(topic, payload) {
        var _text = payload.toString()
        var _words = _text.split('=') //(/[ \t]/)
        var _key = _words[0].trim()
        var _val = _words[1]
        _mesg = "key=[" + _key + "] val=[" + _val + "]"
        console.log(_mesg)
        message = _mesg
	document.getElementById("DisplayArea").innerHTML = message
    }
)

// -----------------------------------------------------------------------------


