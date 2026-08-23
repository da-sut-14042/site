# تمرین ۲




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


## مقدماتی:


## سوال ۱ — پوشاندن نوار { #problem-hw2-p01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک نوار مستطیلی $1 \times n$ داریم. می‌خواهیم این نوار را به‌طور کامل با دو قطعه‌ی $1 \times 1$ و $1 \times 2$ بپوشانیم. هر قطعه باید کاملاً داخل نوار قرار گیرد و هیچ دو قطعه‌ای نباید هم‌پوشانی داشته باشند. الگوریتمی با زمان اجرای $\mathcal{O}(n)$ برای محاسبه تعداد روش‌های پوشاندن این نوار ارائه دهید.
</div>


## سوال ۲ — ترکیب‌ تاس‌ها { #problem-hw2-p02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک تاس $k$ وجهی داریم که روی وجه‌های آن، اعداد $1, 2, \dots, k$ نوشته شده‌است. به چند روش می‌توان یک یا چند تاس انداخت، که مجموع تاس‌ها برابر با $n$ شود.

برای مثال اگر $n=3$ و $k=6$ باشد ۴ حالت داریم:‌ $1+1+1$ و $1+2$ و $2+1$ و $3$.

الگوریتمی با زمان اجرای $\mathcal{O}(nk)$ برای حالت کلی مسئله ارائه دهید.
</div>


## سوال ۳ — کمینه سکه‌ { #problem-hw2-p03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در کشوری، $n$ نوع سکه با ارزش‌های $c_1,c_2,\dots,c_n$ وجود دارد و از هر نوع سکه، تعداد نامحدودی در اختیار داریم. می‌خواهیم مبلغ $m$ را با استفاده از کمترین سکه ممکن پرداخت کنیم. الگوریتمی از $\mathcal{O}(nm)$ ارائه دهید تا کمترین سکه‌ لازم برای پرداخت را پیدا کند.

برای مثال اگر $n=3, m = 9$ و $c=\{1,2,5\}$ باشد، کمترین سکه لازم برابر با $3$ است.
</div>


## سوال ۴ — قورباغه { #problem-hw2-p04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ سنگ به‌ترتیب از چپ به راست از $1$ تا $n$ شماره‌گذاری شده‌اند و ارتفاع سنگ $i$-ام برابر $h_i$ است. قورباغه‌ای در ابتدا روی سنگ $1$ قرار دارد و می‌خواهد به سنگ $n$ برسد. اگر قورباغه از سنگ $i$ به سنگ $j$ بپرد، باید $j \in \{i+1,i+2,\dots,i+k\}$ باشد. هزینه این پرش برابر با $|h_i-h_j|$ است. کمینه هزینه لازم برای رسیدن از سنگ $1$ به سنگ $n$ را محاسبه کنید.
</div>


## سوال ۵ — فرجه <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p05 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دکتر آبام برای بین دو ترم $n$ روز فرجه ترتیب دیده‌اند. شما در هر روز یکی از سه تفریحی که در زندگیتان دارید را انجام می‌دهید. و از انجام هر کدام به ترتیب $A_i, B_i, C_i$ واحد لذت می‌برید. اما اگر دو روز متوالی یک تفریح را انجام دهید، فرجه زهرمارتان می‌شود. بیشترین لذتی که می‌توانید از این $n$ روز تجربه کنید را در $\mathcal{O} (n)$ محاسبه کنید.
</div>


## سوال ۶ — پرش به جلو { #problem-hw2-p06 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p06" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ از اعداد طبیعی داریم. هر مرحله اگر در خانه $i$ اُم آرایه باشیم به خانه $i + a_i$ می‌پریم. اگر هم مقدار $n < i + a_i$ باشد، از آرایه خارج می‌شویم.

الگوریتمی با پیچیدگی زمانی $\mathcal{O} (n)$ ارائه دهید که به ازای هر $i$ ، تعداد پرش‌هایی که طول می‌کشد تا از آرایه خارج شود را حساب کند.
</div>


## سوال ۷ — بیشینه مجموع زیرآرایه (Maximum-Subarray-Sum) { #problem-hw2-p07 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p07" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

آرایه‌ای از اعداد صحیح (مثبت و منفی) $a_1,a_2,\dots,a_n$ به طول $n$ داده شده است. می‌خواهیم یک زیرآرایه متوالی انتخاب کنیم به‌طوری‌که مجموع عناصر آن بیشینه شود. الگوریتمی با زمان اجرای $\mathcal{O}(n)$ ارائه دهید که این مقدار بیشینه را محاسبه کند.

برای مثال اگر $A=\langle -7, 10, 2, -5, 3, 7, -100, 16 \rangle$ باشد با انتخاب عضو دوم تا ششم به مجموع $17$ می‌رسیم که ماکسیمم است.
</div>


## سوال ۸ — بلندترین مسیر در DAG { #problem-hw2-p08 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p08" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک گراف جهت‌دار با $n$ راس و $m$ یال داریم به این صورت که اگر بین دو راس $i < j$ یالی وجود داشته باشد جهت آن از $i$ به $j$ خواهد بود. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n + m)$ ارائه دهید که بلندترین مسیر در این گراف را پیدا کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد محمودیه</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q08-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q08-solution-notes.pdf">DA_HW2_Q8.pdf</a></li></ul></div>
</div>


</details>


## سوال ۹ — مسیرها در جدول { #problem-hw2-p09 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p09" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times m$ داریم که برخی از خانه‌های آن مسدود هستند. سطر‌ها از بالا به پایین از $1$ تا $n$ و ستون‌ها از چپ به راست از $1$ تا $m$ شماره گذاری شده‌اند. از خانه $(1,1)$ می‌خواهیم به خانه $(n,m)$ برویم. در هر مرحله فقط اجازه داریم یک خانه به راست یا یک خانه به پایین حرکت کنیم و ورود به خانه‌های مسدود مجاز نیست. الگوریتمی با زمان اجرای $\mathcal{O}(nm)$ برای محاسبه تعداد مسیرهای ممکن ارائه دهید.
</div>


## سوال ۱۰ — مجموع زیرمستطیل { #problem-hw2-p10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times m$ داریم که در خانه $(i , j)$ آن مقدار $a_{i,j}$ نوشته شده است. می‌خواهیم به پرسش‌های از جنس مجموع زیرمستطیل پاسخ دهیم. الگوریتمی با پیش‌پردازش از مرتبه زمانی $\mathcal{O}(n m)$ ارائه دهید که بتواند هر پرسش را با $\mathcal{O}(1)$ پاسخ دهد.
‌پرسش‌ها به صورت دو زوج $(x_1 , y_1)$ و $(x_2,y_2)$ به شما داده می‌شود که به ترتیب برابر با خانه بالا-چپ و پایین-راست زیرمستطیل خواسته شده است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدیار مستشارهریس</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q10-solution-video.mp4"></video></div>


</details>


## سوال ۱۱ — LIS { #problem-hw2-p11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ داریم. مقدار خانه $i$ اُم برابر $a_i$ است.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n ^ 2)$ ارائه دهید که طول بلندترین زیردنباله صعودی آرایه را محاسبه کند.
</div>


## سوال ۱۲ — کوله پشتی <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p12 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما به عنوان یک دزد وارد مغازه شدید. در مغازه $n$ کالا با شماره‌های 1 تا $n$ وجود دارد. فرض کنید وزن کالا $i$‌اُم برابر با $w_i$ و قیمت آن برابر با $v_i$ باشد. شما یک کوله پشتی دارید که مجموع وزن کالاهایی که در آن قرار می‌دهید نمی‌تواند از $W$ بیشتر باشد. هدف شما این است که تعدادی از این کالاها را انتخاب کرده و در کوله پشتی قرار دهید به طوری که مجموع ارزش آن‌ها بیشینه باشد.

الف) با ارائه یک مثال نقض نشان دهید که این الگوریتم اشتباه است.
کالاها را به ترتیب از بزرگترین $\frac{v_i}{w_i}$ تا کمترین مقدار آن مرتب می‌کنیم. سپس به ترتیب کالاها را پیمایش می‌کنیم و هر کالایی که در کوله پشتی جا میشد را به آن اضافه می‌کنیم.

ب) الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n W)$ ارائه دهید که بیشترین مجموع ارزشی که می‌توان در کوله پشتی جا داد را حساب کند.
</div>


## سوال ۱۳ — عددگذاری در آرایه { #problem-hw2-p13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ داریم که مقدار خانه $i$ اُم آن برابر با $a_i$ است. می‌دانیم به ازای هر $i$ یا مقدار $1 \leq a_i \leq m$ است یا $a_i = -1$ است. می‌خواهیم جوری $-1$ ها را با اعداد طبیعی بین $1$ تا $m$ جایگزین کنیم که در نهایت به ازای هر $1 \leq i \leq n - 1$ داشته باشیم: $| a_i - a_{i + 1} | \leq 1$ .
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n m)$ ارائه دهید که تعداد روش‌های انجام این کار را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - اشکان تاریوردی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q13-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q13-solution-notes.pdf">DA_DPHW_final_slides.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۴ — LCS <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p14 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته $s$ و $t$ داریم که به ترتیب طول هر کدام $n$ و $m$ است. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n m)$ ارائه دهید که بلندترین زیردنباله مشترک این دو رشته را پیدا کند. یعنی بلندترین رشته $w$ را پیدا کند که $w$ هم زیردنباله ای از $t$ و هم زیردنباله‌ای از $s$ باشد.
</div>


## سوال ۱۵ — تقسیم بر 2 { #problem-hw2-p15 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید یک تابع بازگشتی $f$ داریم که پایه آن مقدار $f(1)$ است و مقدار $f(n)$ تنها وابسته به مقادیر $f(\lfloor \frac{n}{2} \rfloor)$ و $f(\lceil \frac{n}{2} \rceil)$ است. ثابت کنید تعداد ورودی‌های متمایزی که تابع $f$ با آنها فراخوانی می‌شود از مرتبه $\mathcal{O}(\log n)$ است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - شایان سبزی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q15-solution-video.mp4"></video></div>


</details>


## سوال ۱۶ — بلندترین زیردنباله پالیندروم <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p16 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یه رشته $s$ به طول $n$ داریم. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n^2)$ ارائه دهید که طول بلندترین زیردنباله پالیندروم $s$ را حساب کند.

زیردنباله یعنی چند کاراکتر از رشته را به ترتیب انتخاب کنیم، ولی لازم نیست کنار هم باشند.
مثلا اگر $s = \texttt{abcbd}$ باشد، رشته‌ی $\texttt{abd}$ یک زیردنباله‌ی آن است.
</div>


## سوال ۱۷ — ضرب ماتریس‌ها <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p17 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید $n$ ماتریس $A_1 , A_2 , \dots , A_n$ و یک آرایه $p$ به طول $n + 1$ داریم به طوری که ابعاد ماتریس $A_i$، $p_i \times p_{i + 1}$ است و می‌خواهیم مقدار $A_1 \times A_2 \times \dots  \times A_n$ را حساب کنیم.

می‌دانیم ضرب یک ماتریس $a \times b$ در یک ماتریس $b \times c$ نیاز به انجام $a \times b \times c$ عملیات ضرب دارد و حاصل آن یک ماتریس $a \times c$ خواهد بود.

حال ‌می‌خواهیم طوری این عبارت را پرانتزگزاری کنیم که در مجموع کمترین تعداد عملیات ضرب را انجام دهیم.
الگوریتمی با پیچیدگی زمانی $\mathcal{O} (n ^ 3)$ ارائه دهید تا کمینه تعداد عملیات ضرب مورد نیاز را محاسبه کند.
</div>


## سوال ۱۸ — لذت در کارنیوال { #problem-hw2-p18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما در یک کارنیوال ابدی شرکت کرده اید.از طریق ارتباطی که با کائنات برقرار کردید اطلاعات $n$ تا از رویداد‌های کارنیوال به شما الهام شده است.شما می‌دانید رویداد $i$ در زمان $s_i$ آغاز شده، در زمان $t_i$ به پایان می‌رسد و با شرکت کردن در آن $p_i$ واحد لذت می‌برید.
اما شرکت کردن در این رویداد‌ها علی‌رغم میل باطنی‌تان به حضور فیزیکی شما در مکان برگزاری آن‌ها وابسته است. از این رو شرکت کردن همزمان در دو رویداد برای شما امکان‌پذیر نیست. اما می‌توانید از زمان لازم برای جا‌به‌جایی بین مکان‌ها صرف نظر کنید.
بیشترین لذتی که می‌توان از این $n$ رویداد برد را در زمان $\mathcal{O} (n \log n)$ محاسبه کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ایلیا فرصتی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q18-solution-video.mp4"></video></div>


</details>


## سوال ۱۹ — فاصله ویرایشی { #problem-hw2-p19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو رشته $s$ و $t$ به ترتیب با طول‌های $n$ و  $m$ داریم. می‌خواهیم با تکرار عملیات‌های زیر رشته $s$ را به رشته $t$ تبدیل کنیم.

عملیات 1: یکی از حروف رشته $s$ را به دلخواه حذف می‌کنیم. هزینه این عملیات $a$ است.

عملیات 2: یک حرف به هر جای دلخواه از $s$ اضافه می‌کنیم. هزینه این عملیات $b$ است.

عملیات 3: یک حرف $s$ را به دلخواه به یک حرف دیگر تغییر می‌دهیم. هزینه این عملیات $c$ است.

الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n m)$ ارائه دهید که کمترین هزینه موردنیاز برای تبدیل $s$ به $t$ را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدپارسا شاه‌محمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q19-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q19-solution-notes.pdf">DA-19.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۰ — قفسه کتاب { #problem-hw2-p20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

در یک کتابخانه $n$ کتاب وجود دارد. کتاب $i$ ام دارای ضخامت $t_i$ و عرض $w_i$ است.
می‌خواهیم این کتاب‌ها را در یک قفسه کتاب قرار دهیم به این صورت که ابتدا تعدادی از این کتاب‌ها را به صورت عمودی در پایین قفسه کتاب کنار هم قرار می‌دهیم. سپس باقی کتاب‌ها را به صورت افقی روی کتاب‌های عمودی قرار می‌دهیم. شرط انجام این‌کار این است که مجموع ضخامت کتاب‌های طبقه پایین حداقل به اندازه مجموع عرض کتاب‌های طبقه بالا باشد. (به بیان دیگر $\sum t_i$ کتاب‌های عمودی بیشتر از یا مساوی با $\sum w_i$ کتاب‌های افقی باشد).
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \cdot \sum t_i)$ ارائه دهید که کمینه مقدار $\sum t_i$ کتاب‌های طبقه پایین را پیدا کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سپهر علیپور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q20-solution-video.mp4"></video></div>


</details>


## سوال ۲۱ — LIS 2 { #problem-hw2-p21 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ داریم. مقدار خانه $i$ اُم برابر $a_i$ است.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید که طول بلندترین زیردنباله صعودی آرایه را محاسبه کند.
</div>


## سوال ۲۲ — مستطیل‌ها <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p22 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

ما $n$ تا مستطیل داریم که از 1 تا $n$ شماره‌گذاری شده‌اند. طول و عرض مستطیل $i$اُم را به ترتیب با $w_i$ و $h_i$ نشان می‌دهیم. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید که اندازه بزرگترین زیرمجموعه‌ای از مستطیل‌ها را حساب کند که هر دو مستطیلی که داخل این زیرمجموعه هستند را در نظر بگیریم یکی از آنها کامل در دیگری جا شود. (اگر این دو مستطیل را $i$ و $j$ در نظر بگیریم یعنی یا $h_i > h_j , w_i > w_j$ و یا $h_j > h_i , w_j > w_i$ برقرار باشد.)
</div>


## پیشرفته


## سوال ۲۳ — کوله پشتی 2 { #problem-hw2-p23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما به عنوان یک دزد وارد مغازه شدید. در مغازه $n$ کالا با شماره‌های 1 تا $n$ وجود دارد. فرض کنید وزن کالا $i$‌اُم برابر با $w_i$ و قیمت آن برابر با $v_i$ باشد. شما یک کوله پشتی دارید که مجموع وزن کالاهایی که در آن قرار می‌دهید نمی‌تواند از $W$ بیشتر باشد. هدف شما این است که تعدادی از این کالاها را انتخاب کرده و در کوله پشتی قرار دهید به طوری که مجموع ارزش آن‌ها بیشینه باشد.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \cdot \sum v_i)$ ارائه دهید که این مقدار را حساب کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - پارسا ضمیری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q23-solution-video.mp4"></video></div>


</details>


## سوال ۲۴ — وضعیت LIS { #problem-hw2-p24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ داریم که مقدار عضو $i$ اُم آن برابر با $a_i$ است. شما باید الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید که به ازای هر $1 \leq i \leq n$ مشخص کند که اندیس $i$ اُم آرایه در کدام گروه زیر قرار می‌گیرد:

گروه 1: اندیس‌هایی که در تمام LIS های آرایه ظاهر شده‌اند.

گروه 2: اندیس‌هایی که در بعضی ولی نه همه LIS های دنباله ظاهر شده‌اند.

گروه 3: اندیس‌هایی که در هیچکدام از LIS های دنباله ظاهر نشده‌اند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - متین غیاثی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q24-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q24-solution-notes.pdf">LIS_Solution_Slides-v2-1-.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۵ — کیسه‌ها و سکه‌ها { #problem-hw2-p25 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p25" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما $n$ کیسه و $s$ سکه دارید. هدف شما این است که تشخیص دهید که می‌توانیم یا نمی‌توانیم این $s$ سکه را بین این کیسه ها تقسیم کنید به طوری که بعد از تقسیم سکه‌ها، بتوان بعضی از کیسه‌ها را طوری داخل هم قرار داد به طوری که در نهایت داخل کیسه $i$  اُم در مجموع $a_i$ سکه باشد . (سکه‌ها می‌توانند به صورت مستقیم داخل کیسه باشند یا داخل یکی از کیسه‌هایی باشند که داخل کیسه $i$ اُم قرار دارد).
با پیچیدگی زمانی $\mathcal{O}(n s)$مسئله را حل کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سهیل سیاح ورگ</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q25-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q25-solution-notes.pdf">HW2-25.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۶ — درخت جست‌و‌جوی دودویی بهینه { #problem-hw2-p26 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p26" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو آرایه به طول $n$ از کلیدهای $k_1, k_2, \dots , k_n$ و احتمالات جست‌و‌جوی $p_1, p_2, \dots , p_n$ داده شده است. می‌خواهیم یک درخت جست‌وجوی دودویی(BST) بسازیم که هزینه موردانتظار جست‌وجو در آن کمینه باشد.
هزینه جست‌وجوی یک BST برابر با $\sum (h_i \times p_i)$ است که $h_i$ ارتفاع راس $i$ اُم است.

الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n^3)$ ارائه دهید که این هزینه کمینه را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - آروین بقال اصل</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q26-solution-video.mp4"></video></div>


</details>


## سوال ۲۷ — حذف پالیندروم { #problem-hw2-p27 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p27" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک دنباله به طول $n$ داریم که مقدار عدد $i$ اُم برابر $a_i$ است. هر مرحله می‌توانیم یک بازه متوالی از دنباله که پالیندروم است را از دنباله حذف کنیم (بعد از حذف این بازه اگر دنباله دو تیکه شد آن‌ها را کنار هم می‌گذاریم تا تشکیل یک دنباله واحد دهند.) الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n^3)$ ارائه دهید که کمترین تعداد عملیات لازم برای حذف کامل دنباله را حساب کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - رسا محمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q27-solution-video.mkv"></video></div>


</details>


## سوال ۲۸ — برج قرمز سبز { #problem-hw2-p28 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p28" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما $r$ بلوک قرمز و $g$ بلوک سبز دارید و می‌خواهید با آن‌ها یک برج بسازید.
اگر برج $h$ طبقه داشته باشد، طبقهٔ اول باید شامل $h$ بلوک باشد، طبقهٔ دوم $h-1$ بلوک، و به همین ترتیب تا طبقهٔ آخر که شامل یک بلوک است. همچنین هر طبقه باید تماما از یک رنگ تشکیل شده باشد.
فرض کنید $h$ بیشترین ارتفاع ممکنی باشد که می‌توان با بلوک‌های موجود ساخت. تعداد برج‌های متفاوت با ارتفاع $h$ را حساب کنید.
دو برج متفاوت‌اند اگر حداقل در یک طبقه، رنگ بلوک‌های آن‌ها متفاوت باشد.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}((r+g)\sqrt{r+g})$ ارائه دهید که پاسخ را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدعلی‌ مس‌چی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q28-solution-video.mp4"></video></div>


</details>


## سوال ۲۹ — رنگ کردن حصار { #problem-hw2-p29 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p29" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

حمید تصمیم گرفته است حصار قدیمی خود را به رنگ موردعلاقه‌اش، آبی، رنگ کند.
حصار از $n$ تختهٔ عمودی تشکیل شده که پشت سر هم قرار گرفته‌اند و هیچ فاصله‌ای بین تخته‌های مجاور وجود ندارد. تخته‌ها از چپ به راست از ۱ شماره‌گذاری شده‌اند. عرض هر تخته برابر ۱ متر است و ارتفاع تختهٔ $i$ اُم برابر $a_i$ متر می‌باشد.
حمید یک قلم‌مو با عرض ۱ متر خریده است. او می‌تواند با قلم‌مو حرکت‌های عمودی و افقی انجام دهد. در طول هر حرکت، تمام سطح قلم‌مو باید همواره با حصار در تماس باشد.
هدف این است که تمام حصار به طور کامل رنگ شود. توجه کنید که می‌توان یک قسمت از حصار را چندین بار رنگ کرد.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n^2)$ ارائه دهید که کمترین تعداد حرکت لازم برای رنگ کردن کامل حصار را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدی شیرین‌بیان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q29-solution-video.mp4"></video></div>


</details>


## سوال ۳۰ — تخم‌مرغ { #problem-hw2-p30 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p30" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ساختمان $n$ طبقه داریم و $e$ تخم مرغ سخت. می‌دانیم که طبقه‌ای مانند $2 \leq x \leq n$  وجود دارد که اگر تخم‌ مرغ‌ها از طبقه $x$ یا بالاتر بیافتند می‌شکنند و اگر از طبقه $x - 1$  یا پایین‌تر بیافتند، نمی‌شکنند. (یعنی اگر تخم‌ مرغ را از طبقه اول بیاندازیم حتما نمی‌شکند و اگر از طبقه آخر بیاندازیم حتما می‌شکند) در هر آزمایش می‌توانیم یک تخم مرغ را از یک طبقه دلخواه بیاندازیم. اگر این تخم مرغ بشکند، دیگر نمی‌توان از آن استفاده کرد ولی اگر نشکند باز هم می‌توان از آن استفاده کرد. هدف پیدا کردن طبقه $x$ است.

می‌خواهیم تشخیص دهیم که در حالتی که بهترین روشی که می‌توانیم آزمایش کنیم تا در بدترین حالت کمترین تعداد آزمایش را کرده باشیم را انجام دهیم در این بدترین حالت چه تعداد آزمایش انجام داده‌ایم.

ساب 1) الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n^2 e)$ ارائه دهید که این تعداد آزمایش را محاسبه کند.

ساب 2) الگوریتمی از پیچیدگی زمانی $\mathcal{O}(n^2 \log n)$ ارائه دهید.

ساب 3) الگوریتمی از پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید.

ساب 4) الگوریتمی از پیچیدگی زمانی $\mathcal{O}(\sqrt{n} \log n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - آرش قوامی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q30-solution-video.mp4"></video></div>


</details>


## سوال ۳۱ — LCS of permutations { #problem-hw2-p31 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p31" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو جایگشت از اعداد 1 تا $n$ داریم. می‌خواهیم طول بلندترین زیردنباله مشترک آن‌ها را پیدا کنیم. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدرضا ایزدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q31-solution-video.mp4"></video></div>


</details>


## سوال ۳۲ — کران پایین LCS { #problem-hw2-p32 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p32" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

فرض کنید دو رشته $s$ و $t$ به طول $n$ داریم. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n k)$ ارائه دهید که تشخیص دهد آیا طول بلندترین زیردنباله مشترک این دو رشته حداقل $k$ هست یا نه.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - زهرا قصابی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q32-solution-video.mp4"></video></div>


</details>


## سوال ۳۳ — مسیر همیلتونی { #problem-hw2-p33 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p33" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف ساده $n$ راسی داریم.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(2^n n^2)$ ارائه دهید که مشخص کند آیا گراف مسیری دارد که شامل تمام رئوس گراف باشد یا خیر.
</div>


## سوال ۳۴ — دور همیلتونی { #problem-hw2-p34 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p34" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف ساده $n$ راسی داریم.
الگوریتمی با پیچیدگی زمانی $\mathcal{O}(2^n n^2)$ ارائه دهید که مشخص کند آیا گراف دوری دارد که شامل تمام رئوس گراف باشد یا خیر.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نیما نظری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q34-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q34-solution-notes.pdf">findingHamltonCycle.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۵ — ترکیب مجاورهای برابر { #problem-hw2-p35 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p35" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه به طول $n$ از اعداد طبیعی داریم که مقدار درایه $i$ اُم آن برابر با $a_i$ است. هر مرحله می‌توانیم دو عضو مجاور که مقدار هر دوی آنها برابر است را با هم ترکیب کنیم و به یک عضو با مقدار یک واحد بیشتر تبدیل کنیم. به بیان دیگر اگر دو $x$ مجاور در آرایه را ترکیب کنیم، یک عدد $x+1$ به وجود می‌آید. هدف ما این است که با تکرار این عملیات به بزرگترین عددی که می‌توانیم برسیم.

الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n)$ ارائه دهید که بزرگترین عددی که می‌توانیم به آن برسیم را حساب کند
</div>


## سوال ۳۶ — پوشاندن نوار 2 { #problem-hw2-p36 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p36" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک نوار مستطیلی $1 \times n$ داریم. می‌خواهیم این نوار را به طور کامل با قطعات $1 \times 1$ و $1 \times 2$ بپوشانیم. هر قطعه باید کامل داخل نوار قرار بگیرد و هیچ دو قطعه‌ای نباید هم‌پوشانی داشته باشند. الگوریتمی با پیچیدگی زمانی $\mathcal{O}(\log n)$ ارائه دهید که که تعداد روش‌های انجام این‌کار را محاسبه کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - روژین تقی‌زادگان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q36-solution-video.mp4"></video></div>


</details>


## سوال ۳۷ — مش‌مخ { #problem-hw2-p37 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p37" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

به یک آرایه  $a$ به طول $k$ از اعداد طبیعی خوب می‌گوییم اگر برای هر $i$ داشته باشیم $1 \leq a_i \leq n$ و هم چنین به ازای هر $1 \leq i \leq k - 1$ شرط $a_i | a_{i + 1}$ برقرار باشد.

الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n k \log n)$ ارائه دهید که تعداد این دنباله ها را بشمارد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمد بنی‌احمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q37-solution-video.mp4"></video></div>


</details>


## سوال ۳۸ — جست‌وجو وزن‌دار { #problem-hw2-p38 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p38" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

علی و رضا یک بازی روی آرایه‌ای مرتب‌شده (صعودی) به طول $n$ انجام می‌دهند:

۱. علی یک عدد $x$ انتخاب می‌کند.

۲. رضا باید با طرح سوالاتی، اولین خانه‌ای از آرایه که از $x$ بزرگ‌تر است را پیدا کند (یا متوجه شود همه خانه‌ها از $x$ کوچک‌ترند).

۳. رضا در هر سوال یک اندیس $i$ انتخاب می‌کند و علی پاسخ می‌دهد که آیا عنصر خانه $i$ ام از $x$ بزرگ‌تر است یا خیر. هزینه پرسیدن این سوال $c_i$​ است.

رضا تلاش می‌کند با یک استراتژی بهینه، بیشترین پولی که ممکن است بپردازد (هزینه در بدترین حالت) را **کمینه** کند. از طرفی، علی عدد $x$ را طوری انتخاب می‌کند که این هزینه **بیشینه** شود.
با فرض اینکه هر دو نفر کاملاً بهینه عمل می‌کنند، الگوریتمی با پیچیدگی زمانی $\mathcal{O}(n \log n \cdot c^2)$ ارائه دهید که هزینه نهایی رضا را محاسبه کند.
</div>


## سوال ۳۹ — RGB { #problem-hw2-p39 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p39" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

شما می‌خواهید یک دنباله به طول $n$ بسازید که هر عضو آن یکی از 3 رنگ قرمز، آبی و سبز باشد.
همچنین  $m$ شرط به شما داده شده است. شرط $i$ اُم شامل سه مقدار $l_i$ و $r_i$ و $x_i$ است و به این معناست که در بازه $[l_i , r_i]$ باید از دقیقا $x_i$ رنگ متمایز استفاده شود.

الگوریتمی با پیچیدگی زمانی $\mathcal{O} (n ^ 2 (n + m))$ ارائه دهید تا تعداد دنباله‌های رنگی متمایزی که در شرط ها صدق می‌کند را محاسبه کند.
</div>


## سوال ۴۰ — مسیرها در جدول ۲ { #problem-hw2-p40 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p40" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times m$ داریم که دقیقاً $k$ خانه $(x_1, y_1), (x_2, y_2), \dots, (x_k, y_k)$ از آن مسدود هستند. از خانه $(1,1)$ می‌خواهیم به خانه $(n,m)$ برویم. در هر مرحله فقط اجازه داریم یک خانه به راست یا یک خانه به پایین حرکت کنیم و ورود به خانه‌های مسدود مجاز نیست. هدف محاسبه‌ی تعداد مسیرهای ممکن است.

برای حالت کلی مسئله، الگوریتمی از $\mathcal{O}(n+m+k^2)$ ارائه دهید.
</div>


## سوال ۴۱ — جدول سکه‌ها { #problem-hw2-p41 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p41" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times n$ داریم. در خانه‌ی واقع در سطر $i$ و ستون $j$، تعداد $a_{i,j}$ سکه قرار دارد. آلیس و باب هر دو از خانه‌ی $(1,1)$ شروع می‌کنند و می‌خواهند به خانه‌ی $(n,n)$ برسند. هر کدام از آن‌ها در هر حرکت فقط می‌تواند یک خانه به پایین برود یا یک خانه به راست برود.
آلیس و باب در طول مسیر خود، سکه‌های خانه‌هایی را که از آن‌ها عبور می‌کنند جمع می‌کنند. اگر هر دو نفر از یک خانه عبور کنند، سکه‌های آن خانه فقط یک‌بار جمع می‌شود و دوبار حساب نمی‌شود. هدف این است که دو مسیر برای آلیس و باب انتخاب کنیم به‌طوری‌که مجموع تعداد سکه‌های جمع‌آوری‌شده بیشینه شود. الگوریتمی از $\mathcal{O}(n^3)$ ارائه دهید که بیشترین تعداد سکه‌ی قابل جمع‌آوری را محاسبه کند.
</div>


## سوال ۴۲ — مسیر‌های مجزا { #problem-hw2-p42 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p42" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $n \times m$ داریم که بعضی از خانه‌های آن مسدود هستند. آلیس از خانه‌ی $(1,2)$ شروع می‌کند و می‌خواهد به خانه‌ی $(n-1,m)$ برسد. باب از خانه‌ی $(2,1)$ شروع می‌کند و می‌خواهد به خانه‌ی $(n,m-1)$ برسد. هر کدام از آن‌ها در هر حرکت فقط می‌تواند یک خانه به پایین برود یا یک خانه به راست برود.

آلیس و باب می‌خواهند طوری حرکت کنند که هرگز همدیگر را نبینند؛ یعنی مسیرهای آن‌ها هیچ خانه‌ی مشترکی نداشته باشد. همچنین هیچ‌کدام از آن‌ها نمی‌توانند از خانه‌های مسدود عبور کنند. هدف این است که تعداد زوج‌مسیرهای ممکن را بشماریم به‌طوری‌که آلیس و باب هر دو به مقصد خود برسند، از خانه‌های مسدود عبور نکنند، و در هیچ خانه‌ای با یکدیگر برخورد نکنند.

الگوریتمی $\mathcal{O}(nm)$ برای مسئله ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهراد حصاری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q42-solution-video.mp4"></video></div>


</details>
