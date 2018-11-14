var osc = require("osc");
    // flock = require("flocking"),
    // example = require("../chrome-app/js/example-synth.js");


/****************
 * OSC Over UDP *
 ****************/

// let getIPAddresses = function () {
//     var os = require("os"),
//         interfaces = os.networkInterfaces(),
//         ipAddresses = [];

//     for (var deviceName in interfaces) {
//         var addresses = interfaces[deviceName];
//         for (var i = 0; i < addresses.length; i++) {
//             var addressInfo = addresses[i];
//             if (addressInfo.family === "IPv4" && !addressInfo.internal) {
//                 ipAddresses.push(addressInfo.address);
//             }
//         }
//     }

//     return ipAddresses;
// };

var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 5000
});

udpPort.on("ready", function () {
    // var ipAddresses = getIPAddresses();

    console.log("Listening for OSC over UDP. port: ", udpPort.options.localPort);
    // ipAddresses.forEach(function (address) {
    //     console.log(" Host:", address + ", Port:", udpPort.options.localPort);
    // });
});

udpPort.on("message", function (oscMessage) {
    console.log("message",oscMessage);
    // example.mapOSCToSynth(oscMessage, example.synth, example.synthValueMap);
});

udpPort.on("error", function (err) {
    console.log(err);
});

udpPort.open();

// Start playing the synth.
// example.synth.play();