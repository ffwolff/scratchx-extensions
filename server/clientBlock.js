(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.clientBlock = function(callback) {
        // Code that gets executed when the block is run
        const ws = new WebSocket("ws://localhost:8082");

        ws.addEventListener("open", () => {
            console.log("CONECTADO");
        });

    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['R', 'client block', 'clientBlock'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('client block', descriptor, ext);
})({});