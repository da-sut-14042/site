---
assignment: true
---

# Assignment 1

<div data-assignment-problem-filter></div>


## Part I: Introductory Problems — Greedy Algorithms


## Problem 1 — Nested Frames { #problem-hw1-p1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are given several picture frames, where frame $i$ has dimensions $a_i \times b_i$. Determine whether the frames can be ordered so that every frame fits strictly inside the next one. Each frame may be rotated by $90^\circ$. Give an $O(n\log n)$ algorithm.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Greedy</span></span></div>


<details class="success problem-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span></summary>

The basic condition for frame $i$ to fit inside frame $j$ is

\[
(a_i < a_j \land b_i < b_j) \lor (a_i < b_j \land b_i < a_j)
\]

=== "First solution"
    Sort the frames by perimeter or area in $O(n\log n)$ time, then check the containment condition above for every consecutive pair.

    To prove correctness, observe that if frame $i$ fits strictly inside frame $j$, then both its perimeter and its area are strictly smaller. Therefore, if a nesting order containing all frames exists, sorting by either quantity places every inner frame before every frame that contains it. Consequently, the sorted order itself must be a valid nesting order, which is verified by the consecutive-pair checks.

=== "Second solution"
    For every frame, define $x_i=\min(a_i,b_i)$ and $y_i=\max(a_i,b_i)$.

    The previous condition is equivalent to:
    $x_i < x_j \land y_i < y_j$.

    Sort the frames lexicographically by $(x_i,y_i)$ and check every consecutive pair using the condition above. Using both coordinates as the sorting key also handles equal values of $x_i$ correctly.

    If every check succeeds, the answer is yes. The running time is $O(n\log n)$.

</details>


## Problem 2 — Maximum Set of Compatible Intervals <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p2 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are given time intervals $(s_i,f_i)$. Select the maximum possible number of compatible (non-overlapping) intervals, meaning that no two selected intervals overlap.
Give a greedy $O(n\log n)$ algorithm.
</div>


## Problem 3 — Covering Intervals with Points { #problem-hw1-p3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are given several intervals on a line. Select the minimum number of points such that every interval contains at least one selected point. Give a greedy $O(n\log n)$ algorithm, and prove that this optimum equals the optimum of the previous problem.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Zahra Amirbeigi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q03-solution-video.mov"></video></div>


</details>


## Problem 4 — Superincreasing Coins { #problem-hw1-p4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

We have coins with values

\[
c_1 < c_2 < \dots < c_n
\]

such that, for every $i \ge 2$, $c_i$ is greater than the sum of all preceding coin values.

There is exactly one coin of each value.

Given a target value $V$, determine whether a subset of the coins has total value exactly $V$.

Give a greedy $O(n)$ algorithm.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Greedy</span></span></div>


<details class="success problem-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span></summary>

Because every coin is worth more than all previous coins combined, if $V$ is at least $c_n$, coin $n$ must be selected: all the other coins together are insufficient. If $V<c_n$, coin $n$ must not be selected.
Thus the choice for the last coin is forced. Continue in the same way, scanning the coins from last to first.

</details>


## Problem 5 — Removing $k$ Digits { #problem-hw1-p5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A number is given as a length-$n$ digit string containing no zeroes. Delete exactly $k$ digits so that the resulting number is as large as possible. Give an $O(n)$ algorithm.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>



<details class="abstract hint hint-pivot" markdown="1"><summary>First solve the case $k=1$.</summary>

Instead of treating the string as a number, compare strings lexicographically.
We want the lexicographically greatest result.



<details class="question hint hint-question" markdown="1"><summary>When does deleting a digit improve the string lexicographically?</summary>

When the next digit is larger.
Work out separately what happens when the next digit is equal.

</details>




<details class="question hint hint-question" markdown="1"><summary>Which deletion gives the greatest improvement?</summary>

An improvement is more valuable the closer it occurs to the beginning of the string.

</details>




<details class="tip hint hint-tip" markdown="1"><summary>Therefore...</summary>

Delete the leftmost digit that is smaller than the digit immediately after it.
If no such digit exists, delete the last digit.

</details>



</details>



</details>


## Problem 6 — Fractional Knapsack { #problem-hw1-p6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are several items; item $i$ has weight $w_i$ and value $v_i$. A knapsack has capacity $W$, and fractions of items may be taken. Maximize the total value. Give a greedy $O(n\log n)$ algorithm and run it on the following input:

\[
(w,v)= (10,60),(20,100),(30,120),\qquad W=50
\]
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>



<details class="abstract hint hint-pivot" markdown="1"><summary>Suppose the items could be ordered...</summary>



<details class="note hint hint-subproblem" markdown="1"><summary>From divisible items to unit items</summary>

Because fractions of items may be taken, an item of weight $w_i$ and value $v_i$ can effectively be split into $w_i$ unit-weight items, each worth $\frac{v_i}{w_i}$.

</details>




<details class="question hint hint-question" markdown="1"><summary>How do we solve this new problem?</summary>

We need to take $W$ unit-weight items, so sort them by value and take the $W$ most valuable ones.

</details>



</details>




<details class="question hint hint-question" markdown="1"><summary>How does this solve the original problem?</summary>

Define the value density of each item as $value_i = \frac{v_i}{w_i}$. We should take as much as possible from items with greater value density.

</details>



</details>


## Problem 7 — Forming a Triangle { #problem-hw1-p7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are given $n$ line segments with positive lengths $a_1, a_2, \dots, a_n$. Give an $O(n\log n)$ algorithm that determines whether three distinct segments can form a triangle of positive area. Output one valid triple if it exists; otherwise report that none exists.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Negar Yarahmadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q07-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q07-solution-notes.pdf">7_triangle.pdf</a></li></ul></div>
</div>


</details>


## Problem 8 — Merging Numbers on a Board <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p8 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Several numbers are written on a board. In each step, erase two numbers $x$ and $y$ and replace them with $x+y$; the step costs $x+y$. After $n-1$ operations, only one number must remain. Give a greedy $O(n\log n)$ algorithm minimizing the total cost, and run it on the following input:

\[
5,\ 9,\ 12,\ 13,\ 16,\ 45
\]
</div>


## Problem 9 — Prefix-Free Coding <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p9 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

We want to design a compression algorithm for a set of characters by assigning a binary string to each character such that:

- no codeword is a prefix of another (the code is prefix-free), so the text can be decoded uniquely;
- given the frequency of each character, the total number of bits needed to store the text is minimized.

More precisely, if character $i$ has frequency $f_i$ and its assigned codeword has length $\ell_i$, minimize $\sum_i f_i \ell_i$.

**Hint:** This problem is equivalent to the previous one.

Give a greedy $O(n\log n)$ algorithm for constructing these codewords.
</div>


## Problem 10 — Scheduling with Deadlines { #problem-hw1-p10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ jobs. Job $i$ takes exactly one unit of time, yields profit $p_i$, and must finish by time $d_i$ (Job Sequencing with Deadlines). Schedule a subset of the jobs to maximize total profit. Give a greedy $O(n\log n)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Maedeh Heydari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q10-solution-video.mp4"></video></div>


</details>


## Problem 11 — Optimal Permutation of $\sum a_i b_i$ { #problem-hw1-p11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two length-$n$ sequences $A$ and $B$ are given. We may permute $A$.

- **(a)** Permute $A$ to minimize $\sum_{i=1}^{n} a_i b_i$.
- **(b)** Permute $A$ to maximize $\sum_{i=1}^{n} a_i b_i$.

Give an $O(n\log n)$ algorithm for each part.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

For simplicity, assume $B$ is sorted and only the order of $A$ may be changed.


<details class="question hint hint-question" markdown="1"><summary class="arithmatex">How does swapping $a_i$ and $a_j$ affect the objective?</summary>

$$ b_i \cdot (a_j - a_i) + b_j \cdot (a_i - a_j) = (b_i - b_j) \cdot (a_j - a_i)$$

Assume $i>j$; then $b_i \geq b_j$.



<details class="question hint hint-question" markdown="1"><summary>Under what conditions is this swap beneficial or harmful?</summary>



</details>



</details>



</details>


## Problem 12 — Assigning Two Teams { #problem-hw1-p12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ people. Person $i$ has athletic ability $a_i$ and academic ability $b_i$. Assign exactly $k$ people to the sports team and the remaining $n-k$ to the academic team, maximizing the sum of abilities in the fields to which people are assigned.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mahdi Mansouri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q12-solution-video.mkv"></video></div>


</details>


## Problem 13 — Independent Set or Matching { #problem-hw1-p13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Given a graph with $n$ vertices and $m$ edges, give an $O(n+m)$ algorithm that finds one of the following:

- an independent set with at least $\frac{n}{3}$ vertices;
- or a matching with at least $\frac{n}{3}$ edges.

It is guaranteed that at least one of the two always exists.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ilya Yazdani Varzi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q13-solution-video.mp4"></video></div>


</details>


## Part I: Introductory Problems — Divide and Conquer


## Problem 14 — Parametric Recurrence <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p14 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Use a recursion tree to derive a tight bound for the following recurrence:

\[
T(n) = T(\alpha n) + T\bigl((1-\alpha)n\bigr) + cn
\]

where $\alpha \in (0,1)$ and $c>0$ are constants. Explicitly discuss how the bound depends on $\alpha$.
</div>


## Problem 15 — Subarray with No Unique Element (Analysis) <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p15 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array $A[1 \dots n]$ is given. Determine whether there is a nonempty contiguous subarray with no unique element—that is, every value appearing in the subarray occurs there at least twice. The following algorithm is proposed:

For a range $A[l \dots r]$, check in time linear in its length whether some value occurs exactly once. If no such value exists, the range itself is valid. Otherwise, suppose $A[i]$ occurs only once in $A[l \dots r]$. No valid subarray can contain index $i$, so recursively solve $A[l \dots i-1]$ and $A[i+1 \dots r]$. The current range returns “yes” if and only if at least one recursive call returns “yes.”

- **(a)** Prove the algorithm correct.
- **(b)** Analyze its worst-case running time.
- **(c)** Give a family of inputs showing that the analysis in part (b) is tight.
</div>


## Problem 16 — Union, Intersection, and Difference <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p16 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two sorted arrays $A[1 \dots n]$ and $B[1 \dots m]$ are given. Give an $O(n+m)$ algorithm that computes each of the following sets in sorted order, with every value appearing only once in the output:

\[
A \cup B,\qquad A \cap B,\qquad A-B
\]
</div>


## Problem 17 — Largest and Second Largest { #problem-hw1-p17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array of $n$ distinct numbers is given. Find its largest and second-largest elements using at most

\[
n+\lceil \log_2 n \rceil-2
\]

comparisons.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Yasaman Kavianpour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q17-solution-video.mp4"></video></div>


</details>


## Problem 18 — The $k$-th Element of Two Sorted Arrays { #problem-hw1-p18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two sorted arrays

\[
A[1..n],\qquad B[1..m]
\]

are given. Find the $k$-th element of their sorted union without constructing the entire merged array.

- **(a)** Give a divide-and-conquer algorithm running in $O(\log(n+m))$ time.
- **(b)** Run your algorithm on the following input:

\[
A=[2,5,8,12,17],\qquad B=[1,3,9,10,20,25],\qquad k=7
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ali Almasi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q18-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q18-solution-notes.pdf">DA-Q8.pdf</a></li></ul></div>
</div>


</details>


## Problem 19 — Maximum Subarray Sum { #problem-hw1-p19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Given an array of integers, find the maximum sum of a contiguous subarray. Give a divide-and-conquer algorithm running in $O(n\log n)$ time.
</div>


## Problem 20 — Minimum and Maximum { #problem-hw1-p20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Given an array, find its minimum and maximum using as few comparisons as possible. Give a divide-and-conquer algorithm, derive its comparison count, and compare it with the straightforward algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Saba Khanmohammadi Abhari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q20-solution-video.mp4"></video></div>


</details>


## Problem 21 — Counting Inversions <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p21 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A sequence $A[1 \dots n]$ is given. Compute its number of inversions.

A pair of indices $(i,j)$ satisfying

\[
i<j \qquad \text{and} \qquad A[i]>A[j]
\]

is called an inversion.

Give an $O(n\log n)$ algorithm for counting the inversions.
</div>


## Problem 22 — Applications of Inversions { #problem-hw1-p22 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Reduce each of the following problems to counting inversions.

- **(a)** Given points in the plane, count pairs in which one point lies above and to the left of the other; that is,

\[
x_i < x_j, \qquad y_i > y_j.
\]

- **(b)** Given intervals $[l_i,r_i]$, count pairs in which one interval lies entirely inside the other; that is,

\[
l_i < l_j, \qquad r_j < r_i.
\]

- **(c)** Given a sequence of positive and negative numbers, count the contiguous ranges whose element sum is negative.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sobhan Behzadipour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q22-solution-video.mp4"></video></div>


</details>


## Problem 23 — Sorting with Adjacent Swaps { #problem-hw1-p23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An unsorted sequence of numbers is given and may be sorted using only adjacent swaps. Reduce this problem to counting inversions and thereby determine the minimum number of adjacent swaps required.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Parsa Adlparvar</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q23-solution-video.mkv"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q23-solution-notes.pdf">Q23.pdf</a></li></ul></div>
</div>


</details>


## Problem 24 — Counterfeit Coin { #problem-hw1-p24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

$n$ apparently identical coins are given. Exactly one is counterfeit and lighter than the rest. A balance scale is available; each weighing reports that the left pan is lighter, the right pan is lighter, or the pans balance.
Find the optimal worst-case number of weighings as a function of $n$, give an algorithm attaining this bound, and prove the bound optimal—that is, show that no algorithm can always succeed with fewer weighings.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyed Mohammad Yasin Haji-Khalili</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q24-solution-video.mp4"></video></div>


</details>


## Problem 25 — Two Eggs { #problem-hw1-p25 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p25" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You have a building with $n$ floors and exactly two eggs. There is an unknown threshold $k$: an egg dropped from floor $k$ or below does not break, while one dropped from above $k$ does. More precisely, a drop from ground level never breaks an egg, while a drop from the roof (floor $n+1$) always does. A broken egg cannot be reused. Determine $k$ while minimizing the worst-case number of drops.
Find the optimal worst-case number of drops as a function of $n$, give a strategy attaining this bound, and prove it optimal—that is, show that no strategy can always succeed with fewer drops.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Niki Rashidian</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q25-solution-video.mkv"></video></div>


</details>


## Part II: Advanced Problems — Greedy Algorithms


## Problem 26 — Searching a Sorted Matrix <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw1-p26 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw1-p26" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times n$ matrix is given whose rows and columns are sorted in increasing order. Give a greedy $O(n)$ algorithm that determines whether $x$ occurs in the matrix, then run it on the sample input below:

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


## Problem 27 — Scheduling with Durations, Deadlines, and Values { #problem-hw1-p27 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p27" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ jobs. Job $i$ has processing time $d_i$, deadline $t_i$, and value $u_i$. Given a target value $U$, decide whether some subset of the jobs can be scheduled non-preemptively on one machine so that every selected job finishes by its deadline and their total value is at least $U$.

Prove that this decision problem is NP-complete. In particular, prove membership in NP and give a polynomial-time reduction from 0–1 Knapsack; for the reduction, consider instances in which every job has the same deadline.
</div>


## Problem 28 — Binary Matrix with Given Row and Column Sums { #problem-hw1-p28 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p28" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Construct an $n\times n$ binary matrix having exactly $R[i]$ ones in row $i$ and exactly $C[j]$ ones in column $j$, or report that no such matrix exists. Give an $O(n^2)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Amir Mohammad Hamidi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q28-solution-video.mkv"></video></div>


</details>


## Problem 29 — Kings on the Main Diagonal { #problem-hw1-p29 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p29" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times n$ chessboard contains $n$ kings on distinct squares. In one move, a king may be moved to a legal empty square. Find the minimum number of moves needed to occupy every square of the main diagonal, using an $O(n\log n)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Parsa Bashari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q29-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q29-solution-notes.pdf">DA-HW1-P29-ParsaBashari.pdf</a></li></ul></div>
</div>


</details>


## Problem 30 — Tower of Boxes { #problem-hw1-p30 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p30" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ boxes. Box $i$ has weight $a_i$ and load limit $b_i$. Determine whether all $n$ boxes can be stacked so that, for every box, the total weight above it does not exceed its load limit. You may choose the order. Give an $O(n\log n)$ algorithm.
</div>


## Problem 31 — Optimal Parenthesization { #problem-hw1-p31 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p31" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A sequence of $2n$ numbers is given. Choose a valid parenthesis string of the same length, then select the sequence entries corresponding to opening parentheses. Maximize the sum of the selected numbers. Give an $O(n\log n)$ algorithm.
</div>


## Problem 32 — Interval Partitioning { #problem-hw1-p32 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p32" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A set of time intervals is given. Partition them into the minimum number of groups so no two intervals in the same group overlap. Give a greedy $O(n\log n)$ algorithm.
</div>


## Problem 33 — Fuel-Station Stops { #problem-hw1-p33 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p33" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Along a straight route, fuel stations lie at distances
$x_1 < x_2 < \dots < x_n$
from the origin, and the destination is at distance $D$. A car starts with a full tank and can travel at most $L$ distance units per tank. At each station where it stops, the tank is completely refilled. Give a greedy $O(n)$ algorithm that finds the minimum number of stops needed to reach the destination, or reports that it is unreachable.
</div>


## Problem 34 — Adjacent-Removal Game { #problem-hw1-p34 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p34" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A length-$n$ sequence is given. In each step, choose two adjacent numbers, remove both, and score their absolute difference $|x-y|$. Perform any number of operations to maximize the total score. Give an $O(n\log n)$ algorithm.

- **(a)** $n$ is even.
- **(b)** $n$ is odd.
</div>


## Part II: Advanced Problems — Divide and Conquer


## Problem 35 — Finding the Median { #problem-hw1-p35 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p35" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array $A[1 \dots n]$ is given. Define its **median** as the middle element in sorted order: element $\frac{n+1}{2}$ when $n$ is odd, and element $\frac{n}{2}$ when $n$ is even. Give an $O(n)$ algorithm for finding the median.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Fatemeh Parvizi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q35-solution-video.mp4"></video></div>


</details>


## Problem 36 — Largest Uniform Block { #problem-hw1-p36 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p36" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times n$ binary matrix $M$ is given. A solid block is a submatrix of the form
$M[i \dots i'][j \dots j']$
whose entries are all equal. Give a divide-and-conquer algorithm running in $O(n^2 \log n)$ time that finds the area of the largest solid block in $M$.
</div>


## Problem 37 — Closest Pair of Points { #problem-hw1-p37 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p37" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

You are given $n$ points in the plane. Find the distance between the closest pair of points. Give a divide-and-conquer algorithm running in $O(n\log n)$ time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sobhan Aram</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q37-solution-video.mp4"></video></div>


</details>


## Problem 38 — Maximum Subarray with Bounded Length { #problem-hw1-p38 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p38" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array of integers, which may be positive, negative, or zero, and an integer $L$ are given. Find the maximum sum of a contiguous subarray whose length is at most $L$. Give a divide-and-conquer algorithm.
</div>


## Problem 39 — Subarray with No Unique Element { #problem-hw1-p39 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p39" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Given an array, determine whether it has a contiguous subarray with no unique element—that is, every value appearing in the subarray occurs there at least twice. Give an $O(n\log n)$ algorithm.
</div>


## Problem 40 — Tiling with L-Trominoes { #problem-hw1-p40 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p40" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A $2^n\times 2^n$ board has exactly one blocked square. Tile all remaining squares with L-shaped trominoes, each covering exactly three squares, with no overlap. Such a tiling is guaranteed to exist. Give an algorithm that constructs one.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Parnia Dabbagh</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-01-q40-solution-video.mkv"></video></div>


</details>


## Problem 41 — Average-Free Permutation { #problem-hw1-p41 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p41" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Construct a permutation of $1$ through $n$ such that, for every pair of indices $i<j$, the average of $A_i$ and $A_j$ does not occur among the entries $A_i,A_{i+1},\dots,A_j$.
</div>


## Problem 42 — Entry Larger than Its Neighbors { #problem-hw1-p42 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw1-p42" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times m$ matrix with pairwise distinct entries is given. Find an entry larger than each of its edge-adjacent neighbors. Give an $O(n\log m)$ algorithm.
</div>
