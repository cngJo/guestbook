let desktop = document.getElementById('desktop');
let screen1 = document.getElementById('screen1');
let screen2 = document.getElementById('screen2');
let startup = document.getElementById('startup');
let bluescreen = document.getElementById('bluescreen');

let text = document.getElementById('popup-windows-statustext');

function boot() {
    loadScreen1();
    setTimeout(() => {
        loadScreen2();
    }, 10000)
}

function loadScreen1() {
    // Hide Main Content ( background, toolbar, guestook )
    desktop.style.display = 'none';
    screen2.style.display = 'none';
    bluescreen.style.display = 'none';
    screen1.style.display = 'block';
}

function loadScreen2() {
    screen1.style.display = 'none';
    screen2.style.display = 'block';

    setTimeout(() => {
        text.innerHTML = 'Loading Kernel ...';

        setTimeout(() => {
            text.innerHTML = 'Loading Registry ...';

            setTimeout(() => {
                text.innerHTML = 'Loading random error messages ...';

                setTimeout(() => {
                    text.innerHTML = 'Error loading error messages ...';
                    if (Math.floor(Math.random() * 100) < 50) {


                        setTimeout(() => {
                            text.innerHTML = 'Error loading errors ...';

                            setTimeout(() => {
                                text.innerHTML = 'Windows failed starting ...';

                                setTimeout(() => {
                                    screen2.style.display = 'none';
                                    bluescreen.style.display = 'block';
                                }, 1500);

                            }, 1500);

                        }, 1000)

                    } else {
                        loadDesktop();
                    }
                }, 1000);

            }, 2000);

        }, 2000);

    }, 2000);

}

function loadDesktop() {
    startup.style.display = 'none';
    desktop.style.display = 'block';
}
