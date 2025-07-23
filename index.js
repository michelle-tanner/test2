const track = document.getElementById("image-track")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
    maxDelta = window.innerWidth * 0.5;

    const percentage = - (mouseDelta / maxDelta) * 100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min (nextPercentageUnconstrained, 0), -100);

    track.animate(
        {
            transform: `translate(${nextPercentage}%, -50%)`
        },
        {
            duration: 1200, fill: "forwards"
        }
    )

    for (const image of track.getElementsByClassName("image")){
        image.animate(
            {
                objectPosition: `${nextPercentage + 100}%, -50%`
            },
            {
                duration: 1200, fill: "forwards"
            }
        )
    }
}