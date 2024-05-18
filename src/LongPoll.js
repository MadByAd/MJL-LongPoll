
class LongPoll {

    /**
     * Send a data to a http server
     *
     * @param {String}   url     The url
     * @param {Object}   data    The data to send
     * @param {Function} handler The function to handle the data
     * @param {Boolean}  repeat  Determine whether to send poll the request again
     *                           after completion, set this to true if you want to
     *                           achieve real time communication
     */

    static send(url, data, handler, repeat = true) {

        let form = new FormData;

        for(let variable in data) {
            form.append(variable, data[variable]);
        }

        let xhttp = new XMLHttpRequest;

        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                handler(JSON.parse(this.responseText));
                if(repeat) {
                    LongPoll.send(url, data, handler, repeat);
                }
            }
        };

        xhttp.open("POST", url);
        xhttp.send(form);

    }

}
