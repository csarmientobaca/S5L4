const postItColors = [
    "burlywood",
    "greenyellow",
    "green",
    "plum"
];

const cardDiv = document.getElementsByClassName("card")

for (let i = 0; i < cardDiv.length; i++) {
    cardDiv[i].style.backgroundColor = postItColors[Math.floor(Math.random() * postItColors.length)]
}
