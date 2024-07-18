// script.js
function calculateTimeLeft() {
    const eventDate = new Date('2025-03-21T00:00:00');
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}

function updateCountdown() {
    const timeLeft = calculateTimeLeft();

    document.getElementById('days').textContent = timeLeft.days || '0';
    document.getElementById('hours').textContent = timeLeft.hours || '0';
    document.getElementById('minutes').textContent = timeLeft.minutes || '0';
    document.getElementById('seconds').textContent = timeLeft.seconds || '0';
}

setInterval(updateCountdown, 1000);

document.getElementById('confirmButton').addEventListener('click', function() {
    alert('Presença confirmada! Agradecemos pela confirmação.');
});
