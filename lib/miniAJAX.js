class AJAX {

    static GET(url, callbacks = {}) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            try{
                callbacks[xhr.status](xhr.responseText);
            } catch (ex) {
                console.log(`[minAJAX]\n\r Could not call callback function for GET Request to: {${url}}\n\r There is not callback function defined for HTTP-Code ${xhr.status}`);
            }
        };
        xhr.send();
    }

}
