const app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {

        $('h1').css("color", "blue")
        console.log('device ready')
    },
};

app.initialize();