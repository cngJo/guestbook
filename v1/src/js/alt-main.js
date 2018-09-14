import {Entry} from "./Core/Entry.js";
let posts = [];

getPosts();

function getPosts() {
    AJAX.GET('http://localhost/guestbook/api/v1/getEntries.php?id=all', {
        '200': function(data) {
            let DataPosts = JSON.parse(data).entries;
            posts = [];
            DataPosts.forEach((post, index) => {
                posts.push(new Entry(post.id, post.title, post.content, post.createdAt))
            });
            console.log(posts);
            renderPosts();
        }
    });
}

function renderPosts() {
    let content = document.getElementById('content');
    content.innerHTML = '<div></div>';
    posts.forEach((post, index) => {
        content.appendChild(post.render());
    });
}

document.getElementById('action-refresh').addEventListener('click', event => {
    document.getElementById('content').innerText = 'LOADING ...';
    getPosts();
});

document.getElementById('action-newEntry').addEventListener('click', event => {
    let newEntryElement = document.getElementById('newEntry');
    if (newEntryElement.classList.contains('hidden')) {
        event.target.innerHTML = 'Hide new Entry';
        document.getElementById('newEntry').classList.remove('hidden');
        document.getElementById('newEntry').classList.add('visible');
    } else {
        event.target.innerHTML = 'New Entry';
        document.getElementById('newEntry').classList.remove('visible');
        document.getElementById('newEntry').classList.add('hidden');
    }
});

document.getElementById('submitEntry').addEventListener('click', event => {
    let title = document.getElementById('entryTitle');
    let content = document.getElementById('entryContent');
    addPost(title.value, content.value);
    title.value = '';
    content.value = '';
});

function addPost(title, content) {
    if (title !== '' && content !== '') {
        AJAX.GET('http://127.0.0.1/guestbook/api/v1/addEntry.php?title=' + title + '&content=' + content + '&createdAt=' + new Date().toLocaleString(),
            {
                '200': function(data) { getPosts(); },
            });
        return true;
    } else {
        return false;
    }
}
