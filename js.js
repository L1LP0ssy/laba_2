  const survivors = [
  {
    thumbnail: "url('https://i.pinimg.com/736x/46/98/86/4698867036c677d2288dad24dca42b16.jpg')",
    img: "url('доктор.png')",
    text: "Эмили Дайер — доктор. Обладает самым быстрым лечением игроков"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/a5/70/83/a570839e520f9f86b173bd652a73afe3.jpg')",
    img: "url('присонер.png')",
    text: "Заключенный — может изменять подключение проводов между шифровальными машинами"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/99/93/08/999308d6c055e2815bc00a22e4f4231c.jpg')",
    img: "url('приста.png')",
    text: "Фиона — жрица. Ставит порталы сквозь стены, отличная поддержка команды"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/ee/b7/c1/eeb7c1f441543247ae4f3facdad72023.jpg')",
    img: "url('пациент.png')",
    text: "Эмиль — есть захватный крюк. Это позволяет ему зацепиться за любое препятствие"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/a6/02/3c/a6023cbc622b7d2cbe481ec7f3ebffe6.jpg')",
    img: "url('психолог.png')",
    text: "Ада — отдает половину жизни для лечения других персонажей через свисток"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/0d/19/9d/0d199d524faeffdf886e4ffe0319e540.jpg')",
    img: "url('почтальон.png')",
    text: "Почтальон — Отправляет письма через собаку, дает баффы игрокам"
  }
];

const hunters = [
  {
    thumbnail: "url('https://i.pinimg.com/736x/f1/f1/a4/f1f1a4963f8f738d36a239902bed0490.jpg')",
    img: "url('гейша.png')",
    text: "Мичико — гейша. Летает к бабочкам, игнорируя препятствия"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/88/1b/40/881b409969eb390d1f86b1661ffc7c7b.jpg')",
    img: "url('ву_чанг.png')",
    text: "Ву Чанг — переключается между формами белого и чёрного стража"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/8e/69/3b/8e693b2502e7279b2aa004d340d16884.jpg')",
    img: "url('хулабал.png')",
    text: "Хуллабалу — метит выживших ужасом, а потом наносит урон"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/25/ec/f3/25ecf33b08803378a2fc439171bcd0a2.jpg')",
    img: "url('мэри.png')",
    text: "Кровавая Мэри — ставит зеркало и может нанести удар через отрожение"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/24/1f/65/241f6517e8330d6e6951b3a6fb4e943e.jpg')",
    img: "url('итакава.png')",
    text: "Ночной дозорный — создает ветрянные потоки притягивающие выживших, ловкий"
  },
  {
    thumbnail: "url('https://i.pinimg.com/736x/0f/41/b8/0f41b8a733c9c00da8c31a3ad1de870a.jpg')",
    img: "url('пирит.png')",
    text: "Пирит — бросает кирку и создает препятствия через которые у выживших теряется здоровье"
  }
];

  const imageLeft = document.getElementById("carouselImageLeft");
  const textLeft = document.getElementById("carouselTextLeft");
  const circleListLeft = document.getElementById("circleListLeft");

  const imageRight = document.getElementById("carouselImageRight");
  const textRight = document.getElementById("carouselTextRight");
  const circleListRight = document.getElementById("circleListRight");

  let currentIndexLeft = parseInt(localStorage.getItem("currentIndexLeft")) || 0;
  let currentIndexRight = parseInt(localStorage.getItem("currentIndexRight")) || 0;

  function renderCarousel(imageEl, textEl, circlesEl, data, currentIndex, onSelectCallback) {
    circlesEl.innerHTML = "";

    data.forEach((char, index) => {
      const circle = document.createElement("div");
      circle.className = "circle";

      const inner = document.createElement("div");
      inner.className = "circle-inner";
      inner.style.backgroundImage = char.thumbnail;

      if (index === currentIndex) {
        circle.classList.add("active");
      }

      circle.appendChild(inner);

      circle.addEventListener("click", () => {
        onSelectCallback(index);
      });

      circlesEl.appendChild(circle);
    });

    updateCarousel(imageEl, textEl, circlesEl, data, currentIndex);
  }

  function updateCarousel(imageEl, textEl, circlesEl, data, currentIndex) {
    imageEl.style.backgroundImage = data[currentIndex].img;
    textEl.textContent = data[currentIndex].text;

    const circles = circlesEl.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.classList.toggle("active", index === currentIndex);
    });
  }

  function updateLeft(index) {
    currentIndexLeft = index;
    localStorage.setItem("currentIndexLeft", index);
    updateCarousel(imageLeft, textLeft, circleListLeft, survivors, currentIndexLeft);
  }

  function updateRight(index) {
    currentIndexRight = index;
    localStorage.setItem("currentIndexRight", index);
    updateCarousel(imageRight, textRight, circleListRight, hunters, currentIndexRight);
  }

  renderCarousel(imageLeft, textLeft, circleListLeft, survivors, currentIndexLeft, updateLeft);
  renderCarousel(imageRight, textRight, circleListRight, hunters, currentIndexRight, updateRight);
  const sections = ['hero', 'mechanics', 'roles',  'characters',  'trailer', 'collabs'];
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 70;
  let current = sections.findLast(id => {
    const el = document.getElementById(id);
    return el && el.offsetTop <= fromTop;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});