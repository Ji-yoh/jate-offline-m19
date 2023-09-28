const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// check if PWA is installed
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('display-mode is standalone');
    butInstall.style.display = 'none';
}

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // butInstall.classList.toggle('hidden', false);
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;

    // Hide the install button
    // butInstall.classList.toggle('hidden', true);
    butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
