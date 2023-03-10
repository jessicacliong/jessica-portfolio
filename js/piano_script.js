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



// Define the notes and timing of the song Twinkle, Twinkle Litle Star


function playSong() {

//Verse 
        
// press F
setTimeout(()=> fKey.click(), 1000),
// press F
setTimeout(()=> fKey.click(), 2000),
// press C
setTimeout(()=> c2Key.click(), 3000),
// press C
setTimeout(()=> c2Key.click(), 4000),
// press D
setTimeout(()=> d2Key.click(), 5000),
// press D
setTimeout(()=> d2Key.click(), 6000),
// press C
setTimeout(()=> c2Key.click(),7000),


// press Bb
setTimeout(()=> asKey.click(), 9000),
// press Bb
setTimeout(()=> asKey.click(), 10000),
// press A
setTimeout(()=> aKey.click(), 11000),
// press A
setTimeout(()=> aKey.click(), 12000),
// press G
setTimeout(()=> gKey.click(), 13000),
// press G
setTimeout(()=> gKey.click(), 14000),
// press F
setTimeout(()=> fKey.click(), 15000),


//Chorus

// press C
setTimeout(()=> c2Key.click(), 17000),   
// press C
setTimeout(()=> c2Key.click(), 18000),
// press Bb
setTimeout(()=> asKey.click(), 19000),
// press Bb
setTimeout(()=> asKey.click(), 20000),
// press A
setTimeout(()=> aKey.click(), 21000),
// press A
setTimeout(()=> aKey.click(), 22000),
// press G
setTimeout(()=> gKey.click(), 23000),


// press C
setTimeout(()=> c2Key.click(), 25000),  
// press C
setTimeout(()=> c2Key.click(), 26000),
// press Bb
setTimeout(()=> asKey.click(), 27000),
// press Bb
setTimeout(()=> asKey.click(), 28000),
// press A
setTimeout(()=> aKey.click(), 29000),
// press A
setTimeout(()=> aKey.click(), 30000),
// press G
setTimeout(()=> gKey.click(), 31000),


//Verse

// press F
setTimeout(()=> fKey.click(), 33000),
// press F
setTimeout(()=> fKey.click(), 34000),
// press C
setTimeout(()=> c2Key.click(), 35000),
// press C
setTimeout(()=> c2Key.click(), 36000),
// press D
setTimeout(()=> d2Key.click(), 37000),
// press D
setTimeout(()=> d2Key.click(), 38000),
// press C
setTimeout(()=> c2Key.click(), 39000),


// press Bb
setTimeout(()=> asKey.click(), 41000),
// press Bb
setTimeout(()=> asKey.click(), 42000),
// press A
setTimeout(()=> aKey.click(), 43000),
// press A
setTimeout(()=> aKey.click(), 44000),
// press G
setTimeout(()=> gKey.click(), 45000),
// press G
setTimeout(()=> gKey.click(), 46000),
    // press F
setTimeout(()=> fKey.click(), 47000)

}

const playBTN = document.getElementById('playBTN');
playBTN.addEventListener('click', () => playSong());