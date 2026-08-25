---
assignment: true
---

# Assignment 4

<div data-assignment-problem-filter></div>


## Introductory


## Problem 1 — Minimum-Product Spanning Tree { #problem-min-multiply .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-multiply" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph $G$ is given, where every edge weight is a positive integer. Define the weight of a spanning tree as the product of its edge weights. Give an $\mathcal{O}(n + m\log n)$ algorithm that finds a spanning tree of minimum weight.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 2 — Array MST { #problem-array-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="array-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An array of length $n$ is given, with value $a_i$ at index $i$. From it, construct a complete weighted undirected graph $G$ on $n$ vertices, where the edge between vertices $i$ and $j$ has weight $a_i + a_j$. Give an $\mathcal{O}(n)$ algorithm that finds an MST of this graph.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 3 — A Changing Tree <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-decreasing-mst .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="decreasing-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted undirected graph $G$ and one of its minimum spanning trees are given. We add one edge to the graph. Give an $O(V)$ algorithm that computes an MST of the new graph.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 4 — Recursive Spanning Tree { #problem-recursive-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="recursive-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Professor Borden proposes the following divide-and-conquer algorithm for computing minimum spanning trees:

Given a graph $G = (V,E)$, partition $V$ into $V_1$ and $V_2$ so that $||V_1|-|V_2|| \le 1$. Let $E_1$ be the edges whose two endpoints lie in $V_1$, and define $E_2$ analogously for $V_2$. Recursively solve the MST problem on $G_1 = (V_1,E_1)$ and $G_2 = (V_2,E_2)$. Finally, choose a minimum-weight edge of $E$ crossing the cut $(V_1,V_2)$ and use it to join the two resulting minimum spanning trees into a spanning tree.

Prove that this algorithm correctly computes an MST of $G$, or give a counterexample on which it fails.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 5 — Unique Weights, Unique Tree! { #problem-unique-weights-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-weights-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph $G$ is given, all of whose edge weights are positive and pairwise distinct. Prove that its minimum spanning tree is unique.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 6 — True or False! <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-true-false .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="true-false" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Determine whether each statement below is true or false. Prove every true statement and give a counterexample for every false one.

For each item, at most two sentences identifying the core argument are enough. Do not overthink it.

Assume $G$ is a connected undirected graph with $n$ vertices and $m$ edges. Edge weights may be equal unless a statement explicitly says otherwise.

 1. If $n \leq m$ and the maximum-weight edge of $G$ is unique, then this edge appears in no minimum spanning tree.
 2. If the maximum-weight edge of $G$ is unique and belongs to at least one cycle, then it appears in no minimum spanning tree.
 3. Suppose $e$ is a minimum-weight edge of $G$ (not necessarily the only one). Then $e$ appears in every spanning tree of $G$.
 4. If the minimum-weight edge of $G$ is unique, then it necessarily appears in every spanning tree of $G$.
 5. Prim's algorithm remains correct when edge weights may be negative.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 7 — Water { #problem-water .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="water" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose $n$ containers are arranged in a row. Container $i$ has capacity $a[i]$.
Initially, every container is empty.

Support two types of operations:

1. **Pour water**: add $x$ units of water to container $p$.
   If the water already in container $p$ plus $x$ exceeds its capacity $a[p]$,
   the excess water automatically flows into the next container, $p+1$.
   This continues until either no water remains or the last container, $n$, is reached.
   Any overflow from the last container spills onto the ground and is lost.

2. **Query**: report the current amount of water in container $k$.

Design an **$O((n + m) \log n)$** algorithm, where $m$ is the total number of operations.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">dsu</span></span></div>


## Problem 8 — Cycle Cover { #problem-cycle-covering .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="cycle-covering" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted undirected graph is given. A set $F$ is called a cycle cover if every cycle of the graph contains at least one edge of $F$. Give a polynomial-time algorithm that finds such a set $F$ of minimum total weight.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Mahdi Siavashi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q08-solution-video.mp4"></video></div>


</details>


## Problem 9 — Bounded Weights { #problem-bounded-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bounded-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected weighted graph $G$ has $n$ vertices and $m$ edges, and every edge weight is an integer between $1$ and $K$. Give an efficient algorithm for finding an MST.

Analyze its running time in terms of $n$, $m$, and $K$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Bahar Barghabani</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q09-solution-video.mp4"></video></div>


</details>


## Problem 10 — Borůvka <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-boruvka .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="boruvka" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G$ be a weighted graph with $n$ vertices and $m$ edges. For every vertex $v$, consider its incident edges and let $mn_v$ be a minimum-weight one. For simplicity, assume all edge weights are distinct.

1. Give an $\mathcal{O}(n + m)$ algorithm that computes $mn_v$ for every vertex $v$.
2. Prove that the set of edges $mn_v$ contains no cycle. Call this edge set $M$.
3. Prove that the edges of $M$ occur in an MST; that is, at least one MST contains all of $M$.
4. Consider the connected components formed by the edges of $M$. Contract every component into a single vertex and remove every edge whose endpoints now lie in the same component. Repeat this operation recursively until only one vertex remains.
5. Briefly prove that the union of the edges selected in all rounds is an MST of the original graph.
6. What is the asymptotic running time of this algorithm?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 11 — Sum of Distances { #problem-sum-of-distances .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="sum-of-distances" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph $G$ is given, with positive-integer edge weights. Define the distance between vertices $u$ and $v$, denoted $dis(u,v)$, as the minimum value $w$ such that $u$ can reach $v$ using only edges of weight at most $w$. Also define $dis(u,u)=0$.

Give an $\mathcal{O}(n + m\log n)$ algorithm that computes the sum of the distances over all pairs of vertices.
Treat the pairs $(u,v)$ and $(v,u)$ as identical.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Amirhossein Esfandiari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q11-solution-video.mkv"></video></div>


</details>


## Problem 12 — Maximum Bipartite Matching <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-bipartite-matching .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="bipartite-matching" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G$ be a bipartite graph. Give a method based on maximum flow that finds a maximum matching in $G$.

A matching is a subset of the edges of $G$ in which no two edges share an endpoint.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

Construct a flow network whose maximum-flow value equals the size of a maximum matching in the input graph.

</details>


## Problem 13 — Good Pairs { #problem-good-pair .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="good-pair" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

$n$ positive integers are given. A pair $(a,b)$ is called good if $a$ and $b$ are coprime and there exists a $c$ such that $a^2+b^2=c^2$. Give a polynomial-time algorithm that determines whether the integers can be partitioned into $\frac{n}{2}$ good pairs. In such a partition, every integer must belong to exactly one pair.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Mahdi Farahani</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q13-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q13-solution-notes.pdf">DA_PR01_400170341.pdf</a></li></ul></div>
</div>


</details>


## Problem 14 — Minimum Bottleneck-Cost $k$-Flow { #problem-min-max-cost-k-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-max-cost-k-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose a network $G$ is given in which every edge has a finite capacity and a cost. We want to find a flow of value $k$ whose cost is minimum, where the cost of a flow is the maximum cost of any edge carrying nonzero flow.

Give a polynomial-time algorithm that finds this minimum cost.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohsen Zare</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q14-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q14-solution-notes.pdf">Answer.pdf</a></li></ul></div>
</div>


</details>


## Problem 15 — Disjoint Paths { #problem-disjoint-path .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="disjoint-path" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A graph $G$ with designated vertices $s$ and $t$ is given. Give a polynomial-time algorithm that finds the maximum number of $s$-$t$ paths such that every vertex other than $s$ and $t$ belongs to at most one path.

Now suppose vertices may belong to several paths, but every edge may belong to at most one path. Give a polynomial-time algorithm for this variant as well.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Kian Torokmeh</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q15-solution-video.webm"></video></div>


</details>


## Problem 16 — Updating a Flow { #problem-increasing-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="increasing-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G=(V,E)$ be a directed graph whose edge capacities are positive integers, with source $s$ and sink $t$. A maximum flow is given explicitly, including the flow on every edge. The capacity of one edge is decreased by one. Give an $O(n+m)$ algorithm that computes a maximum flow in the new graph, where $n$ and $m$ are the numbers of vertices and edges. Prove correctness.

Solve the problem again when the capacity is increased by one instead of decreased by one.

What changes if edge capacities may also be positive real numbers?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mehdi Shirin-Bayan</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q16-solution-video.mp4"></video></div>


</details>


## Problem 17 — Brothers { #problem-brother .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="brother" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Mammad and Ali are twin brothers who live in the same house and attend the same school. Because they do not want people to confuse them on the streets, they decide to travel from home to school along routes that share no street, though they may pass through the same intersection.
Neither wants to make his route longer, so both routes must use the minimum possible number of streets.

Their city has $n$ intersections and $m$ streets, and both their home and school are intersections. Give a polynomial-time algorithm that finds two routes satisfying the brothers' requirements.
Such two edge-disjoint shortest routes may not exist; in that case, the algorithm must report that it is impossible.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Amin Fakhri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q17-solution-video.mp4"></video></div>


</details>


## Problem 18 — Chess Tournament { #problem-chess-tour .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="chess-tour" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In a chess tournament, every pair of players plays one game. A player receives 2 points for a win, 1 for a draw, and 0 for a loss. Garry Kasparov always recorded the final standings, sorted by score, in his diary, but did not record the individual game results.

We want to determine whether these records could be genuine: does there exist a table of game results that produces the recorded scores?

Assuming there are $n$ players, give a polynomial-time algorithm that constructs such a table or determines that none exists.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Negar yarahmadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q18-solution-video.mkv"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q18-solution-notes.pdf">18_chessProblem.pdf</a></li></ul></div>
</div>


</details>


## Problem 19 — Minimum Cut or Maximum Flow? <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-min-cut .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="min-cut" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Find a maximum flow from $s$ to $t$ in the graph below.

![flow graph](../assets/images/flow-network-light.svg#only-light)
![flow graph](../assets/images/flow-network-dark.svg#only-dark)

Then give a minimum $s$-$t$ cut.
</div>


## Problem 20 — Projects { #problem-project .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="project" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Mohammad has been offered $n$ construction projects. Completing project $i$ yields profit $A_i$, which may be negative and therefore represent a loss.

Some projects require a specified set of other projects to be completed first. More precisely, there are $m$ prerequisite relations. Modeling these relations as a directed graph yields a DAG.

Help Mohammad choose a set of projects that maximizes his profit while satisfying every prerequisite.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sana Niromand</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q20-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q20-solution-notes.pdf">solution.pdf</a></li></ul></div>
</div>


</details>


## Problem 21 — Restaurant { #problem-restaurant .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="restaurant" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

At Bear's newly opened restaurant, the chef has prepared a list of $n$ dishes and $m$ ingredients. For each dish, its required ingredients are known. Placing dish $i$ on the menu yields a total profit of $A_i$ dollars. If ingredient $i$ is required by any dish on the menu, buying it costs $B_i$ dollars. An ingredient needed by several dishes is purchased only once.

Find the maximum profit the restaurant can achieve by choosing its menu optimally. Your algorithm should have the same asymptotic running time as a maximum-flow algorithm.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Narges Kari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q21-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q21-solution-notes.pdf">Maximizing-Menu-Profit.pdf</a></li></ul></div>
</div>


</details>


## Problem 22 — Minimum Bottleneck { #problem-minimum-bottleneck .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="minimum-bottleneck" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A network with $n$ vertices and two designated vertices $s$ and $t$ is given.
Assume every edge has infinite capacity.
For an $s$-$t$ flow $f$, call an edge carrying the greatest amount of flow a bottleneck edge,
and call the amount of flow on that edge the *bottleneck* of $f$.
For a given integer $C$, we want to send a flow of value $C$ from $s$ to $t$ with minimum possible bottleneck.
How many calls to the Ford–Fulkerson algorithm are sufficient to find such a flow?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Radin Baharsafat</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q22-solution-video.mp4"></video></div>


</details>


## Problem 23 — DSU with Undo { #problem-dsu-undo .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="dsu-undo" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected graph with $n$ vertices is initially empty. Then $q$ operations of the following three types are given:

- `add u v`: add edge $(u,v)$ to the graph.
- `undo`: undo the most recent `add` operation that has not already been undone.
- `ask u v`: report whether $u$ and $v$ are in the same connected component.

Whenever an `undo` operation is issued, assume there is at least one `add` operation that has not yet been undone.

Give an algorithm that answers every `ask` query in total time $O(n + q \log n)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

DSU

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Saba Khanmohammadi Abhari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q23-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q23-solution-notes.pdf">Q_23.pdf</a></li></ul></div>
</div>


</details>


## Advanced


## Problem 24 — MST in the Plane { #problem-2d-plane-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="2d-plane-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose $n$ points are given in the plane. We want to draw line segments between $n-1$ pairs of points so that every point can reach every other point using only the drawn segments, while minimizing the total length of the segments.

Prove that no two of the selected segments cross.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Fatima Teymarchi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q24-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q24-solution-notes.pdf">question_24.pdf</a></li></ul></div>
</div>


</details>


## Problem 25 — MST Uniqueness { #problem-unique-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G=(V,E)$ be a connected graph. For every cut $(A,B)$, place in $E'$ every lightest edge crossing that cut; the lightest edge need not be unique. Prove that the MST of $G$ is unique if and only if the edges of $E'$ form a spanning tree.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Soheil Sayyah Varg</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q25-solution-video.mp4"></video></div>


</details>


## Problem 26 — Safe or Dangerous { #problem-anti-kruskal .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="anti-kruskal" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected weighted graph $G$ is given. Call an edge safe if it belongs to no cycle, and dangerous if it is a heaviest edge on some cycle. Answer the following questions.

1. Show that every safe edge belongs to every MST, and that a dangerous edge which is the unique heaviest edge of some cycle belongs to no MST.
2. Give and analyze an efficient implementation of anti-Kruskal. This algorithm processes the edges from heaviest to lightest. When processing edge $e$, it removes $e$ from $G$ if $e$ is currently dangerous.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 27 — GPT { #problem-gpt-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="gpt-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Mr. A wants to prepare for his Design of Algorithms exam. On a sheet of paper, he has drawn a connected graph with $n$ vertices and $m$ edges.

To study minimum spanning trees (MSTs), he asks ChatGPT to provide several subsets of the graph's edges. ChatGPT ultimately gives Mr. A $k$ edge subsets, which may overlap, such that the sum of their sizes is $s$.

For practice, Mr. A wants to determine, for every subset, whether his graph has an MST containing every edge in that subset.

Help Mr. A design an algorithm with running time

$\mathcal{O}((s + m) \log (s + m))$
that answers this question for all subsets.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 28 — All or None { #problem-edges-in-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edges-in-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph with $n$ vertices and $m$ edges is given. Give an $O(nm)$ algorithm that classifies every edge into exactly one of the following categories:

1. It appears in every minimum spanning tree of the graph.
2. It appears in some minimum spanning trees, but not in others.
3. It appears in no minimum spanning tree.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Bani-Ahmadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q28-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q28-solution-notes.pdf">HW4_Q28.pdf</a></li></ul></div>
</div>


</details>


## Problem 29 — An MST for Every Edge { #problem-mst-for-each-edge .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="mst-for-each-edge" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected weighted graph $G$ is given. For every edge, we want the minimum weight of a spanning tree that contains that edge.

Give an algorithm with running time
$\mathcal{O}((n+m) log(n))$
that computes the answer for every edge.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 30 — Second-Best Spanning Tree { #problem-2nd-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="2nd-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Let $G$ be a weighted undirected graph, and let $T$ be the total weight of an MST of $G$. Give an $\mathcal{O}(n + m\log n)$ algorithm that finds a spanning tree of minimum total weight subject to its weight being strictly greater than $T$. Report if no such spanning tree exists.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


## Problem 31 — Pyramid Company { #problem-pyramid-company .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="pyramid-company" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

There are $n$ people in Sugarland, and $m$ pairs of them are friends. The people are numbered from $1$ to $n$, and friendship is mutual.

Initially, person $1$ is the company's only member. We want everyone to join. A new member must be invited by one of their friends who is already a member at that moment. If person $u$ invites someone, they must be paid a commission of $A_u$ for that invitation.

Give an $O(n + m \log n)$ algorithm that computes the minimum total cost of recruiting everyone.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Zahra Amirbeigi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q31-solution-video.mov"></video></div>


</details>


## Problem 32 — Planar MST { #problem-planar-mst .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="planar-mst" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted planar graph $G$ is given. Give a linear-time algorithm that finds an MST of $G$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">mst</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

A planar graph has at most $3n-6$ edges.

</details>


## Problem 33 — Flow with Lower Bounds { #problem-lr-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="lr-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed network \(G=(V,E)\) is given. Every edge \(e\) has a lower bound \(\ell(e)\) and an upper bound \(u(e)\), where $0 \leq \ell(e) \leq u(e).$

Determine whether flows can be assigned to the edges to form a **feasible circulation**: for every edge \(e\), $\ell(e) \leq f(e) \leq u(e)$, and at every vertex \(v\), total inflow equals total outflow.

Design an algorithm that decides whether such a circulation exists. Explain the main idea, prove correctness, and analyze the running time.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Milad Rostami</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q33-solution-video.mp4"></video></div>


</details>


## Problem 34 — Maximum Flow with Lower Bounds { #problem-lr-max-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="lr-max-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed network \(G=(V,E)\) with vertices $s$ and $t$ is given. Every edge \(e\) has a lower bound \(\ell(e)\) and an upper bound \(u(e)\), where $0 \leq \ell(e) \leq u(e).$

We seek a **feasible flow** satisfying $\ell(e) \leq f(e) \leq u(e)$ for every edge \(e\),
and flow conservation at every vertex \(v\) other than $s$ and $t$.

Design a polynomial-time algorithm that finds a maximum feasible $s$-$t$ flow, or reports that no feasible flow exists. Explain the main idea, prove correctness, and analyze the running time.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## Problem 35 — Colored Grid { #problem-grid-coloring .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="grid-coloring" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n \times n$ grid has some black cells and all remaining cells white. In one operation, we may choose an $H \times W$ subgrid and make all its cells white, at cost $\min(H,W)$. What is the minimum cost of making the entire grid white? Give an $\mathcal{O}(n^3)$ algorithm.

If the cost of painting a subgrid is changed to $\max(H,W)$, an $\mathcal{O}(n^5)$ or faster algorithm is sufficient.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">dynamic programming</span></span></div>


## Problem 36 — Closure of Minimum Cuts { #problem-cut-operation .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="cut-operation" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider an arbitrary graph with vertex set $V(G)$. For two vertices $s$ and $t$, an $s$-$t$ cut of the graph is a partition of $V(G)$ into two sets $S$ and $T$ such that $s \in S$ and $t \in T$. Removing all edges from $S$ to $T$ then separates $s$ from $t$.
The size of the cut is the number of edges between $S$ and $T$.
A minimum cut is a cut whose size is no greater than that of any other cut.


Suppose $(S_1, T_1)$ and $(S_2, T_2)$ are two minimum cuts of the graph. Prove that $(S_1 \cap S_2, T_1 \cup T_2)$ and $(S_1 \cup S_2, T_1 \cap T_2)$ are also minimum cuts.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Alireza Mansouri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q36-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q36-solution-notes.pdf">36-2-.pdf</a></li></ul></div>
</div>


</details>


## Problem 37 — Unique Minimum Cut { #problem-unique-min-cut .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="unique-min-cut" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed network \(G=(V,E)\) has source \(s\), sink \(t\), and nonnegative edge capacities.

A network may have several distinct minimum \(s\)-\(t\) cuts.

Give a necessary and sufficient condition for the minimum \(s\)-\(t\) cut to be unique. Design an algorithm that determines whether the minimum cut is unique.

Explain the main idea, prove correctness, and analyze the running time.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

First find a maximum flow and consider its residual graph. Analyze the vertices reachable from \(s\), as well as the vertices from which \(t\) is reachable.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyed Mohammad Yasin Haji-Khalili</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q37-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-04-q37-solution-notes.pdf">DA_HW4T_P37.pdf</a></li></ul></div>
</div>


</details>


## Problem 38 — No Negative Cycles { #problem-neg-cycle-free .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="neg-cycle-free" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed network has capacities and costs on its edges. Let \(f\) be a feasible \(s\)-\(t\) flow of fixed value \(|f|\), and consider the residual graph with respect to \(f\).

Prove that if the residual graph contains no cycle of negative total cost, then \(f\) has minimum cost among all feasible flows of value \(|f|\).

In other words, show that the absence of a negative cycle in the residual graph is sufficient for \(f\) to be a minimum-cost \(|f|\)-flow. Also prove that this condition is necessary.

You may use the fact that the difference of two flows with equal value can be decomposed into cycles in the residual graph.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## Problem 39 — Minimum-Cost Maximum Flow { #problem-min-max-cost-flow .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="min-max-cost-flow" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed network \(G=(V,E)\) has \(n\) vertices, \(m\) edges, source \(s\), sink \(t\), nonnegative integer capacities \(c(e)\), and edge costs \(w(e)\). The cost of a flow is

\[
\sum_{e\in E} f(e)w(e).
\]

Suppose the maximum-flow value is \(F\). Design an algorithm that finds a minimum-cost flow among all maximum \(s\)-\(t\) flows.

Your algorithm must run in
$\mathcal{O}(Fnm)$ time.

Explain how the residual graph is used at each step, how a minimum-cost augmenting path is found, why there are at most \(F\) iterations, and why the final flow is a minimum-cost maximum flow.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## Problem 40 — Path Cover { #problem-vertex-covering .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="vertex-covering" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A DAG with $n$ vertices and $m$ edges is given. We want to choose paths so that every vertex belongs to exactly one path. What is the minimum number of paths required?

Give an algorithm that uses maximum flow on an arbitrary graph at most once, plus additional computation of order
$\mathcal{O}(n + m)$
to find the answer.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## Problem 41 — Strange Assignment { #problem-weird-assignment .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="weird-assignment" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Call a graph with a nonnegative number assigned to each edge *strange* if, for every vertex subset $S$, the sum of the numbers assigned to edges whose endpoints both lie in $S$ is at most $|S|-1$. Give a polynomial-time algorithm that determines whether a graph is strange.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>


## Problem 42 — Snapp { #problem-snapp .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="snapp" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A city consists of $n$ squares connected by $m$ roads. Let $w_i$ be the time required to traverse road $i$. Snapp expects $k$ customers today. At time $t_i$, customer $i$ wants to travel from square $a_i$ to square $b_i$.

Customers refuse to wait, so a taxi must be present at $a_i$ at exactly time $t_i$. What is the minimum number of drivers needed to serve every customer?

Drivers may take any route and carry at most one customer at a time. They may also wait at squares without moving, but they may not stop or reverse direction while partway along a road.

Give a polynomial-time algorithm that finds the answer.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">flow</span></span></div>
