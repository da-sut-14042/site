# تمرین ۱




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


## بخش اول: سوالات مقدماتی — Greedy


## سوال ۱ — قاب‌های تو در تو { #problem-hw1-p1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی قاب عکس داده شده است که قاب $i$ام ابعاد $a_i \times b_i$ دارد. می‌خواهیم بررسی کنیم آیا می‌توان ترتیبی از این قاب‌ها پیدا کرد به طوری که هر قاب داخل قاب بعدی قرار بگیرد یا نه. چرخش $90^\circ$ برای هر قاب مجاز است. الگوریتمی با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">حریصانه</span></span></div>


<details class="success problem-solution" markdown="1"><summary>پاسخ</summary>

شرط اولیه برای قرار گرفتن قاب $i$ درون قاب $j$

\[
(a_i < a_j \land b_i < b_j) \lor (a_i < b_j \land b_i < a_j)
\]

=== "راه حل اول"
    می‌تونیم ابتدا قاب‌ها را بر حسب محیط یا مساحت در $O(n\log n)$ سورت کنیم. سپس برای هر دو قاب متوالی در ترتیب، شرط بالا رو چک کنیم.

=== "راه حل دوم"
    برای هر قاب تعریف می‌کنیم: $x_i=\min(a_i,b_i)$ و $y_i=\max(a_i,b_i)$.

    می‌توان نشان داد شرط قبلی معادل‌است با:
    $x_i<x_j \land y_i<y_j$.

    اگر قاب در حالت چرخیده جا شود، $x_i<y_j \land y_i<x_j \Rightarrow x_i<x_j \land y_i<y_j$.

    حالا قاب‌ها را بر اساس $x_i$ صعودی مرتب می‌کنیم و قاب‌های متوالی را با شرط بالا چک می‌کنیم.

    اگر همه‌ی شرط‌ها برقرار بود، جواب مثبت است. زمان اجرا $O(n\log n)$ است.

</details>


## سوال ۲ — بیشینه‌ی بازه‌های سازگار <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p2 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی بازه‌ی زمانی به صورت $(s_i,f_i)$ داده شده‌اند. می‌خواهیم بیشترین تعداد بازه‌ی سازگار (non-overlapping intervals) را انتخاب کنیم؛ یعنی هیچ دو بازه‌ی انتخاب‌شده هم‌پوشانی نداشته باشند.
یک الگوریتم حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


## سوال ۳ — پوشش بازه‌ها با نقطه { #problem-hw1-p3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی بازه روی خط داده شده است. می‌خواهیم کمترین تعداد نقطه انتخاب کنیم به طوری که هر بازه شامل حداقل یک نقطه‌ی انتخاب‌شده باشد. یک الگوریتم حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید. ثابت کنید جواب این سوال با جواب سوال قبلی برابر است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - زهرا امیربیگی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p3/solution/2026-05-08T174529Z0000/2026-05-08-2-.mov"></video></div>


</details>


## سوال ۴ — سکه‌های فوق‌فزاینده { #problem-hw1-p4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

سکه‌هایی با مقادیر

\[
c_1 < c_2 < \dots < c_n
\]

در اختیار داریم، به طوری که برای هر $i \ge 2$ مقدار $c_i$ از مجموع همه‌ی سکه‌های قبلی بیشتر است.

از هر نوع سکه دقیقاً یک عدد داریم.

برای یک مقدار هدف $V$، می‌خواهیم مشخص کنیم آیا می‌توان زیرمجموعه‌ای از این سکه‌ها را انتخاب کرد که مجموع مقادیرشان دقیقاً برابر $V$ شود یا نه.

یک الگوریتم حریصانه با مرتبه زمانی $O(n)$ ارائه دهید.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" aria-label="نمایش برچسب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">حریصانه</span></span></div>


<details class="success problem-solution" markdown="1"><summary>پاسخ</summary>

از اونجا که ارزش هر سکه از تمام سکه‌های قبلی بیشتره،‌ اگه $V$ حداقل به اندازه‌ی $c_n$ باشه حتما باید سکه‌ی $n$ رو برداریم. چون بقیه سکه‌ها کفافشو نمیدن. اگر کمتر باشه هم که کلا نباید برداریم.
پس تکلیف سکه‌ی آخر مشخص میشه. و همین‌طوری ادامه می‌دیم از آخر به اول رو سکه‌ها for می‌زنیم.

</details>


## سوال ۵ — حذف $k$ رقم { #problem-hw1-p5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک عدد به صورت رشته‌ای از ارقام به طول $n$ داده شده است و هیچ رقمی صفر نیست. می‌خواهیم دقیقاً $k$ رقم را حذف کنیم تا مقدار عدد حاصل بیشینه شود. الگوریتمی با مرتبه زمانی $O(n)$ ارائه دهید.
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>



<details class="abstract hint hint-pivot" markdown="1"><summary>ابتدا برای k = 1 حل می‌کنیم.</summary>

به جای اینکه عددی بهش نگاه کنیم می‌تونیم lexicographically بهش نگاه کنیم.
می‌خوایم به بیشترین lexicographically برسیم.



<details class="question hint hint-question" markdown="1"><summary>چه زمانی از حذف یک رقم از لحاظ lexicographically سود می‌کنیم؟</summary>

وقتی که رقم بعدیش ازش بزرگ‌تر باشه.
حالتی که رفم بعدیش مساویه رو خودتون بررسی کنید.

</details>




<details class="question hint hint-question" markdown="1"><summary>کدوم بیشترین سود رو داره؟</summary>

هر چقدر این افزایش به اول رشته نزدیک‌تر باشه بیشتر سود می‌کنیم.

</details>




<details class="tip hint hint-tip" markdown="1"><summary>پس ...</summary>

پس باید چپ‌ترین رقمی که از رقم بعدیش کوچیک‌تره رو حذف کنیم.
اگر چنین رقمی نبود آخرین رفم رو حذف می‌کنیم.

</details>



</details>



</details>


## سوال ۶ — کوله‌پشتی کسری { #problem-hw1-p6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی شیء داریم. شیء $i$ام وزن $w_i$ و ارزش $v_i$ دارد. یک کوله‌پشتی با ظرفیت $W$ داریم و می‌توان از هر شیء کسری برداشت (Fractional Knapsack). هدف این است که ارزش کل بیشینه شود. الگوریتمی حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید و آن را روی ورودی زیر اجرا کنید:

\[
(w,v)= (10,60),(20,100),(30,120),\qquad W=50
\]
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>



<details class="abstract hint hint-pivot" markdown="1"><summary>اگر میشد اشیا رو به ترتیبی مرتب کرد...</summary>



<details class="note hint hint-subproblem" markdown="1"><summary>تبدیل کیلویی به دونه‌ای</summary>

دقت کنید وقتی که میتونیم کسری از اشیا رو برداریم، پس عملا هر شی با وزن $w_i$ و قیمت $v_i$ میتونه به $w_i$ عدد شی یک کیلویی با قیمت
$\frac{v_i}{w_i}$
تبدیل بشه.

</details>




<details class="question hint hint-question" markdown="1"><summary>این مساله جدید رو چطوری حل کنیم؟</summary>

دراصل میخوایم $W$ عدد شی برداریم، پس کافیه این اشیاء رو بر اساس قیمت مرتب کنیم و $W$ تای بزرگتر رو برداریم.

</details>



</details>




<details class="question hint hint-question" markdown="1"><summary>حالا چطوری مساله اصلی رو حل کنیم؟</summary>

برای هرکدوم از اشیاء، یک ارزش خالص تعریف می‌کنیم: $value_i = \frac{v_i}{w_i}$. حالا میدونیم از شئ‌ای که ارزش خالص بیشتری داره هرچه بیشتر برداریم بهتره.

</details>



</details>


## سوال ۷ — ساخت مثلث { #problem-hw1-p7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ پاره‌خط با طول‌های مثبت $a_1, a_2, \dots, a_n$ داده شده است. الگوریتمی با مرتبه زمانی $O(n\log n)$ ارائه دهید که تشخیص دهد آیا می‌توان سه پاره‌خط متمایز از میان آن‌ها انتخاب کرد که تشکیل مثلثی با مساحت مثبت دهند یا نه. در صورت وجود، یکی از سه‌تایی‌های معتبر را خروجی دهید؛ در غیر این صورت اعلام کنید که چنین سه‌تایی‌ای وجود ندارد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نگار یاراحمدی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p7/solution/2026-05-08T174923Z0000/7_triangle.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-1/hw1-p7/solution/2026-05-08T174923Z0000/7_triangle.pdf">7_triangle.pdf</a></li></ul></div>
</div>


</details>


## سوال ۸ — ادغام اعداد روی تخته <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p8 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعدادی عدد روی یک تخته نوشته شده است. در هر مرحله می‌توانید دو عدد $x$ و $y$ را از روی تخته پاک کنید و به جای آن عدد $x+y$ را بنویسید. هزینه‌ی این مرحله برابر $x+y$ است. می‌خواهیم پس از انجام $n-1$ عملیات، فقط یک عدد روی تخته باقی بماند و مجموع هزینه‌ها کمینه شود. الگوریتمی حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید و آن را روی ورودی زیر اجرا کنید:

\[
5,\ 9,\ 12,\ 13,\ 16,\ 45
\]
</div>


## سوال ۹ — کدگذاری بدون پیشوند <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p9 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

می‌خواهیم برای مجموعه‌ای از کاراکترها یک الگوریتم compression طراحی کنیم. برای این کار، می‌خواهیم به هر کاراکتر یک رشته‌ی دودویی نسبت دهیم، به طوری که:

- هیچ کد، پیشوند کد دیگر نباشد (prefix-free code) تا متن به‌طور یکتا قابل بازخوانی باشد،
- با توجه به این‌که فراوانی وقوع کاراکترها معلوم است، مجموع تعداد بیت‌های لازم برای ذخیره‌ی متن کمینه شود.

به بیان دقیق‌تر، اگر فراوانی کاراکتر $i$ام برابر $f_i$ و طول کد اختصاص‌یافته به آن برابر $\ell_i$ باشد، می‌خواهیم مقدار $\sum_i f_i \ell_i$ کمینه شود.

**راهنمایی:** این مسئله معادل سوال قبلی است.

یک الگوریتم حریصانه با مرتبه زمانی $O(n\log n)$ برای ساخت این کدها ارائه دهید.
</div>


## سوال ۱۰ — زمان‌بندی با مهلت { #problem-hw1-p10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ کار داریم. کار $i$ام دقیقاً یک واحد زمان طول می‌کشد، سود آن $p_i$ است و باید حداکثر تا زمان $d_i$ تمام شده باشد (Job Sequencing with Deadlines). می‌خواهیم زیرمجموعه‌ای از کارها را طوری زمان‌بندی کنیم که مجموع سود بیشینه شود. یک الگوریتم حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مائده حیدری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p10/solution/2026-05-08T190600Z0000/output.mp4"></video></div>


</details>


## سوال ۱۱ — جایگشت بهینه‌ی $\sum a_i b_i$ { #problem-hw1-p11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو دنباله $A$ و $B$ به طول $n$ داده شده‌اند. می‌خواهیم دنباله $A$ را جایگشت دهیم.

- **(الف)** دنباله $A$ را طوری جایگشت دهید که مقدار $\sum_{i=1}^{n} a_i b_i$ کمینه شود.
- **(ب)** دنباله $A$ را طوری جایگشت دهید که مقدار $\sum_{i=1}^{n} a_i b_i$ بیشینه شود.

برای هر دو بخش الگوریتم $O(nlog)$ دهید.
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

برای سادگی فرض کنید آرایه‌ی $B$ سورت شده و فقط می‌خوایم ترتیب $A$ رو تغییر بدیم.


<details class="question hint hint-question" markdown="1"><summary class="arithmatex">جا‌به‌جا کردن $a_i$ و $a_j$ چه تاثیری روی تابع هزینه می‌ذاره؟</summary>

$$ b_i \cdot (a_j - a_i) + b_j \cdot (a_i - a_j) = (b_i - b_j) \cdot (a_j - a_i)$$

فرض کنیم $i > j$ آنگاه $b_i \geq b_j$



<details class="question hint hint-question" markdown="1"><summary>این جا‌به‌جایی در چه شرایطی سود یا ضرر دارد؟</summary>



</details>



</details>



</details>


## سوال ۱۲ — تخصیص دو تیم { #problem-hw1-p12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ نفر داریم که توانایی ورزشی نفر $i$ام برابر $a_i$ و توانایی درسی او برابر $b_i$ است. می‌خواهیم دقیقاً $k$ نفر را برای تیم ورزش و $n-k$ نفر را برای تیم درس انتخاب کنیم، به طوری که مجموع توانایی افراد در رشته‌ای که به آن تخصیص داده می‌شوند بیشینه شود.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mahdi Mansouri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p12/solution/2026-05-04T200204Z0000/2026-05-04_17-56-08.mkv"></video></div>


</details>


## سوال ۱۳ — مستقل یا مچینگ { #problem-hw1-p13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک گراف با $n$ رأس و $m$ یال داده شده است. الگوریتمی با مرتبه زمانی $O(n+m)$ ارائه دهید که یکی از دو مورد زیر را پیدا کند:

- یک مجموعه‌ی مستقل (independent set) با حداقل $\frac{n}{3}$ رأس،
- یا یک مچینگ (matching) با حداقل $\frac{n}{3}$ یال.

تضمین می‌شود که همواره حداقل یکی از این دو وجود دارد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ایلیا یزدانی ورزی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p13/solution/2026-05-08T175331Z0000/Da-P13.mp4"></video></div>


</details>


## بخش اول: سوالات مقدماتی — Divide and Conquer


## سوال ۱۴ — بازگشت پارامتری <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p14 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

با استفاده از درخت بازگشتی، یک کران تنگ (tight bound) برای رابطه‌ی بازگشتی زیر به دست آورید:

\[
T(n) = T(\alpha n) + T\bigl((1-\alpha)n\bigr) + cn
\]

که در آن $\alpha \in (0,1)$ و $c>0$ ثابت‌اند. در پاسخ خود وابستگی کران به $\alpha$ را به صراحت بررسی کنید.
</div>


## سوال ۱۵ — زیرآرایه‌ی بدون عضو یکتا (تحلیل) <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p15 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

آرایه‌ی $A[1 \dots n]$ داده شده است. می‌خواهیم تشخیص دهیم آیا زیرآرایه‌ای متوالی و ناتهی وجود دارد که در آن هیچ عضو یکتایی نباشد؛ یعنی هر عددی که در زیرآرایه ظاهر می‌شود، حداقل دو بار در همان زیرآرایه آمده باشد. الگوریتم زیر برای حل این مسئله پیشنهاد شده است:

برای بازه‌ی $A[l \dots r]$، در زمانی خطی نسبت به طول بازه بررسی می‌کنیم آیا عضوی در این بازه دقیقاً یک بار ظاهر شده است یا نه. اگر چنین عضوی وجود نداشت، خود بازه پاسخ مسئله است. در غیر این صورت، فرض کنید $A[i]$ در $A[l \dots r]$ تنها یک بار آمده باشد؛ آنگاه هیچ زیرآرایه‌ی معتبری نمی‌تواند شامل اندیس $i$ باشد، پس مسئله را به طور بازگشتی روی $A[l \dots i-1]$ و $A[i+1 \dots r]$ حل می‌کنیم. پاسخ بازه‌ی فعلی «بله» است اگر و تنها اگر حداقل یکی از دو فراخوانی پاسخ «بله» برگرداند.

- **(الف)** درستی الگوریتم را ثابت کنید.
- **(ب)** مرتبه‌ی زمانی الگوریتم را در بدترین حالت تحلیل کنید.
- **(پ)** خانواده‌ای از ورودی‌ها ارائه دهید که نشان دهد تحلیل بخش (b) تنگ است.
</div>


## سوال ۱۶ — اجتماع، اشتراک، تفاضل <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p16 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو آرایه‌ی صعودی $A[1 \dots n]$ و $B[1 \dots m]$ داده شده‌اند. الگوریتمی با مرتبه زمانی $O(n+m)$ ارائه دهید که هر یک از مجموعه‌های زیر را به صورت صعودی محاسبه کند، به طوری که هر مقدار در خروجی فقط یک بار ظاهر شود:

\[
A \cup B,\qquad A \cap B,\qquad A-B
\]
</div>


## سوال ۱۷ — بزرگ‌ترین و دومین بزرگ‌ترین { #problem-hw1-p17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه شامل $n$ عدد متمایز داده شده است. الگوریتمی ارائه دهید که بزرگ‌ترین و دومین بزرگ‌ترین عنصر آرایه را با حداکثر

\[
n+\lceil \log_2 n \rceil-2
\]

مقایسه پیدا کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - یاسمن کاویانپور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p17/solution/2026-05-08T180209Z0000/DA_HW1_Q17.mp4"></video></div>


</details>


## سوال ۱۸ — عنصر $k$اُم در دو آرایه‌ی مرتب { #problem-hw1-p18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

دو آرایه‌ی مرتب

\[
A[1..n],\qquad B[1..m]
\]

داده شده‌اند. می‌خواهیم عنصر $k$ام در اجتماع مرتب این دو آرایه را پیدا کنیم، بدون آن‌که کل آرایه‌ی نهایی را بسازیم.

- **(الف)** یک الگوریتم Divide and Conquer با مرتبه زمانی $O(\log(n+m))$ ارائه دهید.
- **(ب)** الگوریتم خود را روی ورودی زیر اجرا کنید:

\[
A=[2,5,8,12,17],\qquad B=[1,3,9,10,20,25],\qquad k=7
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علی الماسی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p18/solution/2026-05-07T130054Z0000/DA-Q18.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-1/hw1-p18/solution/2026-05-07T130054Z0000/DA-Q8.pdf">DA-Q8.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۹ — بیشینه‌جمع زیرآرایه { #problem-hw1-p19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

آرایه‌ای از اعداد صحیح داده شده است. می‌خواهیم بیشترین مجموع یک زیرآرایه‌ی متوالی را پیدا کنیم. یک الگوریتم Divide and Conquer با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


## سوال ۲۰ — کمینه و بیشینه { #problem-hw1-p20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه داده شده است. می‌خواهیم کمینه و بیشینه‌ی آن را با کمترین تعداد مقایسه پیدا کنیم. یک الگوریتم Divide and Conquer ارائه دهید و تعداد مقایسه‌های آن را به دست آورید و با الگوریتم عادی مقایسه کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - صبا خانمحمدی ابهری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p20/solution/2026-05-05T194020Z0000/DA_Q20.mp4"></video></div>


</details>


## سوال ۲۱ — شمارش وارونگی‌ها <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p21 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک دنباله از اعداد $A[1 \dots n]$ داده شده است. می‌خواهیم تعداد inversion‌های آن را محاسبه کنیم.

به هر زوج اندیس $(i,j)$ با

\[
i<j \qquad \text{و} \qquad A[i]>A[j]
\]

یک inversion گفته می‌شود.

الگوریتمی با مرتبه زمانی $O(n\log n)$ برای محاسبه‌ی تعداد inversion‌ها ارائه دهید.
</div>


## سوال ۲۲ — کاربردهای وارونگی { #problem-hw1-p22 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

هر یک از مسائل زیر را به محاسبه‌ی تعداد inversion‌ها تقلیل دهید.

- **(الف)** تعدادی نقطه در صفحه داده شده‌اند. تعداد جفت نقطه‌هایی را بشمارید که یکی در بالا-چپ دیگری باشد؛ یعنی

\[
x_i < x_j, \qquad y_i > y_j.
\]

- **(ب)** تعدادی بازه‌ی $[l_i,r_i]$ داده شده است. تعداد جفت بازه‌هایی را بشمارید که یکی کاملاً داخل دیگری باشد؛ یعنی

\[
l_i < l_j, \qquad r_j < r_i.
\]

- **(پ)** یک دنباله شامل اعداد مثبت و منفی داده شده است. تعداد بازه‌های متوالی را بشمارید که مجموع عناصر آن‌ها منفی است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سبحان بهزادی‌پور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p22/solution/2026-05-08T200526Z0000/Video_260508175945.mp4"></video></div>


</details>


## سوال ۲۳ — مرتب‌سازی با جابه‌جایی مجاور { #problem-hw1-p23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک دنباله‌ی نامرتب از اعداد داده شده است. می‌خواهیم آن را تنها با استفاده از جابه‌جایی‌های مجاور (adjacent swaps) مرتب کنیم. این مسئله را به محاسبه‌ی تعداد inversion‌ها تقلیل دهید و در نتیجه کمینه‌ی تعداد جابه‌جایی‌های مجاور لازم را به دست آورید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - پارسا عدل پرور</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p23/solution/2026-05-08T174851Z0000/Q23.mkv"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-1/hw1-p23/solution/2026-05-08T174851Z0000/Q23.pdf">Q23.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۴ — سکه‌ی تقلبی { #problem-hw1-p24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ سکه‌ی به ظاهر یکسان داده شده است که دقیقاً یکی از آن‌ها تقلبی و سبک‌تر از بقیه است. یک ترازوی کفه‌ای در اختیار داریم که نتیجه‌ی هر وزن‌کشی یکی از سه حالت «سبک‌تر بودن کفه‌ی چپ»، «سبک‌تر بودن کفه‌ی راست»، یا «تساوی» است.
کران بهینه‌ی تعداد وزن‌کشی‌های لازم در بدترین حالت را بر حسب $n$ پیدا کنید، الگوریتمی ارائه دهید که به این کران برسد، و بهینگی کران را ثابت کنید (یعنی نشان دهید هیچ الگوریتمی نمی‌تواند در بدترین حالت با وزن‌کشی کمتر به جواب برسد).
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سیدمحمدیاسین حاجی‌خلیلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p24/solution/2026-05-08T184302Z0000/Rec-0033.mp4"></video></div>


</details>


## سوال ۲۵ — دو تخم‌مرغ { #problem-hw1-p25 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p25" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

ساختمانی با $n$ طبقه و دقیقاً $2$ تخم‌مرغ در اختیار داریم. آستانه‌ی ناشناخته‌ی $k$ وجود دارد به طوری که تخم‌مرغ رهاشده از طبقه‌ی $k$ یا پایین‌تر نمی‌شکند و رهاشده از بالاتر از آن می‌شکند. به‌طور دقیق‌تر می‌دانیم اگر تخم‌مرغ از طبقه‌ی همکف رها شود نمی‌شکند و اگر از پشت‌بام (طبقه‌ی $n + 1$) رها شود حتما می‌شکند. تخم‌مرغ شکسته دیگر قابل استفاده نیست. می‌خواهیم با کمترین تعداد رهاسازی در بدترین حالت، مقدار $k$ را تعیین کنیم.
کران بهینه‌ی تعداد رهاسازی‌های لازم در بدترین حالت را بر حسب $n$ پیدا کنید، استراتژی‌ای ارائه دهید که به این کران برسد، و بهینگی کران را ثابت کنید (یعنی نشان دهید هیچ استراتژی‌ای نمی‌تواند در بدترین حالت با رهاسازی کمتر به جواب برسد).
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نیکی رشیدیان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p25/solution/2026-05-08T180113Z0000/2eggs.mkv"></video></div>


</details>


## بخش دوم: سوالات پیشرفته — Greedy


## سوال ۲۶ — جست‌وجو در ماتریس مرتب <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p26 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p26" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ماتریس $n\times n$ داده شده است که سطرها و ستون‌هایش هر دو صعودی‌اند. الگوریتمی حریصانه با مرتبه زمانی $O(n)$ ارائه دهید که بررسی کند آیا عدد $x$ در ماتریس وجود دارد یا نه. سپس الگوریتم خود را روی ورودی نمونه‌ی زیر اجرا کنید:

\[
\begin{bmatrix}
1&4&7&11\\
2&5&8&12\\
3&6&9&16\\
10&13&14&17
\end{bmatrix}
\qquad,\qquad x=14
\]
</div>


## سوال ۲۷ — زمان‌بندی با مدت، مهلت و ارزش { #problem-hw1-p27 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p27" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

$n$ کار داریم. کار $i$ام مدت زمان $d_i$، مهلت $t_i$ و ارزش $u_i$ دارد. می‌خواهیم زیرمجموعه‌ای از کارها را طوری انتخاب و زمان‌بندی کنیم که همه قبل از مهلت خود تمام شوند و مجموع ارزش‌ها بیشینه شود. الگوریتمی حریصانه یا شبه‌حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


## سوال ۲۸ — ماتریس دودویی با شمارش سطر و ستون { #problem-hw1-p28 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p28" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ماتریس دودویی $n\times n$ می‌خواهیم بسازیم که در سطر $i$ دقیقاً $R[i]$ تا یک و در ستون $j$ دقیقاً $C[j]$ تا یک داشته باشد. اگر ساختن چنین ماتریسی ممکن نیست، باید این را اعلام کنیم. الگورتمی از مرتبه زمانی $O(n^2)$ پیدا کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Amir Mohammad Hamidi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p28/solution/2026-05-05T220052Z0000/Q28_Video_2.mkv"></video></div>


</details>


## سوال ۲۹ — شاه‌ها روی قطر اصلی { #problem-hw1-p29 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p29" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک صفحه شطرنج $n \times n$ داریم که در آن $n$ مهره شاه در خانه های متمایز قرار دارند. در هر حرکت می‌توان یک شاه را به یک خانه خالی مجاز منتقل کرد. کمترین تعداد حرکت برای پر کردن قطر اصلی صفحه را با الگوریتمی از مرتبه $O(nlog)$ بیابید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - پارسا بشری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p29/solution/2026-05-05T194208Z0000/DA-HW1-P29-presentation.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://files.da-sut.ir/assignments/tamrin-1/hw1-p29/solution/2026-05-05T194208Z0000/DA-HW1-P29-ParsaBashari.pdf">DA-HW1-P29-ParsaBashari.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۰ — برج جعبه‌ها { #problem-hw1-p30 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p30" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

تعداد $n$ جعبه داریم که جعبه $i$ام وزن $a_i$ و آستانه تحمل $b_i$ را دارد. می‌‌‌خواهیم تعیین کنیم آیا می‌توان یک برج شامل این $n$ جعبه ساخت به طوری که به ازای هر جعبه، جمع وزن جعبه های بالایی‌اش از آستانه تحملش بیشتر نشود. ترتیب جعبه ها را شما باید تعیین کنید. الگوریتمی از مرتبه زمانی $O(nlog)$ پیدا کنید.
</div>


## سوال ۳۱ — پرانتزگذاری بهینه { #problem-hw1-p31 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p31" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک دنباله از اعداد به طول $2n$ داریم. می‌خواهیم یک رشته پرانتز گزاری معتبر به همین طول انتخاب کنیم، و سپس اعدادی از دنباله را که متناظر با پرانتز باز هستند را انتخاب کنیم. هدف این است جمع اعداد انتخابی بیشینه شود. الگوریتمی از مرتبه زمانی $O(nlog)$ پیدا کنید تا این مقدار بیشینه را محاسبه کند.
</div>


## سوال ۳۲ — افراز بازه‌ها { #problem-hw1-p32 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p32" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

مجموعه‌ای از بازه‌های زمانی داده شده است. می‌خواهیم این بازه‌ها را به کمترین تعداد دسته افراز کنیم، به طوری که در هر دسته، هیچ دو بازه‌ای هم‌پوشانی نداشته باشند. الگوریتمی حریصانه با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


## سوال ۳۳ — توقف در جایگاه سوخت { #problem-hw1-p33 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p33" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

روی یک مسیر مستقیم، جایگاه‌های سوخت در فاصله‌های
$x_1 < x_2 < \dots < x_n$
از مبدا قرار دارند و مقصد در فاصله $D$ است. خودرویی از مبدا حرکت می‌کند و با هر باک پر حداکثر $L$ واحد مسیر را می‌تواند طی کند. فرض کنید در مبدا باک خودرو پر است و در هر جایگاه، در صورت توقف، باک دوباره کاملاً پر می‌شود. الگوریتمی حریصانه با مرتبه زمانی $O(n)$ ارائه دهید که کمترین تعداد توقف لازم برای رسیدن به مقصد را پیدا کند، یا اعلام کند که رسیدن به مقصد ممکن نیست.
</div>


## سوال ۳۴ — بازی حذف مجاور { #problem-hw1-p34 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p34" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک دنباله به طول $n$ داده شده است. در هر مرحله می‌توان دو عدد مجاور را انتخاب کرد، هر دو را از دنباله حذف کرد، و به اندازه‌ی قدرمطلق اختلاف آن‌ها یعنی $|x-y|$ امتیاز گرفت. می‌خواهیم با انجام تعداد دلخواهی عملیات، مجموع امتیازها را بیشینه کنیم. الگوریتمی با مرتبه زمانی $O(n\log n)$ ارائه دهید.

- **(الف)** حالت $n$ زوج
- **(ب)** حالت $n$ فرد
</div>


## بخش دوم: سوالات پیشرفته — Divide and Conquer


## سوال ۳۵ — یافتن مدین { #problem-hw1-p35 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p35" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه $A[1 \dots n]$ داده شده است. **مدین** را عنصری تعریف می‌کنیم که در آرایه‌ی مرتب‌شده، در جایگاه میانی قرار بگیرد؛ یعنی اگر $n$ فرد باشد، عنصر شماره‌ی $\frac{n+1}{2}$ام، و اگر $n$ زوج باشد، عنصر شماره‌ی $\frac{n}{2}$ام را مدین در نظر می‌گیریم. الگوریتمی با مرتبه زمانی $O(n)$ ارائه دهید که مدین آرایه را پیدا کند.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - فاطمه پرویزی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p35/solution/2026-05-07T160717Z0000/compDA-35.mp4"></video></div>


</details>


## سوال ۳۶ — بزرگ‌ترین بلوک یکنواخت { #problem-hw1-p36 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p36" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ماتریس دودویی $M$ به ابعاد $n \times n$ داده شده است. یک solid block زیرماتریسی از فرم
$M[i \dots i'][j \dots j']$
است که همه‌ی درایه‌های آن برابر باشند. الگوریتمی از جنس Divide and Conquer با مرتبه زمانی $O(n^2 \log n)$ ارائه دهید که مساحت بزرگ‌ترین solid block در $M$ را پیدا کند.
</div>


## سوال ۳۷ — نزدیک‌ترین جفت نقطه { #problem-hw1-p37 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p37" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

به شما $n$ نقطه روی صفحه داده شده است. می‌خواهیم فاصله‌ی نزدیک‌ترین دو نقطه (Closest Pair of Points) را پیدا کنیم. یک الگوریتم Divide and Conquer با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سبحان آرام</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p37/solution/2026-05-08T144402Z0000/1000037121.mp4"></video></div>


</details>


## سوال ۳۸ — زیرآرایه‌ی بیشینه با طول محدود { #problem-hw1-p38 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p38" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

آرایه‌ای از اعداد صحیح، که می‌توانند مثبت، منفی یا صفر باشند، و یک عدد $L$ داده شده است. می‌خواهیم بیشترین مجموع یک زیرآرایه‌ی متوالی را پیدا کنیم، با این قید که طول زیرآرایه حداکثر $L$ باشد. یک الگوریتم از جنس Divide and Conquer برای حل این مسئله ارائه دهید.
</div>


## سوال ۳۹ — زیرآرایه‌ی بدون عضو یکتا { #problem-hw1-p39 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p39" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک آرایه داده شده است. مشخص کنید آیا زیرآرایه‌ای متوالی وجود دارد که هیچ عضوی در آن یکتا نباشد؛ یعنی هر عددی که در این زیرآرایه ظاهر می‌شود، حداقل دو بار در همان زیرآرایه آمده باشد. الگوریتمی با مرتبه زمانی $O(n\log n)$ ارائه دهید.
</div>


## سوال ۴۰ — پوشش با کاشی L-شکل { #problem-hw1-p40 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p40" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جدول $2^n \times 2^n$ داده شده است که دقیقاً یکی از خانه‌های آن بلوکه شده است. می‌خواهیم بقیه‌ی خانه‌ها را با کاشی‌های L-شکل بپوشانیم، به طوری که هر کاشی دقیقاً ۳ خانه را بپوشاند و هیچ دو کاشی روی هم نیفتند. تضمین می‌شود که این کار همیشه ممکن است. الگوریتمی ارائه دهید که چنین پوششی را بسازد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary>پاسخ <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - پرنیا دباغ</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://files.da-sut.ir/assignments/tamrin-1/hw1-p40/solution/2026-05-04T143128Z0000/HW1-P40.mkv"></video></div>


</details>


## سوال ۴۱ — جایگشت بدون میانگین { #problem-hw1-p41 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p41" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک جایگشت از اعداد $1$ تا $n$ بسازید به طوری که برای هر دو اندیس $i<j$، میانگین دو عدد $A_i$ و $A_j$ در بین عناصر
$A_i,A_{i+1},\dots,A_j$
ظاهر نشود.
</div>


## سوال ۴۲ — خانه‌ی بزرگ‌تر از همسایگان { #problem-hw1-p42 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p42" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label">صورت سوال</span></div>

یک ماتریس $n\times m$ داده شده است که همه‌ی درایه‌های آن با هم متفاوت‌اند. می‌خواهیم خانه‌ای پیدا کنیم که مقدار آن از هر یک از همسایه‌های ضلعی‌اش بزرگ‌تر باشد. الگوریتمی با مرتبه زمانی $O(n\log m)$ ارائه دهید.
</div>
