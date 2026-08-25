---
assignment: true
---

# Assignment 6

<div data-assignment-problem-filter></div>


## Meow


## Problem 1 — What a Reduction Means <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-9374 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-9374" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose there is a polynomial-time reduction from Problem 1 to Problem 2. In one or two sentences, explain whether each statement below is true or false.

- If Problem 1 is NP-complete, then Problem 2 must also be NP-complete.
- If Problem 1 is NP-complete, then Problem 2 must be NP-hard.
- If Problem 1 is NP-complete, then Problem 2 may also be NP-complete.
- If Problem 2 is NP-hard, then Problem 1 must also be NP-hard.
</div>


## Problem 2 — Two Ways <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-fef3 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-fef3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Prove that deciding whether a $\text{3-CNF}$ formula has at least two distinct satisfying assignments is NP-complete.

You may first prove that the problem is in NP, and then show a reduction from $\text{3-SAT}$.
</div>


## Problem 3 — Subset Sum { #problem-hw6-CFEB .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-CFEB" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

SUBSET SUM asks whether a given multiset of positive integers contains a subset whose sum is exactly the target value $T$.

- **(a)** Show how the variables and clauses of a 3-SAT instance can be encoded as selected digit positions of integers in base $B$, so that choosing an integer corresponds to assigning `True` to the associated literal.
- **(b)** Briefly prove that a subset summing to $T$ exists if and only if the original formula is satisfiable.
- **(c)** State precisely what this reduction proves about the complexity of SUBSET SUM.
</div>


## Problem 4 — Vertex Cover { #problem-hw6-C421 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C421" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In VERTEX COVER, a graph $G=\langle V,E\rangle$ and an integer $k$ are given. The question is whether there is a vertex set $S$ of size at most $k$ such that every edge $(u,v)\in E$ has at least one endpoint in $S$. Prove that VERTEX COVER is NP-complete by reducing 3-SAT to it.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Pouria Zarei</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q04-solution-video.mp4"></video></div>


</details>


## Problem 5 — Rectangle Tiling { #problem-hw6-8FC6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8FC6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider RECTANGLE TILING: decide whether a rectangular region $R$ can be tiled using rectangles from a set $T$, with each tile used at most once. Prove that RECTANGLE TILING is NP-complete when the heights and widths are encoded in binary.

Hint: you may use the NP-completeness of PARTITION or SUBSET SUM.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Kasra Montazeri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q05-solution-video.mp4"></video></div>


</details>


## Problem 6 — Hitting Set { #problem-hw6-CE68 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-CE68" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Sets $\{S_1,S_2,\dots,S_n\}$ and an integer $k$ are given. Decide whether some subset of their union with at most $k$ elements intersects every $S_i$. Prove that this decision version of HITTING SET is NP-complete.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Amin Heydari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q06-solution-video.mp4"></video></div>


</details>


## Problem 7 — Edge Cover { #problem-hw6-FE98 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-FE98" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In EDGE COVER, a graph $G=\langle V,E\rangle$ is given, and we seek a smallest edge set $S$ such that every vertex $v\in V$ is incident to an edge in $S$. Prove that EDGE COVER is in P. Explicitly handle isolated vertices: if one exists, no edge cover exists; otherwise derive a minimum edge cover from a maximum matching.
</div>


## Problem 8 — Complement Games { #problem-hw6-C297 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C297" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Prove that if $\text{coNP}\ne\text{NP}$, then $P\ne NP$.
</div>


## Problem 9 — A Careless Reduction { #problem-hw6-ECC5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-ECC5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A Boolean formula is in DNF if it is a disjunction of conjunction terms. An example appears below.

\[
(\bar{a} \land b \land \bar{c}) \lor (b \land c) \lor (a \land \bar{b} \land \bar{c})
\]

DNF-SAT asks whether a DNF formula is satisfiable: can its variables be assigned `True` and `False` so that the formula evaluates to `True`?

- **(a)** Show that DNF-SAT can be solved in polynomial time.
- **(b)** Using distributivity, show that every CNF formula whose clauses contain at most three literals can be written in DNF. For example:

\[
(a \lor b \lor \bar{c}) \land (\bar{a} \lor \bar{b}) = (a \land \bar{b}) \lor (b \land \bar{a}) \lor (\bar{c} \land \bar{a}) \lor (\bar{c} \land \bar{b})
\]

- **(c)** To solve 3-SAT, we could first use part (b) to convert the CNF formula to DNF and then apply the algorithm from part (a). This seems to solve the NP-complete 3-SAT problem in polynomial time and prove $P=NP$. What is wrong with this argument?
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ghazaleh Karimi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q09-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q09-solution-notes.pdf">The_P-NP_Fallacy.pdf</a></li></ul></div>
</div>


</details>


## Problem 10 — The Shipping Company's Loss { #problem-hw6-12F8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-12F8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A shipping company must transport $n$ packages of weights $a_1,a_2,\dots,a_n$ kilograms between two cities using vehicles of capacity $B$ kilograms. Prove that the following decision problem is NP-complete: given an integer $k$, can all packages be transported using at most $k$ vehicles?
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Amirhossein Esfandiari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q10-solution-video.mkv"></video></div>


</details>


## Problem 11 — A Colorful Graph { #problem-hw6-2BF1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2BF1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

We want to color the vertices of a graph red, blue, and yellow so that adjacent vertices receive different colors. Prove that if 3-CNF-SAT can be solved in polynomial time, then this graph-coloring problem can also be solved in polynomial time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Hasna Shah Heydari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q11-solution-video.mov"></video></div>


</details>


## Problem 12 — Maximum to Minimum { #problem-hw6-9FE2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9FE2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G$ be an undirected graph. Consider the following problems:

- **SPATH:** Does $G$ contain a simple path from vertex $a$ to vertex $b$ of length at most $k$?
- **LPATH:** Does $G$ contain a simple path from vertex $a$ to vertex $b$ of length at least $k$?

- **(a)** Show that SPATH has a polynomial-time algorithm.
- **(b)** Show that LPATH is NP-complete.
</div>


## Problem 13 — Two to Three { #problem-hw6-9C91 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9C91" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Define $CNF_k$ as the following decision problem: is a CNF formula in which every variable occurs at most $k$ times satisfiable?
Answer the following questions:

- **(a)** Show that $CNF_2$ can be solved in polynomial time.
- **(b)** Show that $CNF_3$ is NP-complete.
</div>


## Problem 14 — Maximum Cut { #problem-hw6-8153 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8153" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A cut in an undirected graph partitions its vertices into two disjoint sets $S$ and $T$. Its size is the number of edges with one endpoint in $S$ and the other in $T$.

MAX-CUT is the following decision problem: given a graph $G$ and integer $k$, does $G$ have a cut of size at least $k$?

Using these definitions, prove that MAX-CUT is NP-complete.
</div>


## Problem 15 — Troublesome Cliques { #problem-hw6-7B84 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-7B84" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In graph theory, a clique is a set of vertices every two distinct members of which are joined by an edge.

- **(a)** Prove that CLIQUE—the problem of deciding whether a graph contains a clique of a specified size—is NP-complete.
- **(b)** Define HALF-CLIQUE as follows: does an undirected graph $G$ with $m$ vertices contain a clique of at least $\frac{m}{2}$ vertices?
Prove that HALF-CLIQUE is NP-complete.
</div>


## Problem 16 — Factoring in Paradise { #problem-hw6-3297 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-3297" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Show that if $P=NP$, then integers can be factored in polynomial time.
</div>


## Problem 17 — Duality <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-2efb .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-2efb" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the following linear program:

\[
\max 4x_1 + x_2
\]

subject to

\[
\begin{aligned}
2x_1 + x_2 &\le 8, \\
x_1 + 2x_2 &\le 8, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]

- **(a)** Write the dual of this program.
- **(b)** Find a feasible solution to the primal with objective value $16$.
- **(c)** Find a feasible solution to the dual with objective value $16$, and conclude that the solution from part (b) is optimal.
</div>


## Problem 18 — The Greedy Factory <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-harris .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="harris" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A workshop manufactures products $A$ and $B$. Each unit of $A$ requires two units of raw material and one hour of labor, yielding profit $5$. Each unit of $B$ requires one unit of raw material and three hours of labor, yielding profit $6$. The workshop has $100$ units of raw material and $90$ labor hours.

Write a linear program that models the workshop's maximum profit, and find an optimal solution.
</div>


## Problem 19 — Shortest Path { #problem-hw6-E4E4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-E4E4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The following directed graph is given:

\[
s \to a: 2, \qquad s \to b: 5, \qquad a \to b: 1, \qquad a \to t: 2, \qquad b \to t: 2.
\]

Using variables $d_v$, complete the following linear program for finding the shortest-path distance from $s$ to $t$:

\[
\max d_t - d_s
\]

subject to the following constraint for every edge $(u,v)$:

\[
d_v \le d_u + w(u,v).
\]

Then set $d_s=0$, find the optimal value of $d_t$, and identify its corresponding path.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Narges Kari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q19-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q19-solution-notes.pdf">shortest-path-lp.pdf</a></li></ul></div>
</div>


</details>


## Problem 20 — Maximum Flow { #problem-hw6-C4DD .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-C4DD" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the following network:

\[
s \to a: 3, \qquad s \to b: 2, \qquad a \to b: 1, \qquad a \to t: 2, \qquad b \to t: 3.
\]

Each edge's capacity is written beside it.

- **(a)** Write a linear program for the maximum $s$-$t$ flow.
- **(b)** Give a feasible flow of value $5$.
- **(c)** Use a simple cut to show that the maximum-flow value is at most $5$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyed Mohammad Mahdi Hosseini</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q20-solution-video.mp4"></video></div>


</details>


## Problem 21 — The Dual of Maximum Flow { #problem-hw6-E3C4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-E3C4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $P$ be the set of all $s$-$t$ paths in a directed network. For every path $p$, variable $x_p$ denotes the amount of flow sent along $p$. Consider the following linear program:

\[
\max \sum_{p \in P} x_p
\]

subject to

\[
\begin{aligned}
\sum_{p: e \in p} x_p &\le c_e \quad \forall e \in E, \\
x_p &\ge 0.
\end{aligned}
\]

- **(a)** Write the dual of this linear program.
- **(b)** Show that every $s$-$t$ cut yields a feasible dual solution.
- **(c)** Show that every feasible dual solution can be used to construct a cut whose capacity is at most the value of that solution.
</div>


## Problem 22 — Assignment Cost { #problem-hw6-9A44 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9A44" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are three workers and three jobs. The cost of assigning worker $i$ to job $j$ is given by the following matrix:

\[
C = \begin{bmatrix}
4 & 1 & 3 \\
2 & 0 & 5 \\
3 & 2 & 2
\end{bmatrix}.
\]

Write a linear program that minimizes the assignment cost, and find an optimal solution.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sajjad Aghili</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q22-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q22-solution-image.png">Screenshot-662-.png</a></li></ul></div>
</div>


</details>


## Problem 23 — Chebyshev Center { #problem-hw6-1980 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-1980" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The following convex polygon in the plane is given:

\[
0 \le x \le 4, \qquad 0 \le y \le 2, \qquad x+y \le 5.
\]

Write a linear program that finds the largest circle contained entirely within this polygon, and determine its optimal radius.
</div>


## Problem 24 — Standard Form { #problem-hw6-e199 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-e199" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Convert the linear program below to the following standard form:

\[
\max c^T x \qquad \text{s.t.} \quad Ax \le b, \quad x \ge 0
\]

\[
\min 3x_1 - 2x_2 + 5x_3
\]

subject to

\[
\begin{aligned}
x_1 + 2x_2 - x_3 &\ge 7, \\
-2x_1 + x_2 &= 3, \\
x_1 \ge 0, \qquad x_2 &\text{ is unrestricted}, \qquad x_3 \le 0.
\end{aligned}
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ali Nematdoust</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q24-solution-video.mp4"></video></div>


</details>


## Problem 25 — Slack Form { #problem-hw6-5948 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-5948" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Convert the following linear program to slack form and give its initial basic solution:

\[
\max 4x + 3y
\]

subject to

\[
\begin{aligned}
x + 2y &\le 8, \\
3x + y &\le 9, \\
x, y &\ge 0.
\end{aligned}
\]
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mehdi Nemati</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q25-solution-video.mp4"></video></div>


</details>


## Problem 26 — Unboundedness { #problem-hw6-013C .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-013C" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Show that the following linear program is unbounded:

\[
\max x_1 - x_2
\]

subject to

\[
\begin{aligned}
-2x_1 + x_2 &\le -1, \\
-x_1 - 2x_2 &\le -2, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]
</div>


## Problem 27 — Infeasibility { #problem-hw6-6BAC .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-6BAC" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Show that the following linear program is infeasible:

\[
\max x_1 + x_2
\]

subject to

\[
\begin{aligned}
x_1 + x_2 &\le 2, \\
-2x_1 - 2x_2 &\le -10, \\
x_1, x_2 &\ge 0.
\end{aligned}
\]
</div>


## Problem 28 — Duality Again { #problem-hw6-2FB2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2FB2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

For a bipartite graph $G=(L\cup R,E)$, write the linear programming relaxation for minimum vertex cover. Then derive its dual and explain why the dual is precisely the matching LP.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ali Moghaddasi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q28-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q28-solution-notes.pdf">HW1.pdf</a></li></ul></div>
</div>


</details>


## Problem 29 — Flashback { #problem-duality-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A collection of time intervals $(s_i,f_i)$ is given.

Problem 1: select the maximum number of mutually compatible intervals, meaning no two selected intervals overlap.

Problem 2: select the minimum number of points such that every interval contains at least one selected point.

Show that the optimal values of these two problems are equal.
</div>


## Problem 30 — World Cup { #problem-duality-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The World Cup match schedule is fixed, but the venues have not yet been assigned.
There are $n$ matches, each held during a specified time interval; the intervals need not have equal lengths. Two matches whose times overlap cannot use the same stadium. If one ends at 9 p.m. exactly when another begins, however, they may use the same stadium.
As Infantino, compute the minimum number of stadiums needed to host every match.
Give an $\mathcal{O}(n\log n)$ algorithm that computes this number.
</div>


## Problem 31 — Complicated Moving { #problem-duality-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="duality-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose we have $n$ two-dimensional boxes that must be moved.

Box $i$ has dimensions $a_i\times b_i$. The moving company charges per item, so to reduce the cost we want to nest some boxes inside others.
To prevent damage, boxes may only be nested parallel to the coordinate axes, and each box may directly contain at most one other box.
Thus, the condition for placing box $i$ inside box $j$ is:

$$
(a_i < a_j \land b_i < b_j) \lor (a_i < b_j \land b_i < a_j)
$$

Give an $O(n\log n)$ algorithm that computes the minimum number of items we must hand over to the moving company.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

Review `Problem 1: Nested Frames` from Assignment 1 and `Problem 22: Rectangles` from Assignment 2.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Rozhin Taghizadegan</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q31-solution-video.mp4"></video></div>


</details>


## Problem 32 — Linear Matching { #problem-hw6-0D81 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-0D81" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the following bipartite graph:

\[
L = \{a, b\}, \qquad R = \{1, 2, 3\},
\]

\[
E = \{(a, 1), (a, 2), (b, 2), (b, 3)\}.
\]

Write a linear program for finding a maximum matching in this graph, and determine its optimal value.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Fatima Teymarchi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q32-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q32-solution-notes.pdf">Q32.pdf</a></li></ul></div>
</div>


</details>


## Problem 33 — Removing Ambiguity { #problem-hw6-AEBF .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-AEBF" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In a nonstandard linear program, some variables may be unrestricted. Standard form, however, requires every variable to be nonnegative. Show how to handle unrestricted variables when converting a nonstandard LP to standard form.
</div>


## Problem 34 — Playing with Norms { #problem-hw6-9B19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-9B19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Formulate each problem below as a linear program. Explain the relationship between each problem's optimum and that of the equivalent LP.

- **(a)** ($\ell_\infty$-norm approximation)

\[
\text{minimize} \ \|Ax - b\|_\infty
\]

- **(b)** ($\ell_1$-norm approximation)

\[
\text{minimize} \ \|Ax - b\|_1
\]

- **(c)**

\[
\begin{cases}
\text{minimize} & \|Ax - b\|_1 \\
\text{subject to} & \|x\|_\infty \le 1
\end{cases}
\]

- **(d)**

\[
\begin{cases}
\text{minimize} & \|x\|_1 \\
\text{subject to} & \|Ax - b\|_\infty \le 1
\end{cases}
\]

- **(e)**

\[
\text{minimize} \ \|Ax - b\|_1 + \|x\|_\infty
\]

In every problem, $A\in\mathbb{R}^{m\times n}$ and $b\in\mathbb{R}^m$ are given.
</div>


## Problem 35 — Distributing Loads { #problem-hw6-1802 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-1802" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Loads of masses $M_1,\dots,M_k$ are located at points $P_1,\dots,P_k$. Warehouses are located at points $Q_1,\dots,Q_n$, and warehouse $i$ has capacity $C_i$. The goal is to transport the loads to the warehouses while minimizing the total work. Define the energy required to move a load as its mass multiplied by the distance it travels.

- **(a)** State an obvious necessary condition for transporting all loads.
- **(b)** Suppose the loads are divisible liquids, so portions may be sent to different warehouses. Model the problem as a linear program.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Niki Rashidian</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q35-solution-video.mkv"></video></div>


</details>


## Problem 36 — Relaxation { #problem-hw6-30D4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-30D4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In a Boolean linear program, vector $x$ is constrained to have only zero-one entries:

\[
\min c^T x
\]

subject to

\[
\begin{aligned}
Ax &\preceq b \\
x_i &\in \{0, 1\}, \quad i = 1, \dots, n.
\end{aligned} \qquad
\]

Solving such problems is generally difficult, even though the feasible set is finite and contains at most $2^n$ points.

A general technique called relaxation replaces the constraint $x_i\in\{0,1\}$ with the linear inequalities $0\le x_i\le 1$:

\[
\min c^T x
\]

subject to

\[
\begin{aligned}
Ax &\preceq b \\
0 \le x_i &\le 1, \quad i = 1, \dots, n.
\end{aligned} \qquad
\]

We call this the LP relaxation of the Boolean LP. It is much easier to solve than the original Boolean program.

- **(a)** Show that the optimum of the LP relaxation is a lower bound on the optimum of the Boolean LP. If the LP relaxation is infeasible, what can be concluded about the Boolean LP?
- **(b)** Sometimes the LP relaxation has an optimal solution with $x_i\in\{0,1\}$. What can be concluded in that case? Does the relaxed optimum equal the original optimum?
</div>


## Problem 37 — A Useful Approximation <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-hw6-539a .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="hw6-539a" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

VERTEX COVER is NP-complete. Consider the following algorithm for it:

At each step, take the first uncovered edge and add both its endpoints to the selected vertex set. Stop once every edge is covered.

This is an approximation algorithm, but it runs in polynomial time.

Prove that the algorithm is a <span dir="ltr">2-approximation</span>.
</div>


## Problem 38 — Set Cover Approximation { #problem-hw6-8200 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-8200" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

SET COVER is defined as follows:
Given a universe $U$ of size $|U|=n$ and a collection of its subsets $S_1,S_2,\dots,S_m$, find the minimum number of these subsets whose union is all of $U$.

Give a $\ln n$-approximation algorithm for SET COVER.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Soroush Davaran</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q38-solution-video.mp4"></video></div>


</details>


## Problem 39 — Approximate Traveling Salesperson { #problem-hw6-D6C9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-D6C9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In this version of TSP, the graph is complete and the distances satisfy the triangle inequality.

Give a 2-approximation algorithm and prove its approximation ratio.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ilia Yazdani</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q39-solution-video.mp4"></video></div>


</details>


## Problem 40 — Dominating Set { #problem-hw6-2D17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-2D17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

DOMINATING SET is defined as follows:
Find a minimum vertex set such that every vertex is either selected or adjacent to a selected vertex.

Give an approximation algorithm with approximation ratio $O(\log n)$.
</div>


## Problem 41 — A Vertex-Cover Heuristic { #problem-hw6-219e .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-219e" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the following heuristic for VERTEX COVER: build a depth-first search tree of the graph and remove all leaves from that tree.

- **(a)** Show that the remaining vertices necessarily form a vertex cover of the graph.
- **(b)** Prove that this cover has size at most twice the optimum; that is, the algorithm is a 2-approximation.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ilia Forsati</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q41-solution-video.mp4"></video></div>


</details>


## Problem 42 — Fast Matching { #problem-hw6-50D9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-50D9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the MATCHING problem:
- **(a)** Design an $O(|E|)$ algorithm that finds a maximal matching in $G$.
- **(b)** Let $M$ be a maximum matching in $G$. Prove that every maximal matching $M'$ satisfies $|M'|\ge\frac{|M|}{2}$. In other words, prove that the algorithm from part (a) is a 2-approximation for maximum matching.

*(Note that maximum matching is not NP-hard and has an exact polynomial-time algorithm; the goal here is to analyze a fast approximation method.)*
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Zahra Ghassabi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-06-q42-solution-video.mkv"></video></div>


</details>


## Problem 43 — Acyclicity { #problem-hw6-EA5B .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-EA5B" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph $G=(V,E)$ is given. Find a largest edge subset $E'\subseteq E$ such that the subgraph $G'=(V,E')$ contains no directed cycle.

**Hint:** Order the vertices arbitrarily and consider forward and backward edges; $(v_i,v_j)$ is forward if $i<j$. Find an acyclic edge subset containing at least half of all edges.
</div>


## Problem 44 — The Impatient Governor { #problem-hw6-F4BE .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hw6-F4BE" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A country has $n$ cities with a road between every pair, so its road network is complete. Assume the distance function is metric (in particular, it satisfies the triangle inequality). Partition the country into $k$ provinces, each with a capital, while minimizing the maximum distance from a city to its provincial capital. This is the $k$-center problem.
Let the optimum be $d$: there is an assignment in which every city is within distance $d$ of its capital, and no assignment achieves a smaller maximum distance.

Give an algorithm that selects $k$ capitals so every city is within distance $2d$ of its capital—a 2-approximation—and prove its correctness.
</div>
