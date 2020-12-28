setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime =d.getMinutes();
    stime = d.getSeconds();

    hrotations =30*htime+mtime/2;
    mrotations =6*mtime;
    srotations =6*stime;

    hourDiv.style.transform = `rotate(${hrotations}deg)`;
    minuteDiv.style.transform = `rotate(${mrotations}deg)`;
    secondDiv.style.transform = `rotate(${srotations}deg)`;
}, 1000);