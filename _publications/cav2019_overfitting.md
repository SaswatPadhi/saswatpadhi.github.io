---
layout: article

type: conference
year: 2019
month: 7

title: 'Overfitting in Synthesis: Theory and Practice'
authors: ['Saswat Padhi', '[Todd Millstein]', '[Aditya Nori]', '[Rahul Sharma]']

DOI:
  target: Springer
  id: 10.1007/978-3-030-25540-4_17

tweet: 'We define _overfitting_ in the context of CEGIS-based SyGuS,
        and show that there exists a tradeoff between expressiveness and performance.
        We present two mitigation strategies:
        **<small>(1)</small>** a black-box approach that any existing tool can use,
        and **<small>(2)</small>** a white-box technique called _hybrid enumeration_.'

target:
  short: CAV
  full: 'Proceedings of the 31&hairsp;<sup>st</sup> International Conference on Computer-Aided Verification, 2019'
  link: 'http://i-cav.org/2019/'

links:
  PDF: '%BASE_URL%/assets/pdf/cav2019_overfitting.pdf'
  Tool: 'https://zenodo.org/record/2653957'
  Slides: '%BASE_URL%/slides/cav2019_overfitting'
---

###### Abstract

In syntax-guided synthesis (_SyGuS_), a synthesizer’s goal is to
automatically generate a program belonging to a grammar of possible implementations
that meets a logical specification.
We investigate a common limitation across state-of-the-art SyGuS tools that perform
counterexample-guided inductive synthesis (_CEGIS_).
We empirically observe that as the expressiveness of the provided grammar increases,
the performance of these tools degrades significantly.

We claim that this degradation is not only due to a larger search space, but also due to _overfitting_.
We formally define this phenomenon and prove _no-free-lunch_ theorems for SyGuS,
which reveal a fundamental tradeoff between synthesizer performance and grammars expressiveness.

A standard approach to mitigate overfitting in machine learning
is to run multiple learners with varying expressiveness in parallel.
We demonstrate that this insight can immediately benefit existing SyGuS tools.
We also propose a novel single-threaded technique called _hybrid enumeration_,
which interleaves different grammars, and outperforms the winner of the 2018 SyGuS competition
(_Inv_{:.small-caps} track) by solving more problems and achieving a $ 5 \times $ mean speed up.

###### BibTeX Citation

```bibtex {% raw %}
@inproceedings{cav19/padhi/overfitting,
  author    = {Saswat Padhi and
               Todd D. Millstein and
               Aditya V. Nori and
               Rahul Sharma},
  title     = {Overfitting in Synthesis: Theory and Practice},
  booktitle = {Computer Aided Verification - 31st International Conference, {CAV}
               2019, New York City, NY, USA, July 15-18, 2019, Proceedings, Part
               {I}},
  series    = {Lecture Notes in Computer Science},
  volume    = {11561},
  pages     = {315--334},
  publisher = {Springer},
  year      = {2019},
  url       = {https://doi.org/10.1007/978-3-030-25540-4\_17},
  doi       = {10.1007/978-3-030-25540-4\_17},
}
{% endraw %} ```