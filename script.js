const answerOptions = [
  { score: 0, label: "まったくない" },
  { score: 1, label: "たまにある" },
  { score: 2, label: "時々ある" },
  { score: 3, label: "よくある" },
  { score: 4, label: "ほぼ毎日ある" },
];

const categories = [
  {
    id: "tension",
    name: "緊張度",
    shortName: "緊張度",
    color: "#d56a55",
    highText: "身体ががんばりモードに入りやすい状態です。",
    questions: [
      "肩や首に力が入りやすい",
      "呼吸が浅いと感じることが多い",
      "動悸や胸のザワザワを感じることがある",
      "些細なことでイライラしやすい",
      "頭の中で考えごとが止まらない",
      "寝る前になっても気が張って落ち着かない",
      "音・光・人の言葉に敏感になりやすい",
      "食いしばりや歯ぎしりがある",
      "急いでいないのに、常に急かされている感じがある",
      "休んでいても罪悪感が出やすい",
    ],
    levels: [
      { max: 15, label: "低め", text: "緊張度は比較的落ち着いています。" },
      { max: 25, label: "中等度", text: "緊張サインが出始めています。" },
      { max: 40, label: "高め", text: "身体が常にがんばりモードになりやすい状態です。" },
    ],
  },
  {
    id: "recovery",
    name: "回復低下度",
    shortName: "回復低下度",
    color: "#217984",
    highText: "休んでも回復しにくい状態です。",
    questions: [
      "寝つきが悪い",
      "夜中に何度も目が覚める",
      "朝起きても疲れが残っている",
      "胃もたれ・便秘・下痢など胃腸の不調がある",
      "食欲が不安定になりやすい",
      "深くリラックスできている感覚が少ない",
      "湯船に入っても身体がゆるみにくい",
      "手足が冷えやすい",
      "休んでも疲れが抜けにくい",
      "ぼーっとしていても、身体の奥が休まっていない感じがある",
    ],
    levels: [
      { max: 15, label: "低め", text: "回復しやすい状態は比較的保たれています。" },
      { max: 25, label: "中等度", text: "回復しにくさが出始めています。" },
      { max: 40, label: "高め", text: "休んでも回復しにくい状態になりやすいです。" },
    ],
  },
  {
    id: "activity",
    name: "活動力低下度",
    shortName: "活動力低下度",
    color: "#c49335",
    highText: "日中の活動力が落ちやすい状態です。",
    questions: [
      "朝から身体が重い",
      "やる気が出るまでに時間がかかる",
      "集中力が続きにくい",
      "外出や人と会うのが億劫に感じる",
      "少し動いただけで疲れやすい",
      "日中に眠気が強い",
      "気分が沈みやすい",
      "以前より行動量が減っている",
      "頭がぼんやりしやすい",
      "何かを始めるまでに強いエネルギーが必要",
    ],
    levels: [
      { max: 15, label: "低め", text: "日中の活動力は比較的保たれています。" },
      { max: 25, label: "中等度", text: "活動力がやや低下し始めています。" },
      { max: 40, label: "高め", text: "日中のだるさや無気力が出やすい状態です。" },
    ],
  },
];

const typeDetails = {
  A: {
    name: "すこやかバランスタイプ",
    badge: "A",
    description:
      "あなたは、現在のところ心身のバランスが比較的整っているタイプです。活動するときは動けて、休むときは休める状態が保たれています。今は大きな不調が出にくい状態ですが、疲れやストレスは少しずつ蓄積します。今の良い状態を保つためにも、睡眠・食事・軽い運動・定期的な身体のケアを大切にしていきましょう。",
  },
  B: {
    name: "がんばりすぎ緊張タイプ",
    badge: "B",
    description:
      "あなたは、身体ががんばりモードに入りやすいタイプです。首・肩・背中に力が入りやすく、呼吸が浅くなったり、頭の中で考えごとが止まりにくくなったりする傾向があります。まだ大きく回復力が落ちきっていない場合でも、この状態が続くと、寝ても疲れが抜けにくくなることがあります。まずは身体の緊張をゆるめ、呼吸が深く入りやすい状態に整えることが大切です。",
  },
  C: {
    name: "休んでも回復しにくいタイプ",
    badge: "C",
    description:
      "あなたは、休んでいるつもりでも身体の回復スイッチが入りにくいタイプです。寝ても疲れが取れない、眠りが浅い、胃腸の調子が乱れやすい、手足が冷えやすいなど、回復不足のサインが出やすい傾向があります。無理に頑張るよりも、まずは身体が安心して休める状態をつくることが大切です。睡眠・胃腸・呼吸・血流が整いやすいように、やさしく身体をゆるめていきましょう。",
  },
  D: {
    name: "ぐったり消耗タイプ",
    badge: "D",
    description:
      "あなたは、身体ががんばりモードに入りやすく、同時に回復スイッチも入りにくいタイプです。疲れているのに力が抜けない、休みたいのに休まらない、寝ても疲れが抜けにくいなど、心身の消耗が重なりやすい状態です。このタイプは、肩こり・首こり・不眠・胃腸の不調・動悸・めまい・気分の落ち込みなど、複数の不調が出やすくなります。今は、さらに頑張ることよりも、身体の緊張をやさしくゆるめ、安心して休める状態を取り戻すことが大切です。",
  },
};

const questions = categories.flatMap((category) =>
  category.questions.map((text) => ({
    categoryId: category.id,
    categoryName: category.name,
    text,
  })),
);

let currentIndex = 0;
let answers = Array(questions.length).fill(null);

const coverScreen = document.querySelector("#cover-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const currentNumber = document.querySelector("#current-number");
const totalNumber = document.querySelector("#total-number");
const progressBar = document.querySelector("#progress-bar");
const categoryLabel = document.querySelector("#category-label");
const questionText = document.querySelector("#question-text");
const answerOptionsNode = document.querySelector("#answer-options");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const retakeButton = document.querySelector("#retake-button");
const typeBadge = document.querySelector("#type-badge");
const typeResultCard = document.querySelector("#type-result-card");
const typeSummary = document.querySelector("#type-summary");
const typeTitle = document.querySelector("#type-title");
const typeDescription = document.querySelector("#type-description");
const activityNote = document.querySelector("#activity-note");
const scoreList = document.querySelector("#score-list");
const mapDot = document.querySelector("#map-dot");
const mapCaption = document.querySelector("#map-caption");

totalNumber.textContent = questions.length;

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function getLevel(category, score) {
  return category.levels.find((level) => score <= level.max);
}

function renderQuestion() {
  const question = questions[currentIndex];
  const category = getCategory(question.categoryId);
  const progress = (currentIndex / questions.length) * 100;

  currentNumber.textContent = currentIndex + 1;
  progressBar.style.width = `${progress}%`;
  categoryLabel.textContent = category.name;
  categoryLabel.style.background = category.color;
  questionText.textContent = question.text;
  backButton.disabled = currentIndex === 0;

  answerOptionsNode.innerHTML = "";
  answerOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    if (answers[currentIndex] === option.score) {
      button.classList.add("selected");
    }
    button.innerHTML = `
      <span class="answer-score">${option.score}</span>
      <span class="answer-label">${option.label}</span>
    `;
    button.addEventListener("click", () => selectAnswer(option.score));
    answerOptionsNode.appendChild(button);
  });
}

function selectAnswer(score) {
  answers[currentIndex] = score;

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function calculateScores() {
  return categories.reduce((scores, category) => {
    scores[category.id] = questions.reduce((total, question, index) => {
      if (question.categoryId !== category.id) {
        return total;
      }
      return total + (answers[index] ?? 0);
    }, 0);
    return scores;
  }, {});
}

function judgeType(scores) {
  const tensionHigh = scores.tension >= 16;
  const recoveryHigh = scores.recovery >= 16;

  if (!tensionHigh && !recoveryHigh) return "A";
  if (tensionHigh && !recoveryHigh) return "B";
  if (!tensionHigh && recoveryHigh) return "C";
  return "D";
}

function getActivitySupplement(score) {
  if (score <= 15) {
    return "活動力は比較的保たれています。今のリズムを大切にしながら、疲れをためこまない工夫を続けていきましょう。";
  }
  if (score <= 25) {
    return "さらに、活動力低下度もやや高めです。朝から身体が重い、日中に眠気が出やすい、集中力が続きにくいなど、活動するためのエネルギーが少し落ちている可能性があります。";
  }
  return "さらに、活動力低下度が高く出ています。朝から身体が重い、日中も眠い、やる気が出にくい、少し動いただけで疲れるなど、活動するためのエネルギーがかなり低下している可能性があります。まず身体を休めるだけでなく、血流・呼吸・睡眠リズムを整え、少しずつ活動しやすい状態へ戻していくことが大切です。";
}

function renderScores(scores) {
  scoreList.innerHTML = "";

  categories.forEach((category) => {
    const score = scores[category.id];
    const level = getLevel(category, score);
    const item = document.createElement("div");
    item.className = "score-item";
    item.innerHTML = `
      <div class="score-row">
        <span class="score-name">${category.name}</span>
        <span class="score-value">${score}点 / 40点</span>
      </div>
      <div class="score-track">
        <div class="score-fill" style="width: ${(score / 40) * 100}%; background: ${category.color};"></div>
      </div>
      <div class="score-meta">${level.label}：${level.text}</div>
    `;
    scoreList.appendChild(item);
  });
}

function renderMap(scores, type) {
  const left = Math.max(7, Math.min(93, (scores.tension / 40) * 100));
  const top = Math.max(7, Math.min(93, 100 - (scores.recovery / 40) * 100));
  mapDot.style.left = `${left}%`;
  mapDot.style.top = `${top}%`;
  mapCaption.textContent = `${type.name}です。横方向は緊張度、縦方向は回復低下度を表しています。`;
}

function showResults() {
  const scores = calculateScores();
  const typeKey = judgeType(scores);
  const type = typeDetails[typeKey];

  progressBar.style.width = "100%";
  typeResultCard.classList.remove("type-a", "type-b", "type-c", "type-d");
  typeResultCard.classList.add(`type-${typeKey.toLowerCase()}`);
  typeBadge.textContent = `${type.badge}：${type.name}`;
  typeSummary.textContent = type.description.split("。")[0] + "。";
  typeTitle.textContent = type.name;
  typeDescription.textContent = type.description;
  activityNote.textContent = getActivitySupplement(scores.activity);

  renderScores(scores);
  renderMap(scores, type);

  coverScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restart() {
  currentIndex = 0;
  answers = Array(questions.length).fill(null);
  coverScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", restart);

backButton.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});

restartButton.addEventListener("click", restart);
retakeButton.addEventListener("click", restart);

renderQuestion();
