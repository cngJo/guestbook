/**
 * Closes the Tab
 */
document.getElementById('header-btn-close').addEventListener('click', (event) => {
    closeTab();
});

/**
 * Toggle Full screen
 */
document.getElementById('header-btn-max').addEventListener('click', (event) => {
    // TODO: Toggle full screen
});

/**
 * Minimise (close) the tab (same as pressing the Code button in the header)
 */
document.getElementById('header-btn-min').addEventListener('click', (event) => {
    closeTab();
});

console.log(document.getElementById('action-newEntry'));

document.getElementById('action-newEntry').addEventListener('click', (event) => {
    let newEntryForm = document.getElementById('newEntry');
    if (newEntryForm.style.visibility === 'hidden') {
        newEntryForm.style.visibility = 'visible';
        event.target.innerHTML = "close New Entry";
    } else if (newEntryForm.style.visibility === 'visible') {
        newEntryForm.style.visibility = 'hidden';
        event.target.innerHTML = 'New Entry';
    }
});

function closeTab() {
    // TODO: check in which browser we are running and decide which option to use to close the tab
    window.open('', '_self', '').close(); // works only in Edge and IE
    window.close(); // works in chrom
}
