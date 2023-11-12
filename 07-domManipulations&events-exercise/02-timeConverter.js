function attachEventsListeners() {
    let btnDays = document.getElementById('daysBtn');
    let btnHours = document.getElementById('hoursBtn');
    let btnMinutes = document.getElementById('minutesBtn');
    let btnSeconds = document.getElementById('secondsBtn');

    btnDays.addEventListener('click', daysBtnHandler);
    btnHours.addEventListener('click', btnHoursHandler);
    btnMinutes.addEventListener('click', btnMinutesHandler);
    btnSeconds.addEventListener('click', btnSecondsHandler);

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minsInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    function daysBtnHandler() {
        let days = daysInput.value;
        hoursInput.value = days*24;
        minsInput.value = days*1440;
        secondsInput.value = days*86400;
    }
    function btnHoursHandler() {
        let hours = hoursInput.value;
        daysInput.value = hours/24;
        minsInput.value = hours*60;
        secondsInput.value = hours*3600;
    }
    function btnMinutesHandler() {
        let mins = minsInput.value;
        daysInput.value = mins/1440;
        hoursInput.value = mins/60;
        secondsInput.value = mins*60;
    }
    function btnSecondsHandler(e) {
        let second = secondsInput.value;
        daysInput.value = second/86400;
        hoursInput.value = second/3600;
        minsInput.value = second/60;
    }
}
