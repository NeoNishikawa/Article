/* ==================================================
   DESTYAN — About Me · Interaksi kartu Favorites
   Vanilla JS. Tidak ada dependency.
   Domino flip (IMAGE | VIDEO) + satu video aktif.
   ================================================== */

(() => {
  const cards = document.querySelectorAll('.fav-card');
  if (!cards.length) return;

  const stopAll = (except) => {
    cards.forEach((card) => {
      if (card === except) return;
      const video = card.querySelector('.fav-video');
      video.pause();
      video.currentTime = 0;
      card.classList.remove('is-flipped');
      syncGoo(card);
    });
  };

  const syncGoo = (card) => {
    const flipped = card.classList.contains('is-flipped');
    card.querySelectorAll('.fav-goo-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String((btn.dataset.mode === 'video') === flipped));
    });
  };

  cards.forEach((card) => {
    const front = card.querySelector('.fav-front');
    const back = card.querySelector('.fav-back');
    const video = card.querySelector('.fav-video');
    const flipback = card.querySelector('.fav-flipback');
    const gooButtons = card.querySelectorAll('.fav-goo-btn');

    const flip = () => {
      if (card.classList.contains('is-flipped')) return;
      stopAll(card);
      card.classList.add('is-flipped');
      syncGoo(card);
      // beri waktu kartu berbalik, lalu langsung putar
      video.currentTime = 0;
      video.play().catch(() => {
        // gagal dekode/putar: tetap balik ke poster
        card.classList.remove('is-flipped');
        syncGoo(card);
      });
    };

    const unflip = () => {
      video.pause();
      video.currentTime = 0;
      card.classList.remove('is-flipped');
      syncGoo(card);
    };

    front.addEventListener('click', flip);
    front.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flip();
      }
    });

    flipback.addEventListener('click', unflip);
    video.addEventListener('ended', unflip);

    gooButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.mode === 'video') {
          flip();
        } else {
          unflip();
        }
      });
    });

    syncGoo(card);
  });
})();
