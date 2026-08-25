---
assignment: true
---

# Assignment 2

<div data-assignment-problem-filter></div>


## Introductory


## Problem 1 — Tiling a Strip { #problem-hw2-p01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A rectangular $1 \times n$ strip must be tiled completely using $1 \times 1$ and $1 \times 2$ tiles. Every tile must lie entirely inside the strip, and no two tiles may overlap. Give an $\mathcal{O}(n)$ algorithm that counts the number of tilings.
</div>


## Problem 2 — Dice Combinations { #problem-hw2-p02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A $k$-sided die has the numbers $1,2,\dots,k$ on its faces. In how many ways can one or more dice be rolled so that their sum is $n$?

For example, when $n=3$ and $k=6$, there are four possibilities: $1+1+1$, $1+2$, $2+1$, and $3$.

Give an $\mathcal{O}(nk)$ algorithm for the general case.
</div>


## Problem 3 — Minimum Coins { #problem-hw2-p03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A country has $n$ coin denominations $c_1,c_2,\dots,c_n$, with an unlimited supply of each. Pay an amount $m$ using as few coins as possible. Give an $\mathcal{O}(nm)$ algorithm that finds the minimum number of coins required.

For example, if $n=3$, $m=9$, and $c=\{1,2,5\}$, the minimum number of coins is $3$.
</div>


## Problem 4 — Frog { #problem-hw2-p04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

$n$ stones are numbered $1$ through $n$ from left to right, and stone $i$ has height $h_i$. A frog starts on stone $1$ and wants to reach stone $n$. A jump from stone $i$ to stone $j$ must satisfy $j \in \{i+1,i+2,\dots,i+k\}$ and costs $|h_i-h_j|$. Compute the minimum cost of reaching stone $n$ from stone $1$.
</div>


## Problem 5 — Semester Break <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p05 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Dr. Abaam has arranged an $n$-day break between two semesters. On each day you choose one of your three available activities, gaining $A_i$, $B_i$, or $C_i$ units of enjoyment, respectively. Choosing the same activity on two consecutive days ruins the break. Compute the maximum enjoyment obtainable over the $n$ days in $\mathcal{O}(n)$ time.
</div>


## Problem 6 — Forward Jumps { #problem-hw2-p06 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p06" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array of $n$ positive integers is given. Whenever you are at index $i$, you jump to index $i+a_i$. If $i+a_i>n$, you leave the array.

Give an $\mathcal{O}(n)$ algorithm that computes, for every $i$, the number of jumps needed to leave the array when starting at $i$.
</div>


## Problem 7 — Maximum Subarray Sum { #problem-hw2-p07 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p07" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array of positive and negative integers $a_1,a_2,\dots,a_n$ is given. Select a contiguous subarray with maximum possible sum. Give an $\mathcal{O}(n)$ algorithm that computes this maximum.

For example, for $A=\langle -7, 10, 2, -5, 3, 7, -100, 16 \rangle$, selecting elements 2 through 6 gives the maximum sum, $17$.
</div>


## Problem 8 — Longest Path in a DAG { #problem-hw2-p08 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p08" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider a directed graph with $n$ vertices and $m$ edges in which every edge between vertices $i<j$ is directed from $i$ to $j$. Give an $\mathcal{O}(n+m)$ algorithm that finds a longest path in the graph.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Mahmoudieh</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q08-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q08-solution-notes.pdf">DA_HW2_Q8.pdf</a></li></ul></div>
</div>


</details>


## Problem 9 — Paths in a Grid { #problem-hw2-p09 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p09" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n \times m$ grid contains blocked cells. Rows are numbered $1$ through $n$ from top to bottom and columns $1$ through $m$ from left to right. Starting at $(1,1)$, move to $(n,m)$ using only one-cell moves right or down, without entering blocked cells. Give an $\mathcal{O}(nm)$ algorithm that counts the possible paths.
</div>


## Problem 10 — Subrectangle Sums { #problem-hw2-p10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n \times m$ grid stores $a_{i,j}$ in cell $(i,j)$. We must answer subrectangle-sum queries. Give an algorithm with $\mathcal{O}(nm)$ preprocessing that answers each query in $\mathcal{O}(1)$ time.
Each query consists of two pairs $(x_1,y_1)$ and $(x_2,y_2)$, respectively the top-left and bottom-right cells of the requested subrectangle.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mahdyar Mostashar Harris</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q10-solution-video.mp4"></video></div>


</details>


## Problem 11 — LIS { #problem-hw2-p11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array is given, with value $a_i$ at index $i$.
Give an $\mathcal{O}(n^2)$ algorithm that computes the length of its longest increasing subsequence.
</div>


## Problem 12 — Knapsack <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p12 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are a thief in a store containing $n$ items numbered $1$ through $n$. Item $i$ has weight $w_i$ and value $v_i$. Your knapsack can carry total weight at most $W$. Select items whose total value is maximized.

**(a)** Give a counterexample showing that the following algorithm is incorrect.
Sort the items in decreasing order of $\frac{v_i}{w_i}$, then scan them in that order and add every item that still fits in the knapsack.

**(b)** Give an $\mathcal{O}(nW)$ algorithm that computes the maximum total value that fits in the knapsack.
</div>


## Problem 13 — Filling an Array { #problem-hw2-p13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array has value $a_i$ at index $i$. For each $i$, either $1 \leq a_i \leq m$ or $a_i=-1$. Replace every $-1$ with an integer from $1$ through $m$ so that $|a_i-a_{i+1}|\leq 1$ for every $1\leq i\leq n-1$.
Give an $\mathcal{O}(nm)$ algorithm that counts the number of valid replacements.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ashkan Tarivardi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q13-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q13-solution-notes.pdf">DA_DPHW_final_slides.pdf</a></li></ul></div>
</div>


</details>


## Problem 14 — LCS <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p14 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Strings $s$ and $t$ have lengths $n$ and $m$, respectively. Give an $\mathcal{O}(nm)$ algorithm that finds their longest common subsequence—that is, the longest string $w$ that is a subsequence of both $s$ and $t$.
</div>


## Problem 15 — Divide by 2 { #problem-hw2-p15 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose a recursive function $f$ has base case $f(1)$, and $f(n)$ depends only on $f(\lfloor \frac{n}{2} \rfloor)$ and $f(\lceil \frac{n}{2} \rceil)$. Prove that $f$ is called with only $\mathcal{O}(\log n)$ distinct arguments.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Shayan Sabzi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q15-solution-video.mp4"></video></div>


</details>


## Problem 16 — Longest Palindromic Subsequence <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p16 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $s$ of length $n$ is given. Give an $\mathcal{O}(n^2)$ algorithm that computes the length of the longest palindromic subsequence of $s$.

A subsequence is obtained by selecting characters in order; the selected characters need not be adjacent.
For example, if $s=\texttt{abcbd}$, then $\texttt{abd}$ is one of its subsequences.
</div>


## Problem 17 — Matrix-Chain Multiplication <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p17 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ matrices $A_1,A_2,\dots,A_n$ and an array $p$ of length $n+1$. Matrix $A_i$ has dimensions $p_i\times p_{i+1}$, and we want to compute $A_1\times A_2\times\dots\times A_n$.

Multiplying an $a\times b$ matrix by a $b\times c$ matrix takes $a\times b\times c$ scalar multiplications and produces an $a\times c$ matrix.

Parenthesize the product to minimize the total number of scalar multiplications.
Give an $\mathcal{O}(n^3)$ algorithm that computes this minimum.
</div>


## Problem 18 — Carnival Enjoyment { #problem-hw2-p18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are attending an eternal carnival. Through your connection with the universe, you learn about $n$ carnival events: event $i$ starts at time $s_i$, ends at time $t_i$, and gives $p_i$ units of enjoyment.
Despite your enthusiasm, attending requires your physical presence, so you cannot attend two overlapping events. Travel time between venues may be ignored.
Compute the maximum enjoyment obtainable from the $n$ events in $\mathcal{O}(n\log n)$ time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ilya Forsati</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q18-solution-video.mp4"></video></div>


</details>


## Problem 19 — Edit Distance { #problem-hw2-p19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Strings $s$ and $t$ have lengths $n$ and $m$, respectively. Transform $s$ into $t$ by repeating the following operations:

Operation 1: delete any character from $s$, at cost $a$.

Operation 2: insert a character anywhere in $s$, at cost $b$.

Operation 3: replace any character of $s$ with another character, at cost $c$.

Give an $\mathcal{O}(nm)$ algorithm that computes the minimum cost of transforming $s$ into $t$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Parsa Shahmohammadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q19-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q19-solution-notes.pdf">DA-19.pdf</a></li></ul></div>
</div>


</details>


## Problem 20 — Bookshelf { #problem-hw2-p20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A library has $n$ books. Book $i$ has thickness $t_i$ and width $w_i$.
Arrange the books on a shelf as follows: place some books vertically side by side on the lower level, then place the remaining books horizontally on top. This is valid when the total thickness of the vertical books is at least the total width of the horizontal books; in other words, $\sum t_i$ over the vertical books must be at least $\sum w_i$ over the horizontal books.
Give an $\mathcal{O}(n\cdot\sum t_i)$ algorithm that minimizes $\sum t_i$ over the books on the lower level.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sepehr Alipour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q20-solution-video.mp4"></video></div>


</details>


## Problem 21 — LIS 2 { #problem-hw2-p21 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array is given, with value $a_i$ at index $i$.
Give an $\mathcal{O}(n\log n)$ algorithm that computes the length of its longest increasing subsequence.
</div>


## Problem 22 — Rectangles <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw2-p22 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw2-p22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ rectangles numbered $1$ through $n$. Rectangle $i$ has width $w_i$ and height $h_i$. Give an $\mathcal{O}(n\log n)$ algorithm that finds the largest subset in which every pair of rectangles is nested: for rectangles $i$ and $j$, either $h_i>h_j$ and $w_i>w_j$, or $h_j>h_i$ and $w_j>w_i$.
</div>


## Advanced


## Problem 23 — Knapsack 2 { #problem-hw2-p23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are a thief in a store containing $n$ items numbered $1$ through $n$. Item $i$ has weight $w_i$ and value $v_i$. Your knapsack can carry total weight at most $W$. Select a subset whose total value is maximized.
Give an $\mathcal{O}(n\cdot\sum v_i)$ algorithm that computes this maximum.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Parsa Zamiri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q23-solution-video.mp4"></video></div>


</details>


## Problem 24 — LIS Membership { #problem-hw2-p24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array has value $a_i$ at index $i$. Give an $\mathcal{O}(n\log n)$ algorithm that classifies every index $1\leq i\leq n$ into one of the following groups:

Group 1: indices appearing in every LIS of the array.

Group 2: indices appearing in some, but not all, LISs of the array.

Group 3: indices appearing in no LIS of the array.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Matin Ghiasi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q24-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q24-solution-notes.pdf">LIS_Solution_Slides-v2-1-.pdf</a></li></ul></div>
</div>


</details>


## Problem 25 — Bags and Coins { #problem-hw2-p25 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p25" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You have $n$ bags and $s$ coins. Determine whether the $s$ coins can be distributed among the bags so that, after optionally nesting some bags inside others, bag $i$ contains exactly $a_i$ coins in total. Coins may be directly inside bag $i$ or inside bags nested within it.
Solve the problem in $\mathcal{O}(ns)$ time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Soheil Sayyah Varg</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q25-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q25-solution-notes.pdf">HW2-25.pdf</a></li></ul></div>
</div>


</details>


## Problem 26 — Optimal Binary Search Tree { #problem-hw2-p26 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p26" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two length-$n$ arrays give keys $k_1,k_2,\dots,k_n$ and their search probabilities $p_1,p_2,\dots,p_n$. Construct a binary search tree (BST) with minimum expected search cost.
The search cost of a BST is $\sum(h_i\times p_i)$, where $h_i$ is the height of vertex $i$.

Give an $\mathcal{O}(n^3)$ algorithm that computes the minimum cost.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Arvin Baghalasl</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q26-solution-video.mp4"></video></div>


</details>


## Problem 27 — Palindrome Deletion { #problem-hw2-p27 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p27" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ sequence has value $a_i$ at position $i$. In one operation, delete a contiguous palindromic range; if this splits the remaining sequence, concatenate the two pieces. Give an $\mathcal{O}(n^3)$ algorithm that computes the minimum number of operations needed to delete the entire sequence.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Rasa Mohammadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q27-solution-video.mkv"></video></div>


</details>


## Problem 28 — Red-Green Tower { #problem-hw2-p28 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p28" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You have $r$ red blocks and $g$ green blocks and want to build a tower.
If the tower has $h$ levels, its first level contains $h$ blocks, the second $h-1$, and so on down to the last level, which contains one block. Every level must be monochromatic.
Let $h$ be the maximum height constructible from the available blocks. Count the distinct towers of height $h$.
Two towers are distinct if the block colors differ on at least one level.
Give an $\mathcal{O}((r+g)\sqrt{r+g})$ algorithm that computes the answer.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Ali Maschi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q28-solution-video.mp4"></video></div>


</details>


## Problem 29 — Painting the Fence { #problem-hw2-p29 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p29" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Hamid has decided to paint his old fence his favorite color, blue.
The fence consists of $n$ adjacent vertical boards with no gaps, numbered from left to right starting at $1$. Every board is one meter wide, and board $i$ is $a_i$ meters high.
Hamid has a one-meter-wide brush that may be moved vertically or horizontally. Throughout each stroke, the brush's entire surface must remain in contact with the fence.
The goal is to paint the whole fence. A portion of the fence may be painted more than once.
Give an $\mathcal{O}(n^2)$ algorithm that computes the minimum number of strokes needed.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mehdi Shirinbayan</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q29-solution-video.mp4"></video></div>


</details>


## Problem 30 — Egg Dropping { #problem-hw2-p30 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p30" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A building has $n$ floors and you have $e$ durable eggs. There is a floor $2\leq x\leq n$ such that an egg dropped from floor $x$ or above breaks, while one dropped from floor $x-1$ or below does not. Thus a drop from the first floor never breaks an egg, while a drop from the top floor always does. Each experiment drops one egg from any chosen floor. A broken egg cannot be reused; an intact egg can. The goal is to find $x$.

Assuming an optimal strategy, compute the minimum possible number of experiments required in the worst case.

Subtask 1: Give an $\mathcal{O}(n^2e)$ algorithm that computes this number.

Subtask 2: Give an $\mathcal{O}(n^2\log n)$ algorithm.

Subtask 3: Give an $\mathcal{O}(n\log n)$ algorithm.

Subtask 4: Give an $\mathcal{O}(\sqrt{n}\log n)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Arash Ghavami</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q30-solution-video.mp4"></video></div>


</details>


## Problem 31 — LCS of Permutations { #problem-hw2-p31 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p31" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two permutations of $1$ through $n$ are given. Find the length of their longest common subsequence in $\mathcal{O}(n\log n)$ time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammadreza Izadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q31-solution-video.mp4"></video></div>


</details>


## Problem 32 — LCS Lower Bound { #problem-hw2-p32 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p32" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $s$ and $t$, each of length $n$, are given. Give an $\mathcal{O}(nk)$ algorithm that determines whether their longest common subsequence has length at least $k$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Zahra Ghassabi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q32-solution-video.mp4"></video></div>


</details>


## Problem 33 — Hamiltonian Path { #problem-hw2-p33 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p33" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A simple graph with $n$ vertices is given.
Give an $\mathcal{O}(2^n n^2)$ algorithm that determines whether the graph has a path containing every vertex.
</div>


## Problem 34 — Hamiltonian Cycle { #problem-hw2-p34 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p34" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A simple graph with $n$ vertices is given.
Give an $\mathcal{O}(2^n n^2)$ algorithm that determines whether the graph has a cycle containing every vertex.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Nima Nazari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q34-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q34-solution-notes.pdf">findingHamltonCycle.pdf</a></li></ul></div>
</div>


</details>


## Problem 35 — Merging Equal Neighbors { #problem-hw2-p35 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p35" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ array of positive integers has value $a_i$ at index $i$. In one operation, merge two adjacent equal elements into one element whose value is one greater; merging adjacent values $x,x$ produces $x+1$. Repeatedly apply the operation to obtain the largest possible value.

Give an $\mathcal{O}(n\log n)$ algorithm that computes this largest value.
</div>


## Problem 36 — Tiling a Strip 2 { #problem-hw2-p36 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p36" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A rectangular $1\times n$ strip must be tiled completely using $1\times1$ and $1\times2$ tiles. Every tile must lie entirely inside the strip, and no two may overlap. Give an $\mathcal{O}(\log n)$ algorithm that counts the tilings.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Rozhin Taghizadegan</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q36-solution-video.mp4"></video></div>


</details>


## Problem 37 — Mash-Makh { #problem-hw2-p37 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p37" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Call a length-$k$ array $a$ of positive integers good if $1\leq a_i\leq n$ for every $i$, and $a_i\mid a_{i+1}$ for every $1\leq i\leq k-1$.

Give an $\mathcal{O}(nk\log n)$ algorithm that counts the good arrays.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Bani-Ahmadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q37-solution-video.mp4"></video></div>


</details>


## Problem 38 — Weighted Search { #problem-hw2-p38 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p38" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Ali and Reza play a game on a sorted, increasing array of length $n$:

1. Ali chooses a number $x$.

2. By asking queries, Reza must find the first array entry greater than $x$, or determine that every entry is smaller than $x$.

3. In each query, Reza chooses an index $i$, and Ali answers whether the entry at $i$ is greater than $x$. This query costs $c_i$.

Reza chooses a strategy minimizing the maximum amount he might pay (the worst-case cost), while Ali chooses $x$ to maximize that cost.
Assuming both play optimally, give an $\mathcal{O}(n\log n\cdot c^2)$ algorithm that computes Reza's final cost.
</div>


## Problem 39 — RGB { #problem-hw2-p39 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p39" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Construct a length-$n$ sequence in which every element is one of three colors: red, blue, or green.
You are also given $m$ constraints. Constraint $i$ consists of $l_i,r_i,x_i$ and requires the range $[l_i,r_i]$ to contain exactly $x_i$ distinct colors.

Give an $\mathcal{O}(n^2(n+m))$ algorithm that counts the distinct color sequences satisfying all constraints.
</div>


## Problem 40 — Paths in a Grid 2 { #problem-hw2-p40 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p40" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times m$ grid has exactly $k$ blocked cells $(x_1,y_1),(x_2,y_2),\dots,(x_k,y_k)$. Starting at $(1,1)$, move to $(n,m)$ using only one-cell moves right or down and never enter a blocked cell. Count the possible paths.

Give an $\mathcal{O}(n+m+k^2)$ algorithm for the general case.
</div>


## Problem 41 — Coin Grid { #problem-hw2-p41 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p41" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times n$ grid has $a_{i,j}$ coins in cell $(i,j)$. Alice and Bob both start at $(1,1)$ and want to reach $(n,n)$. Each may move only one cell down or right at a time.
Alice and Bob collect coins from every cell they visit. If both visit the same cell, its coins are collected only once. Choose their two paths to maximize the total number of collected coins. Give an $\mathcal{O}(n^3)$ algorithm that computes this maximum.
</div>


## Problem 42 — Disjoint Paths { #problem-hw2-p42 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw2-p42" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times m$ grid contains blocked cells. Alice starts at $(1,2)$ and wants to reach $(n-1,m)$; Bob starts at $(2,1)$ and wants to reach $(n,m-1)$. Each may move only one cell down or right at a time.

Alice and Bob never want to meet, so their paths must have no cell in common. Neither may enter a blocked cell. Count the pairs of paths in which both reach their destinations without entering blocked cells or meeting.

Give an $\mathcal{O}(nm)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mehrad Hessari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-02-q42-solution-video.mp4"></video></div>


</details>
