var osc = require("osc");

var udp = new osc.UDPPort({
    // localAddress: "0.0.0.0", // Totally does matter here :)
    // localPort: 5000,
    remoteAddress:  "127.0.0.1", // the other laptop
    remotePort: 5000 // the port to send to
});

udp.open();

udp.on("ready", function () {
    console.log("ready");
    setInterval(function () {
        udp.send({
            address: "/sending/every/second",
            args: [1, 2, 3]
        })
    }, 1000);
});