const axios = require("axios")
const urls = ["https://glow-bald-order.glitch.me" , https://mixland.glitch.me]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
