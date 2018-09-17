import {TimeRendering} from "./TimeRendering.js";

// renders the time as (hh:mm) to all html elements with the class render-time
TimeRendering.render();

boot();

let GuestbookMain = document.getElementById('application-guestbook');
let GuestbookNewEntry = document.getElementById('application-guestbook-newEntry');

let GuestbookMainCloseButton = document.getElementById('header-guestbookMain-button-close');
let GuestbookNewEntryCloseButton = document.getElementById('header-guestbookNewEntry-button-close');

let GuestbookMainMinButton = document.getElementById('header-guestbookMain-button-min');

let ToolbarButtonGuestbook = document.getElementById('toolbar-application-guestbook');
// let ToolbarButtonStart = document.getElementById('toolbar-start-button');

let GuestbookMainNewEntryLegend = document.getElementById('guestbook-newPost-Legend');

jQuery('#application-guestbook').draggable({handler: '.popup-header'});

// ToolbarButtonStart.addEventListener('click', (event) => {
//     boot();
// });

ToolbarButtonGuestbook.addEventListener('click', (event) => {
    if (GuestbookMain.style.visibility === 'visible') {
        ToolbarButtonGuestbook.classList.add('closed');
        ToolbarButtonGuestbook.classList.remove('opend');
        GuestbookMain.style.visibility = 'hidden';
    } else {
        GuestbookMain.style.visibility = 'visible';
        ToolbarButtonGuestbook.classList.remove('closed');
        ToolbarButtonGuestbook.classList.add('opend');
    }
    ToolbarButtonGuestbook.style.backgroundColor = 'transparent';
});

GuestbookMainCloseButton.addEventListener('click', (event) => {
    GuestbookMain.style.visibility = 'hidden';
    resetWindowPosition(GuestbookMain);
});

GuestbookMainMinButton.addEventListener('click', (event) => {
    GuestbookMain.style.visibility = 'hidden';
    ToolbarButtonGuestbook.style.backgroundColor = 'green';
});

document.body.addEventListener('keypress', (event) => {
    if (event.key === 'F8') {
        if (document.getElementById('screen2').style.display === 'block') {

        }
    }
});

function resetWindowPosition(window) {
    window.style.left = '20px';
    window.style.top = '40px';
}
