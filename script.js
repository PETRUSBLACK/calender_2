function updateDateTime() {
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);
    const currentTime = now.toLocaleTimeString();

    document.getElementById('current-date').textContent = currentDate;
    document.getElementById('current-time').textContent = currentTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();
