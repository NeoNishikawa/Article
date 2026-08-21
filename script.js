document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const audioToggle = document.getElementById('audio-toggle');
    const audioPanel = document.getElementById('audio-panel');
    const audioPlayer = document.getElementById('audio-player');
    const videoPlayer = document.getElementById('video-player');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const currentYear = document.getElementById('current-year');

    menuToggle?.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav?.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    audioToggle?.addEventListener('click', () => {
        const isOpen = !audioPanel.hasAttribute('hidden');
        if (isOpen) {
            audioPanel.setAttribute('hidden', '');
        } else {
            audioPanel.removeAttribute('hidden');
        }
        audioToggle.setAttribute('aria-expanded', String(!isOpen));
        audioToggle.textContent = isOpen ? 'Putar musik' : 'Tutup pemutar';
    });

    videoPlayer?.addEventListener('play', () => {
        audioPlayer?.pause();
    });

    videoPlayer?.addEventListener('pause', () => {
        if (videoPlayer.currentTime > 0 && !videoPlayer.ended) return;
        audioPlayer?.play().catch(() => {});
    });

    videoPlayer?.addEventListener('ended', () => {
        audioPlayer?.play().catch(() => {});
    });

    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('nama_mhs').value.trim();
        formFeedback.textContent = `Terima kasih, ${name}. Pesanmu sudah dicatat.`;
        contactForm.reset();
    });

    if (currentYear) currentYear.textContent = new Date().getFullYear();
});
