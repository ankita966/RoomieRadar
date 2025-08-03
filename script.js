const students = [
  { name: "Aanya", genre: "Pop", emoji: "😄", hobby: "Reading", cycle: "Early Bird 🌞", youtube: "ZbZSe6N_BXs" },
  { name: "Ravi", genre: "Rock", emoji: "🤘", hobby: "Gaming", cycle: "Night Owl 🌙", youtube: "QJO3ROT-A4E" },
  { name: "Kim", genre: "Indie", emoji: "😎", hobby: "Cooking", cycle: "Early Bird 🌞", youtube: "Xn676-fLq7I" },
  { name: "Leo", genre: "EDM", emoji: "🎉", hobby: "Music", cycle: "Night Owl 🌙", youtube: "IcrbM1l_BoI" },
  { name: "Sara", genre: "Hip‑Hop", emoji: "😄", hobby: "Reading", cycle: "Early Bird 🌞", youtube: "09R8_2nJtjg" },
  { name: "Tara", genre: "Pop", emoji: "🎉", hobby: "Sports", cycle: "Night Owl 🌙", youtube: "OPf0YbXqDm0" },
  { name: "Dev", genre: "EDM", emoji: "😎", hobby: "Gaming", cycle: "Early Bird 🌞", youtube: "2vjPBrBU-TM" },
  { name: "Mina", genre: "Indie", emoji: "🧘", hobby: "Cooking", cycle: "Night Owl 🌙", youtube: "ktvTqknDobU" },
  { name: "Zara", genre: "Rock", emoji: "🤘", hobby: "Music", cycle: "Night Owl 🌙", youtube: "4NRXx6U8ABQ" },
  { name: "Om", genre: "Hip‑Hop", emoji: "😎", hobby: "Reading", cycle: "Early Bird 🌞", youtube: "CevxZvSJLk8" }
];

if (document.getElementById("findRoomieForm")) {
  document.getElementById("findRoomieForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value;
    const emoji = document.getElementById("emoji").value;
    const hobby = document.getElementById("hobby").value;
    const cycle = document.getElementById("cycle").value;

    let match = students.find(s =>
      s.genre === genre && s.emoji === emoji && s.hobby === hobby && s.cycle === cycle
    );
    if (!match) {
      match = students.find(s => s.genre === genre) || students[Math.floor(Math.random() * students.length)];
    }

    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("match", JSON.stringify(match));
    window.location.href = "chat.html";
  });
}

if (document.getElementById("matchInfo")) {
  const user = sessionStorage.getItem("userName");
  const match = JSON.parse(sessionStorage.getItem("match"));
  document.getElementById("matchInfo").innerHTML =
    `<p>Hey <strong>${user}</strong>! You matched with <strong>${match.name}</strong> 🎧<br/>
     Genre: ${match.genre} | Vibe: ${match.emoji} | Hobby: ${match.hobby} | Sleep Cycle: ${match.cycle}</p>`;
  document.getElementById("youtubeEmbed").innerHTML =
    `<iframe width="100%" height="80" src="https://www.youtube.com/embed/${match.youtube}?autoplay=0"
     title="Music" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (message !== "") {
    const chat = document.getElementById("chatWindow");
    const msgElem = document.createElement("p");
    msgElem.textContent = "You: " + message;
    chat.appendChild(msgElem);
    input.value = "";
  }
}