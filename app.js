const STORAGE_KEY = "shohizei-renso-cards-v1";

const seedCards = [
  {
    id: "seed-tanaoroshi-menzeicho",
    terms: ["棚卸資産", "免税事業者"],
    points: [
      "免税事業者が課税事業者となった場合の棚卸資産の調整",
      "課税事業者が免税事業者である被相続人、被合併法人、分割法人の事業を承継した場合",
      "棚卸資産の調整規定を受けた場合の仕入れに係る対価の返還等"
    ],
    note: "開始・廃止・承継のどの場面かを先に分ける。答案では「いつの棚卸資産か」と「どの課税期間に調整するか」を落とさない。"
  },
  {
    id: "seed-invoice-henkan",
    terms: ["インボイス", "適格請求書発行事業者", "対価の返還等"],
    points: [
      "適格返還請求書の交付義務",
      "売上げに係る対価の返還等と仕入れに係る対価の返還等の区別",
      "少額な返還インボイスの交付免除の確認"
    ],
    note: "返還の相手、金額、書類保存をセットで思い出す。"
  },
  {
    id: "seed-kazeiuri-95",
    terms: ["課税売上割合", "95%", "仕入税額控除"],
    points: [
      "課税売上割合が95%以上の場合の全額控除の可否",
      "当課税期間の課税売上高が一定額を超える場合の制限",
      "個別対応方式と一括比例配分方式の選択"
    ],
    note: "まず全額控除の入口を判定し、外れたら控除方式へ進む。"
  },
  {
    id: "seed-kani-kubun",
    terms: ["簡易課税", "事業区分"],
    points: [
      "みなし仕入率を使うための事業区分",
      "複数事業がある場合の区分経理",
      "簡易課税制度選択届出書と継続適用の確認"
    ],
    note: "問題文の業種名だけで決めず、取引の実態で区分する。"
  },
  {
    id: "seed-chosei-kotei",
    terms: ["調整対象固定資産", "課税事業者選択"],
    points: [
      "課税事業者選択届出書を提出した場合の制限",
      "調整対象固定資産を取得した場合の免税・簡易への移行制限",
      "高額特定資産との違い"
    ],
    note: "制限期間、対象資産、届出の組み合わせを表で整理すると崩れにくい。"
  },
  {
    id: "seed-souzoku",
    terms: ["相続", "免税事業者", "納税義務"],
    points: [
      "相続があった年の納税義務の判定",
      "被相続人の基準期間における課税売上高の引継ぎ",
      "相続人が複数いる場合の判定"
    ],
    note: "合併・分割との違いを意識し、誰の売上高をいつ見るかを明確にする。"
  },
  {
    id: "seed-kazei-taisho",
    terms: ["課税の対象", "資産の譲渡等", "特定仕入れ"],
    points: [
      "国内取引は、事業者が国内で行う資産の譲渡等と特定仕入れを分けて押さえる",
      "資産の譲渡等から特定資産の譲渡等が除かれる構造を確認する",
      "輸入取引は保税地域から引き取られる外国貨物として別枠で整理する"
    ],
    note: "理論テキスト問題1-1。まず課税対象の入口を作り、売手課税か買手課税かを分ける。"
  },
  {
    id: "seed-naigai-hantei",
    terms: ["国内取引の判定", "内外判定", "輸出免税"],
    points: [
      "資産の譲渡・貸付けは原則として資産の所在場所で判定する",
      "役務提供は原則として役務提供地、電気通信利用役務は受ける者の住所地等で判定する",
      "無形資産、有価証券、国内外にわたる役務提供は個別の判定規定を確認する"
    ],
    note: "第72回問2の出題ポイント。内外判定のあと、輸出取引等として免税になるかを続けて検討する。"
  },
  {
    id: "seed-hikazei",
    terms: ["非課税", "住宅の貸付け", "社会福祉"],
    points: [
      "国内取引でも政策的配慮や消費の性格から非課税となる資産の譲渡等がある",
      "住宅の貸付けは契約や貸付けの状況から居住用かを判定する",
      "社会福祉事業として行われる資産の譲渡等は範囲を確認する"
    ],
    note: "第71回問2、第73回問1。非課税は課税売上割合や仕入税額控除にも波及する。"
  },
  {
    id: "seed-yushutsu-menzei",
    terms: ["輸出免税", "輸出取引等", "仕向地主義"],
    points: [
      "国内から輸出等として行われる取引は免税とされる",
      "輸出取引等に該当することの証明が要件になる",
      "国外移送や非居住者に対する一定の取引は輸出取引等との関係を確認する"
    ],
    note: "第69回問1。免税売上と非課税売上を混同しない。仕入税額控除とのつながりも思い出す。"
  },
  {
    id: "seed-menzeicho-nouzei",
    terms: ["納税義務", "個人事業者", "基準期間", "特定期間"],
    points: [
      "基準期間における課税売上高が1,000万円以下かを最初に確認する",
      "特定期間における課税売上高による納税義務の免除の特例を確認する",
      "適格請求書発行事業者は免税事業者の判定から外れる場面がある"
    ],
    note: "理論テキスト2-1、2-3。納税義務は基準期間、特定期間、別段の定めの順で整理する。"
  },
  {
    id: "seed-kazei-sentaku",
    terms: ["課税事業者選択", "届出書", "納税義務"],
    points: [
      "課税事業者選択届出書の提出により免税点制度を使わない課税期間が生じる",
      "調整対象固定資産や高額特定資産を取得した場合の制限につながる",
      "選択不適用届出書を提出できる時期と効力発生時期を確認する"
    ],
    note: "理論テキスト2-2。届出は提出日だけでなく、いつから効くかを書く。"
  },
  {
    id: "seed-gappei-bunkatsu",
    terms: ["合併", "分割", "納税義務"],
    points: [
      "被合併法人や分割法人の基準期間における課税売上高を引き継ぐ場面を確認する",
      "相続、合併、分割で判定の主体と引継ぎ範囲が異なる",
      "免税事業者の事業を承継した場合は棚卸資産の調整にもつながる"
    ],
    note: "理論テキスト2-5から2-7、7-10。組織再編は納税義務と棚卸資産調整をセットで連想する。"
  },
  {
    id: "seed-shinsetsu-hojin",
    terms: ["新設法人", "特定新規設立法人", "外国法人"],
    points: [
      "基準期間がない法人でも資本金額又は出資金額が1,000万円以上なら納税義務が免除されない",
      "特定新規設立法人は親会社等との関係を確認する",
      "外国法人は国内事業開始時期と資本金額の特例を確認する"
    ],
    note: "第75回問1、理論テキスト2-8、2-9。国外事業者の改正論点とつながる。"
  },
  {
    id: "seed-denshiyaku",
    terms: ["電気通信利用役務", "国外事業者", "リバースチャージ"],
    points: [
      "事業者向け電気通信利用役務の提供は特定資産の譲渡等に該当する",
      "消費者向け電気通信利用役務の提供は受ける者の住所地等で国内判定する",
      "国外事業者の納税義務、登録、仕入税額控除制限を合わせて確認する"
    ],
    note: "第70回問1、第75回問1。通常事業者に限られる取引条件かどうかが分岐点。"
  },
  {
    id: "seed-platform",
    terms: ["特定プラットフォーム事業者", "国外事業者", "電気通信利用役務"],
    points: [
      "特定プラットフォーム事業者を介する電気通信利用役務の提供の適用関係を確認する",
      "誰が納税義務者になるかを通常の国外事業者取引と比較する",
      "インボイス、登録、仕入税額控除への影響を連想する"
    ],
    note: "理論テキスト2-11。新しめの論点なので、電気通信利用役務から横断して思い出す。"
  },
  {
    id: "seed-kazei-kikan",
    terms: ["課税期間", "課税期間特例", "届出書"],
    points: [
      "法人設立初年度に課税期間特例選択届出書を提出した場合の効力発生時期",
      "課税期間は申告、納付、仕入税額控除、調整計算の単位になる",
      "短縮した場合の各課税期間ごとの判定を落とさない"
    ],
    note: "第73回問2。日付問題では、どの課税期間から効くかを最初に確定する。"
  },
  {
    id: "seed-kazei-hyojun",
    terms: ["課税標準", "対価の額", "軽減税率"],
    points: [
      "課税資産の譲渡等の対価の額の意義を確認する",
      "飲食料品、一体資産、外食の軽減税率判定を分ける",
      "簡易課税の事業区分やみなし仕入率に波及することがある"
    ],
    note: "第70回問2、第73回問2。軽減税率は品目だけでなく提供形態を見る。"
  },
  {
    id: "seed-chobo-seikyu",
    terms: ["帳簿及び請求書等", "仕入税額控除", "保存要件"],
    points: [
      "仕入税額控除には帳簿及び請求書等の保存が原則として必要",
      "区分記載請求書等、適格請求書等保存方式の記載事項を確認する",
      "帳簿保存以外に控除要件とされるものがないか検討する"
    ],
    note: "第70回問1、理論テキスト7-2。書類要件は誰から何を受けたかまでセットで書く。"
  },
  {
    id: "seed-junzu-wariai",
    terms: ["課税売上割合に準ずる割合", "個別対応方式", "承認"],
    points: [
      "納税地の所轄税務署長の承認を受けた場合に個別対応方式で用いる",
      "課税期間末日までの申請とその後1月以内の承認によるみなし承認を確認する",
      "95%未満判定や一括比例配分方式には本来の課税売上割合を使う"
    ],
    note: "第75回問2、令和7年度答案。準ずる割合は使える場面が限定される。"
  },
  {
    id: "seed-hikazei-yushutsu-tokurei",
    terms: ["非課税資産の輸出", "課税売上割合", "基準期間"],
    points: [
      "非課税資産の譲渡等でも輸出取引等に該当するものは課税売上割合の計算等でみなし規定がある",
      "基準期間における課税売上高の算定では同じみなしが及ばない場面がある",
      "証明の有無と、どの計算で使う規定かを分ける"
    ],
    note: "第74回問2。課税売上割合と基準期間の課税売上高を混同しない。"
  },
  {
    id: "seed-chosei-ichijirushi",
    terms: ["調整対象固定資産", "著しい変動", "第三年度"],
    points: [
      "調整対象固定資産を取得した課税期間に仕入税額控除を行ったか確認する",
      "第三年度の課税期間にその資産を有しているかを確認する",
      "課税売上割合が著しく変動している場合は調整税額を計算する"
    ],
    note: "第71回問1、理論テキスト7-7。取得時、第三年度、保有、割合変動の順で判定する。"
  },
  {
    id: "seed-tenyo",
    terms: ["転用", "調整対象固定資産", "仕入税額控除"],
    points: [
      "課税業務用から非課税業務用、又は非課税業務用から課税業務用への転用を確認する",
      "転用した課税期間に調整計算が必要かを判定する",
      "用途変更の事実と時期を答案で明示する"
    ],
    note: "理論テキスト7-8。著しい変動の調整と混同しやすいので、原因を先に分ける。"
  },
  {
    id: "seed-kyoju-chintai",
    terms: ["居住用賃貸建物", "高額特定資産", "仕入税額控除"],
    points: [
      "住宅の貸付けの用に供しないことが明らかな建物以外かを判定する",
      "高額特定資産又は調整対象自己建設高額資産に該当するかを確認する",
      "課税賃貸用転用又は譲渡がある場合の調整を検討する"
    ],
    note: "第73回問1、第1回直前対策模試。階ごとの用途がある場合は按分と調整を分ける。"
  },
  {
    id: "seed-kogaku-tokutei",
    terms: ["高額特定資産", "納税義務", "2割特例"],
    points: [
      "簡易課税制度又は2割特例の適用を受けない課税期間中の取得かを確認する",
      "取得課税期間の翌課税期間から一定期間、納税義務免除が制限される",
      "居住用賃貸建物や調整対象固定資産との違いを整理する"
    ],
    note: "第1回直前対策模試、理論テキスト2-10。資産名だけでなく、取得した課税期間の制度適用状況を見る。"
  },
  {
    id: "seed-kani-fukusu",
    terms: ["簡易課税", "複数事業", "みなし仕入率"],
    points: [
      "基準期間の課税売上高が5,000万円以下で、選択届出があるか確認する",
      "課税資産の譲渡等を事業の種類ごとに区分する",
      "複数事業の場合の原則計算と特例計算を確認する"
    ],
    note: "第69回問2。事業区分は実態で判断し、第一種と第二種などの境界に注意する。"
  },
  {
    id: "seed-kani-bunkatsu-jogai",
    terms: ["分割", "簡易課税", "適用除外", "分割等に係る課税期間"],
    points: [
      "基準期間における課税売上高が5,000万円以下でも、分割等に係る課税期間は簡易課税制度の適用除外になる",
      "簡易課税制度選択届出書の効力判定では、提出時期だけでなく分割等に係る課税期間かを確認する",
      "新設分割子法人、分割承継法人の納税義務の免除の特例とセットで連想する"
    ],
    note: "理論テキスト7-11。分割が出たら、納税義務だけで止めず、簡易課税の適用可否まで確認する。"
  },
  {
    id: "seed-tokutei-shiire-henkan",
    terms: ["特定課税仕入れ", "対価の返還等", "リバースチャージ"],
    points: [
      "特定課税仕入れに係る値引き又は割戻しを受けた場合の控除を確認する",
      "特定資産の譲渡等と特定課税仕入れの意義を先に書く",
      "相続等があった場合の取扱いにも注意する"
    ],
    note: "第72回問1、理論テキスト7-14。通常の売上返還・仕入返還と並べて比較する。"
  },
  {
    id: "seed-kashidaore",
    terms: ["貸倒れ", "貸倒回収", "消費税額の控除"],
    points: [
      "売上げに係る債権が貸倒れとなった場合の消費税額控除を確認する",
      "貸倒れ後に回収した場合は加算調整を確認する",
      "課税資産の譲渡等に係る債権かどうかを先に見る"
    ],
    note: "理論テキスト7-15。控除と加算が対になっている。"
  },
  {
    id: "seed-chukan-kanpu",
    terms: ["中間申告", "仮決算", "還付"],
    points: [
      "仮決算による中間申告で控除不足額が出ても還付規定があるか確認する",
      "中間申告と確定申告の機能を分ける",
      "還付請求申告、確定申告、中間申告の違いを整理する"
    ],
    note: "第74回問2、理論テキスト8-1から8-3。還付はどの申告書で認められるかを落とさない。"
  },
  {
    id: "seed-kakutei-shinkoku",
    terms: ["確定申告", "還付請求申告", "申告期限"],
    points: [
      "課税事業者は課税期間ごとに確定申告書を提出する",
      "申告不要となる例外があるか確認する",
      "還付を受ける場合は記載事項と提出期限を確認する"
    ],
    note: "理論テキスト8-2、8-3。誰が、何を、いつまでに、誰に、どうするかで書く。"
  },
  {
    id: "seed-invoice-touroku",
    terms: ["適格請求書発行事業者", "個人事業者", "登録", "免税事業者"],
    points: [
      "適格請求書は登録を受けた適格請求書発行事業者のみが交付できる",
      "登録を受けると免税事業者との関係で納税義務に影響する",
      "登録取消し、失効、経過措置を確認する"
    ],
    note: "理論テキスト9-2、9-9。インボイスは登録、義務、経過措置を分けて覚える。"
  },
  {
    id: "seed-invoice-kofu",
    terms: ["適格請求書", "適格請求書発行事業者", "交付義務", "媒介者交付特例"],
    points: [
      "課税資産の譲渡等を受ける他の事業者から求められた場合の交付義務を確認する",
      "輸出免税取引や国外取引など、交付対象外となる取引を確認する",
      "媒介者交付特例では通知、写しの保存、委託者への交付を押さえる"
    ],
    note: "第74回問1。誰の登録番号で交付するか、誰が写しを保存するかが問われやすい。"
  },
  {
    id: "seed-invoice-death",
    terms: ["個人事業者", "適格請求書発行事業者", "死亡", "死亡届出書", "みなし登録期間"],
    points: [
      "適格請求書発行事業者である個人事業者が死亡した場合、相続人は死亡届出書を速やかに提出する",
      "登録は、死亡届出書の提出日の翌日又は死亡日の翌日から4月を経過した日のいずれか早い日に効力を失う",
      "事業を承継した相続人が未登録の場合、相続のあった日の翌日から一定の日までをみなし登録期間として扱う"
    ],
    note: "理論テキスト9-2。みなし登録期間中は、被相続人の登録番号を相続人の登録番号とみなす点まで思い出す。"
  },
  {
    id: "seed-sogaku-hyoji",
    terms: ["価格の表示", "総額表示", "税込価格"],
    points: [
      "不特定かつ多数の者に対する価格表示は税込価格による総額表示が原則",
      "過去の転嫁対策特別措置法による特例期間との違いを確認する",
      "消費者に税込価格と誤認されない措置の話と現行の本法規定を区別する"
    ],
    note: "第72回問1、理論テキスト9-6。令和3年4月1日以後の扱いを意識する。"
  },
  {
    id: "seed-tokutei-shunyu",
    terms: ["特定収入", "国・地方公共団体等", "仕入税額控除"],
    points: [
      "資産の譲渡等の対価以外の収入から除外される収入を確認する",
      "特定収入割合が5%を超える場合の仕入税額控除の特例を検討する",
      "補助金、負担金、交付金が特定支出のために使われるか確認する"
    ],
    note: "第1回直前対策模試、理論テキスト9-4。国等の特例は収入の性質と使途をセットで見る。"
  },
  {
    id: "seed-niwari",
    terms: ["2割特例", "適格請求書発行事業者", "小規模事業者"],
    points: [
      "適格請求書発行事業者となる小規模事業者に係る税額控除の経過措置を確認する",
      "簡易課税制度、高額特定資産取得時の制限との関係を確認する",
      "適用できない課税期間や届出不要で使える場面を整理する"
    ],
    note: "理論テキスト9-10。インボイス登録と納税負担軽減の経過措置として連想する。"
  },
  {
    id: "seed-answers-structure",
    terms: ["理論答案", "当てはめ", "設問文"],
    points: [
      "設問文の末尾から、意義、説明、適用関係、可否、金額回答の型を判定する",
      "説明問題では規定、本問の事実、結論の順で書く",
      "資料を踏まえる問題では数字、日付、主体を答案に入れる"
    ],
    note: "理論答案チェックリストより。暗記カードではなく、解答時の動作を思い出すカード。"
  }
];

let cards = loadCards();
let activeView = "results";
let deferredInstallPrompt = null;

const keywordInput = document.querySelector("#keywordInput");
const clearButton = document.querySelector("#clearButton");
const tagArea = document.querySelector("#tagArea");
const matchCount = document.querySelector("#matchCount");
const activeTerms = document.querySelector("#activeTerms");
const resultList = document.querySelector("#resultList");
const libraryList = document.querySelector("#libraryList");
const cardTemplate = document.querySelector("#cardTemplate");
const quizTerms = document.querySelector("#quizTerms");
const quizMemo = document.querySelector("#quizMemo");
const nextQuizButton = document.querySelector("#nextQuizButton");
const showAnswerButton = document.querySelector("#showAnswerButton");
const answerArea = document.querySelector("#answerArea");
const entryForm = document.querySelector("#entryForm");
const termsField = document.querySelector("#termsField");
const pointsField = document.querySelector("#pointsField");
const noteField = document.querySelector("#noteField");
const exportButton = document.querySelector("#exportButton");
const importInput = document.querySelector("#importInput");
const installButton = document.querySelector("#installButton");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

keywordInput.addEventListener("input", renderResults);
clearButton.addEventListener("click", () => {
  keywordInput.value = "";
  keywordInput.focus();
  renderResults();
});

nextQuizButton.addEventListener("click", renderQuiz);
showAnswerButton.addEventListener("click", () => {
  answerArea.classList.remove("hidden");
});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const terms = splitTerms(termsField.value);
  const points = pointsField.value
    .split(/\n+/)
    .map((point) => point.trim())
    .filter(Boolean);

  if (terms.length === 0 || points.length === 0) return;

  cards.unshift({
    id: crypto.randomUUID(),
    terms,
    points,
    note: noteField.value.trim()
  });
  saveCards();
  entryForm.reset();
  keywordInput.value = terms.join(" ");
  renderAll();
  switchView("results");
});

exportButton.addEventListener("click", exportCards);
importInput.addEventListener("change", importCards);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderAll();

function loadCards() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length > 0) {
      const seedIds = new Set(seedCards.map((card) => card.id));
      const customCards = stored.filter((card) => !seedIds.has(card.id));
      return [...seedCards, ...customCards];
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return seedCards;
}

function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function renderAll() {
  renderTags();
  renderResults();
  renderLibrary();
  renderQuiz();
}

function switchView(viewName) {
  activeView = viewName;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });
}

function renderTags() {
  const terms = [...new Set(cards.flatMap((card) => card.terms))].slice(0, 32);
  tagArea.replaceChildren(
    ...terms.map((term) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tag";
      button.textContent = term;
      button.addEventListener("click", () => {
        const current = splitTerms(keywordInput.value);
        keywordInput.value = [...new Set([...current, term])].join(" ");
        renderResults();
      });
      return button;
    })
  );
}

function renderResults() {
  const terms = splitTerms(keywordInput.value);
  const matches = getMatches(terms);
  matchCount.textContent = `${matches.length}件`;
  activeTerms.textContent = terms.length ? terms.join(" / ") : "キーワードを入力してください";
  renderCardList(resultList, matches, terms);
}

function renderLibrary() {
  renderCardList(libraryList, cards, []);
}

function renderQuiz() {
  quizMemo.value = "";
  answerArea.classList.add("hidden");
  const card = cards[Math.floor(Math.random() * cards.length)];
  if (!card) return;
  quizTerms.replaceChildren(...card.terms.map(createTermChip));
  answerArea.replaceChildren(renderCard(card, []));
}

function getMatches(terms) {
  if (terms.length === 0) return cards;
  return cards
    .map((card) => ({ card, score: scoreCard(card, terms) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.card);
}

function scoreCard(card, terms) {
  const haystack = [...card.terms, ...card.points, card.note].join(" ").toLowerCase();
  return terms.reduce((score, term) => {
    const lowered = term.toLowerCase();
    const termHit = card.terms.some((cardTerm) => cardTerm.toLowerCase().includes(lowered));
    const textHit = haystack.includes(lowered);
    return score + (termHit ? 3 : textHit ? 1 : 0);
  }, 0);
}

function renderCardList(container, list, highlightedTerms) {
  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "該当するカードがありません。追加タブから登録できます。";
    container.replaceChildren(empty);
    return;
  }
  container.replaceChildren(...list.map((card) => renderCard(card, highlightedTerms)));
}

function renderCard(card, highlightedTerms) {
  const node = cardTemplate.content.firstElementChild.cloneNode(true);
  const termList = node.querySelector(".term-list");
  const pointList = node.querySelector(".point-list");
  const note = node.querySelector(".note");
  const deleteButton = node.querySelector(".delete-button");

  termList.replaceChildren(...card.terms.map(createTermChip));
  pointList.replaceChildren(
    ...card.points.map((point) => {
      const item = document.createElement("li");
      item.innerHTML = highlightText(point, highlightedTerms);
      return item;
    })
  );
  note.innerHTML = highlightText(card.note || "", highlightedTerms);
  deleteButton.addEventListener("click", () => {
    cards = cards.filter((savedCard) => savedCard.id !== card.id);
    saveCards();
    renderAll();
    switchView(activeView);
  });
  return node;
}

function createTermChip(term) {
  const chip = document.createElement("span");
  chip.className = "term-chip";
  chip.textContent = term;
  return chip;
}

function splitTerms(value) {
  return value
    .split(/[\s,、，]+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function highlightText(text, terms) {
  const escaped = escapeHtml(text);
  if (!terms.length) return escaped;
  return terms.reduce((result, term) => {
    const pattern = new RegExp(`(${escapeRegExp(term)})`, "gi");
    return result.replace(pattern, "<mark>$1</mark>");
  }, escaped);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exportCards() {
  const blob = new Blob([JSON.stringify(cards, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "shohizei-renso-cards.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importCards(event) {
  const [file] = event.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("invalid");
      cards = imported
        .filter((card) => Array.isArray(card.terms) && Array.isArray(card.points))
        .map((card) => ({
          id: card.id || crypto.randomUUID(),
          terms: card.terms.map(String).filter(Boolean),
          points: card.points.map(String).filter(Boolean),
          note: String(card.note || "")
        }));
      saveCards();
      renderAll();
      switchView("library");
    } catch {
      alert("読み込めるJSONではありません。");
    } finally {
      importInput.value = "";
    }
  });
  reader.readAsText(file);
}
