import {Entry} from "./Entry.js";

let entires = document.getElementById('entriesContainer');

let buttonSubmit = document.getElementById('guestbook-newEntry-submit');
let buttonClear = document.getElementById('guestbook-newEntry-clear');

let inputTitle = document.getElementById('input_entry-title');
let inputContent = document.getElementById('input_entry-content');

let newEntry = document.getElementById('newEntryFieldset');
let newEntryLegend = document.getElementById('guestbook-newEntry-Legend');
let newEntryButton = document.getElementById('newEntryButton');

let posts;

newEntryLegend.addEventListener('click', (event) => {
    newEntry.style.display = 'none';
    newEntryButton.style.display = 'block';
});

newEntryButton.addEventListener('click', (event) => {
    newEntry.style.display = 'block';
    newEntryButton.style.display = 'none';
});

buttonClear.addEventListener('click', (event) => {
    inputTitle.value = '';
    inputContent.value = '';
    inputTitle.focus();
});

buttonSubmit.addEventListener('click', (event) => {
    if (inputTitle.value === '' || inputContent.value === '') {
        alert("You have to enter a title and some content to add an entry");
    } else {
        addEntry(inputTitle.value, inputContent.value);
    }
    buttonClear.click();
});

function getEntries() {
    AJAX.GET('http://localhost/guestbook/api/v1/getEntries.php?id=all', {
        '200': function(data) {
            let DataPosts = JSON.parse(data).entries;
            posts = [];
            DataPosts.forEach((post, index) => {
                posts.push(new Entry(post.id, post.title, post.content, post.createdAt))
            });
            renderPosts();
        }
    });
}

function addEntry(title, content) {
    if (title !== '' && content !== '') {
        AJAX.GET('http://127.0.0.1/guestbook/api/v1/addEntry.php?title=' + title + '&content=' + content + '&createdAt=' + new Date().toLocaleString(),
            {
                '200': function(data) { getEntries(); },
            });
        return true;
    } else {
        return false;
    }
}

function renderPosts() {
    entires.innerHTML = '';
    posts.forEach((post, index) => {
        entires.appendChild(post.render());
    });
}

getEntries();
