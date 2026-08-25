---
assignment: true
---

# تمرین ۶

<div data-assignment-problem-filter></div>


## میو


## سوال ۱ — معنی کاهش <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-9374 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-9374" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

فرض کنید یک کاهش چندجمله‌ای (polynomial reduction) از مسئله‌ی $1$ به مسئله‌ی $2$ داریم. درستی یا نادرستی هرکدام از گزاره‌های زیر را در یک یا دو جمله توضیح دهید.

- اگر مسئله‌ی $1$ NP-complete باشد، آنگاه حتما مسئله‌ی $2$ نیز NP-complete است.
- اگر مسئله‌ی $1$ NP-complete باشد، آنگاه حتما مسئله‌ی $2$ NP-hard است.
- اگر مسئله‌ی $1$ NP-complete باشد، آنگاه ممکن است مسئله‌ی $2$ نیز NP-complete باشد.
- اگر مسئله‌ی $2$ NP-hard باشد، آنگاه حتما مسئله‌ی $1$ نیز NP-hard است.
</div>


## سوال ۲ — دو راهی <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-fef3 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-fef3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

ثابت کنید مسئلهٔ تصمیم زیر NP-complete است: آیا یک فرمول $\text{3-CNF}$ دست‌کم دو انتساب ارزش متمایز دارد که آن را صادق کنند؟

می‌توانید ابتدا ثابت کنید این مسئله در NP قرار دارد و سپس نشان دهید $\text{3-SAT}$ به آن کاهش می‌یابد.
</div>


## سوال ۳ — جمع زیرمجموعه { #problem-hw6-CFEB .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-CFEB" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در مسئلهٔ Subset-Sum، یک چندمجموعه از اعداد صحیح مثبت و یک عدد هدف $T$ داده می‌شود. پرسش این است که آیا زیرمجموعه‌ای از اعداد داده‌شده وجود دارد که مجموع اعضای آن دقیقاً برابر $T$ باشد؟

- **(الف)** نشان دهید که چگونه متغیرها و clauseهای یک نمونه‌ی 3-SAT را می‌توان به صورت ارقام انتخاب‌شده‌ی خاصی از اعداد در مبنای $B$ انکود کرد، به‌طوری‌که انتخاب یک عدد $\iff$ نسبت‌دادن مقدار `True` به گزاره‌ی مربوطه باشد.
- **(ب)** به‌طور خلاصه استدلال کنید که وجود یک زیرمجموعه با مجموع $T$ $\iff$ فرمول اولیه satisfiable است.
- **(پ)** دقیقاً بیان کنید که این کاهش چه چیزی را درباره‌ی وضعیت پیچیدگی مسأله‌ی Subset-Sum می‌گوید.
</div>


## سوال ۴ — پوشش راسی { #problem-hw6-C421 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C421" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در نسخهٔ تصمیم مسئلهٔ Vertex Cover، یک گراف $G=(V,E)$ و یک عدد صحیح نامنفی $k$ داده می‌شود. پرسش این است که آیا مجموعه‌ای $S\subseteq V$ با $|S|\le k$ وجود دارد، به طوری که برای هر یال $(u,v)\in E$ دست‌کم یکی از دو رأس $u$ یا $v$ عضو $S$ باشد؟ با کاهش مسئلهٔ 3-SAT به Vertex Cover ثابت کنید که این مسئله NP-complete است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - پوریازارعی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q04-solution-video.mp4"></video></div>


</details>


## سوال ۵ — پوشش مستطیلی { #problem-hw6-8FC6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8FC6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی Rectangle Tiling را در نظر بگیرید که در آن باید تشخیص داد آیا یک ناحیه $R$ را می‌توان با استفاده از کاشی‌هایی از یک مجموعه $T$ پوشاند، به طوری که هر کاشی فقط یک‌بار استفاده شود. در این مسئله، هم $R$ و هم کاشی‌های موجود در $T$ همگی مستطیل هستند. نشان دهید که Rectangle Tiling زمانی که ارتفاع و عرض مستطیل‌ها به صورت دودویی (binary) داده شده باشند، یک مسئله‌ی NP-complete است.

راهنمایی: می‌توان از NP-complete بودن مسائل partition یا subset-sum استفاده کرد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - کسری منتظری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q05-solution-video.mp4"></video></div>


</details>


## سوال ۶ — مجموعهٔ اصابت (Hitting Set) { #problem-hw6-CE68 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-CE68" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مجموعه‌های $\{S_1,S_2,\dots,S_n\}$ و یک عدد صحیح نامنفی $k$ داده شده‌اند. آیا مجموعه‌ای $H\subseteq \bigcup_{i=1}^{n}S_i$ با $|H|\le k$ وجود دارد که برای هر $i$، اشتراک $H\cap S_i$ ناتهی باشد؟ ثابت کنید این مسئلهٔ تصمیم NP-complete است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - محمدامین حیدری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q06-solution-video.mp4"></video></div>


</details>


## سوال ۷ — پوشش یالی { #problem-hw6-FE98 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-FE98" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در مسئلهٔ Edge Cover، یک گراف $G=(V,E)$ داده می‌شود و هدف یافتن کوچک‌ترین مجموعهٔ یال‌ها مانند $S\subseteq E$ است، به طوری که هر رأس $v\in V$ دست‌کم با یکی از یال‌های عضو $S$ مجاور باشد. اگر گراف رأس منفرد داشته باشد، هیچ پوشش یالی‌ای وجود ندارد؛ در غیر این صورت، با استفاده از یک تطابق بیشینه ثابت کنید که می‌توان یک پوشش یالی کمینه را در زمان چندجمله‌ای یافت و در نتیجه $\text{Edge Cover}\in P$ است.
</div>


## سوال ۸ — مکمل بازی { #problem-hw6-C297 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C297" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

ثابت کنید اگر $\text{coNP} \neq \text{NP}$ در آن صورت $P \neq NP$.
</div>


## سوال ۹ — کاهش بی‌ملاحظه { #problem-hw6-ECC5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-ECC5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

یک عبارت بولی به شکل DNF است اگر از ترکیب فصلی تعدادی بند عطفی (AND clause) تشکیل شده باشد. به طور مثال، یک عبارت DNF در زیر آمده است.

\[
(\bar{a} \land b \land \bar{c}) \lor (b \land c) \lor (a \land \bar{b} \land \bar{c})
\]

در مسئله‌ی DNF-SAT سؤال تعیین صدق‌پذیری یک عبارت DNF است، بدین معنی که آیا می‌توان طوری مقادیر `True` و `False` را به متغیرها نسبت داد که نتیجه‌ی نهایی عبارت `True` باشد.

- **(الف)** نشان دهید مسئله‌ی DNF-SAT در زمان چندجمله‌ای قابل حل است.
- **(ب)** با استفاده از قانون توزیع‌پذیری نشان دهید هر عبارت به فرم CNF را که هر بند آن از حداکثر سه لیترال تشکیل شده می‌توان به شکل DNF نوشت. به عنوان مثال:

\[
(a \lor b \lor \bar{c}) \land (\bar{a} \lor \bar{b}) = (a \land \bar{b}) \lor (b \land \bar{a}) \lor (\bar{c} \land \bar{a}) \lor (\bar{c} \land \bar{b})
\]

- **(ج)** برای حل مسئله‌ی 3-SAT ابتدا با توجه به قسمت (ب) عبارت CNF داده‌شده را به یک عبارت DNF تبدیل می‌کنیم و سپس از الگوریتم قسمت (الف) برای حل آن استفاده می‌کنیم. بنابراین می‌توانیم ادعا کنیم که مسئله‌ی 3-SAT را که یک مسئله‌ی NP-complete است در زمان چندجمله‌ای حل کرده‌ایم و در نتیجه $P = NP$! به نظر شما کجای این استدلال اشکال دارد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - غزاله کریمی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q09-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q09-solution-notes.pdf">The_P-NP_Fallacy.pdf</a></li></ul></div>
</div>


</details>


## سوال ۱۰ — ضرر شرکت پست { #problem-hw6-12F8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-12F8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

یک شرکت پستی باید $n$ مرسوله با وزن‌های $a_1,a_2,\dots,a_n$ کیلوگرم را بین دو شهر جابه‌جا کند و ماشین‌هایی با ظرفیت $B$ کیلوگرم در اختیار دارد. همچنین عدد صحیح نامنفی $k$ داده شده است. آیا می‌توان همهٔ مرسوله‌ها را با حداکثر $k$ ماشین جابه‌جا کرد، به طوری که مجموع وزن مرسوله‌های هر ماشین از $B$ بیشتر نشود؟ ثابت کنید این مسئلهٔ تصمیم NP-complete است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - امیرحسین اسفندیاری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q10-solution-video.mkv"></video></div>


</details>


## سوال ۱۱ — گراف رنگی رنگی { #problem-hw6-2BF1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2BF1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

می‌خواهیم راس‌های یک گراف را با رنگ‌های قرمز، آبی و زرد به گونه‌ای رنگ کنیم که رئوس مجاور آن ناهمرنگ باشند. ثابت کنید اگر مسئله‌ی 3-CNF را بتوانیم در زمان چندجمله‌ای حل کنیم، این مسئله را نیز می‌توان در زمان چندجمله‌ای حل کرد.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - حسنا شاه حیدری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q11-solution-video.mov"></video></div>


</details>


## سوال ۱۲ — حداکثر تا حداقل { #problem-hw6-9FE2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9FE2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

فرض کنید $G$ یک گراف بدون‌جهت باشد. مسائل زیر را در نظر بگیرید:

- **مسئله‌ی SPATH:** آیا گراف $G$ شامل یک مسیر ساده از رأس $a$ تا رأس $b$ با طول حداکثر $k$ است؟
- **مسئله‌ی LPATH:** آیا گراف $G$ شامل یک مسیر ساده از رأس $a$ تا رأس $b$ با طول حداقل $k$ است؟

- **(الف)** نشان دهید یک الگوریتم با زمان اجرای چندجمله‌ای وجود دارد که SPATH را حل کند.
- **(ب)** نشان دهید که مسئله‌ی LPATH یک مسئله‌ی NP-complete است.
</div>


## سوال ۱۳ — دو تا سه { #problem-hw6-9C91 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9C91" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی $CNF_k$ را به این صورت در نظر بگیرید: آیا یک فرمول CNF که در آن هر متغیر حداکثر در $k$ مکان ظاهر شده است، ارضاپذیر (satisfiable) است؟
با توجه به این تعریف، به سوالات زیر پاسخ دهید:

- **(الف)** نشان دهید مسئله‌ی $CNF_2$ در مزان چندجمله‌ای قابل حل است.
- **(ب)** نشان دهید که مسئله‌ی $CNF_3$ یک مسئله‌ی NP-complete است.
</div>


## سوال ۱۴ — برش بیشینه { #problem-hw6-8153 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8153" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

یک برش (cut) در یک گراف بدون‌جهت، یک بخش‌بندی از رئوس گراف به دو مجموعه‌ی مجزای $S$ و $T$ است. اندازه‌ی یک برش برابر تعداد یال‌هایی از گراف است که یک سر آن‌ها در $S$ و دیگری در $T$ قرار دارد.

مسئله‌ی MAX-CUT به این صورت تعریف می‌شود: آیا برای گراف $G$ و عدد $k$، برشی با اندازه‌ی $k$ یا بیشتر در گراف وجود دارد؟

با دانستن این تعاریف، نشان دهید مسئله‌ی MAX-CUT یک مسئله‌ی NP-complete است.
</div>


## سوال ۱۵ — خوشه‌های بددست { #problem-hw6-7B84 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-7B84" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در نظریه‌ی گراف، یک کلیک (clique) یا زیرگراف کامل، مجموعه‌ای از رئوس است که هر دو رأس متمایز آن با یک یال مستقیماً به هم متصل شده باشند. 

- **(الف)** ثابت کنید مسئله‌ی CLIQUE (تشخیص وجود کلیکی با اندازه‌ی مشخص در یک گراف) یک مسئله‌ی NP-complete است.
- **(ب)** مسئله‌ی HALF-CLIQUE به این صورت تعریف می‌شود: آیا گراف بدون‌جهت $G$ با $m$ رأس، دارای یک زیرگراف کامل (کلیک) با حداقل $\frac{m}{2}$ رأس است؟
نشان دهید که مسئله‌ی HALF-CLIQUE یک مسئله‌ی NP-complete است.
</div>


## سوال ۱۶ — تجزیه در خوشبختی { #problem-hw6-3297 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-3297" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

نشان دهید اگر $P=NP$ آنگاه می‌توانیم اعداد صحیح را در زمان چندجمله‌ای تجزیه کنیم.
</div>


## سوال ۱۷ — دوگانگی <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-2efb .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-2efb" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

برنامه‌ی خطی زیر را در نظر بگیرید:

\[
\max 4x_1 + x_2
\]

به شرط‌های

\[
\begin{aligned}
2x_1 + x_2 &\le 8, \\
x_1 + 2x_2 &\le 8, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]

- **(الف)** دوگان این برنامه را بنویسید.
- **(ب)** یک جواب شدنی برای برنامه‌ی اولیه با مقدار $16$ پیدا کنید.
- **(ج)** یک جواب شدنی برای دوگان با مقدار $16$ پیدا کنید و نتیجه بگیرید جواب قسمت قبل بهینه است.
</div>


## سوال ۱۸ — کارخانه حریص <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-harris .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="harris" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

یک کارگاه دو نوع محصول $A$ و $B$ تولید می‌کند. تولید هر واحد $A$، دو واحد ماده‌ی اولیه و یک ساعت زمان لازم دارد و سود آن $5$ واحد است. تولید هر واحد $B$، یک واحد ماده‌ی اولیه و سه ساعت زمان لازم دارد و سود آن $6$ واحد است. کارگاه در کل $100$ واحد ماده‌ی اولیه و $90$ ساعت زمان دارد.

یک برنامه‌ی خطی بنویسید که بیشترین سود کارگاه را مدل کند. سپس جواب بهینه را نیز پیدا کنید.
</div>


## سوال ۱۹ — کوتاه‌ترین مسیر { #problem-hw6-E4E4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-E4E4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

گراف جهت‌دار زیر داده شده است:

\[
s \to a: 2, \qquad s \to b: 5, \qquad a \to b: 1, \qquad a \to t: 2, \qquad b \to t: 2.
\]

با استفاده از متغیرهای $d_v$، برنامه‌ی خطی زیر را برای پیدا کردن فاصله‌ی کوتاه‌ترین مسیر از $s$ به $t$ کامل کنید:

\[
\max d_t - d_s
\]

به شرط اینکه برای هر یال $(u,v)$ داشته باشیم:

\[
d_v \le d_u + w(u,v).
\]

سپس با قرار دادن $d_s = 0$، مقدار بهینه‌ی $d_t$ را پیدا کنید و بگویید با کدام مسیر متناظر است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نرگس کاری</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q19-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q19-solution-notes.pdf">shortest-path-lp.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۰ — شار بیشینه { #problem-hw6-C4DD .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C4DD" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

شبکه‌ی زیر را در نظر بگیرید:

\[
s \to a: 3, \qquad s \to b: 2, \qquad a \to b: 1, \qquad a \to t: 2, \qquad b \to t: 3.
\]

ظرفیت هر یال کنار آن نوشته شده است.

- **(الف)** یک برنامه‌ی خطی برای شار بیشینه از $s$ به $t$ بنویسید.
- **(ب)** یک شار شدنی با مقدار $5$ ارائه دهید.
- **(ج)** با استفاده از یک cut ساده نشان دهید مقدار شار بیشینه بیشتر از $5$ نمی‌شود.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سید محمد مهدی حسینی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q20-solution-video.mp4"></video></div>


</details>


## سوال ۲۱ — دوگان شار بیشینه { #problem-hw6-E3C4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-E3C4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

فرض کنید $P$ مجموعه‌ی همه‌ی مسیرهای از $s$ به $t$ در یک شبکه‌ی جهت‌دار باشد. برای هر مسیر $p$، متغیر $x_p$ نشان می‌دهد چه مقدار شار از مسیر $p$ عبور می‌کند. برنامه‌ی خطی زیر را در نظر بگیرید:

\[
\max \sum_{p \in P} x_p
\]

به شرط‌های

\[
\begin{aligned}
\sum_{p: e \in p} x_p &\le c_e \quad \forall e \in E, \\
x_p &\ge 0.
\end{aligned}
\]

- **(الف)** دوگان این برنامه‌ی خطی را بنویسید.
- **(ب)** نشان دهید هر cut از $s$ به $t$، یک جواب شدنی برای دوگان می‌دهد.
- **(ج)** نشان دهید از هر جواب شدنی برای دوگان می‌توان یک cut با ظرفیت حداکثر برابر مقدار آن جواب ساخت.
</div>


## سوال ۲۲ — هزینه تخصیص { #problem-hw6-9A44 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9A44" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

سه کارگر و سه کار داریم. هزینه‌ی انجام کار $j$ توسط کارگر $i$ در ماتریس زیر آمده است:

\[
C = \begin{bmatrix}
4 & 1 & 3 \\
2 & 0 & 5 \\
3 & 2 & 2
\end{bmatrix}.
\]

یک برنامه‌ی خطی برای کمینه کردن هزینه‌ی تخصیص بنویسید و جواب بهینه را پیدا کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سجاد عاقلی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q22-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q22-solution-image.png">Screenshot-662-.png</a></li></ul></div>
</div>


</details>


## سوال ۲۳ — نقطه چبیشف { #problem-hw6-1980 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-1980" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

چندضلعی محدب زیر در صفحه داده شده است:

\[
0 \le x \le 4, \qquad 0 \le y \le 2, \qquad x+y \le 5.
\]

برنامه‌ی خطی‌ای بنویسید که بزرگ‌ترین دایره‌ی کاملاً داخل این چندضلعی را پیدا کند. سپس شعاع بهینه را به دست آورید.
</div>


## سوال ۲۴ — فرم استاندارد { #problem-hw6-e199 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-e199" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

برنامه‌ی خطی زیر را به فرم استاندارد

\[
\max c^T x \qquad \text{s.t.} \quad Ax \le b, \quad x \ge 0
\]

تبدیل کنید:

\[
\min 3x_1 - 2x_2 + 5x_3
\]

به شرط‌های

\[
\begin{aligned}
x_1 + 2x_2 - x_3 &\ge 7, \\
-2x_1 + x_2 &= 3, \\
x_1 \ge 0, \qquad x_2 &\text{ is unrestricted}, \qquad x_3 \le 0.
\end{aligned}
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علی نعمت دوست</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q24-solution-video.mp4"></video></div>


</details>


## سوال ۲۵ — فرم اسلک { #problem-hw6-5948 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-5948" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

برنامه‌ی خطی زیر را به فرم اسلک (slack form) تبدیل کنید و جواب پایه‌ای اولیه را بنویسید:

\[
\max 4x + 3y
\]

به شرط‌های

\[
\begin{aligned}
x + 2y &\le 8, \\
3x + y &\le 9, \\
x, y &\ge 0.
\end{aligned}
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - مهدی نعمتی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q25-solution-video.mp4"></video></div>


</details>


## سوال ۲۶ — بی‌کرانی { #problem-hw6-013C .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-013C" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

نشان دهید برنامه‌ی خطی زیر بی‌کران است:

\[
\max x_1 - x_2
\]

به شرط‌های

\[
\begin{aligned}
-2x_1 + x_2 &\le -1, \\
-x_1 - 2x_2 &\le -2, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]
</div>


## سوال ۲۷ — نشدنی { #problem-hw6-6BAC .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-6BAC" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

نشان دهید برنامه‌ی خطی زیر نشدنی (infeasible) است:

\[
\max x_1 + x_2
\]

به شرط‌های

\[
\begin{aligned}
x_1 + x_2 &\le 2, \\
-2x_1 - 2x_2 &\le -10, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]
</div>


## سوال ۲۸ — دوگان بازی { #problem-hw6-2FB2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2FB2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

برای یک گراف دوبخشی $G = (L \cup R, E)$، برنامه‌ی خطی کمینه‌سازی پوشش رأسی را بنویسید. سپس دوگان آن را حساب کنید و توضیح دهید چرا دوگان، همان برنامه‌ی خطی تطابق است.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - علی مقدسی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q28-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q28-solution-notes.pdf">HW1.pdf</a></li></ul></div>
</div>


</details>


## سوال ۲۹ — فلش‌بک { #problem-duality-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

تعدادی بازه‌ی زمانی به صورت $(s_i, f_i)$ داده شده‌اند.

مسئله‌ی اول: می‌خواهیم بیشترین تعداد بازه‌ی سازگار را انتخاب کنیم؛ یعنی هیچ دو بازه‌ی انتخاب‌شده هم‌پوشانی نداشته باشند.

مسئله‌ی دوم: می‌خواهیم کمترین تعداد نقطه را انتخاب کنیم، به طوری که هر بازه شامل حداقل یک نقطه‌ی انتخاب‌شده باشد.

نشان دهید جواب این دو مسئله برابر است.
</div>


## سوال ۳۰ — جام جهانی { #problem-duality-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

برنامه‌ی زمانی بازی‌های جام جهانی مشخص شده اما هنوز محل برگزاری اون مشخص نیست.
در کل $n$ تا بازی داریم که هر بازی در یک بازه‌ی زمانی مشخص برگزار میشه. (برای روی گل سوال طول بازه‌ها لزوما برابر نیستن). منطقا دو تا بازی که تداخل زمانی دارند نمی‌تونن توی یه استادیوم برگزار بشن. اما اگه یکیشون ۹ شب تموم بشه اون یکی ۹ شب تازه شروع بشه کاملا اوکیه که تو یه استادیوم برگزار بشن.
شما اینفانتینو هستید و باید حساب کنید که کمترین تعداد استادیومی که نیاز دارید تا همه‌ی مسابقه‌ها رو برگزار کنید چند تاست.
الگوریتمی از
$\mathcal{O}(n\ log\  n)$ ارائه دهید که این تعداد را محاسبه کند.
</div>


## سوال ۳۱ — اثاث‌کشی پیچیده { #problem-duality-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

فرض کنید $n$ جعبه داریم که می‌خواهیم در اثاث‌کشی آن‌ها را جا به جا کنیم. جعبه‌ها دو بعدی هستند.

جعبه‌ی $i$ ام ابعاد $a_i \times b_i$ دارد. شرکت باربری به نرخ تعداد وسیله هزینه می‌گیره. برای اینکه هزینه‌ی باربری رو کمتر کنیم می‌خوایم یه سری از این جعبه‌ها رو بذاریم توی هم.
برای جلوگیری از آسیب به جعبه‌ها در حین جا‌به‌جایی، جعبه‌ها را فقط موازی محور مختصات درون هم قرار داده و درون هر جعبه حداکثر یک جعبه‌ی دیگر مستقیما قرار داده می‌شود.
با این تفاسیر شرط قرار دادن جعبه‌ی $i$ درون جعبه‌ی $j$ ام می‌شود:

$$
(a_i < a_j \land b_i < b_j) \lor (a_i < b_j \land b_i < a_j)
$$

الگوریتمی از $O(n \log n)$ ارائه دهید که کمترین تعداد شئ که باید به شرکت باربری تحویل دهیم را محاسبه کند.
</div>


<details class="tip problem-hints" markdown="1"><summary>راهنمایی‌ها</summary>

`سوال ۱) قاب‌های تو در تو` از تمرین ۱ و `سوال ۲۲) مستطیل‌ها` از تمرین ۲ را بررسی کنید.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - روژین تقی‌زادگان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q31-solution-video.mp4"></video></div>


</details>


## سوال ۳۲ — تطابق خطی { #problem-hw6-0D81 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-0D81" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

گراف دوبخشی زیر را در نظر بگیرید:

\[
L = \{a, b\}, \qquad R = \{1, 2, 3\},
\]

\[
E = \{(a, 1), (a, 2), (b, 2), (b, 3)\}.
\]

یک برنامه‌ی خطی برای پیدا کردن بزرگ‌ترین تطابق در این گراف بنویسید و مقدار بهینه‌ی آن را پیدا کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - فاطیما تیمارچی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q32-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>فایل‌های همراه</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q32-solution-notes.pdf">Q32.pdf</a></li></ul></div>
</div>


</details>


## سوال ۳۳ — رفع ابهام { #problem-hw6-AEBF .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-AEBF" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در برنامه‌نویسی خطی غیراستاندارد، ممکن است تعدادی از متغیرها بدون هیچ محدودیتی باشند. در حالی که در فرم استاندارد، لازم است که تمام متغیرها بزرگتر مساوی با صفر باشند. نشان دهید که چگونه می‌توان در تبدیل فرم غیراستاندارد به استاندارد، این مشکل را حل کرد.
</div>


## سوال ۳۴ — نرم بازی { #problem-hw6-9B19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9B19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسائل زیر را به صورت برنامه‌ریزی خطی (LP) فرمول‌بندی کنید. رابطه‌ی بین جواب بهینه‌ی هر مسئله و جواب LP معادل آن را توضیح دهید.

- **(آ)** (تقریب با نرم $\ell_\infty$)

\[
\text{minimize} \ \|Ax - b\|_\infty
\]

- **(ب)** (تقریب با نرم $\ell_1$)

\[
\text{minimize} \ \|Ax - b\|_1
\]

- **(ج)**

\[
\begin{cases} 
\text{minimize} & \|Ax - b\|_1 \\ 
\text{subject to} & \|x\|_\infty \le 1 
\end{cases}
\]

- **(د)**

\[
\begin{cases} 
\text{minimize} & \|x\|_1 \\ 
\text{subject to} & \|Ax - b\|_\infty \le 1 
\end{cases}
\]

- **(ه)**

\[
\text{minimize} \ \|Ax - b\|_1 + \|x\|_\infty
\]

در تمام مسائل، $A \in \mathbb{R}^{m \times n}$ و $b \in \mathbb{R}^m$ داده شده‌اند.
</div>


## سوال ۳۵ — تقسیم بار { #problem-hw6-1802 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-1802" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

تعدادی بار با جرم‌های مختلف $M_1, \dots, M_k$ در مکان‌های مختلف $P_1, \dots, P_k$ قرار دارند. همچنین تعدادی انبار در نقاط $Q_1, \dots, Q_n$ قرار دارند، به‌طوری که ظرفیت انبار $i$ام برابر با $C_i$ است (یعنی چنانچه ظرفیت انبار $2$ تن باشد، بیش از $2$ تن را نمی‌توان در آن ذخیره‌سازی نمود). هدف انتقال بهینه بارها به این انبارها است، به‌طوری‌که کل کار لازم برای انتقال بارها کمینه شود. میزان انرژی مصرف شده را برابر حاصل ضرب جرم بار انتقالی در طول مسیر طی شده آن در نظر می‌گیریم.

- **(آ)** یک شرط لازم بدیهی برای امکان‌پذیر بودن انتقال بارها بیان کنید.
- **(ب)** .فرض کنید بارها مایع و قابل تقسیم به اجزای کوچک‌تر باشند و می‌توان قطعات کوچک‌تر را به انبارهای متفاوتی ارسال نمود. مسئله را با یک برنامه‌ریزی خطی مدل کنید
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - نیکی رشیدیان</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q35-solution-video.mkv"></video></div>


</details>


## سوال ۳۶ — ساده‌سازی { #problem-hw6-30D4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-30D4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در یک برنامه‌ی خطی بولی (Boolean linear program)، متغیر $x$ طوری محدود شده است که درایه‌های آن برابر با صفر یا یک باشند:

\[
\min c^T x
\]

به شرط‌های

\[
\begin{aligned}
Ax &\preceq b \\
x_i &\in \{0, 1\}, \quad i = 1, \dots, n.
\end{aligned} \qquad
\]

به طور کلی حل چنین مسائلی بسیار دشوار است، هرچند که مجموعه‌ی جواب‌های شدنی (feasible set) متناهی است (حداکثر دارای $2^n$ نقطه است).

در یک روش کلی به نام relaxation، قید صفر یا یک بودن $x_i$ با نامعادله‌های خطی $0 \le x_i \le 1$ جایگزین می‌شود:

\[
\min c^T x
\]

به شرط‌های

\[
\begin{aligned}
Ax &\preceq b \\
0 \le x_i &\le 1, \quad i = 1, \dots, n.
\end{aligned} \qquad
\]

ما به این مسئله LP relaxationِ مسئله‌ی Boolean LP می‌گوییم. حل مسئله‌ی LP relaxation بسیار ساده‌تر از Boolean LP اولیه است.

- **(الف)** نشان دهید که مقدار بهینه‌ی LP relaxation یک کران پایین (lower bound) روی مقدار بهینه‌ی Boolean LP است. اگر LP relaxation نشدنی (infeasible) باشد، درباره‌ی Boolean LP چه می‌توان گفت؟
- **(ب)** گاهی اوقات پیش می‌آید که LP relaxation دارای جوابی به صورت $x_i \in \{0, 1\}$ است. در این حالت چه می‌توان گفت؟ آیا پاسخ حالت ساده شده برابر حالت اولیه است؟
</div>


## سوال ۳۷ — تقریب مفید <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="دست‌نویس" aria-label="دست‌نویس"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-539a .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-539a" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی vertex cover یک مسئله‌ی NP-complete است. حال الگوریتم زیر را برای این مسئله در نظر بگیرید:

در هر مرحله، دو سر اولین یالی که پوشش داده نشده را در مجموعه‌ی راس‌های انتخابی قرار می‌دهیم. در صورتی که همه‌ی یال‌ها پوشش داده شدند، الگوریتم را متوقف می‌کنیم.

البته که این الگوریتم یک الگوریتم تقریبی است، اما اکنون در زمان چندجمله‌ای اجرا می‌شود.

ثابت کنید الگوریتم معرفی شده، یک الگوریتم
<span dir="ltr">2-approximation</span>&#32;
است.
</div>


## سوال ۳۸ — تقریب پوشش مجموعه‌ای { #problem-hw6-8200 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8200" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی پوشش مجموعه (Set Cover) به این صورت تعریف می‌شود:
یک مجموعه‌ی مرجع (Universe) به نام $U$ با اندازه‌ی $|U| = n$ و کلکسیونی از زیرمجموعه‌های آن $S_1, S_2, \dots, S_m$ داده شده است. هدف پیدا کردن کمترین تعداد از این زیرمجموعه‌هاست که اجتماع آن‌ها برابر با کل مجموعه‌ی مرجع $U$ شود.

یک الگوریتم $\ln n$-approximation برای این مسئله ارائه دهید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - سروش داوران</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q38-solution-video.mp4"></video></div>


</details>


## سوال ۳۹ — جهانگرد تقریبی { #problem-hw6-D6C9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-D6C9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در این نسخه از مسئله‌ی TSP، گراف کامل است و فواصل بین شهرها در نامساوی مثلثی (triangle inequality) صدق می‌کنند.

یک الگوریتم 2-approximation برای حل این مسئله ارائه دهید و درستی ضریب تقریب آن را ثابت کنید.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ایلیا یزدانی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q39-solution-video.mp4"></video></div>


</details>


## سوال ۴۰ — مجموعه غالب { #problem-hw6-2D17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2D17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی مجموعه‌ی احاطه‌گر (Dominating Set) به این صورت تعریف می‌شود: 
کمترین تعداد از رئوس را پیدا کنید به طوری که هر رأس در گراف، یا خودش انتخاب شده باشد و یا مجاور یک رأس انتخاب‌شده باشد.

یک الگوریتم تقریبی برای این مسئله ارائه دهید که ضریب تقریب (Approximation Ratio) آن در اوردر $O(\log n)$ باشد.
</div>


## سوال ۴۱ — پوشش راسی ابتکاری { #problem-hw6-219e .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-219e" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

روش ابتکاری زیر را برای مسئله‌ی vertex cover در نظر بگیرید: یک درخت جستجوی اول عمق (DFS tree) از گراف بسازید و تمام برگ‌ها را از این درخت حذف کنید.

- **(الف)** نشان دهید رئوس باقی‌مانده حتماً یک پوشش رأسی (vertex cover) برای گراف تشکیل می‌دهند.
- **(ب)** ثابت کنید اندازه‌ی این پوشش پیدا شده، حداکثر دو برابر اندازه‌ی پوشش بهینه (optimal) است (یعنی این الگوریتم یک 2-approximation است).
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - ایلیا فرصتی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q41-solution-video.mp4"></video></div>


</details>


## سوال ۴۲ — تطابق سرعتی { #problem-hw6-50D9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-50D9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

مسئله‌ی تطابق (Matching) را در نظر بگیرید:
- **(الف)** الگوریتمی با مرتبه زمانی $O(|E|)$ طراحی کنید که یک تطابق بیشینه (maximal matching) در گراف $G$ پیدا کند.
- **(ب)** فرض کنید $M$ یک تطابق ماکزیمم (maximum matching) در گراف $G$ باشد. ثابت کنید برای هر تطابق بیشینه‌ای (maximal matching) مانند $M'$، رابطه‌ی $|M'| \ge \frac{|M|}{2}$ برقرار است. به عبارت دیگر، ثابت کنید الگوریتم بخش الف، یک الگوریتم 2-approximation برای مسئله‌ی تطابق ماکزیمم است.

*(دقت کنید که مسئله‌ی تطابق ماکزیمم NP-hard نیست و برای آن الگوریتم چندجمله‌ای دقیق وجود دارد، اما در اینجا هدف تحلیل یک روش تقریبی سریع است.)*
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">پاسخ</span> <span class="problem-solution-summary-video" title="دارای ویدیو" aria-label="دارای ویدیو"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - زهرا قصابی</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q42-solution-video.mkv"></video></div>


</details>


## سوال ۴۳ — بی دوری { #problem-hw6-EA5B .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-EA5B" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

یک گراف جهت‌دار $G = (V, E)$ داده شده است. هدف ما پیدا کردن بزرگ‌ترین زیرمجموعه از یال‌ها مانند $E' \subseteq E$ است، به طوری که زیرگراف $G' = (V, E')$ (گرافی روی همان مجموعه‌ی رئوس $G$ که توسط زیرمجموعه یال‌های $E'$ القا شده است) هیچ دور جهت‌داری (directed cycle) نداشته باشد.

**راهنمایی:** رئوس را به صورت دلخواه مرتب کنید و یال‌های رو به جلو (forward) و رو به عقب (backward) را در نظر بگیرید (یال $(v_i, v_j)$ یک یال رو به جلو است اگر در ترتیب در نظر گرفته شده $i < j$ باشد). زیرمجموعه‌ای از یال‌ها را پیدا کنید که شامل حداقل نیمی از یال‌ها باشد و هیچ دوری ایجاد نکند.
</div>


## سوال ۴۴ — استاندار بی‌حوصله { #problem-hw6-F4BE .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-F4BE" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">صورت سوال</span></div>

در یک کشور $n$ شهر و بین هر دو شهر یک جاده وجود دارد (گراف کامل). می‌خواهیم این کشور را به $k$ استان تقسیم کنیم و هر استان یک مرکز استان داشته باشد، به طوری که بیشترین فاصله‌ی شهرها تا مرکز استان‌شان، کمترین مقدار ممکن باشد (مسئله‌ی $k$-center).

**نکته:** فرض کنید فاصله‌ها یک متریک تشکیل می‌دهند؛ به‌ویژه نامساوی مثلثی برقرار است.

فرض کنید جواب بهینه $d$ باشد؛ یعنی روشی برای تقسیم‌بندی وجود داشته باشد که هر شهر تا مرکز استان آن حداکثر فاصله‌ی $d$ را داشته باشد و با هیچ روش دیگری این حداکثر فاصله کمتر نشود.

الگوریتمی ارائه دهید که $k$ مرکز استان را پیدا کند به طوری که فاصله‌ی هر شهر تا مرکز استان آن حداکثر $2d$ شود (یک الگوریتم 2-approximation). سپس درستی الگوریتم خود را اثبات کنید.
</div>
