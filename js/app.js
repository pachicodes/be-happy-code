const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click', function () {
    const moodSelector = document.getElementById('feels');
    console.log(moodSelector);

    const mood = moodSelector.value.toLowerCase();
    console.log(mood);

    const feels = fetch(`https://cors-anywhere.herokuapp.com/https://www.kittyapi.com/api/kitties?emotion=${mood}&key=(ENTER KEY HERE))`)
        .then(feels => feels.json());

    feels.then(feels => {
        res.innerHTML = '';

        const img = feels[0].imageUrl;
        const catMood = feels[0].emotion;
        console.log(img);
        console.log(catMood)

        const picture = document.createElement('img');
        picture.setAttribute('src', img);
        picture.style.width = "300px";
        picture.style.border = "4px solid #01b2e2";


        const element = document.createElement('h2');
        const text = document.createTextNode(`${catMood} Cat!`);
        element.style.color = "#C44C99";

        res.append(picture);
        element.append(text);
        res.append(element);
    })
});