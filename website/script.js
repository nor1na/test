// ---------------- QUESTIONS ----------------
const baseQuestions = [
  {
    q: "1",
    choices: [
      { text: "ชิล ๆ", type: "lofi" },
      { text: "แดนซ์", type: "edm" },
      { text: "เศร้า", type: "sad" },
      { text: "มันส์", type: "rock" }
    ]
  },
  {
    q: "2",
    choices: [
      { text: "คาเฟ่", type: "lofi" },
      { text: "ปาร์ตี้", type: "edm" },
      { text: "ฝนตก", type: "sad" },
      { text: "คอนเสิร์ต", type: "rock" }
    ]
  },
  {
    q: "3",
    choices: [
      { text: "พักผ่อน", type: "lofi" },
      { text: "ออกไปสนุก", type: "edm" },
      { text: "คิดเงียบ ๆ", type: "sad" },
      { text: "ลุย ๆ", type: "rock" }
    ]
  },
  {
    q: "4",
    choices: [
      { text: "ก่อนนอน", type: "lofi" },
      { text: "ตอนออกไปเที่ยว", type: "edm" },
      { text: "ตอนเหงา", type: "sad" },
      { text: "ตอนออกกำลังกาย", type: "rock" }
    ]
  },
  {
    q: "5",
    choices: [
      { text: "เงียบ ๆ", type: "lofi" },
      { text: "สนุก", type: "edm" },
      { text: "เศร้า", type: "sad" },
      { text: "มันส์", type: "rock" }
    ]
  },
   {
    q: "6",
    choices: [
      { text: "ชิล ๆ", type: "lofi" },
      { text: "แดนซ์", type: "edm" },
      { text: "เศร้า", type: "sad" },
      { text: "มันส์", type: "rock" }
    ]
  },
  {
    q: "7",
    choices: [
      { text: "คาเฟ่", type: "lofi" },
      { text: "ปาร์ตี้", type: "edm" },
      { text: "ฝนตก", type: "sad" },
      { text: "คอนเสิร์ต", type: "rock" }
    ]
  },
  {
    q: "8",
    choices: [
      { text: "พักผ่อน", type: "lofi" },
      { text: "ออกไปสนุก", type: "edm" },
      { text: "คิดเงียบ ๆ", type: "sad" },
      { text: "ลุย ๆ", type: "rock" }
    ]
  },
  {
    q: "9",
    choices: [
      { text: "ก่อนนอน", type: "lofi" },
      { text: "ตอนออกไปเที่ยว", type: "edm" },
      { text: "ตอนเหงา", type: "sad" },
      { text: "ตอนออกกำลังกาย", type: "rock" }
    ]
  },
  {
    q: "10",
    choices: [
      { text: "เงียบ ๆ", type: "lofi" },
      { text: "สนุก", type: "edm" },
      { text: "เศร้า", type: "sad" },
      { text: "มันส์", type: "rock" }
    ]
  }
];

let questions = [];
while (questions.length < 10){
  questions.push(baseQuestions[questions.length % baseQuestions.length]);
}

const data = {
  lofi: {
    name: "Lofi 🎧",
    desc: "คุณเป็นคนชอบความสงบ\nชอบอยู่กับตัวเอง\nฟังเพลงเพื่อผ่อนคลาย",
    songs: [
      {
        name: "Snowman",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Night Drive",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Chill Day",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      }
    ]
  },

  edm: {
    name: "EDM 🎉",
    desc: "คุณเป็นสายปาร์ตี้\nพลังงานสูง\nรักความสนุก",
    songs: [
      {
        name: "Titanium",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Animals",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Faded",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      }
    ]
  },

  sad: {
    name: "Sad 😢",
    desc: "คุณเป็นคนลึกซึ้ง\nอินกับความรู้สึก\nชอบเพลงเศร้า",
    songs: [
      {
        name: "Someone Like You",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Let Her Go",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "All I Want",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      }
    ]
  },

  rock: {
    name: "Rock 🤘",
    desc: "คุณเป็นคนมั่นใจ\nกล้าลุย\nชอบความมันส์",
    songs: [
      {
        name: "Numb",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Smells Like Teen Spirit",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      },
      {
        name: "Believer",
        img: "YOUR_IMAGE_LINK",
        link: "https://open.spotify.com/"
      }
    ]
  }
};

let current = 0;
let score = { lofi: 0, edm: 0, sad: 0, rock: 0 };

function start() {
  home.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  question.innerText = `ข้อ ${current + 1}: ${q.q}`;
  choices.innerHTML = "";

  q.choices.forEach(c => {
    let div = document.createElement("div");
    div.className = "choice";
    div.innerText = c.text;
    div.onclick = () => select(c.type);
    choices.appendChild(div);
  });
}

function select(type) {
  score[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  let top = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  let resultData = data[top];

  genre.innerText = resultData.name;
  description.innerText = resultData.desc;

  songs.innerHTML = "";

  resultData.songs.forEach(song => {
    let div = document.createElement("div");
    div.className = "song";

    let img = document.createElement("img");
    img.src = song.img;
    img.onclick = () => window.open(song.link, "_blank");

    let name = document.createElement("p");
    name.innerText = song.name;

    div.appendChild(img);
    div.appendChild(name);

    songs.appendChild(div);
  });
}

function goHome() {
  location.reload();
}