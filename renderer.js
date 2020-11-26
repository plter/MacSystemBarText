// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

(function () {
    let tray;
    let textinput = $(".text-input");

    function updateSystemBarText(text) {
        if (text) {
            if (tray) {
                tray.destroy();
            }

            let icon = electron.remote.nativeImage.createEmpty();
            tray = new electron.remote.Tray(icon);
            tray.setTitle(text);
            localStorage.setItem("storedSystemBarText", text);
        }
    }

    function readStoredText() {
        let storedText = localStorage.getItem("storedSystemBarText");
        if (storedText) {
            textinput.val(storedText);
            updateSystemBarText(storedText);
        }
    }

    function main() {
        readStoredText();

        $(".btn-sure").click(function () {
            updateSystemBarText(textinput.val())
        });
    }

    main();
})();