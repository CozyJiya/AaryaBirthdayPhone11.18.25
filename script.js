// Sequence of items
let sequence = ["banana", "can", "adoption", "chips", "cat", "bottol", "sister"];
let index = 0;

// Function to stop all playing audio
function stopAllSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

document.getElementById("dustbin").addEventListener("click", () => {

    if (index < sequence.length) {

        // hide all items before showing new one
        document.querySelectorAll(".item").forEach(item => {
            item.classList.remove("show");
        });

        let id = sequence[index];
        let item = document.getElementById(id);

        // show the current item
        item.classList.add("show");

        // stop previous audio
        stopAllSounds();

        // play new sound
        let audio = document.getElementById("sound-" + id);
        audio.currentTime = 0;
        audio.play();

        index++;
    }
});
