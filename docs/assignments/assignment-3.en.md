---
assignment: true
---

# Assignment 3

<div data-assignment-problem-filter></div>


## Introductory


## Problem 1 — Graph Representations <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignment-hw03-01 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignment-hw03-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

As you know, two common graph representations are adjacency lists and adjacency matrices.

**(a)** For an adjacency-matrix representation, determine the space complexity and the time complexity of adding an edge, testing whether an edge exists between two given vertices $u$ and $v$, and enumerating a vertex's neighbors.

**(b)** Answer the same questions for an adjacency-list representation.

**(c)** In your opinion, which of the two representations is better for storing a graph?
</div>


## Problem 2 — Minimum Vertex Cover in a Tree { #problem-graph-amshz-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A tree with $n$ vertices is given.

Find the minimum size of a vertex set containing at least one endpoint of every edge.

Expected running time: $O(n)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

Two states per vertex suffice: whether or not the vertex itself is selected.

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

If $v$ is not selected, all its children must be selected to cover the edges between $v$ and its children.

If $v$ is selected, each child may independently be selected or not.

</details>



</details>


<details class="success problem-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span></summary>

Root the tree.

For every vertex $v$, define two values:

- $dp_1[v]$: the minimum answer in the subtree of $v$ when $v$ is selected.
- $dp_0[v]$: the minimum answer in the subtree of $v$ when $v$ is not selected.

If $v$ is selected, each child may be selected or not:

$dp_1[v] = 1 + \sum \min(dp_0[u], dp_1[u])$

If $v$ is not selected, every child must be selected:

$dp_0[v] = \sum dp_1[u]$

The answer is:

$\min(dp_0[1], dp_1[1])$

The running time is $O(n)$.

</details>


## Problem 3 — Minimum Dominating Set in a Tree { #problem-graph-amshz-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A tree with $n$ vertices is given.

Find the minimum size of a vertex set such that every vertex either belongs to the set or has at least one neighbor in the set.

Expected running time: $O(n)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

For each vertex, selected versus unselected is not enough: we must also know whether its subtree dominates it or whether it still needs its parent.

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Maintain three states:

- the vertex is selected;
- the vertex is not selected but is dominated by one of its children;
- the vertex is not yet dominated and must be dominated by its parent.

</details>



</details>


## Problem 4 — Proper 2-Colorings { #problem-graph-amshz-12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A graph with $n$ vertices is given.

Count the proper 2-colorings of its vertices with black and white, where adjacent vertices never receive the same color.

Expected running time: $O(n+m)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

For a tree—and, more generally, within each connected bipartite component—fixing one vertex's color forces all remaining colors in that component.

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Every tree is bipartite; for an arbitrary graph, first test each connected component for bipartiteness.

Once the color of a starting vertex is chosen, every reachable vertex's color is determined by the parity of its distance from that vertex. Each bipartite connected component contributes two choices; a non-bipartite component makes the answer zero.

</details>



</details>


## Problem 5 — Tree Diameter { #problem-archive-graph-bfs-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-bfs-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The diameter of a tree $T=(V,E)$ is $\max\{\delta(u,v):u,v\in V\}$, the greatest distance among all shortest paths in the tree. Give an $O(n)$ algorithm that computes the diameter and analyze its running time.
</div>


## Problem 6 — Zero and One { #problem-bfs-zero-one .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bfs-zero-one" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A graph $G=(V,E)$ is given in which every edge has weight $0$ or $1$; that is, $w(e)\in\{0,1\}$.
A source vertex $s\in V$ is also given.

Give an algorithm that computes the shortest-path distance from $s$ to every vertex in $O(|V|+|E|)$ time.
</div>


## Problem 7 — Tracing Shortest-Path Algorithms <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignment-run-shortest-path-algorithms .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignment-run-shortest-path-algorithms" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In this problem, we trace two well-known shortest-path algorithms.

**(a)** Run Dijkstra's algorithm from vertex $A$ on the weighted undirected graph below. Record the tentative distance of every vertex after each step and identify the final shortest-path tree.

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

**(b)** Run Bellman–Ford from vertex $S$ on the weighted directed graph below and find the shortest-path distance from $S$ to every vertex.

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

**(c)** Can Dijkstra's algorithm find shortest paths in every graph? In particular, can it be run on the graph in the previous part? Why or why not?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Shortest paths</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


## Problem 8 — Farthest Distance for Every Tree Vertex { #problem-graph-amshz-11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A tree with $n$ vertices is given.

For every vertex $v$, find its maximum distance to any other vertex in the tree.

Expected running time: $O(n)$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyedeh Shaghayegh Mirjalili</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q08-solution-video.mov"></video></div>


</details>


## Problem 9 — Service Coverage { #problem-bfs-multi-source .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bfs-multi-source" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Model the network as a graph $G=(V,E)$. Every vertex $v\in V$ is either a provider or a client. Provider $i$ has a permitted range $r_i$. Client $j$ may use provider $i$ only if $dist(i,j)\le r_i$.

Give an algorithm that finds, for every client, the nearest provider whose range covers that client.
</div>


## Problem 10 — Edges on a Shortest Path { #problem-edge-on-shortest-path .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edge-on-shortest-path" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted directed graph with $n$ vertices and $m$ edges is given. All edge weights are nonnegative.

For every edge, determine whether at least one shortest path from vertex $1$ to vertex $n$ uses that edge.

Expected running time: $O((n+m)\log n)$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Shortest paths</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

You do not need to enumerate every shortest path. For each edge, it is enough to test whether it can occur inside one.

First compute the required distances:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Run Dijkstra once from vertex $1$ to obtain $dist_1[v]$ for every vertex.

Reverse the graph and run Dijkstra once from vertex $n$.

Why reverse the graph?

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

For every vertex $v$, we need the shortest distance from $v$ to $n$.

Reversing every edge and running Dijkstra from $n$ gives exactly these values for all vertices.

</details>



</details>



Then test each edge independently:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Suppose the edge is $u\to v$ with weight $w$.

This edge lies on a shortest path from $1$ to $n$ if and only if:

$dist_1[u] + w + dist_n[v] = dist_1[n]$

Also handle the case in which no path exists:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

If $dist_1[n]$ is infinite, there is no path from $1$ to $n$.

Then no edge can lie on a shortest path from $1$ to $n$.

</details>



</details>



</details>


## Problem 11 — Counting Shortest Paths { #problem-archive-graph-dijsktra-07 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dijsktra-07" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected weighted graph with $n$ vertices and $m$ edges is given. Give an $O((n+m)\log(n+m))$ algorithm that counts the distinct shortest paths from vertex $s$ to vertex $t$.
</div>


## Problem 12 — DAG <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-assignement-hw03-05 .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="assignement-hw03-05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph $G=(V,E)$ is given.

**(a)**
Give an algorithm that determines whether the graph contains a directed cycle.

**(b)**
If the graph is acyclic, give an algorithm that orders the vertices so that every directed edge $u\to v$ places $u$ before $v$.
</div>


## Problem 13 — Strong Orientation { #problem-graph-amshz-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected undirected graph with $n$ vertices and $m$ edges is given.

Orient every edge in exactly one of its two possible directions so that the resulting directed graph is strongly connected.

Report if no such orientation exists.

Expected running time: $O(n+m)$.
</div>


## Problem 14 — Cycle Detection { #problem-graph-helena-04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Give an algorithm that determines whether a given undirected graph $G=(V,E)$ contains a cycle. Your algorithm must run in $O(|V|)$ time, independent of $|E|$.
</div>


## Problem 15 — Lexicographically Smallest Tree Traversal { #problem-graph-amshz-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A tree with $n$ vertices is rooted at vertex $1$.

Initially, only vertex $1$ has been visited. At each step, choose and visit an unvisited vertex having at least one visited neighbor.

This process produces a length-$n$ sequence giving the visitation order.

Find the lexicographically smallest possible sequence.

Expected running time: $O(n\log n)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

At any moment, only vertices with a visited neighbor are eligible.

To minimize the sequence, always choose the smallest eligible vertex:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

If several vertices are eligible, choosing the smallest is always optimal.

It minimizes the current sequence element without making any currently eligible vertex unavailable.

</details>



Use an appropriate data structure for an efficient implementation:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Maintain the eligible vertices in a min-`priority_queue` or ordered `set`.

Repeatedly extract the smallest vertex and insert each of its unvisited neighbors.

</details>



</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Esmaeili Marandi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q15-solution-video.mp4"></video></div>


</details>


## Problem 16 — Bit Flip { #problem-bitflip .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bitflip" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An $n\times m$ board of lamps is given. Every lamp is either on or off.

Each operation performs exactly one of the following:

- flip every lamp in one row, turning on lamps off and off lamps on;
- flip every lamp in one column.

Turn on every lamp using the minimum number of operations.

Give an $O(nm)$ algorithm that computes this minimum.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ali Moghaddasi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q16-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q16-solution-notes.pdf">HW1.pdf</a></li></ul></div>
</div>


</details>


## Problem 17 — Ice Skating { #problem-ice-skating .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="ice-skating" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An ice rink is an $m\times m$ grid with stones on some cells.
Initially there are $n$ stones, with stone $i$ at $(x_i,y_i)$.

A skater can move from one stone to another when they share a row or a column; that is, their $x$-coordinates or their $y$-coordinates are equal.

Add stones so that afterward the skater can travel between every pair of stones.

Compute the minimum number of stones that must be added.

Give an $O(n^2+m)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Kiasha Koushanfar</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q17-solution-video.mp4"></video></div>


</details>


## Problem 18 — Even- and Odd-Length Shortest Paths { #problem-shortes-path-parity .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="shortes-path-parity" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph with $n$ vertices and $m$ edges and two vertices $u,v$ are given. Find the minimum length of a path from $u$ to $v$ with an even number of edges and the minimum length of one with an odd number of edges. Return $-1$ when a requested path does not exist.

**Expected complexity:** $O((n+m)\log n)$.
</div>


## Problem 19 — Exponentially Weighted Edges <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-exponential-edges .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="exponential-edges" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A weighted graph $G=(V,E)$ is given. Unlike an ordinary graph, however, whenever a traversal starts from a vertex, the weights of all edges not yet traversed double after every step.

For example, if a path $P$ uses edges $\{e_1,e_2,\dots,e_k\}$ in this order, its weight is:

$$
W(P) = e_1 + 2\times e_2 + 2^{2}\times e_3 + \dots + 2^{k-1}\times e_k
$$

Given a source vertex $u$, give an algorithm that computes its distance to every other vertex.

Expected complexity: $O(|V|\cdot|E|)$.
</div>


## Problem 20 — Currency Exchange { #problem-archive-graph-bellman-floyd-05 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-bellman-floyd-05" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The exchange rates among $n$ currencies are known. Starting with $m$ rials, determine whether a sequence of exchanges that eventually converts back to rials can increase the amount. Give a polynomial-time algorithm.
</div>


## Problem 21 — Depth-First Search { #problem-archive-graph-dfs-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dfs-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider a connected graph on five vertices numbered $1$ through $5$. Starting DFS at vertex $1$, suppose the only possible visitation orders are $<1,2,4,3,5>$, $<1,3,4,2,5>$, and $<1,3,5,4,2>$. What visitation orders are possible when DFS starts at vertex $5$? Justify your answer.
</div>


## Problem 22 — String Reconstruction { #problem-bazsazi .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="bazsazi" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An unknown string was split into all of its contiguous substrings of length $2$.

For example, `abcde` produces `ab`, `bc`, `cd`, and `de`.

These pieces are now given in arbitrary order.

Determine whether some string could produce exactly these pieces.

Every piece must be used exactly once.

Give an $O(m)$ algorithm that determines whether such a string exists, where $m$ is the number of pieces.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Alireza Mohandesi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q22-solution-video.mp4"></video></div>


</details>


## Problem 23 — Strongly Connected Components { #problem-new-graph-scc-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph $G=(V,E)$ is given. A strongly connected component is a maximal vertex subset in which a directed path exists in both directions between every pair of vertices.

Give an $O(|V|+|E|)$ algorithm that outputs all strongly connected components, listing the vertices belonging to each component.
</div>


## Problem 24 — Vertices Reaching Everywhere { #problem-graph-amshz-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph with $n$ vertices and $m$ edges is given.

Count the vertices from which every other vertex is reachable by a directed path.

Expected running time: $O(n+m)$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Soroush Davaran</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q24-solution-video.mp4"></video></div>


</details>


## Problem 25 — Thief and Police { #problem-graph-amshz-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected graph with $n$ vertices and $m$ edges is given. A thief starts at vertex $1$, and several police officers start at specified vertices.

At each step, each person may stay at the current vertex or move to an adjacent vertex.

The thief escapes by reaching vertex $n$ strictly before every police officer. If the thief and an officer ever occupy the same vertex at the same time, the thief is caught.

Determine whether the thief can escape under optimal play or the police can guarantee capture.

Expected running time: $O(n+m)$.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

Do not simulate every officer separately. First compute, for every vertex, the earliest time any officer can reach it:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

Run a multi-source BFS from all vertices initially containing police officers.

Insert all these vertices into the queue with distance $0$. The resulting distance of a vertex is the earliest time an officer can reach it.

</details>



Then consider only thief paths on which entry into every vertex is safe:

<details class="tip hint hint-tip" markdown="1"><summary>Hint</summary>

If the thief reaches vertex $v$ at time $t$, that state is safe only when:

$t < police[v]$

Thus the thief may enter only vertices it reaches strictly before all police officers.

</details>



</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Shamim Rahimi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q25-solution-video.mov"></video></div>


</details>


## Problem 26 — Minecraft { #problem-graph-minecraft .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-minecraft" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Pouria, Soheil, and Alireza live in a Minecraft map.
The map is an $n\times n$ grid, and some cells are impassable.

The three people occupy distinct cells.
They want to build roads between their homes so that each can reach the other two using only road cells.

Building a road on a cell has a specified positive-integer cost.

Movement is allowed only between cells sharing an edge.

Give an $O(n^2\log n)$ algorithm that computes the minimum required cost.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyed Hassan Khatami Bidgoli</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q26-solution-video.mp4"></video></div>


</details>


## Advanced


## Problem 27 — Quarantine <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-floyd-remove-edges .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="floyd-remove-edges" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The year is 2031. An unknown virus is spreading at an alarming rate. As a last resort, the government will fully quarantine infected cities one by one: all roads entering or leaving such a city are permanently closed, removing it from the country's transportation network.

The crisis-management agency gives you a confidential list containing the exact quarantine order and queries asked at various times: what is the shortest path between two cities that are still active?

Because the entire list is known in advance, you can prepare all answers beforehand.

**Problem statement**

A weighted graph with $n$ vertices and $m$ edges is given. There are two query types:

- **Type 1:** remove vertex $v$ and all incident edges from the graph.
- **Type 2:** find the shortest distance between vertices $u$ and $v$ in the current graph. Both are guaranteed to still be present.

The queries are **offline**: all are known from the start and may be processed before outputting the answers together.

**Expected complexity:** $O(n^3+q)$.
</div>


## Problem 28 — 2-SAT { #problem-new-graph-scc-02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In $\text{2-SAT}$, a Boolean formula is given in standard $\text{2-CNF}$ form: it is a conjunction (AND) of clauses, each containing exactly the disjunction (OR) of two literals, where a literal is a variable or its negation.

For example:

$$
(x_1 \lor \neg x_2)
\land
(\neg x_1 \lor x_3)
\land
(x_2 \lor \neg x_3)
$$

Give an $O(|X|+|C|)$ algorithm
where $X$ is the variable set and $C$ is the clause set,

that determines whether a Boolean assignment makes the entire formula `True`. Output one satisfying assignment if one exists; otherwise report that the formula is `Unsatisfiable`.
</div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

Build a directed graph. For every variable $x$, create separate vertices for $x$ and its negation $\neg x$. Model each clause with directed edges, then solve the problem using strongly connected components.

</details>


## Problem 29 — Matching Deletion { #problem-new-graph-scc-03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-scc-03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected graph $G=(V,E)$ is given, and every edge has a color.

An edge coloring is **proper** when no two incident edges have the same color.

Delete a set of edges such that:

- the deleted edges form a **matching**, so no two share an endpoint;

- after their deletion, the remaining edges have a proper coloring.

Design an $O(|V|+|E|)$ algorithm that determines whether such an edge set exists and outputs one when it does.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">2-sat</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">scc</span></span></div>


<details class="tip problem-hints" markdown="1"><summary>Hints</summary>

*Hint:* Reduce the problem to `2-SAT`.

For every edge $e$, define a Boolean variable $x_e$:

- $x_e=\texttt{True}$ means edge $e$ is deleted;

- $x_e=\texttt{False}$ means edge $e$ remains.

For the remaining coloring to be proper, at least one of any two incident edges of the same color must be deleted.

To ensure that at most one edge incident to each vertex is deleted, use the `partial OR` technique.

Suppose the edges incident to vertex $v$ are

$$
e_1, e_2, \ldots, e_k
$$

Define auxiliary variables

$$
p_1, p_2, \ldots, p_k
$$

so that $p_i$ is `True` if and only if at least one of the variables

$$
x_{e_1}, x_{e_2}, \ldots, x_{e_i}
$$

is `True`.

Then add suitable clauses ensuring that no two edges incident to the same vertex are deleted simultaneously.

</details>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Milad Rostami</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q29-solution-video.mp4"></video></div>


</details>


## Problem 30 — Dijkstra with Small Weights { #problem-graph-helena-03 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-03" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Suppose Dijkstra's algorithm is to be run on a graph whose integer edge weights lie in $\{0,1,\dots,W\}$, where $W$ is relatively small.

**(a)**
Show how to implement Dijkstra's algorithm in $O(W|V|+|E|)$ time.

**(b)**
Give an alternative implementation running in $O((|V|+|E|)\log W)$ time.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Hasna Shah Heydari</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q30-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q30-solution-notes.pdf">EE-4-.pdf</a></li></ul></div>
</div>


</details>


## Problem 31 — Reversing Edges { #problem-edge-reverse .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="edge-reverse" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph with $n$ vertices and $m$ edges is given. Edge $i$ goes from $u_i$ to $v_i$ and costs $w_i$ to reverse.

Any subset of edges may be reversed. The total cost is the maximum reversal cost among the reversed edges, or $0$ if none is reversed.

After the reversals, at least one vertex must be able to reach every other vertex.

Give an $O((n+m)\log m)$ algorithm that computes the minimum required cost.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyed Mohammad Mehdi Hosseini</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q31-solution-video.mp4"></video></div>


</details>


## Problem 32 — Double Vision { #problem-archive-graph-dijsktra-10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-dijsktra-10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected graph is given in which every edge has two positive weights. The first traversal of an edge costs its larger weight; every later traversal costs its smaller weight. Find a minimum-cost route from vertex $u$ to vertex $v$ that passes through vertex $w$. Give an $O(n\log n+m)$ algorithm, where $n$ and $m$ are the numbers of vertices and edges.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Radin Baharsifat</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q32-solution-video.mp4"></video></div>


</details>


## Problem 33 — Planets { #problem-new-graph-dijkstra-04 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-dijkstra-04" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The Goa'uld Apophis has captured Jack O'Neill's team again! Jack escaped, but Apophis's ship had already entered hyperspace. Jack knows the planet where Apophis will land and must travel there through stargates to rescue his friends.

The galaxy contains
$n$ planets numbered $1$ through $n$. Jack is on planet $1$, while Apophis will land on planet $n$. Stargates connect some pairs of planets in both directions, and different connections take positive, possibly different, travel times in seconds.

Jack starts traveling at time $0$.
Other travelers may arrive at Jack's current planet. If someone arrives at time $t$, Jack must wait exactly one second before using its stargate, so he may leave at $t+1$ unless another traveler arrives at that time
at the same planet.

Given the travel times and the times at which Jack cannot use particular planets' stargates, determine the earliest time he can reach planet $n$ in $O((m+n)\log n)$ time.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Shortest paths</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


## Problem 34 — Last-Minute Game { #problem-last-minute .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="last-minute" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A token starts at vertex $1$ of a directed graph with $n$ vertices and $m$ edges. Alice and Bob alternate turns; on each turn, the player must move the token along an outgoing edge. A player unable to move loses. If optimal play by both can keep the game running forever, the result is a draw. Give an $O(n+m)$ algorithm that determines the outcome.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Hossein Shirazi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q34-solution-video.mp4"></video></div>


</details>


## Problem 35 — Volleyball { #problem-new-graph-sp-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-sp-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Petya loves volleyball. One day he was late for a match and, having no car, had to take taxis. The city has $n$ intersections connected by some two-way roads. Every road has a positive integer length in meters.

Initially, exactly one taxi waits at every intersection. The driver at intersection $i$ will take Petya to any intersection reachable within $t_i$ meters, possibly through intermediate intersections, for a fixed fare $c_i$ independent of distance. Taxis cannot stop midway along a road, each taxi may be used at most once, and Petya may board a taxi only at the intersection where it initially waited.

Petya is at intersection $x$ and the volleyball stadium is at intersection $y$. Determine the minimum total fare needed to reach the stadium.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Shortest paths</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


## Problem 36 — French Flag { #problem-graph-helena-01 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-helena-01" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider a directed graph $G$ whose edges are colored red, white, or blue. A walk is a *French-flag walk* when its edge colors repeat red, white, blue. More precisely, a walk $v_0\to v_1\to\dots\to v_k$ is a French-flag walk if edge $v_i\to v_{i+1}$ is red for $i\bmod3=0$, white for $i\bmod3=1$, and blue for $i\bmod3=2$.

Describe an algorithm that finds every vertex reachable from a specified vertex $v$ by a French-flag walk.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Jafaripour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q36-solution-video.mp4"></video></div>


</details>


## Problem 37 — Alternating Paths { #problem-new-graph-traversal-02 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="new-graph-traversal-02" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

An undirected graph with $n$ vertices and $m$ edges is given. Vertices are numbered $1$ through $n$, and the graph has no self-loops or parallel edges.

Orient every edge. Afterward, call a vertex sequence $v_1,v_2,\dots,v_k$ an alternating path (where $k$ may be arbitrarily large and vertices may repeat) if:

- edge $(v_1,v_2)$ is directed $v_1\to v_2$;
- edge $(v_2,v_3)$ is directed $v_3\to v_2$;
- edge $(v_3,v_4)$ is directed $v_3\to v_4$;
- edge $(v_4,v_5)$ is directed $v_5\to v_4$;
- and so on.


Call a vertex $v$ beautiful if every walk starting from $v$ in the original graph—not necessarily a simple path—is alternating in the oriented graph.

What is the maximum number of vertices that can be made beautiful by orienting the edges?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mehdi Ashiani</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q37-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q37-solution-files.zip">files.zip</a></li></ul></div>
</div>


</details>


## Problem 38 — Smallest Number on a Path { #problem-graph-amshz-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A directed graph with $n$ vertices and $m$ edges is given. Every edge is labeled with a digit from $0$ through $9$.

Travel from vertex $1$ to vertex $n$. Writing the traversed edge labels in order forms a decimal number.

Find the smallest number that can be formed this way.

The answer may contain many digits, so print it as a string. Leading zeroes do not affect the value and must be omitted unless the answer is exactly $0$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sara Ghazavi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q38-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q38-solution-notes.pdf">least_number.pdf</a></li></ul></div>
</div>


</details>


## Problem 39 — Expanding a Connected Region { #problem-graph-amshz-14 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected undirected graph with $n$ vertices and $m$ edges is given. Vertex $i$ has positive value $a_i$.

Initially, only vertex $1$ is active and the current power is $a_1+x$, where the nonnegative integer $x$ is chosen before the process starts.

At each step, choose an inactive vertex with at least one active neighbor. If the current power is strictly greater than that vertex's value, activate it and add its value to the current power.

Find the minimum $x$ that allows every vertex to be activated.

Expected running time: $O(m\log n)$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Alireza Mansouri</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q39-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q39-solution-notes.pdf">39.pdf</a></li></ul></div>
</div>


</details>


## Problem 40 — To Be or Not to Be { #problem-archive-graph-sp-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="archive-graph-sp-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Give an $O(n^3)$ algorithm that takes an $n\times n$ matrix $D$
and determines whether some weighted directed graph has shortest-path distance from vertex $i$ to vertex $j$ exactly $D_{ij}$ for every pair.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Parsa Shahmohammadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-03-q40-solution-video.mp4"></video></div>


</details>


## Problem 41 — Bounced Check { #problem-idkwhattoputhere .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="idkwhattoputhere" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

The doctor is rather extravagant and loves shopping. She lives in a country with $n$ cities connected by $m$ two-way roads, each having a positive integer length.

Her shopping has recently left her in debt, and $t$ creditors hold her checks. Creditor $i$ lives in city $a_i$, and that creditor's check bounces on day $i$. Afterward, the creditor wants to find Dr. Lady and send her to prison. Being lazy, however, a creditor pursues her only when the distance from their city to hers is less than $k$.

On each of the $t$ days, her husband, an engineer, wants to know how many cities are safe hiding places. Since $k$ is small, give an $O(k(n+m))$ algorithm to help him.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Shortest paths</span></span><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">Graph</span></span></div>


## Problem 42 — Scotland { #problem-graph-amshz-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="graph-amshz-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A connected undirected graph represents $n$ cities and $m$ roads. Traversing the road between cities $u$ and $v$ consumes $w$ liters of fuel.

In city $i$, fuel costs $a_i$ per liter. The car starts with no fuel, has unlimited tank capacity, and may buy any amount in each city.

For every ordered pair of cities $(s,t)$, find the minimum cost of traveling from $s$ to $t$.

Expected running time: approximately $O(n^3)$.
</div>
