export class Fullscreen {

    static toggle() {

        let element = document.body;

        let requestMethod = element.requestFullscreen() || element.msRequestFullscreen()

        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== 'undefined') {
            let wscript = new ActiveXObject('WScript.Shell');
            if (wscript !== null) {
                wscript.SendKesy('{F11}');
            }
        }
    }

}
