const happyDay = new Date("Febuary 4, 2022 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let daysLeft = happyDay - now;

    let d = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    let h = Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((daysLeft % (1000 * 60)) / 1000);

    document.getElementById('inner').innerHTML = `${d} : ${h} : ${m} : ${s}`;
}, 1000);
