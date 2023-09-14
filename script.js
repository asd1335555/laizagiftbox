let clicks = 0;

const giftBox = document.getElementById('gift-box');
const giftLid = document.getElementById('gift-lid');
const poem = document.getElementById('poem');

giftBox.addEventListener('click', () => {
    clicks++;

    if (clicks === 5) {
        giftLid.style.display = 'none';
        poem.style.display = 'block';
    }
});
