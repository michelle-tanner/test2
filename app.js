window.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
    alert("clicked");
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
    maxDelta = window.innerWidth / 2;   // divide by 2 since full scroll = half of screen

    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
    track.dataset.percentage = nextPercentage;
    
    track.style.transform = "translate(" + {nextPercentage} + "%, -50%)";
}