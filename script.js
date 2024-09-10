const hoverText = document.getElementById('hover-text');
        const hoverAudio = document.getElementById('hover-audio');

        hoverText.addEventListener('mouseover', () => {
            hoverAudio.play();
        });

        hoverText.addEventListener('mouseout', () => {
            hoverAudio.pause();
            hoverAudio.currentTime = 0; // Reset audio to start
        });