// Sử dụng API
const userAction = async () => {
    const response = await fetch('https://restcountries.com/v3.1/lang/spanish');
    // const response = await fetch('https://restcountries.com/v3.1/region/europe');
    const myJson = await response.json(); // Extract JSON from the http response
    myJson.forEach((element, index) => {
        document.getElementById('showIdJson').innerHTML += (index + 1) + '<br>';
        document.getElementById('showJson').innerHTML += element.name.common + '<br>';
    });
    console.log(myJson)
}

// userAction()

// Sử dụng API để tìm từ tiếng Anh
const learnEnglish1 = async () => {
    url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const response = await fetch(url)
}

async function learnEnglish(word) {
    // word = document.getElementById('inputText').value;
    // console.log(word)
    url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    const response = await fetch(url)
    const myJson = await response.json();
    myJson.forEach(element => {
        document.getElementById('learnEnglish').innerHTML = element.word;
        (element.phonetics).forEach(voice => {
            if (voice.audio != "") {
                // document.getElementById('voiceSource').setAttribute('src', voice.audio)
                document.getElementById('voiceSource').innerHTML += "<audio controls><source src='" + voice.audio + "'></audio>";
                console.log(voice.audio)
            }
        })
    })
}
// learnEnglish("hello")