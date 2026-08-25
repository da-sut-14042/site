---
assignment: true
---

# Assignment 5

<div data-assignment-problem-filter></div>


## Introductory


## Problem 1 — Let's Hash <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-rabin-karp-classic .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="rabin-karp-classic" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Consider the Rabin–Karp algorithm.

---

**Part A**

Modify the algorithm so that, after $O(n)$ preprocessing on the text string $S$, the hash of any substring can be computed in $O(1)$.

Explain what information must be precomputed and stored, and how it is used to obtain a substring hash efficiently.

---

**Part B**

In the algorithm above, suppose that whenever two hashes match, we also compare the strings character by character to verify equality. How does this affect correctness, running time, and memory usage? Let the string lengths be $m$ and $n$.

---

**Part C**

What problem may arise if the modulus $M$ used by the hash is very small?

Also explain why modular arithmetic is used in string hashing in the first place.

---

**Part D**

Compare string hashing with KMP and tries in terms of running time and memory usage.

Under what circumstances is string hashing preferable, and why?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## Problem 2 — A Trie This Time <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-triethistime .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="triethistime" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

**Maintaining a Set of Words with a Trie**

Initially, the trie is empty. A sequence of queries is then processed, and each query may change the state of the trie.

Each query is one of the following four types:

```text
ADD word
DELETE word
SEARCH word
COUNT prefix
```

Words are stored as a set: if the same word is added several times, it counts only once in the trie.

---

**Part A**

Explain how to insert and delete a word in the trie.

For `ADD word`, insert `word` into the trie.

For `DELETE word`, remove `word` if it exists; otherwise leave the trie unchanged.

Also specify what information must be stored at each trie node for these operations to work correctly.

---

**Part B**

Explain how to answer the following query using the trie:

```text
SEARCH word
```

This query must determine whether `word` is currently present in the trie.

---

**Part C**

Explain how to answer the following query using the trie:

```text
COUNT prefix
```

This query must return the number of words in the trie that begin with `prefix`.

---

**Part D**
Briefly state when a trie is preferable to the other algorithms you have learned. For example, when is using a trie more appropriate than KMP or Rabin–Karp?
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">trie</span></span></div>


## Problem 3 — A New Algorithm? <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-suffixarrayclassic .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="suffixarrayclassic" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

**Pattern Matching with a Suffix Array**

Assume a ready-made algorithm `BuildSuffixArray(S)` is available and returns the suffix array of string `S`.

That is, if we write:

```text
SA = BuildSuffixArray(S)
```

then `SA` is an array of indices that orders the suffixes of `S` lexicographically.

For example, if:

```text
S = "banana"
```

then:

```text
SA = [5, 3, 1, 0, 4, 2]
```

because the suffixes of `"banana"` appear in the following lexicographic order:

```text
5: a
3: ana
1: anana
0: banana
4: na
2: nana
```

In this problem, you may not explain or implement how a suffix array is built. Treat `BuildSuffixArray(S)` as a black box.

Using only this provided algorithm, answer the following three parts.

---

**Part A**

Given a string `S` and a pattern `P`, design an algorithm that determines whether `P` occurs as a substring of `S`.

For example:

```text
S = "banana"
P = "ana"
```

the output should indicate that `P` occurs in `S`.

Hint: use the fact that suffixes are sorted lexicographically in the suffix array.

---

**Part B**

Modify the previous algorithm to return one starting position of `P` in `S`.

For example:

```text
S = "banana"
P = "ana"
```

One acceptable output is:

```text
1
```

because substring `"ana"` starts at index 1:

```text
banana
 ana
```

Output `3` is also acceptable, because `"ana"` also starts at index 3.

---

**Part C**

Design an algorithm that finds every starting position of `P` in `S`.

For example:

```text
S = "banana"
P = "ana"
```

The output should be:

```text
[1, 3]
```

The order of the output does not matter.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">SuffixArray</span></span></div>


## Problem 4 — KMP Tree <span class="problem-tags problem-tags--inline"><span class="ptag ptag-handwritten" title="Handwritten" aria-label="Handwritten"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4 c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5 c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></span></span> { #problem-kmp-tree .problem .problem-deliverable }




<div class="admonition example problem-statement" data-problem-slug="kmp-tree" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

**The KMP Tree**

Let $s[1..n]$ be a string of length $n$. For each $1 \le i \le n$, define $lps_i$ as the length of the longest proper prefix of $s[1..i]$ that is also its suffix. Equivalently, $lps_i$ is the largest integer $k \lt i$ such that:

$$s[1..k]=s[i-k+1..i]$$

The KMP tree of $s$ is a rooted tree on vertices $0,1,\dots,n$ in which, for every $i \ge 1$, the parent of vertex $i$ is $lps_i$.

1. For $s=\texttt{abacaba}$, compute every $lps_i$ and draw the corresponding KMP tree.
2. Give a string of length $n$ whose KMP tree has the maximum possible height.

3. Prove that in the KMP tree of $s$, vertex $x$ is an ancestor of vertex $y$ if and only if $s[1..x]=s[y-x+1..y]$. In other words, $x$ is an ancestor of $y$ exactly when the length-$x$ prefix is also a suffix of $s[1..y]$.

4. For each $1 \le i \le n$, define $sps_i$ (shortest prefix-suffix) as the length of the shortest nonempty **proper** prefix of $s[1..i]$ that is also a suffix, or $0$ if no such prefix exists. Equivalently, when it exists, $sps_i$ is the **smallest** positive integer $k < i$ such that $s[1..k]=s[i-k+1..i]$. Design an $O(n)$ algorithm that computes all $sps_i$ values.

5. The period of a string is the smallest positive integer $k$ such that the string can be partitioned into identical blocks of length $k$. For example, the period of $s=\texttt{abababab}$ is $2$. Design an $O(n\log n)$ algorithm that computes the period of every prefix $s[1..i]$. For example, for $s=\texttt{ababcababc}$ the output is $[1,2,3,2,5,6,7,8,9,5]$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">kmp</span></span></div>


## Problem 5 — Trie Implementations { #problem-trie-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="trie-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In string problems, the alphabet size is usually treated as a constant. Even so, tries are commonly implemented either with maps or with arrays.

Compare these two implementations.
</div>


## Problem 6 — Twice { #problem-hash-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. In $O(|S| \log |S|)$ time, find the longest substring of $S$ that occurs at least twice.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Amirmohammad Nasrollahnejad</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q06-solution-video.mp4"></video></div>


</details>


## Problem 7 — Circular { #problem-hash-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $A$ and $B$, each of length $n$, are given. Using hashing, give an $O(n)$ algorithm that determines whether $B$ is a rotation of $A$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## Problem 8 — Many Queries { #problem-hash-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given, followed by $q$ queries of the following form:

$$(l_1, r_1, l_2, r_2)$$

For each query, determine whether the following two substrings are equal:

$$S[l_1 \dots r_1]$$

$$S[l_2 \dots r_2]$$

Give the best bounds you can achieve for preprocessing and for answering each query.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Noushin Javadzadeh</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q08-solution-video.mp4"></video></div>


</details>


## Problem 9 — Palindrome Queries { #problem-hash-4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ of length $n$ and $q$ queries are given. Each query specifies an interval $[l,r]$; determine whether $S[l \dots r]$ is a palindrome. Give an $O(n+q)$ algorithm.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## Problem 10 — The Engineer and His String { #problem-hash-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ of length $n$ and a token that may initially be placed on any character of the string are given.

After placing the token, we may move it right any number of times, possibly zero. A move from position $i$ takes it to position $i+1$; it cannot move right from the last position.

After completing the rightward moves, we may move the token left any number of times, possibly zero. A move from position $i$ takes it to position $i-1$; it cannot move left from the first position.

Whenever we place or move the token, we write down the character on which it lands.

For example, if $S$ is `abcdef`, we place the token on the third character, move it right twice, and then left three times, the recorded string is `cdedcb`.

Given strings $S$ and $T$, determine in $O(n^2)$ time whether the described process can be performed on $S$ so that the recorded string is exactly $T$.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohsen Zare</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-notes.pdf">DA-10.pdf</a></li>
<li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q10-solution-code.txt">DA-10.txt</a></li></ul></div>
</div>


</details>


## Problem 11 — Shengduobao's String Game { #problem-boyre-moore-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="boyre-moore-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

In typical cases, Boyer–Moore may use roughly $O(N/M)$ comparisons, but in the worst case it can require about $O(MN)$ comparisons.

To demonstrate this, Shengduobao gives you the following strings:

$T = \texttt{BBBBBBBBBB}$

$P = \texttt{ABBBB}$

---

Run the Boyer–Moore algorithm with the mismatched-character heuristic on this input.

---

Report the shift, or skip distance, used at each step.

---

He also asks for the total number of character comparisons. Help him compute it.

---

Impressed by your expertise, Shengduobao asks why this input is bad for Boyer–Moore.

---

Finally, explain why Boyer–Moore is usually fast in practice despite this worst case.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Ayeh Saberi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q11-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q11-solution-notes.pdf">Q11.pdf</a></li></ul></div>
</div>


</details>


## Problem 12 — Boyer–Moore Shifts { #problem-boyre-moore-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="boyre-moore-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A text $T$ of length $n$ and a pattern $P$ of length $m$ are given. We want to find every position where $P$ occurs in $T$.

Explain the Boyer–Moore algorithm for this problem. State why it compares characters from the end of the pattern and how a mismatch can be used to shift the pattern forward by several positions.
</div>


## Problem 13 — KMP { #problem-kmp-1 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-1" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ of length $n$ is given. For every $i$, let $\pi_i$ be the length of the longest proper prefix of $S[1..i]$ that is also a suffix of $S[1..i]$.

Give an $O(n)$ algorithm that computes every $\pi_i$.
</div>


## Problem 14 — Pattern Matching { #problem-kmp-2 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-2" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Strings $S$ and $P$ are given. Find every position where $P$ occurs in $S$.

Overlapping occurrences count separately. For example, if $S=abababa$ and $P=aba$, the answer is positions $1$, $3$, and $5$.

Give an $O(|S|+|P|)$ algorithm.
</div>


## Problem 15 — Borders { #problem-kmp-3 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-3" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. A string $X$ is a border of $S$ if it is both a proper prefix and a suffix of $S$.

For example, in $ababcabab$, the strings $ab$ and $abab$ are borders.

Give an $O(n)$ algorithm that finds the lengths of all borders of $S$.
</div>


## Problem 16 — Number of Borders of Each Prefix { #problem-kmp-4 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-4" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. For every prefix $S[1..i]$, compute its number of proper borders.

For example, if $S=ababab$, then the prefix $S[1..6]=ababab$ has two borders, of lengths $2$ and $4$.

Give an $O(n)$ algorithm.
</div>


## Problem 17 — Counting Prefix Occurrences { #problem-kmp-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. For every prefix of $S$, compute how many times it occurs in the entire string $S$.

For example, in $ababab$, the prefix $ab$ occurs three times.

Give an $O(n)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Matin Ghiasi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q17-solution-video.mkv"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q17-solution-notes.pdf">slide.pdf</a></li></ul></div>
</div>


</details>


## Problem 18 — Short Palindrome { #problem-kmp-6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. We want to make it a palindrome by prepending characters.

Find the minimum number of characters required, or construct the shortest resulting string.

For example, for $S=abcd$, one answer is $dcbabcd$.

Give an $O(n)$ algorithm.
</div>


## Problem 19 — Repeated String { #problem-kmp-7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. Determine whether $S$ consists of several repetitions of a shorter string.

For example, $ababab$ is formed by repeating $ab$, whereas $ababa$ is not periodic in this way.

Give an $O(n)$ algorithm.
</div>


## Problem 20 — Valid Shifts { #problem-kmp-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ is given. Call an integer $p$ valid if $S_i=S_{i+p}$ for every position $i$ for which both $i$ and $i+p$ lie in the string.

Find all valid values of $p$.

Give an $O(n)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Fatemeh Parvizi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q20-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q20-solution-notes.pdf">20.pdf</a></li></ul></div>
</div>


</details>


## Problem 21 — Cyclic Shift { #problem-kmp-9 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-9" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $A$ and $B$ of equal length are given. Determine whether a cyclic shift of $A$ can produce $B$.

For example, if $A=abcde$ and $B=cdeab$, the answer is yes.

Give an $O(n)$ algorithm using KMP.
</div>


## Problem 22 — Multiple Copies, Minimum Length { #problem-kmp-11 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-11" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $P$ and an integer $k$ are given. Construct the shortest string containing $k$ copies of $P$.

The copies may overlap. For example, if $P=aba$ and $k=3$, then $abababa$ contains three copies of $P$.

Give an $O(|P|+k)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sana Niromand</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q22-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q22-solution-notes.pdf">solution.pdf</a></li></ul></div>
</div>


</details>


## Problem 23 — Shortest Superstring of Two Strings { #problem-kmp-12 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-12" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $A$ and $B$ are given. Find a shortest string containing both $A$ and $B$ as substrings.

If one string already occurs inside the other, the longer string may be the answer. If several answers have the same length, any one is acceptable.

Give an $O(|A|+|B|)$ algorithm.
</div>


## Problem 24 — Camp Schedule { #problem-kmp-13 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-13" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A multiset of `0` and `1` characters and a target binary string $T$ are given.

Use the available characters to construct a string that maximizes the number of occurrences of $T$.

Give an algorithm that constructs such a string.
</div>


## Problem 25 — The KMP Automaton { #problem-kmp-14 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-14" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A pattern $P$ and an alphabet $\Sigma$ are given. For every state from $0$ through $|P|$ and every character $c \in \Sigma$, determine the state reached after reading $c$.

Give an $O(|P| \cdot |\Sigma|)$ algorithm.
</div>


## Problem 26 — Repeated Block { #problem-kmp-16 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-16" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A pattern $P$, a string $B$, and a large integer $k$ are given. Let $B^k$ denote $k$ consecutive copies of $B$.

Count the occurrences of $P$ in $B^k$ without constructing the whole string $B^k$.

Give an algorithm that remains efficient for large $k$.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Esmaeili Marandi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q26-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q26-solution-notes.pdf">Pattern_in_Periodic_String.pdf</a></li></ul></div>
</div>


</details>


## Problem 27 — Alice { #problem-kmp-17 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-17" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Strings $G_1,G_2,\dots,G_n$ are defined. Each $G_i$ is either an ordinary string $S_i$ given directly, or the concatenation of two earlier strings:

$G_i = G_j \cdot G_k$

A pattern $P$ and an index $q$ are given. Count the occurrences of $P$ in $G_q$ without constructing all of $G_q$.

Give an algorithm that avoids building extremely long strings.
</div>


## Problem 28 — Bob { #problem-kmp-18 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-18" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two patterns $A$ and $B$ are given. Find the shortest string that contains $A$ but does not contain $B$.

Report if no such string exists.

Give an efficient algorithm.
</div>


## Problem 29 — Charlie { #problem-kmp-19 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-19" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A pattern $P$, an integer $L$, and a target state $q$ of the KMP automaton are given.

Find the lexicographically smallest string of length $L$ that leaves the automaton for $P$ in state $q$ after processing it.

Report if no such string exists.
</div>


## Advanced


## Problem 30 — BigPetr { #problem-hash-8 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-8" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Strings $W$ and $S$ are given. Consider all substrings of $S$ of length $|W|$, retaining only those that are permutations of $W$: they contain exactly the same characters with the same multiplicities, though possibly in a different order.

Among these valid substrings, find one with the greatest number of occurrences in $S$. If several valid substrings attain the maximum, choose the lexicographically smallest one.

If $S$ contains no valid substring, report that no answer exists.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


## Problem 31 — Petr { #problem-hash-6 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-6" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $t$ and two strings $s_{begin}$ and $s_{end}$ are given. In $O(N^2\log N)$ time, count the distinct substrings of $t$ that begin with $s_{begin}$ and end with $s_{end}$.

Two substrings are considered distinct when their contents differ. Thus, an identical substring occurring at several positions of $t$ is counted only once.

Note that $s_{begin}$ and $s_{end}$ may be equal or may overlap within a substring.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sobhan Aram</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q31-solution-video.mp4"></video></div>


</details>


## Problem 32 — Two-Dimensional String { #problem-hash-5 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-5" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A large matrix of characters and a smaller two-dimensional pattern are given. Find every position where the pattern occurs exactly in the matrix, with the best running time you can achieve.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Rasa Mohammadi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q32-solution-video.mkv"></video></div>


</details>


## Problem 33 — Twins { #problem-hash-7 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="hash-7" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A social network contains $n$ profiles numbered from $1$ to $n$. Some pairs of profiles are friends, and friendship is mutual.

Two distinct profiles $i$ and $j$ are called twins if, for every other profile $k$ with $k \ne i$ and $k \ne j$, one of the following holds:

Profile $k$ is friends with both $i$ and $j$.
Profile $k$ is friends with neither $i$ nor $j$.

Profiles $i$ and $j$ themselves may or may not be friends; this does not affect whether they are twins.

In $O((N+M)\log N)$ time, count the unordered pairs $(i,j)$ whose profiles are twins. Since the pairs are unordered, $(i,j)$ and $(j,i)$ are identical.
</div>


<div class="problem-tags problem-tags--topics"><span class="ptag ptag-topic" tabindex="0" role="button" data-ui-aria-label="show_tag" aria-label="Reveal tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span class="ptag-topic__name">hash</span></span></div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sepehr Alipour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q33-solution-video.mp4"></video></div>


</details>


## Problem 34 — Martians { #problem-kmp-24 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-24" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

While studying Martians, Petya learned that they are extremely lazy: they love sleeping and hate waking up.

A Martian has exactly $n$ eyes arranged in a row and numbered from $1$ to $n$ from left to right. Before sleeping, the Martian covers every eye with an eye patch so that the morning light does not wake him. An uppercase Latin letter is written on the inside of each patch. Thus, after waking and opening all his eyes, he sees an uppercase string $s$ of length $n$.

The alarm rings and the Martian wakes, but he has not opened any eyes yet. Sensing a difficult day ahead, he wants to open his eyes and see something beautiful.

The Martian considers only $m$ Martian words beautiful. Opening every eye at once is difficult so early in the morning, so he opens two disjoint, non-overlapping segments of consecutive eyes.

More precisely, he chooses four integers $a$, $b$, $c$, and $d$ such that:

$1 \le a \le b < c \le d \le n$

He then opens every eye whose index $i$ satisfies one of the following conditions:

$a \le i \le b$

or

$c \le i \le d$

After opening those eyes, he reads all visible characters from left to right and thereby sees a word.

Consider all distinct words the Martian can see in the morning. Determine how many of them are beautiful.
</div>


## Problem 35 — Bears and Elephants { #problem-kmp-23 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-23" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Polar bears Menshykov and Uslada from the Saint Petersburg Zoo and Horace the elephant from the Kyiv Zoo found many wooden blocks. They began stacking the blocks into towers. Several towers standing side by side in a row form a wall, whose towers may have different heights.

Horace finished first and named his wall Elephant. His wall consists of $w$ towers. The bears also built an unnamed wall consisting of $n$ towers.

Horace now looks at the bears' wall and wants to know in how many segments he can see his Elephant.

He sees an elephant in a segment of $w$ consecutive towers if the sequence of tower heights in that segment matches the height sequence of Horace's wall.

To see more elephants, Horace may move his wall vertically, even below ground level. Therefore, the heights need not be exactly equal: the overall shape only needs to match after adding a fixed vertical offset to every height.

Give an $O(n+w)$ algorithm that counts the segments of the bears' wall in which Horace can see his Elephant.
</div>


## Problem 36 — Same Shape { #problem-kmp-10 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-10" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two numeric arrays $A$ and $B$ are given. Find every position where $B$ occurs in $A$ with the same shape: adding the same constant to every element of $B$ still counts as a match.

For example, if $B=[3,5,8]$, then $[10,12,15]$ has the same shape.

Give an $O(n+m)$ algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mohammad Mahmoudieh</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q36-solution-video.mp4"></video>
<div class="problem-solution-attachments"><strong>Attachments</strong><ul><li><a href="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q36-solution-notes.pdf">DA_Q37_HW5_Solution.pdf</a></li></ul></div>
</div>


</details>


## Problem 37 — Splitting the Pattern { #problem-kmp-15 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-15" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $S$ and $T$ are given. Determine whether $T$ can be split into two parts $A$ and $B$, with $T=AB$, such that $S$ has the following form:

$*A*B*$

That is, $A$ must occur somewhere in $S$, and $B$ must occur later in $S$; anything may lie between them.

Give an efficient algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Mahdiar Mostashar</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q37-solution-video.mp4"></video></div>


</details>


## Problem 38 — David { #problem-kmp-20 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-20" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A forbidden pattern $P$, an integer $n$, and an alphabet $\Sigma$ are given.

Count the strings of length $n$ over $\Sigma$ that do not contain $P$.

Give an algorithm using the KMP automaton.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Seyedeh Shaghayegh Mirjalili</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q38-solution-video.mov"></video></div>


</details>


## Problem 39 — Eve { #problem-kmp-21 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-21" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

A string $S$ containing some `?` characters and a pattern $P$ are given.

Each `?` may be replaced by any alphabet character. Find a replacement that maximizes the number of occurrences of $P$ in the resulting string.

Give an algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Shayan Sabzi</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q39-solution-video.mp4"></video></div>


</details>


## Problem 40 — LCS Without a Forbidden Pattern { #problem-kmp-22 .problem .problem-optional }




<div class="admonition example problem-statement" data-problem-slug="kmp-22" markdown="1">
<div class="admonition-title problem-statement__title" markdown="0"><span class="problem-statement__label" data-ui-string="problem_statement">Problem statement</span></div>

Two strings $A$ and $B$ and a forbidden pattern $P$ are given.

Find a longest common subsequence of $A$ and $B$ that does not contain $P$ as a substring.

Give an algorithm.
</div>


<details class="success problem-solution problem-video-solution" markdown="1"><summary><span data-ui-string="solution">Solution</span> <span class="problem-solution-summary-video" title="Video solution" aria-label="Video solution"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384 c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2 V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64 c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></span> - Sobhan Behzadipour</summary>


<div class="problem-solution-video"><video controls preload="none" src="https://github.com/da-sut-14042/site/releases/download/media-2026-08-23/assignment-05-q40-solution-video.mp4"></video></div>


</details>
