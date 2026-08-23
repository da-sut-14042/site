# تمرین ۳




<div class="assignment-problem-filter" data-assignment-problem-filter markdown="0">
  <span>نمایش:</span>
  <button type="button" data-filter-mode="all" aria-pressed="true">همه سوال‌ها</button>
  <button type="button" data-filter-mode="deliverable" aria-pressed="false">سوالات تحویلی</button>
</div>
<style>
.assignment-problem-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .45rem;
  margin: 1rem 0 1.25rem;
  color: var(--md-default-fg-color--light);
  font-size: .9rem;
}
.assignment-problem-filter button {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 999px;
  padding: .25rem .7rem;
  background: var(--md-default-bg-color);
  color: var(--md-default-fg-color);
  cursor: pointer;
  font: inherit;
}
.assignment-problem-filter button[aria-pressed="true"] {
  border-color: var(--md-primary-fg-color);
  background: var(--md-primary-fg-color);
  color: var(--md-primary-bg-color);
}
</style>
<script>
(function () {
  const scriptEl = document.currentScript;

  function init() {
    const root = (scriptEl && scriptEl.closest(".md-content")) || document;
    const controls = root.querySelector("[data-assignment-problem-filter]");
    if (!controls || controls.dataset.bound) return;
    controls.dataset.bound = "1";
    const problems = Array.from(root.querySelectorAll("h2.problem"));

    function setProblemVisible(heading, visible) {
      heading.style.display = visible ? "" : "none";
      const prev = heading.previousElementSibling;
      if (prev && prev.matches("hr.problem-break")) {
        prev.style.display = visible ? "" : "none";
      }
      let el = heading.nextElementSibling;
      while (el && !el.matches("h2")) {
        el.style.display = visible ? "" : "none";
        el = el.nextElementSibling;
      }
    }

    function apply(mode) {
      controls.querySelectorAll("[data-filter-mode]").forEach((btn) => {
        btn.setAttribute("aria-pressed", btn.dataset.filterMode === mode ? "true" : "false");
      });
      problems.forEach((heading) => {
        setProblemVisible(
          heading,
          mode !== "deliverable" || heading.classList.contains("problem-deliverable")
        );
      });
    }

    controls.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-filter-mode]");
      if (!btn) return;
      apply(btn.dataset.filterMode || "all");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
</script>


## مقدماتی


## سوال ۱ — روش‌های نمایش گراف <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignment-hw03-01 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignment-hw03-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

همانطور که می‌دانید، دو روش محبوب برای ذخیره‌ی گراف عبارت‌اند از لیست مجاورت و ماتریس مجاورت.

**الف)** پیچیدگی حافظه و همچنین پیچیدگی زمانی اضافه کردن یال، بررسی وجود یال بین دو رأس داده‌شده مثل $u$ و $v$ و پیدا کردن همسایه‌های یک رأس را وقتی که گراف را با ماتریس مجاورت نمایش می‌دهیم، پیدا کنید.

**ب)** مشابه الف اما با فرض نمایش گراف با لیست مجاورت، پیچیدگی‌های خواسته‌شده را پیدا کنید. 

**ج)** از نظر شما کدام روش از بین این دو، برای ذخیره‌ی گراف بهتر است؟
</div>


## سوال ۲ — کوچک‌ترین پوشش رأسی در درخت { #problem-graph-amshz-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک درخت با $n$ رأس داده شده است.

کوچک‌ترین اندازه‌ی مجموعه‌ای از رأس‌ها را پیدا کنید که هر یال درخت حداقل یک سر در این مجموعه داشته باشد.

مرتبه‌ی زمانی مورد انتظار: $O(n)$
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

برای هر رأس دو حالت کافی است: آیا خود آن رأس را انتخاب کرده‌ایم یا نه. 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

اگر رأس $v$ انتخاب نشود، همه‌ی فرزندانش باید انتخاب شوند تا یال بین $v$ و فرزند پوشش داده شود.

اگر $v$ انتخاب شود، هر فرزند آزاد است انتخاب شود یا نشود.

</details>



</details>


<details class="success problem-solution" markdown="1"><summary>پاسخ</summary>

درخت را ریشه‌دار می‌کنیم.

برای هر رأس $v$ دو مقدار تعریف می‌کنیم:

- $dp_1[v]$: کمترین جواب در زیر‌درخت $v$ وقتی $v$ انتخاب شده است.
- $dp_0[v]$: کمترین جواب در زیر‌درخت $v$ وقتی $v$ انتخاب نشده است.

اگر $v$ انتخاب شود، هر فرزند می‌تواند انتخاب شود یا نشود:

$dp_1[v] = 1 + \sum \min(dp_0[u], dp_1[u])$

اگر $v$ انتخاب نشود، همه‌ی فرزندان باید انتخاب شوند:

$dp_0[v] = \sum dp_1[u]$

جواب برابر است با:

$\min(dp_0[1], dp_1[1])$

پیچیدگی زمانی $O(n)$ است.

</details>


## سوال ۳ — کوچک‌ترین مجموعه‌ی غالب در درخت { #problem-graph-amshz-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک درخت با $n$ رأس داده شده است.

کوچک‌ترین اندازه‌ی مجموعه‌ای از رأس‌ها را پیدا کنید که هر رأس یا خودش در مجموعه باشد، یا حداقل یک همسایه در مجموعه داشته باشد.

مرتبه‌ی زمانی مورد انتظار: $O(n)$
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

برای هر رأس فقط انتخاب شدن یا نشدن کافی نیست. باید بدانیم رأس توسط زیر‌درختش پوشش داده شده یا منتظر پدرش است. 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

سه حالت نگه دارید:

- رأس انتخاب شده است.
- رأس انتخاب نشده ولی توسط یکی از فرزندانش پوشش داده شده است.
- رأس هنوز پوشش داده نشده و باید توسط پدرش پوشش داده شود.

</details>



</details>


## سوال ۴ — دو‌رنگ‌آمیزی درست گراف { #problem-graph-amshz-12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف با $n$ رأس داده شده است.

تعداد روش‌های رنگ‌آمیزی رأس‌ها با دو رنگ سیاه و سفید را پیدا کنید، طوری که دو رأس مجاور هیچ‌وقت هم‌رنگ نباشند.

مرتبه‌ی زمانی مورد انتظار: $O(m+n)$
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

درخت همبند و بدون دور است. اگر رنگ یک رأس را ثابت کنید، رنگ بقیه‌ی رأس‌ها دیگر اجباری می‌شود. 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

درخت همیشه دوبخشی است.

با انتخاب رنگ رأس $1$، رنگ تمام رأس‌ها بر اساس زوج یا فرد بودن فاصله‌شان از رأس $1$ تعیین می‌شود.

</details>



</details>


## سوال ۵ — قطر درخت { #problem-archive-graph-bfs-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-bfs-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

قطر یک درخت $T = (V,E)$ به صورت $max\{\delta (u,v): u,v \in V\}$ تعریف شده است که به این معناست که بین همه کوتاه‌ترین مسیرها در درخت از همه بزرگ‌تر است. الگوریتمی با زمان اجرای $O(n)$ برای محاسبه قطر درخت ارائه دهید و زمان اجرای آن را تحلیل کنید.
</div>


## سوال ۶ — صفر و یک { #problem-bfs-zero-one .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bfs-zero-one" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف به صورت $G=(V,E)$ داده شده است که وزن هر یال فقط یکی از دو مقدار ۰ یا ۱ است، یعنی $w(e) \in \{0,1\}$.
همچنین یک رأس مبدأ $s \in V$ داده شده است.

الگوریتمی ارائه کنید که فاصلهٔ کوتاه‌ترین مسیر از $s$ به همهٔ رئوس را در زمان $O(\mid V\mid + \mid E \mid)$محاسبه کند.
</div>


## سوال ۷ — اجرای الگوریتم‌های کوتاه‌ترین مسیر <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignment-run-shortest-path-algorithms .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignment-run-shortest-path-algorithms" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در این سؤال می‌خواهیم اجرای دو الگوریتم معروف کوتاه‌ترین مسیر را بررسی کنیم.

**الف)** الگوریتم دایکسترا را از رأس $A$ روی گراف بدون‌جهت وزن‌دار زیر اجرا کنید. جدول مقدار فاصله‌ی موقت رأس‌ها را بعد از هر مرحله بنویسید و درخت کوتاه‌ترین مسیر نهایی را مشخص کنید.

<div dir="ltr" style="text-align:center; margin: 16px 0;">

<svg width="680" height="240" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .node { fill: #f8fafc; stroke: #0f172a; stroke-width: 2.3; }
      .edge { stroke: #94a3b8; stroke-width: 3; }
      .label { font: 18px serif; fill: #0f172a; }
      .wtext { font: 15px sans-serif; fill: #111827; font-weight: 700; }
      .wbox { fill: white; stroke: #cbd5e1; stroke-width: 1; rx: 6; }
    </style>
  </defs>

  <!-- edges -->
  <line class="edge" x1="90" y1="70" x2="230" y2="70"/>
  <line class="edge" x1="90" y1="70" x2="90" y2="180"/>
  <line class="edge" x1="230" y1="70" x2="370" y2="70"/>
  <line class="edge" x1="230" y1="70" x2="300" y2="180"/>
  <line class="edge" x1="370" y1="70" x2="510" y2="70"/>
  <line class="edge" x1="370" y1="70" x2="300" y2="180"/>
  <line class="edge" x1="90" y1="180" x2="300" y2="180"/>
  <line class="edge" x1="300" y1="180" x2="510" y2="70"/>

  <!-- weights -->
  <rect class="wbox" x="147" y="47" width="28" height="22"/><text class="wtext" x="161" y="63" text-anchor="middle">2</text>
  <rect class="wbox" x="56" y="113" width="28" height="22"/><text class="wtext" x="70" y="129" text-anchor="middle">4</text>
  <rect class="wbox" x="287" y="47" width="28" height="22"/><text class="wtext" x="301" y="63" text-anchor="middle">1</text>
  <rect class="wbox" x="249" y="112" width="28" height="22"/><text class="wtext" x="263" y="128" text-anchor="middle">5</text>
  <rect class="wbox" x="427" y="47" width="28" height="22"/><text class="wtext" x="441" y="63" text-anchor="middle">3</text>
  <rect class="wbox" x="329" y="112" width="28" height="22"/><text class="wtext" x="343" y="128" text-anchor="middle">2</text>
  <rect class="wbox" x="189" y="192" width="28" height="22"/><text class="wtext" x="203" y="208" text-anchor="middle">1</text>
  <rect class="wbox" x="391" y="112" width="28" height="22"/><text class="wtext" x="405" y="128" text-anchor="middle">4</text>

  <!-- nodes -->
  <circle class="node" cx="90" cy="70" r="24"/><text class="label" x="90" y="77" text-anchor="middle">A</text>
  <circle class="node" cx="230" cy="70" r="24"/><text class="label" x="230" y="77" text-anchor="middle">B</text>
  <circle class="node" cx="370" cy="70" r="24"/><text class="label" x="370" y="77" text-anchor="middle">C</text>
  <circle class="node" cx="510" cy="70" r="24"/><text class="label" x="510" y="77" text-anchor="middle">D</text>
  <circle class="node" cx="90" cy="180" r="24"/><text class="label" x="90" y="187" text-anchor="middle">E</text>
  <circle class="node" cx="300" cy="180" r="24"/><text class="label" x="300" y="187" text-anchor="middle">F</text>
</svg>

</div>

**ب)** الگوریتم بلمن-فورد را از رأس $S$ روی گراف جهت‌دار وزن‌دار زیر اجرا کنید و فاصله‌ی کوتاه‌ترین مسیر از $S$ به همه‌ی رأس‌ها را به دست آورید.

<div dir="ltr" style="text-align:center; margin: 16px 0;">

<svg width="760" height="260" viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowPos" markerWidth="7" markerHeight="7" refX="6.2" refY="3.5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#2563eb"/>
    </marker>
    <marker id="arrowNeg" markerWidth="7" markerHeight="7" refX="6.2" refY="3.5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#dc2626"/>
    </marker>
    <style>
      .node { fill: #f8fafc; stroke: #0f172a; stroke-width: 2.2; }
      .label { font: 18px serif; fill: #0f172a; }
      .edgep { stroke: #2563eb; stroke-width: 2.6; fill: none; marker-end: url(#arrowPos); stroke-linecap: round; }
      .edgen { stroke: #dc2626; stroke-width: 2.6; fill: none; marker-end: url(#arrowNeg); stroke-linecap: round; }
      .wbox { fill: white; stroke: #cbd5e1; stroke-width: 1; rx: 6; }
      .wtext { font: 15px sans-serif; fill: #111827; font-weight: 700; }
    </style>
  </defs>

  <!-- edges -->
  <line class="edgep" x1="94" y1="130" x2="196" y2="72"/>
  <line class="edgep" x1="94" y1="130" x2="196" y2="188"/>
  <line class="edgen" x1="244" y1="70" x2="346" y2="70"/>
  <line class="edgep" x1="244" y1="190" x2="346" y2="70"/>
  <line class="edgep" x1="244" y1="190" x2="466" y2="190"/>
  <line class="edgep" x1="394" y1="70" x2="466" y2="190"/>
  <line class="edgep" x1="394" y1="70" x2="586" y2="70"/>
  <line class="edgen" x1="514" y1="190" x2="586" y2="70"/>

  <!-- weights -->
  <rect class="wbox" x="132" y="87" width="28" height="22"/><text class="wtext" x="146" y="103" text-anchor="middle">4</text>
  <rect class="wbox" x="132" y="151" width="28" height="22"/><text class="wtext" x="146" y="167" text-anchor="middle">2</text>
  <rect class="wbox" x="282" y="47" width="34" height="22"/><text class="wtext" x="299" y="63" text-anchor="middle">-1</text>
  <rect class="wbox" x="281" y="118" width="28" height="22"/><text class="wtext" x="295" y="134" text-anchor="middle">3</text>
  <rect class="wbox" x="352" y="178" width="28" height="22"/><text class="wtext" x="366" y="194" text-anchor="middle">2</text>
  <rect class="wbox" x="414" y="118" width="28" height="22"/><text class="wtext" x="428" y="134" text-anchor="middle">2</text>
  <rect class="wbox" x="484" y="47" width="28" height="22"/><text class="wtext" x="498" y="63" text-anchor="middle">3</text>
  <rect class="wbox" x="536" y="118" width="34" height="22"/><text class="wtext" x="553" y="134" text-anchor="middle">-2</text>

  <!-- nodes -->
  <circle class="node" cx="70" cy="130" r="24"/><text class="label" x="70" y="137" text-anchor="middle">S</text>
  <circle class="node" cx="220" cy="70" r="24"/><text class="label" x="220" y="77" text-anchor="middle">A</text>
  <circle class="node" cx="220" cy="190" r="24"/><text class="label" x="220" y="197" text-anchor="middle">B</text>
  <circle class="node" cx="370" cy="70" r="24"/><text class="label" x="370" y="77" text-anchor="middle">C</text>
  <circle class="node" cx="490" cy="190" r="24"/><text class="label" x="490" y="197" text-anchor="middle">D</text>
  <circle class="node" cx="610" cy="70" r="24"/><text class="label" x="610" y="77" text-anchor="middle">E</text>
</svg>

</div>

**ج)** آیا با استفاده از الگوریتم دایکسترا می‌توان کوتاه‌ترین مسیر را روی هر گرافی پیدا کرد؟ به عنوان مثال آیا الگوریتم دایکسترا روی گراف بخش قبل، قابل اجراست؟ چرا؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">کوتاه‌ترین مسیر</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


## سوال ۸ — دورترین فاصله برای هر رأس درخت { #problem-graph-amshz-11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک درخت با $n$ رأس داده شده است.

برای هر رأس $v$، بیشترین فاصله‌ی آن تا یک رأس دیگر درخت را پیدا کنید.

مرتبه‌ی زمانی مورد انتظار: $O(n)$
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سیده شقایق میرجلیلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q08-solution-video.mov"></video></div>


</details>


## سوال ۹ — محدوده‌ی خدمت‌رسانی { #problem-bfs-multi-source .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bfs-multi-source" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شبکه را گرافی مانند $G=(V, E)$ در نظر بگیرید. هر گره $v \in V$ یا یک سرویس‌دهنده (Provider) است یا یک کاربر (Client). برای هر سرویس‌دهنده $i$، یک بردِ مجاز $r_i$ تعریف شده است. کاربر $j$ تنها در صورتی می‌تواند از سرویس $i$ استفاده کند که $dist(i, j) \le r_i$ باشد.

الگوریتمی ارائه دهید که برای هر کاربر، نزدیک‌ترین سرویس‌دهنده‌ای که در محدودهٔ برد $r_i$ قرار دارد را پیدا کند.
</div>


## سوال ۱۰ — یال‌های موجود در یک کوتاه‌ترین مسیر { #problem-edge-on-shortest-path .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edge-on-shortest-path" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف جهت‌دار وزن‌دار با $n$ رأس و $m$ یال داده شده است. وزن همه‌ی یال‌ها نامنفی است.

برای هر یال مشخص کنید آیا حداقل یک کوتاه‌ترین مسیر از رأس $1$ به رأس $n$ وجود دارد که از این یال عبور کند یا نه.

مرتبه‌ی زمانی مورد انتظار: $O((n+m)\log n)$
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">کوتاه‌ترین مسیر</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

لازم نیست همه‌ی کوتاه‌ترین مسیرها را پیدا کنید. برای هر یال کافی است بررسی کنید آیا می‌تواند وسط یک کوتاه‌ترین مسیر قرار بگیرد یا نه.

برای این کار اول فاصله‌های لازم را حساب کنید: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

یک بار دایکسترا را از رأس $1$ اجرا کنید تا $dist_1[v]$ برای همه‌ی رأس‌ها به دست بیاید.

همچنین گراف را برعکس کنید و یک بار دایکسترا را از رأس $n$ اجرا کنید.

برای اینکه ببینید چرا گراف را برعکس می‌کنیم: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

ما برای هر رأس $v$ به کوتاه‌ترین فاصله از $v$ تا $n$ نیاز داریم.

اگر جهت همه‌ی یال‌ها را برعکس کنیم و دایکسترا را از $n$ اجرا کنیم، دقیقاً همین مقدار برای همه‌ی رأس‌ها به دست می‌آید.

</details>



</details>



بعد شرط هر یال را جداگانه بررسی کنید: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

فرض کنید یال مورد نظر از $u$ به $v$ با وزن $w$ باشد.

این یال روی یک کوتاه‌ترین مسیر از $1$ به $n$ قرار می‌گیرد اگر و فقط اگر:

$dist_1[u] + w + dist_n[v] = dist_1[n]$

برای حالت‌هایی که مسیر وجود ندارد هم حواستان باشد: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

اگر $dist_1[n]$ بی‌نهایت باشد، یعنی اصلاً مسیری از $1$ به $n$ وجود ندارد.

در این حالت هیچ یالی نمی‌تواند روی کوتاه‌ترین مسیر از $1$ به $n$ باشد.

</details>



</details>



</details>


## سوال ۱۱ — شمارش کوتاه‌ترین مسیرها { #problem-archive-graph-dijsktra-07 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dijsktra-07" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف بدون جهت و وزن ‌داری با $n$ راس و $m$ یال ورودی داده شده است. الگوریتمی با پیچیدگی زمانی مرتبه‌ی $O((n+m)\log(n+m))$ ارائه دهید که تعداد کوتاه‌ترین مسیر‌های متمایز از راس $s$ به راس $t$ را پیدا کند.
</div>


## سوال ۱۲ — DAG <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignement-hw03-05 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignement-hw03-05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف $G=(V,E)$ داریم که یال‌های آن جهت‌دار هستند. 

**الف)**
یک الگوریتم معرفی کنید که بررسی کند در این گراف دور وجود دارد یا نه.

**ب)**
اگر این گراف دور نداشت، یک الگویتم ارائه دهید که ترتیبی به رئوس در $V$ بدهد به‌طوری که اگر یک یال جهت‌دار از $u$ به $v$ وجود داشت، رأس $u$ قبل از $v$ نمایش داده شده باشد.
</div>


## سوال ۱۳ — جهت‌دهی قوی { #problem-graph-amshz-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون‌جهت همبند با $n$ رأس و $m$ یال داده شده است.

می‌خواهیم هر یال را دقیقا در یکی از دو جهت ممکن جهت‌دهی کنیم، طوری که گراف جهت‌دار حاصل همبند قوی شود.

اگر چنین جهت‌دهی‌ای ممکن نیست، آن را گزارش دهید.

مرتبه‌ی زمانی مورد انتظار: $O(n+m)$
</div>


## سوال ۱۴ — تشخیص وجود دور { #problem-graph-helena-04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

الگوریتمی ارائه دهید که تعیین کند آیا یک گراف بدون‌جهت داده‌شدهٔ $G=(V, E)$ دارای دور هست یا خیر. الگوریتم شما باید در زمان $O(V)$ و مستقل از $|E|$ اجرا شود.
</div>


## سوال ۱۵ — پیمایش لغت‌نامه‌ای درخت { #problem-graph-amshz-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک درخت با $n$ رأس داریم که ریشه‌ی آن رأس $1$ است.

در ابتدا فقط رأس $1$ دیده شده است. در هر مرحله می‌توانیم یکی از رأس‌های دیده‌نشده را انتخاب کنیم که حداقل یک همسایه‌ی دیده‌شده داشته باشد، و آن را ببینیم.

این فرایند در پایان یک دنباله‌ی $n$ تایی از ترتیب دیده‌شدن رأس‌ها می‌سازد.

کمینه‌ترین دنباله‌ی ممکن از نظر لغت‌نامه‌ای را پیدا کنید.

مرتبه‌ی زمانی مورد انتظار: $O(n \log n)$
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

در هر لحظه فقط رأس‌هایی قابل انتخاب هستند که یک همسایه‌ی دیده‌شده دارند.

برای کمینه کردن دنباله، همیشه کوچک‌ترین رأس قابل انتخاب را بردارید: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

اگر در یک مرحله چند رأس قابل انتخاب باشند، انتخاب رأس کوچک‌تر همیشه بهتر است.

چون عنصر فعلی دنباله را کوچک‌تر می‌کند و هیچ رأس قابل انتخابی را از دست نمی‌دهیم.

</details>



برای پیاده‌سازی سریع، از یک داده‌ساختار مناسب استفاده کنید: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

مجموعه‌ی رأس‌های قابل انتخاب را در یک `set` یا `priority_queue` کمینه نگه دارید.

هر بار کوچک‌ترین رأس را خارج کنید و همسایه‌های دیده‌نشده‌ی آن را به مجموعه اضافه کنید.

</details>



</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد اسماعیلی مرندی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q15-solution-video.mp4"></video></div>


</details>


## سوال ۱۶ — بیت‌فلیپ { #problem-bitflip .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bitflip" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک صفحه‌ی $n \times m$ از لامپ‌ها داریم. هر لامپ یا خاموش است یا روشن.

در هر عملیات می‌توانیم دقیقاً یکی از کارهای زیر را انجام دهیم:

- وضعیت همه‌ی لامپ‌های یک سطر را عوض کنیم؛ یعنی لامپ‌های روشن خاموش شوند و لامپ‌های خاموش روشن شوند.
- وضعیت همه‌ی لامپ‌های یک ستون را عوض کنیم.

می‌خواهیم با کمترین تعداد عملیات، همه‌ی لامپ‌ها را روشن کنیم.

یک الگوریتم با پیچیدگی زمانی $O(nm)$ برای محاسبه‌ی کمترین تعداد عملیات لازم ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علی مقدسی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q16-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q16-solution-notes.pdf">HW1.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۷ — اسکیت روی یخ { #problem-ice-skating .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="ice-skating" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

زمین اسکیت روی یخ به شکل یک جدول $m \times m$ است و روی بعضی از خانه‌های آن، سنگ قرار دارد.  
در ابتدا $n$ سنگ داریم و سنگ $i$ام در خانه‌ی $(x_i, y_i)$ قرار گرفته است.

یک اسکیت‌باز می‌تواند از روی یک سنگ به سنگ دیگری برود، اگر این دو سنگ در یک سطر یا در یک ستون باشند؛ یعنی یا $x$ آن‌ها برابر باشد یا $y$ آن‌ها.

می‌خواهیم تعدادی سنگ جدید به زمین اضافه کنیم، طوری که بعد از آن اسکیت‌باز بتواند از هر سنگی به هر سنگ دیگر برسد.

کمترین تعداد سنگ‌هایی که باید اضافه شوند را محاسبه کنید.

یک الگوریتم با پیچیدگی زمانی $O(n^2 + m)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - کیاشا کوشانفر</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q17-solution-video.mp4"></video></div>


</details>


## سوال ۱۸ — کوتاه‌ترین مسیر زوج و فرد { #problem-shortes-path-parity .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="shortes-path-parity" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف وزن‌دار با $n$ رأس و $m$ یال داده می‌شود. دو رأس $u$ و $v$ داده می‌شود. کمترین فاصله‌ی مسیری از $u$ به $v$ که تعداد یال‌هایش زوج باشد و کمترین فاصله‌ای که تعداد یال‌هایش فرد باشد را بیابید. اگر چنین مسیری وجود نداشت، $-1$ برگردانید.

**اردر مورد انتظار:** $O((n + m) \log n)$
</div>


## سوال ۱۹ — یال‌های نمایی <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-exponential-edges .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="exponential-edges" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف $G=(V,E)$ داریم که یال‌های آن وزن دارند. اما یک تفاوت این گراف با گراف‌های معمولی این است که اگر از یک رأس شروع به پیمایش کنیم، وزن یال‌های پیموده نشده در هر گام دو‌برابر می‌شود. 

به طور مثال اگر یال‌های یک مسیر $P$ به ترتیب $\{e_1, e_2, \dots,e_k\}$ باشند، وزن این مسیر به شکل زیر محاسبه می‌شود:

$$
W(P) = e_1 + 2\times e_2 + 2^{2}\times e_3 + \dots + 2^{k-1}\times e_k
$$

فرض کنید یک رأس مثل $u$ داده شده است. الگوریتمی ارائه دهید که فاصله‌ی این رأس تا هر راس دیگر را حساب کند. 

اردر مورد انتظار: $O(|V| \cdot |E|)$
</div>


## سوال ۲۰ — تبدیل ارز { #problem-archive-graph-bellman-floyd-05 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-bellman-floyd-05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید نرخ تبدیل $n$‌ ارز موجود به یکدیگر را می‌دانیم. $m$  ریال پول در اختیار داریم. می‌خواهیم بدانیم با چندین بار تبدیل پول و نهایتا تبدیل آن به ریال می‌توانیم مقدار $m$ را افزایش دهیم. الگوریتمی با زمان اجرای چندجمله‌ای برای تشخیص چنین کاری ارائه دهید.
</div>


## سوال ۲۱ — جست‌وجو در ژرف { #problem-archive-graph-dfs-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dfs-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک گراف ۵ راسی همبند داریم که راس‌های آن با شماره‌های ۱ تا ۵ شماره‌گذاری شده‌اند. فرض کنید از راس ۱  DFS را اجرا می‌کنیم. فرض کنید تمام حالت‌هایی که DFS‌ می‌تواند رئوس را ملاقات کند عبارتند از $<1, 2, 4 , 3 , 5>$، $<1, 3, 4, 2 , 5>$ و $<1 , 3, 5, 4, 2>$. حال اگر از راس $5$  DFS را اجرا کنیم ترتیب ملاقات‌ها به چه شکل می‌تواند باشد. دلیل خود را بیان کنید.
</div>


## سوال ۲۲ — بازسازی رشته { #problem-bazsazi .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bazsazi" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی ناشناخته داشته‌ایم و تمام زیررشته‌های متوالیِ طول $2$ آن را جدا کرده‌ایم.

برای مثال، اگر رشته برابر `abcde` باشد، تکه‌های زیر به دست می‌آیند: `ab`, `bc`, `cd`, `de`

حالا این تکه‌ها بدون ترتیب به شما داده شده‌اند.

باید تشخیص دهید آیا ممکن است رشته‌ای وجود داشته باشد که دقیقاً همین تکه‌ها از آن ساخته شده باشند یا نه.

دقت کنید هر تکه باید دقیقاً یک بار استفاده شود.

یک الگوریتم با پیچیدگی زمانی $O(m)$ ارائه دهید که وجود یا عدم وجود چنین رشته‌ای را تشخیص دهد. در این‌جا $m$ تعداد تکه‌های داده‌شده است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علیرضا مهندسی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q22-solution-video.mp4"></video></div>


</details>


## سوال ۲۳ — مؤلفه‌های قویاً همبند { #problem-new-graph-scc-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف جهت‌دار $G = (V, E)$ داده شده است. یک مؤلفه‌ی قویاً همبند، زیرمجموعه‌ای ماکزیمال از رئوس است که برای هر جفت رأس آن، در هر دو جهت مسیر وجود داشته باشد.

الگوریتمی از مرتبه‌ی زمانی$O(|V| + |E|)$ ارائه دهید که لیستی از تمامی مؤلفه‌های قویاً همبند این گراف را به‌عنوان خروجی برگرداند؛ به‌این‌صورت که برای هر مؤلفه، مجموعه‌ی رئوس متعلق به آن مشخص شده باشد.
</div>


## سوال ۲۴ — رأس‌هایی که به همه‌جا می‌رسند { #problem-graph-amshz-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف جهت‌دار با $n$ رأس و $m$ یال داده شده است.

تعداد رأس‌هایی را پیدا کنید که از آن‌ها به همه‌ی رأس‌های دیگر مسیر جهت‌دار وجود دارد.

مرتبه‌ی زمانی مورد انتظار: $O(n+m)$
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Soroush Davaran</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q24-solution-video.mp4"></video></div>


</details>


## سوال ۲۵ — دزد و پلیس { #problem-graph-amshz-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون‌جهت با $n$ رأس و $m$ یال داریم. دزد در ابتدا در رأس $1$ قرار دارد و چند پلیس نیز در رأس‌های داده‌شده قرار دارند.

در هر مرحله، هر نفر می‌تواند در رأس فعلی خود بماند یا به یکی از رأس‌های مجاور برود.

دزد زمانی فرار می‌کند که به رأس $n$ برسد و این کار را اکیدا زودتر از همه‌ی پلیس‌ها انجام دهد. اگر در هر زمانی یک پلیس و دزد روی یک رأس باشند، دزد دستگیر می‌شود.

مشخص کنید آیا دزد می‌تواند با بازی بهینه فرار کند یا پلیس‌ها می‌توانند او را دستگیر کنند.

مرتبه‌ی زمانی مورد انتظار: $O(n+m)$
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

لازم نیست حرکت همه‌ی پلیس‌ها را جداگانه شبیه‌سازی کنید. اول برای هر رأس حساب کنید زودترین زمانی که یک پلیس می‌تواند به آن برسد چند است: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

از همه‌ی رأس‌هایی که در ابتدا پلیس دارند، همزمان BFS بزنید.

همه‌ی این رأس‌ها را با فاصله‌ی $0$ داخل صف بگذارید. مقدار به‌دست‌آمده برای هر رأس، زودترین زمان رسیدن یک پلیس به آن رأس است.

</details>



بعد فقط مسیرهایی را برای دزد بررسی کنید که ورود به همه‌ی رأس‌هایشان امن باشد: 

<details class="tip hint hint-tip" markdown="1"><summary>راهنمایی</summary>

اگر دزد در زمان $t$ به رأس $v$ برسد، این حالت فقط وقتی امن است که:

$t < police[v]$

پس دزد فقط می‌تواند وارد رأس‌هایی شود که زودتر از همه‌ی پلیس‌ها به آن‌ها می‌رسد.

</details>



</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - شمیم رحیمی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q25-solution-video.mov"></video></div>


</details>


## سوال ۲۶ — ماینکرفت { #problem-graph-minecraft .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-minecraft" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

پوریا، سهیل و علیرضا داخل یک مپ ماینکرفت زندگی می‌کنند.  
مپ به صورت یک جدول $n \times n$ است و بعضی از خانه‌های آن قابل عبور نیستند.

هرکدام از این سه نفر در یک خانه‌ی متفاوت از جدول قرار دارند.  
آن‌ها می‌خواهند بین خانه‌هایشان جاده بسازند تا هر نفر بتواند فقط با حرکت روی خانه‌های جاده‌دار به دو نفر دیگر برسد.

برای ساختن جاده روی هر خانه باید هزینه‌ی مشخصی پرداخت شود. همه‌ی این هزینه‌ها عدد طبیعی هستند.

حرکت فقط بین خانه‌های مجاورِ ضلع‌مشترک‌دار مجاز است.

یک الگوریتم با پیچیدگی زمانی $O(n^2 \log n)$ بدهید که کمترین هزینه‌ی لازم را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سید حسن خاتمی بیدگلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q26-solution-video.mp4"></video></div>


</details>


## پیشرفته


## سوال ۲۷ — قرنطینه <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-floyd-remove-edges .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="floyd-remove-edges" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

سال ۲۰۳۱. یک ویروس ناشناخته با سرعت نگران‌کننده‌ای در حال گسترش است. دولت تصمیم گرفته به عنوان آخرین راه‌حل، شهرهای آلوده را یکی یکی قرنطینه‌ی کامل کند — به این معنا که تمام جاده‌های ورودی و خروجی آن شهر برای همیشه بسته می‌شوند و آن شهر از شبکه‌ی حمل‌ونقل کشور حذف می‌گردد.

سازمان مدیریت بحران یک لیست محرمانه در اختیار شما گذاشته: ترتیب دقیق شهرهایی که قرار است قرنطینه شوند، به همراه استعلام‌هایی که در بازه‌های مختلف از شما پرسیده خواهد شد — کوتاه‌ترین مسیر بین دو شهر سالم در آن لحظه چقدر است؟

چون این لیست پیش از وقوع هر اتفاقی در اختیار شماست، فرصت دارید همه‌ی جواب‌ها را از پیش آماده کنید.

**صورت مسئله**

یک گراف وزن‌دار با $n$ رأس و $m$ یال داده می‌شود. دو نوع کوئری وجود دارد:

- **نوع ۱:** رأس $v$ و تمام یال‌های متصل به آن از گراف حذف می‌شود.
- **نوع ۲:** کوتاه‌ترین فاصله بین رأس $u$ و رأس $v$ در گراف فعلی را بیابید. تضمین می‌شود هر دو رأس هنوز در گراف حضور دارند.

کوئری‌ها **آفلاین** هستند — یعنی تمام کوئری‌ها از ابتدا در اختیار شماست و می‌توانید آن‌ها را پردازش کرده و پاسخ‌ها را یکجا خروجی دهید.

**اردر مورد انتظار:** $O(n^3 + q)$
</div>


## سوال ۲۸ — 2SAT (ارضای دودویی) { #problem-new-graph-scc-02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در مسئله‌ی $\text{2-SAT}$، یک فرمول منطقی شامل تعدادی متغیر بولی به شما داده می‌شود. این فرمول در حالت استاندارد $\text{2-CNF}$ قرار دارد؛ به این معنا که از عطف (AND) تعدادی عبارت (Clause) تشکیل شده و در هر عبارت، دقیقاً فصل (OR) دو لیترال (خود متغیر یا نقیض آن) وجود دارد.

به عنوان مثال:

$$
(x_1 \lor \neg x_2)
\land
(\neg x_1 \lor x_3)
\land
(x_2 \lor \neg x_3)
$$

الگوریتمی با مرتبهٔ زمانی$O(|X| + |C|)$
(که در آن $X$ مجموعه‌ی متغیرها و $C$ مجموعه‌ی عبارات است)

ارائه دهید که تعیین کند آیا می‌توان به متغیرها مقدار‌دهی بولی نسبت داد به‌گونه‌ای که کل فرمول مقدار `True` بگیرد یا خیر. در صورت وجود، یکی از این مقداردهی‌ها را خروجی دهید و در غیر این صورت اعلام کنید که فرمول غیرقابل ارضا (`Unsatisfiable`) است.
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

برای حل این مسئله، یک گراف جهت‌دار بسازید. به ازای هر متغیر $x$، دو رأس مجزا برای $x$ و نقیض آن ($\neg x$) در نظر بگیرید. سپس تلاش کنید هر عبارت (Clause) در فرمول را با یال‌های جهت‌دار در این گراف مدل کنید و نهایتاً سؤال را با کمک مسئله‌ی SCC حل کنید.

</details>


## سوال ۲۹ — حذف تطابق { #problem-new-graph-scc-03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف بدون‌جهتی به‌صورت $G=(V,E)$ داده شده است که هر یال آن دارای یک رنگ است.

یک رنگ‌آمیزی یال‌ها را **سره (proper)** می‌گوییم اگر هیچ دو یال هم‌راس، رنگ یکسان نداشته باشند.

هدف، حذف مجموعه‌ای از یال‌ها است به‌طوری‌که:

- یال‌های حذف‌شده یک **Matching** تشکیل دهند؛ یعنی هیچ دو یال حذف‌شده رأس مشترک نداشته باشند.

- پس از حذف این یال‌ها، یال‌های باقی‌مانده یک رنگ‌آمیزی سره (proper) تشکیل دهند.

الگوریتمی از مرتبه‌ی زمانی $O(|V| + |E|)$ طراحی کنید که تعیین کند آیا چنین مجموعه‌ای از یال‌ها وجود دارد یا خیر. در صورت وجود، یکی از این مجموعه‌ها را خروجی دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">2-sat</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">scc</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

*راهنمایی:* برای حل سؤال از مسئله‌ی `2-SAT` استفاده کنید.

برای هر یال $e$، یک متغیر بولی $x_e$ تعریف کنید:

- $x_e = \texttt{True}$ به این معنا که یال $e$ حذف می‌شود،

- و $x_e = \texttt{False}$ به این معنا که یال $e$ در گراف باقی می‌ماند.

برای آنکه رنگ‌آمیزی باقی‌مانده سره باشد، اگر دو یال هم‌رأس و هم‌رنگ باشند، باید حداقل یکی از آن‌ها حذف شود.

برای آنکه مطمئن شوید از هر رأس حداکثر یک یال حذف می‌شود، از ایده‌ی `partial OR` استفاده کنید.

فرض کنید یال‌های متصل به رأس $v$ برابر

$$
e_1, e_2, \ldots, e_k
$$

باشند. متغیرهای کمکی

$$
p_1, p_2, \ldots, p_k
$$

را تعریف کنید، به‌طوری‌که $p_i$ زمانی و تنها زمانی مقدار `True` داشته باشد که حداقل یکی از متغیرهای

$$
x_{e_1}, x_{e_2}, \ldots, x_{e_i}
$$

مقدار `True` داشته باشد.

سپس با استفاده از Clauseهای مناسب، تضمین کنید که هیچ دو یال متصل به یک رأس به‌طور هم‌زمان حذف نشوند.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - میلاد رستمی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q29-solution-video.mp4"></video></div>


</details>


## سوال ۳۰ — دایجسترا با وزن‌های کوچک { #problem-graph-helena-03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید می‌خواهیم الگوریتم دایجسترا را روی گرافی اجرا کنیم که وزن یال‌های آن اعداد صحیح در بازهٔ $\{0, 1, \dots, W\}$ هستند، که در آن $W$ عدد نسبتاً کوچکی است.

الف)
 نشان دهید چگونه می‌توان الگوریتم دایجسترا را به گونه‌ای پیاده‌سازی کرد که در زمان $O(W|V| + |E|)$ اجرا شود.

ب)
یک پیاده‌سازی جایگزین نشان دهید که زمان اجرای آن برابر با $O((|V| + |E|) \log W)$ باشد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - حسنا شاه حیدری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q30-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q30-solution-notes.pdf">EE-4-.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۱ — برعکس کردن یال‌ها { #problem-edge-reverse .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edge-reverse" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف جهت‌دار با $n$ رأس و $m$ یال داریم. یال $i$ام از رأس $u_i$ به رأس $v_i$ می‌رود و هزینه‌ی برعکس کردن آن برابر $w_i$ است.

می‌توانیم تعدادی از یال‌ها را برعکس کنیم. هزینه‌ی کل این کار برابر بیشترین هزینه بین یال‌هایی است که برعکس کرده‌ایم. اگر هیچ یالی را برعکس نکنیم، هزینه برابر $0$ است.

می‌خواهیم بعد از برعکس کردن بعضی یال‌ها، حداقل یک رأس وجود داشته باشد که بتوان از آن به همه‌ی رأس‌های دیگر رسید.

یک الگوریتم با پیچیدگی زمانی $O((n + m)\log m)$ ارائه دهید که کمترین هزینه‌ی لازم را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سید محمد مهدی حسینی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q31-solution-video.mp4"></video></div>


</details>


## سوال ۳۲ — دوبینی { #problem-archive-graph-dijsktra-10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dijsktra-10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک گراف بدون‌جهت داریم که هر یال آن دارای دو وزن مثبت است. بار اولی که از یک یال عبور می‌کنیم باید به اندازه وزن بیش‌تر آن یال هزینه پرداخت کنیم و بارهای بعدی به اندازه وزن سبک‌تر هزینه پرداخت می‌کنیم.  می‌خواهیم از  راس $u$ به راس $v$ برویم و در مسیر از راس $w$ عبور کنیم. الگوریتمی از مرتبه $O(n\log n+m)$ ارائه دهید که مسیر با کم‌ترین وزن را پیدا کند که $n$ و $m$ به ترتیب تعداد رئوس و تعداد یال‌های گراف می‌باشند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - رادین بهارصفت</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q32-solution-video.mp4"></video></div>


</details>


## سوال ۳۳ — سیاره‌ها { #problem-new-graph-dijkstra-04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-dijkstra-04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گوئائولد آپوفیس دوباره تیم جک اونیل را دستگیر کرده است! خود جک توانست فرار کند، اما تا آن زمان سفینه آپوفیس به فضای ابرپرش رفته بود. اما جک می‌داند آپوفیس در کدام سیاره فرود خواهد آمد. برای نجات دوستانش، جک باید مکرراً از طریق دروازه‌های ستاره‌ای (stargates) به این سیاره برود.

در مجموع، کهکشان دارای 
𝑛 سیاره است که با اعداد 1 تا 𝑛 شماره‌گذاری شده‌اند. جک در سیاره‌ای با شاخص 1 قرار دارد و آپوفیس در سیاره‌ای با شاخص 𝑛 فرود خواهد آمد. جک می‌تواند از طریق دروازه‌های ستاره‌ای بین برخی از جفت‌سیاره‌ها حرکت کند (او می‌تواند در هر دو جهت حرکت کند)؛ انتقال بین جفت‌ سیاره‌های مختلف ممکن است زمان‌های مثبت و احتمالاً متفاوتی (به ثانیه) طول بکشد.

 جک سفر خود را در زمان 0 آغاز می‌کند.
ممکن است مسافران دیگری نیز به سیاره‌ای که جک در حال حاضر در آن است برسند. در این حالت، جک باید دقیقاً 1 ثانیه صبر کند تا بتواند از دروازه ستاره‌ای استفاده کند. یعنی اگر در زمان t مسافر دیگری به سیاره برسد، جک تنها می‌تواند در زمان t+1 از دروازه عبور کند، مگر اینکه مسافران بیشتری در زمان t+1
 به همان سیاره برسند.

با دانستن اطلاعات مربوط به زمان سفر بین سیاره‌ها و زمان‌هایی که جک نمی‌تواند از دروازه ستاره‌ای در سیاره‌های خاص استفاده کند، حداقل زمانی که او می‌تواند به سیاره با شاخص n برسد را در زمان $O((m+n)\log _{}{n}$ تعیین کنید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">کوتاه‌ترین مسیر</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


## سوال ۳۴ — بازی لحظه‌آخری { #problem-last-minute .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="last-minute" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف جهت‌دار $n$ رأسی و $m$ یالی داریم که مهره‌ای روی رأس شماره $1$ آن قرار دارد. آلیس و باب به نوبت بازی می‌کنند. در هر نوبت، بازیکن باید مهره را از رأس فعلی $v$ به یکی از رئوس همسایه خروجی آن منتقل کند. بازیکنی که در نوبت خود نتواند حرکتی انجام دهد (یعنی مهره در رأسی بدون یال خروجی قرار گرفته باشد)، بازنده است. اگر هر دو بازیکن بتوانند با بازیِ بهینه، مانع از پایان بازی شوند (بازی تا بی‌نهایت ادامه یابد)، نتیجه مساوی است. الگوریتمی با پیچیدگی $\mathcal{O}(n+m)$ ارائه دهید که برنده بازی را مشخص کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد‌حسین شیرازی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q34-solution-video.mp4"></video></div>


</details>


## سوال ۳۵ — والیبال { #problem-new-graph-sp-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-sp-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

پتیا والیبال را خیلی دوست دارد. یک روز او برای یک مسابقه والیبال دیر کرده بود. پتیا ماشین شخصی نخریده است، به همین دلیل مجبور شد تاکسی بگیرد. شهر دارای $n$ تقاطع است که برخی از آن‌ها توسط جاده‌های دوطرفه به هم متصل شده‌اند. طول هر جاده با یک عدد صحیح مثبت بر حسب متر مشخص می‌شود؛ جاده‌ها می‌توانند طول‌های متفاوتی داشته باشند.

در ابتدا در هر تقاطع دقیقاً یک تاکسی ایستاده است. راننده تاکسی تقاطع $i$-ام موافقت می‌کند که پتیا را (شاید از طریق چند تقاطع میانی) به تقاطع دیگری ببرد، به شرطی که مسافت سفر بیشتر از $t_i$ متر نباشد. همچنین، هزینه سفر به مسافت بستگی ندارد و برابر با $c_i$ بورل (واحد پول) است. تاکسی‌ها نمی‌توانند در وسط جاده توقف کنند. از هر تاکسی حداکثر یک بار می‌توان استفاده کرد. پتیا تنها در تقاطعی می‌تواند سوار تاکسی شود که تاکسی در ابتدا در آنجا ایستاده است.

در این لحظه پتیا در تقاطع $x$ قرار دارد و استادیوم والیبال در تقاطع $y$ است. حداقل مقدار پولی که پتیا برای رسیدن به استادیوم باید بپردازد را تعیین کنید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">کوتاه‌ترین مسیر</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


## سوال ۳۶ — پرچم فرانسه { #problem-graph-helena-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف جهت‌داری مانند $G$ را در نظر بگیرید که هر یال آن به رنگ قرمز، سفید یا آبی درآمده است. یک «پیمایش» (Walk) در $G$ را «پیمایش پرچم فرانسه» می‌نامیم اگر دنبالهٔ رنگ یال‌های آن به صورت قرمز، سفید، آبی، قرمز، سفید، آبی و به همین ترتیب باشد. به عبارت دقیق‌تر، پیمایش $v_0 \to v_1 \to \dots \to v_k$ یک پیمایش پرچم فرانسه است اگر برای هر عدد صحیح $i$، یال $v_i \to v_{i+1}$ در صورتی که $i \pmod 3 = 0$ قرمز، در صورتی که $i \pmod 3 = 1$ سفید، و در صورتی که $i \pmod 3 = 2$ آبی باشد.

الگوریتمی را توصیف کنید که تمام رئوس در $G$ را که از یک رأس مشخص $v$ از طریق یک پیمایش پرچم فرانسه قابل دسترسی هستند، پیدا کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد جعفری پور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q36-solution-video.mp4"></video></div>


</details>


## سوال ۳۷ — مسیر متناوب { #problem-new-graph-traversal-02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-traversal-02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون جهت با $n$ رأس و $m$ یال به شما داده شده است. رئوس از $1$ تا $n$ شماره‌گذاری شده‌اند. گراف هیچ طوقه (self-loop) یا یال چندگانه‌ای ندارد.

وظیفه شما این است که با انتخاب یک جهت برای هر یال، گراف را به یک گراف جهت‌دار تبدیل کنید. پس از جهت‌دهی به یال‌ها، یک دنباله از رئوس $v_1, v_2, \dots, v_k$ را یک مسیر متناوب (alternating path) می‌نامیم (که در آن $k$ می‌تواند به دلخواه بزرگ باشد و هر رأس می‌تواند به هر تعداد بار تکرار شود) اگر:

- یال $(v_1, v_2)$ از $v_1$ به $v_2$ جهت‌دهی شده باشد،
- یال $(v_2, v_3)$ از $v_3$ به $v_2$ جهت‌دهی شده باشد،
- یال $(v_3, v_4)$ از $v_3$ به $v_4$ جهت‌دهی شده باشد،
- یال $(v_4, v_5)$ از $v_5$ به $v_4$ جهت‌دهی شده باشد،
- و به همین ترتیب.


یک رأس $v$ رازیبا می‌نامیم اگر تمام مسیرهایی که در گراف اولیه از رأس $v$ شروع می‌شوند (لزوماً مسیرهای ساده نیستند)، در گراف جهت‌دارِ حاصل، متناوب باشند.

بیشترین تعداد رئوسی که می‌توانند پس از جهت‌دهی یال‌ها زیبا شوند، چقدر است؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدی آشیانی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q37-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q37-solution-files.zip">files.zip</a></li></ul></div>
</div>


</details>


## سوال ۳۸ — کمترین عدد روی مسیر { #problem-graph-amshz-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف جهت‌دار با $n$ رأس و $m$ یال داده شده است. روی هر یال یکی از ارقام $0$ تا $9$ نوشته شده است.

می‌خواهیم از رأس $1$ به رأس $n$ برویم. اگر ارقام یال‌های طی‌شده را به ترتیب بنویسیم، یک عدد ده‌دهی ساخته می‌شود.

کمترین عدد ممکنی را که می‌توان به این شکل ساخت، پیدا کنید.

تعداد رقم‌های جواب ممکن است زیاد باشد، پس جواب را به صورت رشته چاپ کنید. صفرهای ابتدایی در مقدار عدد اثری ندارند و نباید در خروجی بیایند، مگر اینکه جواب دقیقا $0$ باشد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سارا قضاوی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q38-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q38-solution-notes.pdf">least_number.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۹ — گسترش ناحیه‌ی متصل { #problem-graph-amshz-14 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون‌جهت همبند با $n$ رأس و $m$ یال داده شده است. رأس $i$ مقدار مثبت $a_i$ را دارد.

در ابتدا فقط رأس $1$ فعال است و قدرت فعلی برابر $a_1+x$ است، که $x$ یک عدد صحیح نامنفی است و قبل از شروع فرایند انتخاب می‌شود.

در هر مرحله می‌توانیم یک رأس غیرفعال را انتخاب کنیم که حداقل یک همسایه‌ی فعال دارد. اگر قدرت فعلی اکیدا بیشتر از مقدار آن رأس باشد، آن رأس فعال می‌شود و مقدارش به قدرت فعلی اضافه می‌شود.

کمترین مقدار $x$ را پیدا کنید که با آن بتوان همه‌ی رأس‌ها را فعال کرد.

مرتبه‌ی زمانی مورد انتظار: $O(m \log n)$
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علیرضا منصوری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q39-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q39-solution-notes.pdf">39.pdf</a></li></ul></div>
</div>


</details>


## سوال ۴۰ — بودن یا نبودن { #problem-archive-graph-sp-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-sp-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

الگوریتمی با پیچیدگی زمانی مرتبه مکعب $n$ ارائه دهید و ماتریس $D$ با ابعاد $n \times n$
را به عنوان ورودی می‌گیرد و در خروجی بیان می‌کند که آیا گراف وزن‌دار و جهت‌داری وجود دارد که در آن کوتاه‌ترین مسیر از راس $i$ به راس $j$ دقیقا برابر با $D_{ij}$ باشد؟
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدپارسا شاه‌محمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q40-solution-video.mp4"></video></div>


</details>


## سوال ۴۱ — چک برگشتی { #problem-idkwhattoputhere .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="idkwhattoputhere" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

خانم دکتر، خانم نسبتاً ولخرجی است و به خرید کردن علاقه بسیار زیادی دارد. او در کشوری با $n$ شهر زندگی می کند که شهرهایش با $m$ جاده دو طرفه به هم متصل هستند. هر جاده نیز طول صحیح و مثبتی دارد.

اخیراً خانم دکتر به علت خرید های زیادش بدهی بالا آورده و $t$ چک دست طلب‌کارهایش دارد. طلب کار $i$-ام در شهر $a_i$ زندگی‌ می‌کند و چک این طلب‌کار در روز $i$-ام برگشت می خورد. هر طلب کار بعد از برگشت خوردن چکش می خواهد خانم دکتر را پیدا کند و او را به زندان بیندازد. ولی از آن جایی که طلب‌کارها آدم های تنبلی هستند، در صورتی به دنبال خانم دکتر می روند که فاصله شهرشان تا شهر خانم دکتر کمتر از $k$ باشد.

حال آقای مهندس، همسر مهربان خانم دکتر، در هر یک از $t$ روز می خواهد بداند که خانم دکتر را به چند شهر می‌تواند فراری دهد که از دست طلب‌کارها در امان باشد. از آنجایی که $k$ مقدار کمی است، الگوریتمی از $O(k(n+m))$ دهید و به آقای مهندس کمک کنید!
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">کوتاه‌ترین مسیر</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">گراف</span></span></div>


## سوال ۴۲ — اسکاتلند { #problem-graph-amshz-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون‌جهت همبند با $n$ شهر و $m$ جاده داریم. عبور از جاده‌ی بین دو شهر $u$ و $v$ به $w$ لیتر بنزین نیاز دارد.

در شهر $i$، قیمت هر لیتر بنزین برابر $a_i$ است. ماشین در ابتدای سفر هیچ بنزینی ندارد، ولی ظرفیت باک آن نامحدود است و در هر شهر می‌توان هر مقدار بنزین خرید.

برای هر زوج مرتب از شهرها $(s,t)$، کمترین هزینه‌ی لازم برای سفر از $s$ به $t$ را پیدا کنید.

مرتبه‌ی زمانی مورد انتظار: حدود $O(n^3)$
</div>
