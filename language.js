(() => {
  const KO = "ko";
  const EN = "en";
  const detailKo = "이 근본적인 질문은 오랜 시간 동안 사상가, 예술가, 과학자들에 의해 끊임없이 탐구되어 왔다. 생명의 정의는 단순한 생물학적 범위를 넘어, 인간과 모든 생명체의 관계를 포함하는 깊은 철학적 탐구로 확장되어 왔다.<br><br>오늘날 인류는 인간의 활동이 지구 환경과 생태계에 중대한 영향을 미치는 ‘인류세(Anthropocene)’라는 새로운 지질학적 시대에 직면해 있다. 그러나 이제는 이러한 인간 중심적 시대를 넘어, 모든 생명체가 상호 연결되어 있다는 ‘공생세(Symbiocene)’라는 새로운 생태적 인식의 전환이 요구된다.<br><br>제10회 대구사진비엔날레는 자연과 인간의 관계, 인간의 우주적 위치, 가시적 세계와 비가시적 세계, 인간과 비인간의 경계를 탐구한다. 다양한 예술적 실천을 통해 생명의 다양성, 취약성, 회복력에 대한 질문을 제기하며, 동시대 사회가 직면한 생명의 의미를 비판적으로 성찰하는 공간을 제시한다.";
  const detailEn = "This fundamental question has long been explored by thinkers, artists, and scientists. The definition of life extends beyond biology toward a deeper inquiry into the relationship between humans and all living beings.<br><br>Facing the Anthropocene, the 10th Daegu Photo Biennale turns toward the Symbiocene: an ecological understanding in which all forms of life are interconnected. Through diverse artistic practices, it considers the diversity, fragility, and resilience of life, and the shifting boundaries between human and non-human worlds.";
  const landingKo = [
    "NeoPhoto는 동시대 사진과", "이미지 문화를 새롭게 탐구하는", "비주얼 아트 스튜디오다.",
    "사진 매체의 전통적 경계를 확장해,", "전시·퍼블리케이션·디지털 플랫폼을",
    "넘나들며 새로운 시각적 언어를", "제안한다. 국내외 작가, 연구자,",
    "기관과 협력하며 이미지가 사회와", "기술, 예술 속에서 어떤 관계를",
    "맺는지 탐색한다. 사진을 기록 너머", "감각과 사유가 교차하는 장으로", "전환한다."
  ];
  const landingEn = [
    "NeoPhoto is a visual art studio", "exploring contemporary photography", "and image culture anew.",
    "Expanding the traditional boundaries", "of photography, it moves across",
    "exhibitions, publications, and digital", "platforms to propose new visual",
    "languages. Working with artists,", "researchers, and institutions, it asks",
    "how images relate to society,", "technology, and art, transforming", "photography into a field of thought."
  ];

  const pairs = [];
  const pair = (el, ko, en, html = false) => {
    if (el) pairs.push({ el, ko, en, html });
  };
  const all = (selector) => [...document.querySelectorAll(selector)];

  const nav = document.querySelector(".side-navigation");
  if (nav) {
    const toggle = document.createElement("div");
    toggle.className = "language-toggle";
    toggle.setAttribute("aria-label", "언어 선택");
    toggle.innerHTML = '<button type="button" data-lang="en">EN</button><button type="button" data-lang="ko">한</button>';
    nav.prepend(toggle);
    const links = all(".archive-view-links a");
    pair(links[0], "목록", "List");
    pair(links[1], "사진", "Picture");
    pair(links[2], "지역", "Region");
  }

  const landingSpans = all(".landing-statement > span");
  landingSpans.forEach((el, i) => pair(el, landingKo[i], landingEn[i]));

  const heading = document.querySelector(".archive-heading h1");
  if (document.body.classList.contains("archive-list-page")) pair(heading, "목록", "List");
  if (document.body.classList.contains("archive-picture-page")) pair(heading, "사진", "Picture");
  if (document.body.classList.contains("archive-region-page")) pair(heading, "지역", "Region");

  all(".project-name, .picture-info h2").forEach(el => pair(el, "대구 사진 비엔날레: 생명의 울림", "The 10th Daegu Photo Biennale: The Pulse of Life"));
  all(".picture-info p:last-child").forEach(el => pair(el, "생명과 공존, 인간과 비인간의 경계를 사진으로 탐구한다.", "Photography exploring life, coexistence, and the boundaries between human and non-human worlds."));
  all(".project-meta, .picture-info p:nth-of-type(1)").forEach(el => {
    const archive = (el.textContent.match(/Archive\s*\d+/i) || ["Archive"])[0];
    pair(el, "2025 · 대구 · " + archive, "2025 · Daegu · " + archive);
  });

  pair(document.querySelector(".map-label h2"), "대한민국 / 대구", "Republic of Korea / Daegu");
  pair(document.querySelector(".map-label p"), "REPUBLIC OF KOREA / DAEGU", "REPUBLIC OF KOREA / DAEGU");
  const regionHeaders = all(".region-directory header span");
  ["지역","프로젝트","연도 / 장소"].forEach((v,i)=>pair(regionHeaders[i],v,["Region","Project","Year / Venue"][i]));
  all(".region-directory a").forEach(el => {
    pair(el.querySelector("strong"), "대구", "Daegu");
    const archive = (el.children[1]?.textContent.match(/Archive\s*\d+/i) || ["Archive"])[0];
    pair(el.children[1], "대구 사진 비엔날레: 생명의 울림 · " + archive, "The 10th Daegu Photo Biennale: The Pulse of Life · " + archive);
    pair(el.children[2], "2025 · 대구문화예술회관", "2025 · Daegu Arts Center");
  });
  pair(document.querySelector(".region-source"), "장소 확인: 대구광역시 달서구 공원순환로 201, 대구문화예술회관. 2025. 9. 18.–11. 16.", "LOCATION VERIFIED: DAEGU ARTS CENTER, 201 GONGWONSUNHWAN-RO, DALSEO-GU, DAEGU. 18 SEP–16 NOV 2025.");

  const title = document.querySelector(".detail-editorial .work-title");
  const primary = document.querySelector(".detail-editorial .work-description");
  const secondary = document.querySelector(".detail-editorial .detail-english");
  pair(title, "대구 사진 비엔날레:<br>생명의 울림", "The 10th Daegu Photo Biennale:<br>The Pulse of Life", true);
  pair(primary, detailKo, detailEn, true);
  pair(secondary, detailEn, detailKo, true);
  pair(document.querySelector(".detail-kicker"), "제10회 대구 사진 비엔날레 · 2025", "THE 10TH DAEGU PHOTO BIENNALE · 2025");

  const apply = lang => {
    document.documentElement.lang = lang;
    pairs.forEach(({el, ko, en, html}) => {
      const value = lang === EN ? en : ko;
      if (value == null) return;
      if (html) el.innerHTML = value; else el.textContent = value;
    });
    all(".language-toggle button").forEach(button => {
      const active = button.dataset.lang === lang;
      button.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("neophoto-language", lang);
  };

  all(".language-toggle button").forEach(button => button.addEventListener("click", () => apply(button.dataset.lang)));
  apply(localStorage.getItem("neophoto-language") === EN ? EN : KO);
})();