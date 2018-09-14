import {Entry} from "./Entry.js";

export class Utils {

    static renderPosts(posts) {
        AJAX.GET('http://localhost/guestbook/api/v1/getEntries.php?id=all', {
            '404': function(data) {

            },
            '200': function(data) {
                let entires = [];
                JSON.parse(data).entries.forEach((entry, index) => {
                    entires.push(new Entry(entry.id, entry.title, entry.content, entry.createdAt));
                });
            },
        });

        function render(posts) {

        }
    }

    static clearElementContent(element) {
        element.innerHTML = '';
    }

    static GetID(id) {
        return document.getElementById(id);
    }

}
