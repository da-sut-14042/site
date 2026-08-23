# تمرین ۵




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


## سوال ۱ — Hash گیگیریم <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-rabin-karp-classic .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="rabin-karp-classic" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

الگوریتم Rabin-Karp را درنظر بگیرید.

---

**بخش الف**

الگوریتم را طوری تغییر دهید که با یک پیش‌پردازش از مرتبه‌ی زمانی $O(n)$ روی رشته‌ی اصلی $S$، بتوان پس از آن هش هر بازه از رشته را در $O(1)$ به دست آورد.

در پاسخ خود توضیح دهید چه اطلاعاتی باید از قبل محاسبه و نگه‌داری شود و چگونه از آن‌ها برای محاسبه‌ی سریع هش یک بازه استفاده می‌کنیم.

---

**بخش ب**

اگر در الگوریتم بالا، پس از برابر شدن هش‌ها، برای مطمئن شدن مقایسه‌ی حرف‌به‌حرف نیز انجام دهیم، این کار چه تأثیری روی درستی پاسخ، زمان اجرا و حافظه‌ی مصرفی الگوریتم می‌گذارد؟ طول رشته‌ها را $m$ و $n$ درنظر بگیرید.

---

**بخش ج**

اگر عدد $M$ که باقی‌مانده بر آن گرفته می‌شود خیلی کوچک باشد، چه مشکلی ممکن است پیش بیاید؟

همچنین توضیح دهید چرا اصلاً در محاسبه‌ی هش از باقی‌مانده گرفتن استفاده می‌کنیم.

---

**بخش د**

روش هش رشته‌ای را از نظر زمان اجرا و مصرف حافظه با الگوریتم‌های KMP و Trie مقایسه کنید.

در چه شرایطی استفاده از هش رشته‌ای بهتر است؟ چرا؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## سوال ۲ — این دفعه Trie <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-triethistime .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="triethistime" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

**مدیریت مجموعه‌ای از کلمات با Trie**

در ابتدا یک Trie خالی داریم. سپس تعدادی کوئری به ترتیب داده می‌شود. پس از اجرای هر کوئری، وضعیت Trie ممکن است تغییر کند.

کوئری‌ها یکی از چهار نوع زیر هستند:

```text
ADD word
DELETE word
SEARCH word
COUNT prefix
```

در این سؤال، کلمات به صورت مجموعه نگه‌داری می‌شوند؛ یعنی اگر یک کلمه چند بار اضافه شود، فقط یک بار در Trie حساب می‌شود.

---

**بخش الف**

عملیات اضافه‌کردن و حذف‌کردن یک کلمه در Trie را توضیح دهید.

در عملیات `ADD word`، کلمه‌ی `word` باید به Trie اضافه شود.

در عملیات `DELETE word`، اگر کلمه‌ی `word` در Trie وجود داشته باشد، باید از Trie حذف شود؛ در غیر این صورت Trie بدون تغییر باقی می‌ماند.

همچنین مشخص کنید در هر رأس از Trie چه اطلاعاتی باید نگه‌داری شود تا این عملیات‌ها درست انجام شوند.

---

**بخش ب**

توضیح دهید چگونه می‌توان با استفاده از Trie، به کوئری زیر پاسخ داد:

```text
SEARCH word
```

این کوئری باید مشخص کند آیا کلمه‌ی `word` در وضعیت فعلی Trie وجود دارد یا نه.

---

**بخش ج**

توضیح دهید چگونه می‌توان با استفاده از Trie، به کوئری زیر پاسخ داد:

```text
COUNT prefix
```

این کوئری باید تعداد کلمات موجود در Trie را برگرداند که با `prefix` شروع می‌شوند.

---

**بخش د**
در آخر به‌طور خلاصه بنویسد که در چه شرایطی Trie بهتر از دیگر الگوریتم‌هایی که فراگرفتید بهتر است. مثلا چه زمانی استفاده از Trie منطقی‌تر از استفاده از KMP و Rabin-Karp است؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">trie</span></span></div>


## سوال ۳ — الگوریتم جدید؟ <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-suffixarrayclassic .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="suffixarrayclassic" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

**جست‌وجوی الگو با استفاده از Suffix Array**

فرض کنید یک الگوریتم آماده به نام `BuildSuffixArray(S)` داریم که برای رشته‌ی `S`، آرایه‌ی پسوندی آن را می‌سازد و برمی‌گرداند.

یعنی اگر بنویسیم:

```text
SA = BuildSuffixArray(S)
```

آنگاه `SA` آرایه‌ای از اندیس‌هاست، به‌طوری‌که suffixهای رشته‌ی `S` بر اساس ترتیب لغت‌نامه‌ای مرتب شده‌اند.

برای مثال اگر:

```text
S = "banana"
```

آنگاه:

```text
SA = [5, 3, 1, 0, 4, 2]
```

زیرا suffixهای رشته‌ی `"banana"` به ترتیب لغت‌نامه‌ای به شکل زیر مرتب می‌شوند:

```text
5: a
3: ana
1: anana
0: banana
4: na
2: nana
```

در این سؤال، شما اجازه ندارید نحوه‌ی ساخت suffix array را توضیح دهید یا پیاده‌سازی کنید. الگوریتم `BuildSuffixArray(S)` را به عنوان یک black box در نظر بگیرید.

با استفاده از همین الگوریتم آماده، به سه بخش زیر پاسخ دهید.

---

**بخش الف**

الگوریتمی طراحی کنید که با داشتن رشته‌ی `S` و الگوی `P`، تشخیص دهد آیا `P` به عنوان یک substring در `S` وجود دارد یا نه.

برای مثال:

```text
S = "banana"
P = "ana"
```

خروجی باید نشان دهد که `P` در `S` وجود دارد.

راهنمایی: از این ویژگی استفاده کنید که suffixهای رشته در suffix array به ترتیب لغت‌نامه‌ای مرتب شده‌اند.

---

**بخش ب**

الگوریتم بخش قبل را طوری تغییر دهید که یکی از مکان‌های شروع `P` در رشته‌ی `S` را برگرداند.

برای مثال:

```text
S = "banana"
P = "ana"
```

یکی از خروجی‌های قابل قبول:

```text
1
```

چون substring `"ana"` از اندیس 1 شروع می‌شود:

```text
banana
 ana
```

خروجی `3` نیز قابل قبول است، چون `"ana"` از اندیس 3 هم شروع می‌شود.

---

**بخش ج**

الگوریتمی طراحی کنید که تمام مکان‌های شروع `P` در رشته‌ی `S` را پیدا کند.

برای مثال:

```text
S = "banana"
P = "ana"
```

خروجی باید باشد:

```text
[1, 3]
```

ترتیب خروجی مهم نیست.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">SuffixArray</span></span></div>


## سوال ۴ — درخت KMP <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-kmp-tree .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="kmp-tree" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

**درخت KMP**

فرض کنید $s[1..n]$ رشته‌ای به طول $n$ باشد. برای هر $1 \le i \le n$، مقدار $lps_i$ را طول بلندترین پیشوندِ اکید (proper-prefix) $s[1..i]$ تعریف می‌کنیم که هم‌زمان پسوند (suffix) آن نیز باشد. به بیان دیگر، $lps_i$ بزرگ‌ترین عدد $k \lt i$ است که:

$$s[1..k]=s[i-k+1..i]$$

درخت KMP رشته‌ی $s$ درختی $n+1$ راسی ریشه دار با رأس‌های $0,1,\dots,n$ است که برای هر $i \ge 1$، پدر رأس $i$ برابر $lps_i$ است.

1. برای رشته‌ی $s=\texttt{abacaba}$، مقادیر $lps_i$ را محاسبه کرده و درخت KMP متناظر با آن را رسم کنید. 
2. رشته‌ای به طول $n$ ارائه دهید که درخت KMP آن بیشترین ارتفاع ممکن را داشته باشد.

3. ثابت کنید که در درخت KMP رشته‌ی $s$، رأس $x$ جدّ رأس $y$ است اگر و تنها اگر $s[1..x]=s[y-x+1..y]$. به بیان دیگر $x$ جد $y$ است اگر و تنها اگر، $x$ یک prefix-suffix از $y$ باشد.

4. برای هر $1 \le i \le n$، مقدار $sps_i$ (shortest prefix suffix) را طول کوتاه‌ترین prefix-suffix غیرتهی رشته‌ی $s[1..i]$ تعریف می‌کنیم. به بیان دیگر، $sps_i$ **کوچک‌ترین** عدد مثبت $k \le i$ است که $s[1..k]=s[i-k+1..i]$. الگوریتمی با پیچیدگی زمانی $O(n)$ طراحی کنید که مقادیر $sps_i$ را محاسبه کند.

5. دوره‌ی گردش یک رشته را کوچک‌ترین عدد مثبت $k$ می‌نامیم که رشته را بتوان به بلوک‌های یکسان با طول $k$ افراز کرد. برای مثال دوره گردش $s=\texttt{abababab}$ برابر با $2$ است. الگوریتمی با پیچیدگی زمانی $O(n\log n)$ طراحی کنید که برای هر $1 \le i \le n$، دوره‌ی گردش پیشوند $s[1..i]$ را محاسبه کند. برای مثال، اگر $s=\texttt{ababcababc}$ باشد، خروجی برابر است با $[1,2,3,2,5,6,7,8,9,5]$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">kmp</span></span></div>


## سوال ۵ — سوال ترای کشی { #problem-trie-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="trie-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

ما در مسائل رشته، معمولا طول حروف الفبا را ثابت در نظر می‌گیریم. با این وجود، هم با داده ساختار map، این Trie را پیاده سازی می‌کنند و هم با آرایه. 

این دو پیاده‌سازی را مقایسه کنید!
</div>


## سوال ۶ — دوبار { #problem-hash-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. در $O(|S|. \log (|S|))$ بلندترین زیررشته‌ای از $S$ را پیدا کنید که حداقل دو بار در $S$ ظاهر شده باشد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - امیرمحمد نصراله نژاد</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q06-solution-video.mp4"></video></div>


</details>


## سوال ۷ — دایره‌ای { #problem-hash-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $A$ و $B$ با طول برابر $n$ داده شده‌اند. به کمک Hash گرفتن الگوریتمی در $O(n)$ ارائه دهید تا مشخص کند $B$ یک چرخش از $A$ است یا نه.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## سوال ۸ — کلی سوال { #problem-hash-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. سپس $q$ کوئری داریم که هر کوئری به شکل زیر است:

$$(l_1, r_1, l_2, r_2)$$

برای هر کوئری باید مشخص کنید آیا دو زیررشته‌ی زیر برابر هستند یا نه:

$$S[l_1 \dots r_1]$$

$$S[l_2 \dots r_2]$$

برای این مسئله، بهترین مرتبه‌ی زمانی‌ای را که می‌توانید برای پیش‌پردازش و پاسخ دادن به هر کوئری به دست آورید را توضیح دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نوشین جواد‌زاده</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q08-solution-video.mp4"></video></div>


</details>


## سوال ۹ — پرسش‌های قرینه‌ای { #problem-hash-4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ به طول $n$ داده شده است. همچنین $q$ کوئری داریم. در هر کوئری یک بازه‌ی $[l, r]$ داده می‌شود و باید مشخص کنید آیا زیررشته‌ی $S[l \dots r]$ پالیندروم است یا نه. الگوریتمی از $O(n + q)$ ارائه دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## سوال ۱۰ — آقای مهندس و رشته‌‌اش { #problem-hash-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $n$ حرفی  $S$ داریم و یک مهره که می‌توان آن را روی هر کاراکتری از این رشته قرار داد.

پس از قرار دادن مهره، می‌توانیم آن را چند بار، حتی صفر بار، به سمت راست حرکت دهیم. در هر حرکت، اگر تراشه در موقعیت $i$ باشد، آن را به موقعیت $i + 1$ منتقل می‌کنیم. البته اگر مهره در آخرین موقعیت رشته باشد، دیگر امکان حرکت به سمت راست وجود ندارد.

بعد از حرکت دادن مهره به سمت راست، می‌توانیم آن را چند بار، حتی صفر بار، به سمت چپ حرکت دهیم. در هر حرکت، اگر تراشه در موقعیت $i$ باشد، آن را به موقعیت $i - 1$ منتقل می‌کنیم. البته اگر باز هم مهره در اولین موقعیت رشته باشد، دیگر امکان حرکت به سمت چپ وجود ندارد.

هر بار که مهره را روی یک کاراکتر قرار می‌دهیم یا آن را حرکت می‌دهیم، کاراکتری را که مهره پس از آن عمل روی آن قرار گرفته است یادداشت می‌کنیم.

برای مثال، اگر رشته‌ی $S$ برابر `abcdef` باشد، تراشه را روی کاراکتر سوم قرار دهیم، سپس آن را $2$ بار به سمت راست و بعد $3$ بار به سمت چپ حرکت دهیم، رشته‌ی نوشته‌شده برابر `cdedcb` خواهد بود.

حالا آقای مهندس دو رشته‌ی $S$ و $T$ داده شده‌اند. او از شما خواسته است تا در $O(n^2)$ مشخص کنید آیا می‌توان عملیات توضیح‌داده‌شده را روی رشته‌ی $s$ انجام داد، به‌طوری‌که رشته‌ی نوشته‌شده در پایان دقیقاً برابر $t$ شود یا نه.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محسن زارع</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-notes.pdf">DA-10.pdf</a></li>
<li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-code.txt">DA-10.txt</a></li></ul></div>
</div>


</details>


## سوال ۱۱ — رشته‌بازی شنگدوباو { #problem-boyre-moore-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="boyre-moore-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

Boyer–Moore در حالت معمول می‌تواند حدوداً با $O(N/M)$ مقایسه کار کند، اما در بدترین حالت ممکن است تا حدود $O(MN)$ مقایسه انجام دهد.

برای نشان دادن این موضوع شنگدوباو رشته‌های زیر را به شما داده است:

$T = \texttt{BBBBBBBBBB}$

$P = \texttt{ABBBB}$

---

او از شما خواسته تا الگوریتم Boyer–Moore را با mismatched character heuristic روی این ورودی اجرا کنید.

---

سپس می‌پرسد در هر مرحله چه مقدار پرش یا skip انجام داده‌اید.

---

برایش تعداد کل مقایسه‌های کاراکتری سوال می‌شود. به او کمک کنید.

---

شنگدوباو که از علم خیلی بالای شما حیرت‌زده شده، می‌پرسد چرا این ورودی برای Boyer–Moore بد است.

---

در آخر از شما می‌خواهد توضیح دهید چرا با وجود چنین بدترین حالتی، Boyer–Moore در عمل معمولاً سریع است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - آیه صابری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q11-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q11-solution-notes.pdf">Q11.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۲ — پرش با بویرمور { #problem-boyre-moore-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="boyre-moore-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته $T$ به طول $n$ و یک الگو $P$ به طول $m$ داده شده‌اند. می‌خواهیم تمام مکان‌هایی را پیدا کنیم که $P$ در $T$ ظاهر شده است.

الگوریتم Boyer-Moore را برای این مسئله توضیح دهید. در پاسخ خود مشخص کنید چرا مقایسه‌ی کاراکترها در این الگوریتم از انتهای الگو شروع می‌شود و چگونه می‌توان با استفاده از mismatch، الگو را چند خانه به جلو برد.
</div>


## سوال ۱۳ — KMP { #problem-kmp-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ به طول $n$ داده شده است. برای هر $i$، مقدار $\pi_i$ را برابر طول بلندترین پیشوند proper (یعنی خودش نباشه) از $S[1..i]$ می‌گیریم که همزمان پسوند $S[1..i]$ هم باشد.

الگوریتمی با زمان $O(n)$ ارائه دهید که همه‌ی مقادیر $\pi_i$ را حساب کند.
</div>


## سوال ۱۴ — پیدا کردن الگو { #problem-kmp-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $S$ و $P$ داده شده‌اند. می‌خواهیم همه‌ی جاهایی را پیدا کنیم که $P$ در $S$ آمده است.

تکرارهایی که هم‌پوشانی دارند هم جدا حساب می‌شوند. برای مثال، اگر $S = abababa$ و $P = aba$ باشد، جواب جایگاه‌های $1$، $3$ و $5$ است.

الگوریتمی با زمان $O(|S| + |P|)$ ارائه دهید.
</div>


## سوال ۱۵ — Borderها { #problem-kmp-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. به رشته‌ی $X$ یک border برای $S$ می‌گوییم اگر $X$ هم پریفیکس proper رشته‌ی $S$ باشد و هم سافیکس آن.

برای مثال، در رشته‌ی $ababcabab$، رشته‌های $ab$ و $abab$ border هستند.

الگوریتمی با زمان $O(n)$ ارائه دهید که همه‌ی طول‌های borderهای $S$ را پیدا کند.
</div>


## سوال ۱۶ — تعداد Borderهای هر پریفیکس { #problem-kmp-4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. برای هر پریفیکس $S[1..i]$، تعداد borderهای proper آن را حساب کنید.

برای مثال، اگر $S = ababab$ باشد، پریفیکس $S[1..6] = ababab$ دو border با طول‌های $2$ و $4$ دارد.

الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


## سوال ۱۷ — شمارش پریفیکس‌ها { #problem-kmp-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. برای هر پریفیکس $S$، حساب کنید چند بار در کل رشته‌ی $S$ آمده است.

برای مثال، در رشته‌ی $ababab$، پریفیکس $ab$ سه بار آمده است.

الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - متین غیاثی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q17-solution-video.mkv"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q17-solution-notes.pdf">slide.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۸ — پالیندروم کوتاه { #problem-kmp-6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. می‌خواهیم با اضافه کردن چند کاراکتر به ابتدای $S$، آن را به پالیندروم تبدیل کنیم.

کمترین تعداد کاراکتر لازم را پیدا کنید، یا خود کوتاه‌ترین رشته‌ی نهایی را بسازید.

برای مثال، برای $S = abcd$، یکی از جواب‌ها $dcbabcd$ است.

الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


## سوال ۱۹ — رشته‌ی تکراری { #problem-kmp-7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. بررسی کنید آیا می‌شود $S$ را از چند بار تکرار یک رشته‌ی کوتاه‌تر ساخت یا نه.

برای مثال، رشته‌ی $ababab$ از تکرار $ab$ ساخته شده، ولی $ababa$ چنین حالتی ندارد.

الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


## سوال ۲۰ — شیفت‌های معتبر { #problem-kmp-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده است. عدد $p$ را معتبر می‌گوییم اگر برای هر جایگاه $i$ که هر دو جایگاه $i$ و $i+p$ داخل رشته هستند، داشته باشیم $S_i = S_{i+p}$.

همه‌ی مقدارهای معتبر $p$ را پیدا کنید.

الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - فاطمه پرویزی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q20-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q20-solution-notes.pdf">20.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۱ — شیفت دوری { #problem-kmp-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $A$ و $B$ با طول برابر داده شده‌اند. بررسی کنید آیا می‌توان با یک شیفت دوری روی $A$، به رشته‌ی $B$ رسید یا نه.

برای مثال، اگر $A = abcde$ و $B = cdeab$ باشد، جواب مثبت است.

به کمک KMP الگوریتمی با زمان $O(n)$ ارائه دهید.
</div>


## سوال ۲۲ — چند کپی با کمترین طول { #problem-kmp-11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $P$ و یک عدد $k$ داده شده‌اند. می‌خواهیم کوتاه‌ترین رشته‌ای را بسازیم که شامل $k$ کپی از $P$ باشد.

کپی‌ها می‌توانند روی هم بیفتند. برای مثال، اگر $P = aba$ و $k = 3$ باشد، رشته‌ی $abababa$ شامل سه کپی از $P$ است.

الگوریتمی با زمان $O(|P| + k)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ثنا نیرومند</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q22-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q22-solution-notes.pdf">solution.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۳ — کوتاه‌ترین Superstring دو رشته { #problem-kmp-12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $A$ و $B$ داده شده‌اند. کوتاه‌ترین رشته‌ای را پیدا کنید که هر دو رشته‌ی $A$ و $B$ را به عنوان substring داشته باشد.

اگر یکی از رشته‌ها از قبل داخل دیگری آمده باشد، همان رشته‌ی بزرگ‌تر می‌تواند جواب باشد. اگر چند جواب با طول برابر وجود داشت، یکی از آن‌ها کافی است.

الگوریتمی با زمان $O(|A| + |B|)$ ارائه دهید.
</div>


## سوال ۲۴ — Camp Schedule { #problem-kmp-13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی کاراکتر `0` و تعدادی کاراکتر `1` در اختیار داریم. همچنین یک رشته‌ی هدف $T$ که فقط از `0` و `1` ساخته شده داده شده است.

می‌خواهیم با این کاراکترها یک رشته بسازیم که تعداد دفعات آمدن $T$ در آن تا حد ممکن زیاد باشد.

الگوریتمی ارائه دهید که چنین رشته‌ای را بسازد.
</div>


## سوال ۲۵ — DFA مربوط به KMP { #problem-kmp-14 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی الگو $P$ و یک الفبا $\Sigma$ داده شده‌اند. برای هر state از $0$ تا $|P|$ و هر کاراکتر $c \in \Sigma$، مشخص کنید اگر در آن state کاراکتر $c$ را بخوانیم، به کدام state می‌رویم.

الگوریتمی با زمان $O(|P| \cdot |\Sigma|)$ ارائه دهید.
</div>


## سوال ۲۶ — بلاک تکراری { #problem-kmp-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک الگو $P$، یک رشته‌ی $B$ و یک عدد بزرگ $k$ داده شده‌اند. رشته‌ی $B^k$ یعنی $B$ را $k$ بار پشت سر هم بنویسیم.

تعداد دفعات آمدن $P$ در $B^k$ را حساب کنید، بدون اینکه لازم باشد خود رشته‌ی $B^k$ را کامل بسازید.

الگوریتمی ارائه دهید که برای $k$های بزرگ هم کار کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد اسماعیلی مرندی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q26-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q26-solution-notes.pdf">Pattern_in_Periodic_String.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۷ — آلیس { #problem-kmp-17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

چند رشته‌ی $G_1, G_2, \dots, G_n$ تعریف شده‌اند. هر $G_i$ یا مستقیم یک رشته‌ی معمولی $S_i$ است، یا از چسباندن دو رشته‌ی قبلی ساخته شده است:

$G_i = G_j \cdot G_k$

یک الگو $P$ و یک اندیس $q$ داده شده‌اند. تعداد دفعات آمدن $P$ را در $G_q$ حساب کنید، بدون اینکه لازم باشد $G_q$ را کامل بسازید.

الگوریتمی ارائه دهید که از ساختن رشته‌های خیلی بزرگ جلوگیری کند.
</div>


## سوال ۲۸ — باب { #problem-kmp-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو الگوی $A$ و $B$ داده شده‌اند. کوتاه‌ترین رشته‌ای را پیدا کنید که شامل $A$ باشد، ولی شامل $B$ نباشد.

اگر چنین رشته‌ای وجود نداشت، اعلام کنید.

الگوریتمی کارا ارائه دهید.
</div>


## سوال ۲۹ — چارلی { #problem-kmp-19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک الگو $P$، یک عدد $L$، و یک state هدف $q$ از DFA مربوط به KMP داده شده‌اند.

کوچک‌ترین رشته از نظر لغوی را پیدا کنید که طولش $L$ باشد و اگر آن را با DFA مربوط به $P$ پردازش کنیم، در پایان به state $q$ برسیم.

اگر چنین رشته‌ای وجود نداشت، اعلام کنید.
</div>


## پیشرفته


## سوال ۳۰ — BigPetr { #problem-hash-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $W$ و $S$ داده شده‌اند. می‌خواهیم تمام زیررشته‌های $S$ با طول $|W|$ را بررسی کنیم و فقط زیررشته‌هایی را درنظر داریم که یک جایگشت از $W$ باشند؛ یعنی دقیقاً همان کاراکترهای $W$ را با همان تعداد تکرار داشته باشند، اما ترتیب کاراکترها می‌تواند متفاوت باشد.

از میان این زیررشته‌های معتبر، رشته‌ای را پیدا کنید که بیشترین تعداد تکرار را در $S$ دارد. اگر چند زیررشته‌ی معتبر با بیشترین تعداد تکرار وجود داشتند، زیررشته‌ای را انتخاب کنید که از نظر ترتیب لغت‌نامه‌ای کوچک‌تر است.

اگر هیچ زیررشته‌ی معتبری در $S$ وجود نداشت، نبود جواب را گزارش کنید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## سوال ۳۱ — Petr { #problem-hash-6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $t$ و دو رشته‌ی $s_{begin}$ و $s_{end}$ داده شده‌اند. می‌خواهیم در $O(N^2.log(N)) $ تعداد زیررشته‌های متمایز از $t$ را بشماریم که با $s_{begin}$ شروع می‌شوند و با $s_{end}$ پایان می‌یابند.

دو زیررشته زمانی متفاوت در نظر گرفته می‌شوند که محتوای آن‌ها با هم فرق داشته باشد؛ بنابراین اگر یک زیررشته‌ی یکسان در چند جای مختلف از $t$ ظاهر شده باشد، فقط یک بار شمرده می‌شود.

توجه کنید که ممکن است $s_{begin}$ و $s_{end}$ با هم برابر باشند یا در یک زیررشته روی هم افتادگی داشته باشند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سبحان آرام</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q31-solution-video.mp4"></video></div>


</details>


## سوال ۳۲ — رشته دو بعدی { #problem-hash-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ماتریس بزرگ از کاراکترها و یک الگوی دوبعدی کوچک‌تر داده شده است. هدف این است که در بهترین مرتبه‌ زمانی که می‌توانید تمام مکان‌هایی را پیدا کنید که الگو دقیقاً در ماتریس بزرگ ظاهر شده است.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - رسا محمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q32-solution-video.mkv"></video></div>


</details>


## سوال ۳۳ — دو‌قلو‌ها { #problem-hash-7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی اجتماعی شامل $n$ پروفایل داریم که با شماره‌های $1$ تا $n$ مشخص شده‌اند. بعضی از پروفایل‌ها با هم دوست هستند. رابطه‌ی دوستی دوطرفه است؛ یعنی اگر پروفایل $i$ با پروفایل $j$ دوست باشد، پروفایل $j$ نیز با پروفایل $i$ دوست است.

دو پروفایل متفاوت $i$ و $j$ را دوقلو می‌نامیم اگر برای هر پروفایل دیگر $k$، که $k \neq i$ و $k \neq j$ باشد، یکی از دو حالت زیر برقرار باشد:

پروفایل $k$ با هر دو پروفایل $i$ و $j$ دوست باشد.
پروفایل $k$ با هیچ‌کدام از پروفایل‌های $i$ و $j$ دوست نباشد.

توجه کنید که خود پروفایل‌های $i$ و $j$ می‌توانند با هم دوست باشند یا نباشند؛ این موضوع در دوقلو بودن آن‌ها تأثیری ندارد.

هدف این است که در $O(N.log(N) + M.log(N))$ تعداد زوج‌های نامرتب $(i, j)$ را بشمارید که در آن‌ها پروفایل‌های $i$ و $j$ دوقلو هستند. زوج‌ها نامرتب‌اند؛ بنابراین زوج‌های $(i, j)$ و $(j, i)$ یکسان در نظر گرفته می‌شوند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سپهر علیپور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q33-solution-video.mp4"></video></div>


</details>


## سوال ۳۴ — مریخی‌ها { #problem-kmp-24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

پتیا در جریان مطالعه‌ی مریخی‌ها به‌خوبی فهمید که آن‌ها بسیار تنبل هستند. آن‌ها خوابیدن را دوست دارند و از بیدار شدن خوششان نمی‌آید.

فرض کنید یک مریخی دقیقاً $n$ چشم دارد که در یک ردیف قرار گرفته‌اند و از چپ به راست با شماره‌های $1$ تا $n$ شماره‌گذاری شده‌اند. وقتی یک مریخی می‌خوابد، روی هر چشم خود یک چشم‌بند می‌گذارد تا صبح مریخی او را بیدار نکند. در سمت داخلی هر چشم‌بند، یک حرف بزرگ لاتین نوشته شده است. بنابراین وقتی مریخی بیدار می‌شود و همه‌ی چشم‌هایش را باز می‌کند، رشته‌ای $s$ شامل حروف بزرگ لاتین می‌بیند. طول این رشته برابر $n$ است.

زنگ ساعت به صدا درمی‌آید و مریخی بیدار شده است، اما هنوز هیچ‌کدام از چشم‌هایش را باز نکرده است. او احساس می‌کند امروز روز سختی خواهد بود، پس می‌خواهد چشم‌هایش را باز کند و چیز خوبی ببیند.

مریخی فقط $m$ کلمه‌ی مریخی را زیبا می‌داند. از طرفی، برای او سخت است که این‌قدر صبح زود همه‌ی چشم‌هایش را یک‌باره باز کند. بنابراین او دو بخش جدا از هم و غیرهم‌پوشان از چشم‌های متوالی خود را باز می‌کند.

به‌طور دقیق‌تر، مریخی چهار عدد $a$، $b$، $c$ و $d$ را انتخاب می‌کند، به‌طوری‌که:

$1 \le a \le b < c \le d \le n$

سپس همه‌ی چشم‌هایی را باز می‌کند که شماره‌ی آن‌ها $i$ باشد و یکی از دو شرط زیر را داشته باشند:

$a \le i \le b$

یا

$c \le i \le d$

بعد از باز کردن این چشم‌ها، مریخی همه‌ی کاراکترهای قابل‌مشاهده را از چپ به راست می‌خواند و در نتیجه یک کلمه می‌بیند.

تمام کلمات متفاوتی را در نظر بگیرید که مریخی می‌تواند صبح ببیند. وظیفه‌ی شما این است که مشخص کنید چند کلمه‌ی زیبا در میان آن‌ها وجود دارد.
</div>


## سوال ۳۵ — خرس‌ها و فیل‌ها { #problem-kmp-23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

خرس‌های قطبی Menshykov و Uslada از باغ‌وحش سن‌پترزبورگ و فیل Horace از باغ‌وحش کی‌یف، تعداد زیادی مکعب چوبی پیدا کردند. آن‌ها شروع کردند به ساختن برج‌های مکعبی، به این صورت که مکعب‌ها را روی هم قرار می‌دادند. چند برج که در یک ردیف کنار هم قرار گرفته باشند، یک دیوار را تشکیل می‌دهند. یک دیوار می‌تواند شامل برج‌هایی با ارتفاع‌های مختلف باشد.

Horace زودتر از بقیه ساخت دیوار خود را تمام کرد و نام دیوارش را «فیل» گذاشت. دیوار او از $w$ برج تشکیل شده است. خرس‌ها هم دیوار خود را ساختند، اما برای آن نامی انتخاب نکردند. دیوار خرس‌ها از $n$ برج تشکیل شده است.

اکنون Horace به دیوار خرس‌ها نگاه می‌کند و می‌خواهد بداند در چند قسمت از این دیوار می‌تواند «فیل» خود را ببیند.

او می‌تواند در یک بخش شامل $w$ برج متوالی از دیوار خرس‌ها، یک فیل ببیند اگر دنباله‌ی ارتفاع برج‌های آن بخش، با دنباله‌ی ارتفاع برج‌های دیوار Horace مطابقت داشته باشد.

با این حال، Horace می‌تواند برای دیدن فیل‌های بیشتر، دیوار خودش را بالا یا پایین ببرد. حتی می‌تواند دیوار خود را تا پایین‌تر از سطح زمین هم پایین ببرد. بنابراین مهم نیست ارتفاع‌ها دقیقاً برابر باشند؛ بلکه کافی است شکل کلی دنباله‌ی ارتفاع‌ها، با یک جابه‌جایی عمودی ثابت، یکسان باشد.

وظیفه‌ی شما این است که الگوریتمی از $O(n+w)$ ارائه دهید که تعداد بخش‌هایی از دیوار خرس‌ها را بشمارد که Horace می‌تواند در آن‌ها «فیل» خود را ببیند.
</div>


## سوال ۳۶ — شکل یکسان { #problem-kmp-10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو آرایه‌ی عددی $A$ و $B$ داده شده‌اند. می‌خواهیم همه‌ی جاهایی را پیدا کنیم که $B$ با همان شکل کلی داخل $A$ آمده است؛ یعنی اگر همه‌ی اعضای $B$ به اندازه‌ی یک مقدار ثابت بالا یا پایین بروند، هنوز همان حالت حساب شود.

برای مثال، اگر $B = [3, 5, 8]$ باشد، دنباله‌ی $[10, 12, 15]$ هم همان شکل حساب می‌شود.

الگوریتمی با زمان $O(n + m)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد محمودیه</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q36-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q36-solution-notes.pdf">DA_Q37_HW5_Solution.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۷ — شکستن الگو { #problem-kmp-15 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $S$ و $T$ داده شده‌اند. بررسی کنید آیا می‌توان $T$ را به دو بخش $A$ و $B$ شکست، طوری که $T = AB$ و رشته‌ی $S$ به شکل زیر باشد:

$*A*B*$

یعنی اول $A$ جایی در $S$ آمده باشد و بعد از آن، $B$ هم جایی در ادامه‌ی $S$ آمده باشد. بینشان هر چیزی می‌تواند باشد.

الگوریتمی کارا ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدیار مستشار</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q37-solution-video.mp4"></video></div>


</details>


## سوال ۳۸ — دیوید { #problem-kmp-20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک الگوی ممنوع $P$، یک عدد $n$، و یک الفبا $\Sigma$ داده شده‌اند.

تعداد رشته‌های طول $n$ روی الفبای $\Sigma$ را حساب کنید که اصلاً شامل $P$ نباشند.

الگوریتمی با استفاده از DFA مربوط به KMP ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سیده شقایق میرجلیلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q38-solution-video.mov"></video></div>


</details>


## سوال ۳۹ — ایو { #problem-kmp-21 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک رشته‌ی $S$ داده شده که بعضی از کاراکترهای آن `?` هستند. همچنین یک الگو $P$ داده شده است.

هر `?` را می‌توان با یکی از حروف الفبا جایگزین کرد. جایگذاری‌ای پیدا کنید که تعداد دفعات آمدن $P$ در رشته‌ی نهایی بیشینه شود.

الگوریتمی ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - شایان سبزی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q39-solution-video.mp4"></video></div>


</details>


## سوال ۴۰ — LCS بدون الگوی ممنوع { #problem-kmp-22 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته‌ی $A$ و $B$ و یک الگوی ممنوع $P$ داده شده‌اند.

می‌خواهیم بلندترین common subsequence از $A$ و $B$ را پیدا کنیم که شامل $P$ به عنوان substring نباشد.

الگوریتمی ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سبحان بهزادی‌پور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q40-solution-video.mp4"></video></div>


</details>
