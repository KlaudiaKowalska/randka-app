const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

document.addEventListener("mousemove", (event) => {

    const rect = noButton.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const dx = buttonX - event.clientX;
    const dy = buttonY - event.clientY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {

        const moveStrength = 20; // jak mocno ucieka

        let newX = rect.left + dx / distance * moveStrength;
        let newY = rect.top + dy / distance * moveStrength;

        // granice ekranu
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        noButton.style.position = "absolute";
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";
    }
});

yesButton.addEventListener("click", () => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "date.html";
    }, 500);
});