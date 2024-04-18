document.addEventListener('DOMContentLoaded', () => {
    let cont = document.querySelector('.cont');

    function currentDate() {
        let date = new Date();

        let options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'Asia/Manila'
        };

        let formattedDate = date.toLocaleString('en-US', options);

        cont.textContent = formattedDate;
        cont.style.fontFamily = 'Arial';
    }

    currentDate();

    setInterval(currentDate, 1000);
});