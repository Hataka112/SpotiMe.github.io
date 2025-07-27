const tracks = [
  { file: 'VOLCANO.mp3', title: 'VOLCANO', image: 'vol.jpg' },
  { file: 'Miserable.mp3', title: 'Miserable (You & Me)', image: 'Miserable.jfif'},
  { file: 'Scars.mp3', title: 'Scars', image: 'Scars.jpeg' },
  { file: 'Oh.mp3', title: 'Mixtape : OH', image: 'Oh.jpeg' },
  { file: 'Blind.mp3', title: 'Blind Eyes Red', image: 'Her.jpg' },
  { file: 'Come.mp3', title: 'Come Play', image: 'Come.jfif' },
  { file: 'Whip.mp3', title: 'Whiplash', image: 'Whip.png' },
  { file: 'Runners.mp3', title: 'Runners', image: 'run.png' },
  { file: 'Extra.mp3', title: 'ExtraL', image: 'Ruby.png' },
  { file: 'Я.mp3', title: 'Я ночью плачу', image: 'Я.jpg' },
  { file: 'мило.mp3', title: 'мило материшься', image: 'мило.jpg' }
];

let currentIndex = -1;
let currentAudio = null;

function playSoundByIndex(index) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentIndex = index;
  currentAudio = new Audio(`sound/${tracks[index].file}`);
  currentAudio.play();

  currentAudio.onended = () => {
  const nextIndex = (currentIndex + 1) % tracks.length;
  playSoundByIndex(nextIndex); // Воспроизвести следующую (циклично)
};
}

function playSound(fileName) {
  const index = tracks.findIndex(track => track.file === fileName);
  if (index !== -1) {
    playSoundByIndex(index);
  }
}
const lyrics = {
  'VOLCANO': `Пускай я буду выбирать сотни раз, моим выбором всегда будешь ты.`,
  'Miserable (You & Me)': `Я не хочу потерять частичку себя, ты - моё сердце, понимаешь?`,
  'Scars': `Я никогда не заплачу, потому что знаю, что это ничего не изменит.`,
  'Mixtape : OH': `Хочу, чтобы ты поймала меня на чувствах, как на лжи.`,
  'Blind Eyes Red': `Я твой шедевр, с ослеплёнными красными глазами.`,
  'Come Play': `Если хочешь поиграть, то начни с меня и монстров в моей голове.`,
  'Whiplash': `Лишь я одна способна изменить этот мир.`,
  'Runners': `Мы будем бежать, наплевав на предупреждения.`,
  'ExtraL': `Настроение, послать все правила. Вхожу в комнату и задаю атмосферу.`,
  'Я ночью плачу': `За меня горой стоит весь школьный туалет.`,
  'мило материшься': `Ты бледнее, чем зима, ты моя снежная царица.`
};
function playSoundByIndex(index) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentIndex = index;
  currentAudio = new Audio(`sound/${tracks[index].file}`);
  currentAudio.play();

  // Показ текста песни
  const title = tracks[index].title;
  const lyricsBox = document.getElementById('lyrics-box');
  lyricsBox.textContent = lyrics[title] || 'Текст песни не найден.';

  currentAudio.onended = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    playSoundByIndex(nextIndex);
  };

  const img = document.getElementById('track-image');
img.src = tracks[index].image;
img.alt = tracks[index].title;
document.getElementById('pause-btn').style.display = 'inline';
}

function togglePlayPause() {
  if (currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
  }
}