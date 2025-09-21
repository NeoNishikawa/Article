document.addEventListener('DOMContentLoaded', () => {
    // Data untuk lagu
    const songs = [
        { title: 'Lofi', url: 'Lofi.mp3' }
    ];

    const audioPlayer = document.getElementById('audio-player');
    const audioToggle = document.getElementById('audio-toggle');
    const audioList = document.getElementById('audio-list');
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');

    // Fungsi untuk membuat daftar lagu
    function populateSongList() {
        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'audio-selection-item';
            songDiv.textContent = song.title;
            songDiv.onclick = () => {
                // Langsung putar lagu baru
                audioPlayer.src = song.url;
                audioPlayer.play();
                
                // Sembunyikan daftar setelah lagu dipilih
                audioList.classList.remove('active');
            };
            audioList.appendChild(songDiv);
        });
    }

    // Fungsi untuk mengaktifkan/menonaktifkan menu dan audio list
    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
        audioList.classList.remove('active');
    });

    audioToggle.addEventListener('click', () => {
        audioList.classList.toggle('active');
        menuList.classList.remove('active');
    });
    
    // Klik di luar menu/audio akan menutupnya
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.top-menu-container')) {
            menuList.classList.remove('active');
            audioList.classList.remove('active');
        }
    });

    // Jalankan fungsi
    populateSongList();
});
// Fungsi untuk navigasi
function setupNavigation() {
    const links = menuList.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Mengaktifkan smooth scroll
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Tutup menu setelah navigasi
            menuList.classList.remove('active');
        });
    });
}
