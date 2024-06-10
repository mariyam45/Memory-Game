const emojis = [
  "😎",
  "😎",
  "🥑",
  "🥑",
  "🐸",
  "🐸",
  "🕸",
  "🕸",
  "☕",
  "☕",
  "🍇",
  "🍇",
  "🌸",
  "🌸",
  "🌵",
  "🌵",
];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuf_emojis[i];
  document.querySelector(".game").appendChild(box);
}
