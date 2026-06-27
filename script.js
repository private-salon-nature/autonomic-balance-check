const answerOptions = [
  { score: 0, label: "まったくない" },
  { score: 1, label: "たまにある" },
  { score: 2, label: "時々ある" },
  { score: 3, label: "よくある" },
  { score: 4, label: "ほぼ毎日ある" },
];

const categories = [
  {
    id: "sympathetic",
    name: "交感神経スコア",
    shortName: "交感神経",
    color: "#a9cf4d",
    highText: "身体ががんばりモードに入りやすい状態です。",
    questions: [
      "肩や首に力が入りやすい",
      "呼吸が浅いと感じる",
      "動悸を感じることがある",
      "些細なことでイライラしやすい",
      "頭の中で考えごとが止まらない",
      "寝る前になっても気が張って落ち着かない",
      "音・光・においに敏感になりやすい",
      "食いしばりや歯ぎしりがある",
      "急いでいないのに、急かされているように感じる",
      "ゆっくりすることに罪悪感を感じる",
    ],
    levels: [
      { min: 25, label: "良好", text: "緊張モードは比較的落ち着いています。" },
      { min: 15, label: "やや低め", text: "がんばりモードが続きやすい状態です。" },
      { min: 0, label: "低め", text: "身体が常に緊張しやすい状態です。" },
    ],
  },
  {
    id: "parasympathetic",
    name: "副交感神経スコア",
    shortName: "副交感神経",
    color: "#7fb23b",
    highText: "休息モードに傾き、活動しにくい状態です。",
    questions: [
      "朝から身体が重だるい",
      "日中も眠気が強い",
      "やる気が出るまでに時間がかかる",
      "頭がぼんやりしやすい",
      "集中力が続きにくい",
      "食後に強い眠気やだるさが出やすい",
      "身体が冷えやすい、または温まりにくい",
      "胃腸の動きが重く、胃もたれやお腹の張りを感じやすい",
      "気分が沈みやすく、動き出すのが億劫に感じる",
      "少し休んだだけでは怠さが抜けず、長くぼーっとしてしまう",
    ],
    levels: [
      { min: 25, label: "良好", text: "休息モードへの傾きは強すぎない状態です。" },
      { min: 15, label: "やや低め", text: "ぼんやり感・だるさが出やすい状態です。" },
      { min: 0, label: "低め", text: "休息モードに傾き、活動しにくい状態が続きやすいです。" },
    ],
  },
];

const typeDetails = {
  A: {
    name: "いきいきタイプ",
    badge: "A",
    image: "assets/type-a-ikiiki.png",
    imageAlt: "いきいきタイプの女性イラスト",
    summary: "活動と休息の切り替えが比較的スムーズなタイプです。",
    state:
      "交感神経・副交感神経ともに良好なタイプです。活動するときは動けて、休むときは休める状態が比較的保たれています。現在は、自律神経の大きな偏りは少なめと考えられます。",
    selfCare:
      "今の良い状態を維持するために、無理のない範囲で身体を動かすことがおすすめです。ウォーキング、軽いストレッチ、深呼吸をしながらの散歩など、心地よく続けられる運動を取り入れてみましょう。睡眠時間を極端に削らないこと、食事の時間を大きく乱さないことも大切です。",
    symptoms: [
      "大きな乱れは少なめ",
      "忙しさが続くと緊張が少しずつ蓄積しやすい",
      "ストレスが続くと疲労がたまりやすい",
    ],
  },
  B: {
    name: "頑張りすぎタイプ",
    badge: "B",
    image: "assets/type-b-ganbari.png",
    imageAlt: "頑張りすぎタイプの女性イラスト",
    summary: "身体ががんばりモードに入りやすいタイプです。",
    state:
      "副交感神経の働きは良好ですが、交感神経の働きが過剰なタイプです。仕事や家事はこなせても、首・肩・背中・頭の中に力が入りやすく、休むときにも緊張が抜けにくい傾向があります。",
    selfCare:
      "意識的に「ゆるめる時間」を作ることが大切です。特におすすめなのは、湯船にゆっくり浸かることです。ぬるめのお湯に10〜15分ほど浸かり、身体をじんわり温めてみてください。入浴中はスマホなどを見ずに、ゆっくり息を吐くことを意識するとさらに効果的です。",
    symptoms: [
      "肩こり・首こり",
      "頭痛",
      "食いしばり",
      "呼吸の浅さ",
      "イライラ",
      "動悸",
      "寝る前の考えごと",
      "光や音への敏感さ",
    ],
  },
  C: {
    name: "ぼんやりタイプ",
    badge: "C",
    image: "assets/type-c-bonyari.png",
    imageAlt: "ぼんやりタイプの女性イラスト",
    summary: "休息モードに傾きやすく、活動スイッチが入りにくいタイプです。",
    state:
      "交感神経の働きは良好ですが、副交感神経の働きが過剰なタイプです。強い緊張は目立ちにくい一方で、朝からだるい、日中眠い、頭がぼんやりする、やる気が出にくいといった傾向が出やすくなります。",
    selfCare:
      "朝に身体へ「起きる合図」を送ることが大切です。起きたらまずカーテンを開けて、自然の光を目に入れてみてください。可能であれば、朝のうちに5〜10分ほど外に出て、軽く歩くのもおすすめです。光・呼吸・軽い動きで、身体に「今日が始まったよ」と伝えるイメージです。",
    symptoms: [
      "朝のだるさ",
      "日中の眠気",
      "頭のぼんやり感",
      "集中力低下",
      "身体の重さ",
      "食後の眠気",
      "気分の沈み",
      "動き出しにくさ",
    ],
  },
  D: {
    name: "ぐったりタイプ",
    badge: "D",
    image: "assets/type-d-guttari.png",
    imageAlt: "ぐったりタイプの女性イラスト",
    summary: "緊張と消耗が重なり、切り替えがしにくいタイプです。",
    state:
      "交感神経・副交感神経ともにバランスが乱れているタイプです。身体ががんばりモードに入りやすい一方で、日中はだるさやぼんやり感も出やすい状態です。活動も休息もスムーズに切り替わりにくくなっている可能性があります。",
    selfCare:
      "特別なことを頑張るよりも、生活リズムを整えることから始めましょう。まずは毎朝起きる時間をなるべく揃えてみてください。完璧に整えようとしなくて大丈夫です。休日も含めて起きる時間のズレを1〜2時間以内にするだけでも、身体はリズムを取り戻しやすくなります。",
    symptoms: [
      "慢性的な疲労感",
      "肩こり・首こり",
      "頭痛",
      "食いしばり",
      "不眠・眠りの浅さ",
      "朝のだるさ",
      "日中の眠気",
      "胃腸の不調",
      "動悸",
      "めまい",
      "気分の落ち込み",
      "集中力低下",
    ],
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
const questionText = document.querySelector("#question-text");
const answerOptionsNode = document.querySelector("#answer-options");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const retakeButton = document.querySelector("#retake-button");
const typeBadge = document.querySelector("#type-badge");
const typeResultCard = document.querySelector("#type-result-card");
const typeSummary = document.querySelector("#type-summary");
const typeIllustration = document.querySelector("#type-illustration");
const typeTitle = document.querySelector("#type-title");
const typeState = document.querySelector("#type-state");
const typeSymptoms = document.querySelector("#type-symptoms");
const typeSelfCare = document.querySelector("#type-self-care");
const scoreList = document.querySelector("#score-list");

totalNumber.textContent = questions.length;

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function getLevel(category, score) {
  return category.levels.find((level) => score >= level.min);
}

function scrollToQuestionStart() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

function renderQuestion({ resetScroll = false } = {}) {
  const question = questions[currentIndex];
  const category = getCategory(question.categoryId);
  const progress = (currentIndex / questions.length) * 100;

  currentNumber.textContent = currentIndex + 1;
  progressBar.style.width = `${progress}%`;
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
      <span class="answer-label">${option.label}</span>
    `;
    button.addEventListener("click", () => selectAnswer(option.score));
    answerOptionsNode.appendChild(button);
  });

  if (resetScroll) {
    scrollToQuestionStart();
  }
}

function selectAnswer(score) {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  answers[currentIndex] = score;

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion({ resetScroll: true });
    return;
  }

  showResults();
}

function calculateScores() {
  return categories.reduce((scores, category) => {
    const symptomScore = questions.reduce((total, question, index) => {
      if (question.categoryId !== category.id) {
        return total;
      }
      return total + (answers[index] ?? 0);
    }, 0);
    scores[category.id] = 40 - symptomScore;
    return scores;
  }, {});
}

function judgeType(scores) {
  const sympatheticHigh = scores.sympathetic <= 24;
  const parasympatheticHigh = scores.parasympathetic <= 24;

  if (!sympatheticHigh && !parasympatheticHigh) return "A";
  if (sympatheticHigh && !parasympatheticHigh) return "B";
  if (!sympatheticHigh && parasympatheticHigh) return "C";
  return "D";
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

function showResults() {
  const scores = calculateScores();
  const typeKey = judgeType(scores);
  const type = typeDetails[typeKey];

  progressBar.style.width = "100%";
  typeResultCard.classList.remove("type-a", "type-b", "type-c", "type-d");
  typeResultCard.classList.add(`type-${typeKey.toLowerCase()}`);
  typeBadge.textContent = "";
  typeSummary.textContent = type.summary;
  typeIllustration.src = type.image;
  typeIllustration.alt = type.imageAlt;
  typeTitle.textContent = type.name;
  typeState.textContent = type.state;
  typeSelfCare.textContent = type.selfCare;
  typeSymptoms.innerHTML = "";
  type.symptoms.forEach((symptom) => {
    const item = document.createElement("li");
    item.textContent = symptom;
    typeSymptoms.appendChild(item);
  });

  renderScores(scores);

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
  renderQuestion({ resetScroll: true });
});

restartButton.addEventListener("click", restart);
retakeButton.addEventListener("click", restart);

renderQuestion();
