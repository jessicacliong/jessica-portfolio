const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play(); // playing audio
}

pianoKeys.forEach(key => {
    // calling playTune function with passing data-key value as an argument
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// Twinkle, Twinkle Litle Star

const playSong = () => {
    
//Verse 

    setTimeout(() => {
        // press F
        // press F
    }, 1000)
    setTimeout(() => {
        // press C
        // press C
    }, 2000)
    setTimeout(() => {
        // press A
        // press A
    }, 3500) 
}
        // press C


    setTimeout
        // press Bb

        // press Bb

        // press A

        // press A

        // press G

        // press G

        // press F



    //Chorus

        // press C
        
        // press C

        // press Bb

        // press Bb

        // press A

        // press A

        // press G



        // press C
        
        // press C

        // press Bb

        // press Bb

        // press A

        // press A

        // press G



    //Verse

        setTimeout(() => {
            // press F
            // press F
        }, 1000)
        setTimeout(() => {
            // press C
            // press C
        }, 2000)
        setTimeout(() => {
            // press A
            // press A
        }, 3500) 

            // press C


        setTimeout
            // press Bb

            // press Bb

            // press A

            // press A

            // press G

            // press G

            // press F