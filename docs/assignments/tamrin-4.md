# تمرین ۴




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


## سوال ۱ — زیردرخت فراگیر با کمینه ضرب { #problem-min-multiply .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-multiply" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف وزن‌دار $G$ داریم که وزن هر یال آن عددی طبیعی است. وزن یک زیردرخت فراگیر را برابر با حاصل‌ضرب وزن یال‌های آن تعریف می‌کنیم. الگوریتمی با پیچیدگی زمانی  $\mathcal{O}(n + mlog(n))$ ارائه دهید که زیردرخت فراگیر با کمینه وزن را پیدا کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۲ — کمینه زیردرخت فراگیر آرایه { #problem-array-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="array-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ داریم که مقدار خانه $i$ ام آن برابر با $a_i$ است. از روی این آرایه یک گراف کامل بدون‌جهت وزن‌دار $n$ راسی به اسم $G$ می‌سازیم و وزن یال بین دو راس $i , j$ را برابر با $a_i + a_j$ قرار می‌دهیم. الگورتیمی با پیچیدگی زمانی $\mathcal{O}(n)$ ارائه دهید که MST این گراف را پیدا کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۳ — درخت پر جنب و جوش <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-decreasing-mst .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="decreasing-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف بدون جهت و وزن‌دار $G$ و درخت پوشای کمینه‌ی آن داده شده است. می‌خواهیم یک یال به این گراف اضافه کنیم. الگوریتمی ارائه دهید که در زمان $O(V)$ درخت پوشای کمینه گراف جدید را محاسبه کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۴ — درخت پوشا بازگشتی { #problem-recursive-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="recursive-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

پروفسور بوردن یک الگوریتم جدید تقسیم و غلبه را برای محاسبه درختان پوشای کمینه پیشنهاد می‌کند که به شرح زیر است:

به شما یک گراف $G = (V,E)$ داده شده است. دسته $V$ از رئوس را به دو دسته $V_1$ و $V_2$ تقسیم کنید به صورتی که حداکثر اختلاف بین $|V_1|$ و $|V_2|$ برابر $1$ باشد. $E_1$ را مجموعه‌ای از یال‌هایی قرار دهید که فقط مجاور رئوس در $V_1$ و $E_2$ هم مجموعه‌ای از یال‌هایی باشند که فقط مجاور رئوس در $V_2$ هستند. به صورت بازگشتی یک مسئله درخت پوشای کمینه را روی هر یک از دو زیرگراف $G_1 = (V_1,E_1)$ و $G_2 = (V_2,E_2)$ حل کنید. در نهایت، یال با کمترین وزن در $E$ را انتخاب کنید که از برش $(V_1,V_2)$ عبور می‌کند و این یال را برای تبدیل کردن دو درخت پوشای کمینه به دست آمده به یک درخت پوشا استفاده کنید.

استدلال کنید که الگوریتم یک درخت پوشای کمینه از $G$ به درستی محاسبه می‌کند، یا مثالی ارائه کنید که الگوریتم برای آن شکست بخورد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۵ — وزن‌های یکتا، زیردرخت یکتا! { #problem-unique-weights-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-weights-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف وزن‌دار $G$ داریم که وزن هر یال آن عددی مثبت است. همچنین وزن هیچ دو یالی یکسان نیست. ثابت کنید که درخت فراگیر کمینه در این گراف یکتا مشخص می‌شود.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۶ — درست یا نادرست! <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-true-false .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="true-false" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

درستی یا نادرستی گزاره‌های زیر را مشخص کنید! برای گزاره‌های درست اثبات و برای گزاره‌های نادرست مثال نقض ارائه دهید.

برای هر مورد کافیه تو حداکثر ۲ جمله به هسته‌ی اثبات اشاره کنید. سخت نگیرید.

فرض کنید $G$ یک گراف بدون جهت $n$ راسی و $m$ یالی و همبند باشد. وزن یال‌ها می‌تواند یکسان باشد مگر اینکه در گزاره‌ای خلاف آن ذکر شده باشد.

 1. اگر $n \leq m$ باشد و یال با وزن بیشینه در گراف $G$ یکتا باشد، آنگاه این یال بیشینه در هیچ زیردرخت فراگیر کمینه‌ای ظاهر نمی‌شود.
 2. اگر یال بیشینه گراف $G$ یکتا باشد و این یال در حداقل 1 دور ظاهر شده باشد آنگاه این یال بیشینه در هیچ زیردرخت فراگیر کمینه‌ای ظاهر نمی‌شود.
 3. فرض کنید $e$ یک یال با وزن کمینه در $G$ باشد(لزومی ندارد تنها یال با وزن کمینه باشد). در این صورت این یال در تمام زیردرخت‌های فراگیر $G$ ظاهر می‌شود.
 4. اگر یال با وزن کمینه در $G$ یکتا باشد، آنگاه این یال حتما در تمام زیردرخت‌های فراگیر $G$ ظاهر می‌شود.
 5. الگوریتم PRIM در حالتی که وزن یال‌ها منفی باشد هم درست کار می‌کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۷ — آب { #problem-water .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="water" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $n$ ظرف در یک ردیف قرار دارند. ظرف $i$ ام گنجایش $a[i]$ دارد.  
در ابتدا تمام ظرف‌ها خالی هستند.

دو نوع عملیات باید پشتیبانی شود:

1. **ریختن آب**: مقدار $x$ واحد آب به ظرف $p$ اضافه کن.  
   اگر مجموع آب موجود در ظرف $p$ به‌همراه $x$ از گنجایش $a[p]$ بیشتر شود،  
   مقدار اضافی (سرریز) به طور خودکار به ظرف بعدی ($p+1$) منتقل می‌شود.  
   این سرریز به همین ترتیب تا جایی ادامه می‌یابد که یا آب اضافی تمام شود، یا به ظرف آخر ($n$) برسیم.  
   سرریز از ظرف آخر روی زمین می‌ریزد (از دست می‌رود).

2. **پرسش**: مقدار فعلی آب درون ظرف $k$ را گزارش کن.

هدف: طراحی الگوریتمی با **$O((n + m) \log n)$** که $m$ تعداد کل عملیات‌ها است.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">dsu</span></span></div>


## سوال ۸ — پوشش‌دوری { #problem-cycle-covering .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="cycle-covering" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک گراف بدون‌جهت وزن‌دار داده شده است. مجموعه $F$ یک مجموعه پوشش‌دوری گفته می‌شود اگر به ازای هر دور در گراف، حداقل یکی از یال‌های دور در $F$ حضور داشته باشد. الگوریتمی با زمان اجرای چندجمله‌ای ارائه دهید که مجموعه $F$‌با مجموع وزن کمینه را پیدا کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد مهدی سیاوشی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/cycle-covering/solution/2026-06-17T130014Z0000/VID_20260617_161944_531.mp4"></video></div>


</details>


## سوال ۹ — وزن محدود { #problem-bounded-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bounded-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف همبند وزن دار $G$ با $n$ راس و $m$ یال داریم که در آن وزن هر یال عددی طبیعی بین $1$ و $K$ است. الگوریتمی بهینه برای پیدا کردن کمینه درخت پوشا ارائه دهید.

مرتبه زمانی الگوریتم خود را بر حسب پارامتر های $n$, $m$ و $K$ بررسی کنید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - بهار برقبانی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/bounded-mst/solution/2026-06-16T070700Z0000/da-record.mp4"></video></div>


</details>


## سوال ۱۰ — برووکا <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-boruvka .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="boruvka" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $G$ یک گراف وزن‌دار $n$ راسی و $m$ یالی باشد. به ازای هر راس $v$، یال‌های متصل به آن را در نظر بگیرید و بین این یال‌ها، یالی که کمینه وزن را دارد را $mn_v$ بنامید. برای سادگی فرض کنید که وزن یال‌ها متمایز است.

1. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n + m)$ ارائه دهید که برای تمام رئوس $v$ مقدار $mn_v$ را محاسبه کند.
2. ثابت کنید مجموعه یال‌های $mn_v$ تشکیل دور نمی‌دهند. (این مجموعه یال‌ها را $M$ بنامید.)
3. ثابت کنید یال‌های $M$ در MST ظاهر می‌شوند. یعنی حداقل یک MST وجود دارد که شامل $M$ باشد.
4.  مولفه‌های همبندی‌ای که یال‌های $M$ می‌سازند را در نظر بگیرید و رئوس هر مولفه را ادغام کنید (هر مولفه را یک راس در نظر بگیرید) و یال‌هایی که دو سر آن‌ها درون یک مولفه همبندی‌ست را حذف کنید. این عملیات را به طور بازگشتی تکرار کنید تا زمانی که به ۱ راس برسیم.
5. مختصرا اثبات کنید اجتماع یال‌های انتخاب شده در هر مرحله یک MST از گراف اولیه را می‌سازند.
6. پیچیدگی زمانی این الگوریتم از چه اردری است؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۱۱ — مجموع فاصله‌ها { #problem-sum-of-distances .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="sum-of-distances" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف وزن‌دار $G$ داریم که وزن هر یال آن عددی طبیعی است. فاصله بین دو راس $u , v$ (که آن را با  $dis(u , v)$ نمایش می‌دهیم) را برابر با کمینه مقدار $w$ تعریف می‌کنیم که بتوان با طی کردن یال‌های با وزن حداکثر $w$ از راس $u$ به $v$ رسید. همچنین مقدار $dis(u , u) = 0$ در نظر می‌گیریم.

الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n + mlog(n))$ ارائه دهید که مجموع فاصله تمام جفت راس‌ها را محاسبه کند.
(جفت‌های $(u , v) , (v , u)$ را یکسان در نظر بگیرید.)
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - امیرحسین اسفندیاری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/sum-of-distances/solution/2026-06-14T124705Z0000/2026-06-14-15-37-41.mkv"></video></div>


</details>


## سوال ۱۲ — بیشینه تطابق گراف دوبخشی <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-bipartite-matching .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="bipartite-matching" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $G$ یک گراف دوبخشی باشد. روشی بر پایه‌ی الگوریتم بیشینه‌شار ارائه دهید که بزرگ‌ترین تطابق در $G$ را پیدا کند.

به زیرمجموعه‌ای از یال‌های $G$ تطابق می‌گوییم اگر هیچ دو یالی در آن مجاور نباشند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

از روی گراف ورودی گرافی بسازید که شار بیشینه‌ش به اندازه‌ی ماکسیمم مچینگ گراف ورودی باشه.

</details>


## سوال ۱۳ — جفت خوب { #problem-good-pair .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="good-pair" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ عدد طبیعی داریم. به یک جفت $(a, b)$ از اعداد خوب می‌گوییم اگر نسبت به هم اول باشند و یک $c$ وجود داشته باشد که $a^2 + b^2 = c^2$ باشد. الگوریتم چندجمله‌ای ارائه دهید که بررسی کند ایا میتوانیم اعداد را به 
‫$\frac{n}{2}$
‫جفت خوب افراز کنیم یا خیر. منظور از افراز این است که هر عدد در دقیقا یکی از جفت‌ها آمده باشد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدمهدی فراهانی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/good-pair/solution/2026-06-14T153622Z0000/1000001322.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/good-pair/solution/2026-06-14T153622Z0000/DA_PR01_400170341.pdf">DA_PR01_400170341.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۴ — کمینه بیشینه هزینه k-شار { #problem-min-max-cost-k-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-max-cost-k-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

‫فرض کنید یک شبکه $G$ به شما داده شده است به طوری که هر یال ظرفیت محدود و یک هزینه‌ای دارد. می‌خواهیم یک شار با مقدار $k$ پیدا کنیم به طوری که هزینه آن کمینه باشد. هزینه یک شار برابر با بیشینه هزینه یال‌هایی هست که جریان گذرنده از آنها صفر نیست.

یک الگوریتم چندجمله‌ای ارائه دهید که کمینه هزینه را بدست آورد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محسن زارع</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/min-max-cost-k-flow/solution/2026-06-16T103140Z0000/DA_14.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/min-max-cost-k-flow/solution/2026-06-16T103140Z0000/Answer.pdf">Answer.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۵ — مسیر مجزا { #problem-disjoint-path .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="disjoint-path" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف $G$ داریم که در آن دو راس $s$ و $t$ مشخص شده است. الگوریتمی چندجمله‌ای ارائه دهید که بیشترین تعداد مسیری که از $s$ به $t$ باشند و هر راس به جز شروع و پایان در حداکثر یک مسیر آمده باشد را پیدا کنید.

حال فرض کنید یک راس می‌تواند در چند مسیر باشد ولی هر یال در حداکثر یک مسیر می‌تواند باشد. حال برای این حالت نیز الگوریتمی چند جمله‌ای ارائه دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - کیان تراکمه</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/disjoint-path/solution/2026-06-15T125628Z0000/da.webm"></video></div>


</details>


## سوال ۱۶ — شار افزایشی { #problem-increasing-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="increasing-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $G=(V,E)$ یک گراف جهت‌دار باشد  که ظرفیت‌ هر یال یک عدد مثبت  صحیح است و در ضمن این گراف دارای یک مبدا $s$ و یک مقصد $t$ می‌باشد. فرض کنید شار بیشینه این شبکه مشخص است. در واقع می‌دانیم در شار بیشینه از هر یال چه میزان جریان عبور می‌کند. ظرفیت یکی از یال‌های $G$ را یک واحد کاهش می‌دهیم. الگوریتمی از مرتبه $O(n+m)$ ارائه دهید تا شار بیشینه گراف جدید را محاسبه کند که $n$ و $m$ تعداد رئوس و تعداد یال‌های گراف است. درستی الگوریتم خود را اثبات کنید.

حال سوال را دوباره به ازای حالتی که به جای افزایش یک واحدی کاهش یک واحدی داشته باشیم، حل کنید.

اگر ظرفیت یال‌ها علاوه بر اعداد صحیح می‌توانستند اعداد حقیقی مثبت باشند چطور‌؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدی شیرین بیان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/increasing-flow/solution/2026-06-15T121349Z0000/out3.mp4"></video></div>


</details>


## سوال ۱۷ — برادر { #problem-brother .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="brother" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

ممد و علی دو برادر دوقلو هستند که در یک خانه زندگی می‌کنند و به یک مدرسه می‌‌روند. از آنجایی که دوست‌ندارند با یکدیگر در خیابان‌ها اشتباه‌گرفته‌شوند، تصمیم‌گرفته‌اند که در مسیر خانه به مدرسه‌شان از خیابان‌هایی گذرکنند که اشتراکی با دیگری نداشته‌باشد (توجه‌کنید که می‌توانند از یک تقاطع گذرکنند). 
هم‌چنین از آنجایی که هیچ‌کدام نمی‌خواهند طول مسیرشان را بلندتر کنند، هر دو می‌خواهند از مسیری بروند که کمترین تعداد خیابان ممکن را داشته‌باشد.

اگر شهر آن‌ها $n$ تقاطع و $m$ خیابان داشته‌باشد و خانه و مدرسه‌شان هم خودشان یک تقاطع باشند، الگوریتمی از زمان چند‌جمله‌ای برای پیداکردن ۲ مسیر که دلخواه این دو برادر باشند پیدا کنید.
ممکن است ۲ مسیر مجزا یالی با طول‌های کمینه موجود نباشد که در آن صورت الگوریتم باید تشخیص‌بدهد که چنین‌کاری امکان‌پذیر نیست.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدامین فخری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/brother/solution/2026-06-21T172600Z0000/petal_20260621_022328.mp4"></video></div>


</details>


## سوال ۱۸ — تورنومنت شطرنج { #problem-chess-tour .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="chess-tour" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در مسابقات شطرنج هر ۲ بازیکن با یکدیگر مسابقه می‌دهند و هر بازیکن در صورت برد هر بازی ۲ امتیاز، در صورت تساوی ۱ امتیاز و در صورت باخت صفر امتیاز می‌گیرد. گری کاسپاروف، در دفترچه‌ی خاطراتش همواره جدول نهایی امتیازات مسابقات را به‌ترتیبِ امتیاز نوشته است، ولی علاقه‌ای به نوشتن ریز نتایج بازی‌ها نداشته است.

هدف ما این است که ببینیم این نوشته‌ها حقیقی هستند یا خیر. برای این کار می‌خواهیم ببینیم که آیا جدولی از نتایج مسابقات وجود دارد که جدول امتیازات نوشته‌شده متعلق به آن باشد؟

فرض‌کنید تعداد بازیکن‌ها برابر $n$ است، برای پیداکردن چنین جدولی الگوریتمی از زمان چند‌جمله‌ای  ارائه‌دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Negar yarahmadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/chess-tour/solution/2026-06-16T164914Z0000/chess.mkv"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/chess-tour/solution/2026-06-16T164914Z0000/18_chessProblem.pdf">18_chessProblem.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۹ — برش کمینه یا شار بیشینه؟ <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-min-cut .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="min-cut" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در گراف زیر یک شار بیشینه از $s$ به $t$ پیدا کنید.

![flow graph](../assets/images/flow-network-light.svg#only-light)
![flow graph](../assets/images/flow-network-dark.svg#only-dark)

سپس یک برش کمینه برای $s$ و $t$ ارائه دهید.
</div>


## سوال ۲۰ — پروژه { #problem-project .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="project" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

به محمد $n$ پروژه ساختمانی پیشنهاد شده است. می‌دانیم که انجام پروژه $i$ برای او $A_i$ واحد سود دارد. البته ممکن است که این عدد منفی باشد که نشان از ضرر است.

برای انجام بعضی از پروژه‌ها لازم است تا قبل از آن مجموعه خاصی از پروژه‌ها انجام شده باشد. به طور دقیق‌تر $m$ رابطه پیش‌نیازی بین پروژه‌ها داریم. اگر این روابط را با گراف جهتدار مدل کنیم، گراف حاصل بدون دور خواهد بود.

 حال به محمد کمک کنید تا تعدادی از پروژه ها را انتخاب کند تا انجام دهد که سودش بیشینه شود و شرط‌های پیش‌نیازی نیز برقرار باشد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ثنا نیرومند</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/project/solution/2026-06-16T185930Z0000/4312506121625840054.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/project/solution/2026-06-16T185930Z0000/solution.pdf">solution.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۱ — رستوران { #problem-restaurant .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="restaurant" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در رستوران تازه تاسیس خرس، سرآشپز لیستی از $n$ غذا و $m$ ماده اولیه آماده کرده است. به ازای هر غذا مواد مورد نیاز برای تهیه آن را می‌دانیم. به ازای هر غذا اگر در منو قرار گیرد، در مجموع $A_i$ دلار سود می‌کنیم. اگر ماده اولیه $i$ در یکی از غذاهای منو نیاز باشد، برای تهیه آن باید $B_i$ دلار هزینه کنیم. توجه کنید که اگر یک ماده در چند غذا مورد نیاز باشد، تنها یکبار آن را تهیه میکنیم.

حال شما باید بیشینه سود ممکن این رستوران در صورتی که منو خود را بهینه انتخاب کند پیدا کنید. الگوریتم شما باید از مرتبه زمانی الگوریتم محاسبه بیشینه شار باشد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نرگس کاری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/restaurant/solution/2026-06-16T205527Z0000/Screen-Recording-2026-06-17-000952.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/restaurant/solution/2026-06-16T205527Z0000/Maximizing-Menu-Profit.pdf">Maximizing-Menu-Profit.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۲ — تنگنای کمینه { #problem-minimum-bottleneck .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="minimum-bottleneck" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شبکه‌ای متشکل از $n$ رأس، و دو رأس معین $s$ و $t$ از این شبکه داده شده است. 
فرض کنید ظرفیت تمام یال‌های شبکه نامتناهی است.
به ازای یک شار $f$ از  $s$ به $t$، یالی که بیش‌ترین شار از آن عبور می‌کند را یال تنگنا، 
و مقدار شار عبوری از آن یال را «تنگنای» شار $f$ می‌نامیم.
می‌خواهیم به ازای یک مقدار صحیح $C$ داده‌شده، شاری با مقدار $C$ را با کم‌ترین تنگنا از $s$ به $t$ منتقل کنیم.
با چند بار استفاده از الگوریتم فورد-فالکرسن می‌توان این شار را به دست آورد؟
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - رادین بهارصفت</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/minimum-bottleneck/solution/2026-06-17T203532Z0000/Org2.mp4"></video></div>


</details>


## سوال ۲۳ — آندو‌دار { #problem-dsu-undo .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="dsu-undo" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف بدون‌جهت با $n$ رأس داریم. در ابتدا هیچ یالی در گراف وجود ندارد. سپس $q$ عملیات از یکی از سه نوع زیر داده می‌شود:

- `add u v`: یال $(u,v)$ را به گراف اضافه کن.
- `undo`: آخرین عملیات `add` را که هنوز برگردانده نشده است، برگردان.
- `ask u v`: بگو آیا $u$ و $v$ در یک مؤلفه‌ی همبند هستند یا نه.

فرض کنید هر بار که عملیات `undo` داده می‌شود، حداقل یک عملیات `add` وجود دارد که هنوز `undo` نشده است.

الگوریتمی ارائه دهید که به همه‌ی پرسش‌های `ask` پاسخ دهد و پیچیدگی زمانی کل آن $O(n + q \log n)$ باشد.
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

DSU

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - صبا خانمحمدی ابهری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/dsu-undo/solution/2026-06-16T165422Z0000/DA_Q23.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/dsu-undo/solution/2026-06-16T165422Z0000/Q_23.pdf">Q_23.pdf</a></li></ul></div>
</div>


</details>


## پیشرفته


## سوال ۲۴ — MST در صفحه { #problem-2d-plane-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="2d-plane-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $n$ نقطه در صفحه داشته باشیم. می‌خواهیم پاره‌خط واصل بین $n - 1$ جفت از این نقاط را رسم کنیم به طوری که از هر کدام از این نقاط تنها با طی کردن پاره‌خط‌های رسم شده بتوان به تمام نقاط دیگر رسید و همچنین مجموع طول پاره‌خط‌های رسم شده کمینه باشد.

ثابت کنید که در این حالت هیچ دو پاره‌خطی همدیگر را قطع نمی‌کنند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - فاطیما تیمارچی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/2d-plane-mst/solution/2026-06-12T181433Z0000/video_question_24.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/2d-plane-mst/solution/2026-06-12T181433Z0000/question_24.pdf">question_24.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۵ — یکتایی MST { #problem-unique-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف همبند $G=(V,E)$ را در نظر بگیرید. به ازای هر کات $(A,B)$ سبکترین‌ یال(ها) که یک سر آن در $A$‌  و  دیگری در $B$ است (لزوما این یال یکتا نیست) را داخل مجموعه $E'$ قرار می‌دهیم. ثابت کنید درخت پوشای کمینه $G$  یکتاست اگر و فقط اگر مجموعه یال‌های $E'$ تشکیل یک درخت پوشا دهند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سهیل سیاح ورگ</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/unique-mst/solution/2026-06-16T065851Z0000/25.mp4"></video></div>


</details>


## سوال ۲۶ — امن یا خطرناک { #problem-anti-kruskal .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="anti-kruskal" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک گراف همبند و وزن‌دار $G$ داده شده است. یک یال را امن می‌نامیم اگر در هیچ دوری حضور نداشته باشد. یک یال را خطرناک گوییم اگر  سنگین‌ترین یال در یک دور باشد. به سوال‌های زیر پاسخ دهید.

1. نشان دهید هر یال امن عضو  درخت پوشای کمینه  است و هر یال خطرناک که تنها سنگین‌ترین یال یک دور باشد عضو درخت پوشای کمینه نیست.
2. یک پیاده‌سازی کارا از الگوریتم anti-kruskal ارائه و آن را تحلیل کنید. الگوریتم anti-kruskal بدین شکل عمل می‌کند که یال‌ها را به ترتیب از سنگین‌ترین یال به سبک‌ترین یال پردازش می‌کند. اگر نوبت یال $e$ باشد و این یال، در گراف $G$ یال خطرناک باشد آن را از گراف $G$ حذف می‌کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۲۷ — جی‌پی‌تی { #problem-gpt-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="gpt-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

آقای الف می‌خواهد برای آزمون درس طراحی الگوریتم‌ها آماده شود، او روی یک کاغذ یک گراف 
$n$
راسی 
و 
$m$
یالی همبند کشیده.

برای یادگیری مبحث درخت پوشای کمینه(MST)
او از چت جپت کمک می‌گیرد تا تعدادی زیرمجموعه از یال‌های گراف را به او بدهد. چت جپت در نهایت به آقای الف
$k$
زیرمجموعه از یال‌های گراف(که می‌توانند اشتراک داشته باشند) را می‌دهد به طوری که جمع طول زیر‌مجموعه‌ها برابر 
$s$
است.

در نهایت، آقای الف برای تمرین این مبحث، تصمیم گرفته تا به ازای هر زیرمجموعه بفهمد که آیا درخت پوشای کمینه‌ای در گرافش وجود دارد که شامل تمام یال‌های زیرمجموعه باشد یا نه.

به آقای الف کمک کنید تا الگوریتمی با پیچیدگی زمانی
طرح کند
$\mathcal{O}((s + m) \log (s + m))$
پاسخ این سوال برای همه زیرمجموعه‌ها بدهد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۲۸ — همه یا هیچ‌ کدام { #problem-edges-in-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edges-in-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف وزن دار با $n$ راس و $m$ یال داریم. الگوریتمی با پیچیدگی زمانی $O(nm)$ ارائه دهید  که به ازای هر یال این گراف، مشخص کند در کدام یک از دسته‌های زیر قرار دارد.

1. در تمام درخت‌های فراگیر کمینه‌ی این گراف حضور دارد.
2. در بعضی از درخت‌های فراگیر کمینه حضور دارد اما در بعضی حضور ندارد.
3. در هیچ درخت فراگیر کمینه‌ای حضور ندارد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد بنی‌احمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/edges-in-mst/solution/2026-06-15T151708Z0000/1000063082.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/edges-in-mst/solution/2026-06-15T151708Z0000/HW4_Q28.pdf">HW4_Q28.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۹ — کمینه پوشا برای همه { #problem-mst-for-each-edge .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="mst-for-each-edge" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف وزن دار همبند $G$ را داریم. می‌خواهیم به ازای هر یال آن، کمینه وزن بین زیردرخت‌های فراگیر شامل آن یال را بدست بیاوریم.
 
الگوریتمی از مرتبه زمانی
$\mathcal{O}((n+m) log(n))$
ارائه دهید که جواب را به ازای تمامی یال‌ها محاسبه کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۳۰ — دومین زیردرخت فراگیر کمینه { #problem-2nd-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="2nd-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $G$ یک گراف بدون جهت وزن‌دار باشد. مجموع وزن یال‌های زیردرخت فراگیر کمینه $G$ را  $T$ در نظر بگیرید. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n + mlog(n))$ ارائه دهید که یک زیردرخت فراگیر از $G$ پیدا کند که مجموع وزن یال‌های آن کمینه باشد، اما از $T$ بیشتر باشد. در صورت عدم وجود چنین زیردرختی، عدم آن را گزارش کنید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## سوال ۳۱ — شرکت هرمی { #problem-pyramid-company .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="pyramid-company" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در شکرستان $n$ نفر داریم که \(m\) جفت از آن‌ها با هم دوست هستند. افراد با اعداد \(1\) تا \(n\) شماره‌گذاری شده‌اند و رابطه‌ی دوستی دوطرفه است.

در حال حاضر شخص شماره‌ی \(1\) از تنها عضو شرکت است. می‌خواهیم همه‌ی افراد عضو شرکت شوند. برای عضو شدن یک فرد جدید، باید یکی از دوستان او که در همان لحظه عضو شرکت است او را دعوت کند. اگر شخص \(u\) کسی را دعوت کند، برای همان دعوت باید مبلغ \(A_u\) به عنوان پورسانت به او پرداخت شود.

الگوریتمی با مرتبه زمانی \(O(n + m \log n)\) ارائه دهید که کمترین هزینه برای عضو کردن تمامی افراد را محاسبه کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - زهرا امیربیگی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/pyramid-company/solution/2026-06-16T141644Z0000/2026-06-15-.mov"></video></div>


</details>


## سوال ۳۲ — کمینه پوشای مسطح { #problem-planar-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="planar-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

گراف وزن دار مسطح $G$ را داریم. حال الگوریتمی خطی ارائه دهید که درخت پوشای کمینه گراف را پیدا کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

در گراف مسطح تعداد یال ها حداکثر برابر $3n - 6$ است.

</details>


## سوال ۳۳ — شار بازه‌ای { #problem-lr-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="lr-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی جهت‌دار \(G=(V,E)\) داریم. برای هر یال \(e\)، دو مقدار داده شده است: پایین‌کران \(\ell(e)\) و کران بالای \(u(e)\)، به‌طوری که $0 \leq \ell(e) \leq u(e).$

می‌خواهیم بدانیم آیا می‌توان روی یال‌ها جریانی تعریف کرد که یک **جریان مجاز** باشد؛ یعنی برای هر یال \(e\) داشته باشیم $\ell(e) \leq f(e) \leq u(e)$, و برای هر رأس \(v\)، مقدار کل جریان ورودی به \(v\) برابر با مقدار کل جریان خروجی از \(v\) باشد.

الگوریتمی طراحی کنید که تشخیص دهد آیا چنین جریانی وجود دارد یا نه. در پاسخ خود ایده‌ی اصلی الگوریتم، اثبات درستی و تحلیل زمان اجرا را توضیح دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - میلاد رستمی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/lr-flow/solution/2026-06-16T172213Z0000/2026-06-16-19-08-46.mp4"></video></div>


</details>


## سوال ۳۴ — شار بازه‌ای بیشینه { #problem-lr-max-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="lr-max-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی جهت‌دار \(G=(V,E)\) و دو راس $s$ و $t$ داریم. برای هر یال \(e\)، دو مقدار داده شده است: پایین‌کران \(\ell(e)\) و کران بالای \(u(e)\)، به‌طوری که $0 \leq \ell(e) \leq u(e).$

می‌خواهیم بدانیم آیا می‌توان روی یال‌ها جریانی تعریف کرد که یک **شار مجاز** باشد؛ یعنی برای هر یال \(e\) داشته باشیم $\ell(e) \leq f(e) \leq u(e)$,
و برای هر رأس \(v\) به جز $s$ و $t$، مقدار کل جریان ورودی به \(v\) برابر با مقدار کل جریان خروجی از \(v\) باشد.

الگوریتمی طراحی کنید که بیشینه شار مجاز از $s$ به $t$ را در زمان چند جمله‌ای پیدا کند یا گزارش کند که شار مجازی وجود ندارد. در پاسخ خود ایده‌ی اصلی الگوریتم، اثبات درستی و تحلیل زمان اجرا را توضیح دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## سوال ۳۵ — جدول رنگی { #problem-grid-coloring .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="grid-coloring" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times n$ داریم که بعضی از خانه‌های سیاه و بقیه خانه‌ها سفیدند. در هر حرکت می‌توانیم یک زیر جدول $H \times W$ انتخاب کنیم و تمامی خانه‌های داخل آن را سفید بکنیم. هزینه این عملیات $min(H, W)$ است. حداقل هزینه سفید کردن کل جدول چند است‌؟ الگوریتمی از مرتبه زمانی $\mathcal{O}(n^3)$ ارائه بدهید.

اگر هزینه رنگ‌آمیزی یک زیر جدول به $max(H, W)$ تغییر کند، آنگاه الگوریتمی با مرتبه زمانی $\mathcal{O}(n^5)$ یا کمتر مطلوب است.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">برنامه‌ریزی پویا</span></span></div>


## سوال ۳۶ — برش بسته { #problem-cut-operation .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="cut-operation" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف دلخواه با مجموعه رئوس 
$V(G)$
را در نظر بگیرید.
برای دو راس 
$s$
و 
$t$
یک برش از این گراف میان این دو راس، معادل افراز $V(G)$
به دو مجموعه    
$S$ و $T$ است که $s \in S$ و $t \in T$.
و در این صورت، با حذف تمام تمام یال‌های از 
$S$ به $T$، $s$ و $t$ از هم جدا می‌شوند.
در این صورت، اندازه برش برابر است با تعداد یال‌های بین $S$ و $T$.
یک برش کمینه، برشی است که اندازه آن از همه برش‌های دیگر کمتر باشد.


فرض کنید که 
$(S_1, T_1)$
و 
$(S_2, T_2)$
دو برش کمینه 
از گراف باشند، ثابت کنید که 
$(S_1 \cap S_2, T_1 \cup T_2)$
و
$(S_1 \cup S_2, T_1 \cap T_2)$
نیز دو برش کمینه هستند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علیرضا منصوری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/cut-operation/solution/2026-06-16T165156Z0000/last_36.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/cut-operation/solution/2026-06-16T165156Z0000/36-2-.pdf">36-2-.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۷ — برش کمینه یکتا { #problem-unique-min-cut .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-min-cut" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی جهت‌دار \(G=(V,E)\) با مبدأ \(s\)، مقصد \(t\)، و ظرفیت‌های نامنفی روی یال‌ها داریم.

می‌دانیم ممکن است در یک شبکه چندین برش کمینه‌ی مختلف بین \(s\) و \(t\) وجود داشته باشد.

یک شرط لازم و کافی برای یکتا بودن برش کمینه‌ی \(s\)-\(t\) ارائه دهید. الگوریتمی طراحی کنید که تشخیص دهد آیا برش کمینه یکتا است یا نه.

در پاسخ خود ایده‌ی اصلی الگوریتم، اثبات درستی و تحلیل زمان اجرا را توضیح دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

ابتدا یک بیشینه‌جریان پیدا کنید و گراف باقیمانده‌ی متناظر با آن (residual) را در نظر بگیرید. سپس رأس‌هایی را بررسی کنید که از \(s\) قابل دسترسی‌اند، رأس‌هایی که می‌توانند به \(t\) برسند را تحلیل کنید.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سیدمحمدیاسین حاجی‌خلیلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-4/unique-min-cut/solution/2026-06-16T154513Z0000/Rec-0043.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-4/unique-min-cut/solution/2026-06-16T154513Z0000/DA_HW4T_P37.pdf">DA_HW4T_P37.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۸ — بدون دور منفی { #problem-neg-cycle-free .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="neg-cycle-free" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی جهت‌دار با ظرفیت و هزینه روی یال‌ها داریم. فرض کنید \(f\) یک جریان مجاز \(s\)-\(t\) با مقدار ثابت \(|f|\) است و گراف باقیمانده‌ی متناظر با \(f\) را در نظر می‌گیریم.

ثابت کنید اگر گراف باقیمانده هیچ چرخه‌ای با مجموع هزینه‌ی منفی نداشته باشد، آنگاه \(f\) در میان همه‌ی جریان‌های مجاز با مقدار \(|f|\)، کمترین هزینه را دارد.

به بیان دیگر، نشان دهید نبودن چرخه‌ی منفی در گراف باقیمانده یک شرط کافی برای این است که \(f\) یک کم‌هزینه‌ترین \(|f|\)-جریان باشد. همچنین لازم بودن این شرط را نیز اثبات کنید.

در اثبات خود می‌توانید از این ایده استفاده کنید که اختلاف دو جریان هم‌مقدار را می‌توان به تعدادی چرخه در گراف باقیمانده تجزیه کرد.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## سوال ۳۹ — کمینه هزینه بیشینه شار { #problem-min-max-cost-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-max-cost-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شبکه‌ی جهت‌دار \(G=(V,E)\) با \(n\) رأس، \(m\) یال، مبدأ \(s\)، مقصد \(t\)، ظرفیت‌های صحیح نامنفی \(c(e)\)، و هزینه‌ی \(w(e)\) روی هر یال داریم. هزینه‌ی یک جریان برابر است با

\[
\sum_{e\in E} f(e)w(e).
\]

فرض کنید مقدار بیشینه‌جریان برابر \(F\) است. الگوریتمی طراحی کنید که در میان همه‌ی بیشینه‌جریان‌های \(s\)-\(t\)، جریانی با کمترین هزینه پیدا کند.

الگوریتم شما باید در زمان
$\mathcal{O}(Fnm)$ اجرا شود.

در پاسخ خود توضیح دهید چگونه در هر مرحله از گراف باقیمانده استفاده می‌کنید، چگونه مسیر افزایشی کم‌هزینه را پیدا می‌کنید، چرا تعداد مراحل حداکثر \(F\) است، و چرا جریان نهایی کم‌هزینه‌ترین بیشینه‌جریان است.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## سوال ۴۰ — افراز به مسیر { #problem-vertex-covering .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="vertex-covering" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف جهت‌دار بدون دور $n$ راسی و $m$ یالی داریم. می‌خواهیم تعدادی مسیر انتخاب کنیم که هر راس در دقیقا یک مسیر آمده باشد. کمینه تعداد مسیر مورد نیاز چند است‌‌؟

الگوریتمی ارائه دهید که با حداکثر یک بار استفاده از بیشینه شار بر روی گرافی دلخواه و محاسباتی از مرتبه زمانی
$\mathcal{O}(n + m)$
جواب را پیدا کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## سوال ۴۱ — عدددهی عجیب { #problem-weird-assignment .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="weird-assignment" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

به یک گراف که به هر یال آن یک عدد نامنفی نسبت داده شده است، عجیب می‌گوییم اگر به ازای هر زیر مجموعه از رئوس مانند $S$ از اعضای آن، مجموع اعداد نسبت داده شده به یال هایی که بین اعضای مجموعه $S$ هستند، حداکثر $|S| - 1$ باشد. حال الگوریتمی چندجمله‌ای ارائه دهید که عجیب بودن یا نبودن یک گراف را بررسی کند.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## سوال ۴۲ — اسنپ { #problem-snapp .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="snapp" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک شهر داریم که از $n$ میدان تشکیل شده که با $m$ جاده به هم متصل شده‌اند. به ازای هر جاده مدت زمان لازم عبور از آن را $w_i$ می‌نامیم. در شرکت اسنپ می‌دانیم که امروز قرار است $k$ مشتری داشته باشیم. مشتری $i$م در زمان $t_i$ می‌خواهد که از شهر $a_i$ به شهر $b_i$ برود.

به علت مشکلات عمده، مشتری‌ها از منتظر ماندن خوششان نمی‌آید و حتما باید در ثانیه $t_i$ تاکسی در $a_i$ باشد. حداقل چند راننده نیاز داریم تا بتوانیم همه مشتری ها را برسانیم؟

توجه کنید که راننده‌ها از هر مسیری می‌توانند بروند و در هر لحظه حداکثر یک مشتری را سوار می‌کنند. همچنین راننده ها می‌توانند در میدان‌ها استراحت کنند و حرکت نکنند اما نمی‌توانند در بین جاده استراحت یا تغییر حهت بدهند.

الگوریتمی چند جمله‌ای برای پیدا کردن جواب مسئله ارائه دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>
