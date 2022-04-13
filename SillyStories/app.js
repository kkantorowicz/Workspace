console.log("now logging on local...");

const customName = document.querySelector('#customname');
const randomize = document.querySelector('#randomize');
const story = document.querySelector('#story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = "It was 94 degrees fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];

let insertY = ["the soup kitchen",
    "Disneyland",
    "the Whte House"];

let insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

randomize.addEventListener('click', function () {
    let newStory = storyText;

    if (customName.value !== '') {
        newStory = newStory.replace("Bob", customName.value);
        customName.value = "";
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14);
        newStory = newStory.replace("300 pounds", `${weight} stone`);

        let temperature = Math.round((94 - 32) * (5 / 9));
        newStory = newStory.replace("94 degrees fahrenheit", `${temperature} degrees celsius`);
    }

    let xItem = randomValueFromArray(insertX);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);

    newStory = newStory.replace(":inserty:", randomValueFromArray(insertY));
    newStory = newStory.replace(":insertz:", randomValueFromArray(insertZ));

    story.textContent = newStory;
    story.style.visibility = 'visible';

});