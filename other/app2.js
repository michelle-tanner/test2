// Version 2
// might delete
const track = document.getElementById("image-track");

track.dataset.mouseDownAt = 0;
track.dataset.prevPercentage = 0;
track.dataset.percentage = 0;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    track.style.cursor = 'grabbing';
};

window.onmouseup = () => {
    track.dataset.mouseDownAt = 0;
    track.dataset.prevPercentage = track.dataset.percentage;
    track.style.cursor = 'grab';

};

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + nextPercentage}% 50%`;
    }
};

window.ontouchstart = e => {
    track.dataset.mouseDownAt = e.touches[0].clientX;
    track.style.cursor = 'grabbing';
};

window.ontouchend = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
    track.style.cursor = 'grab';
};

window.ontouchmove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const touchDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (touchDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + nextPercentage}% 50%`;
    }
};