---
layout: article

type: manuscript
year: 2019
month: 06

title: 'LoopInvGen: A Loop Invariant Generator based on Precondition Inference'
authors: ['Saswat Padhi', '[Rahul Sharma]', '[Todd Millstein]']

target:
  short: SyGuS-Comp Contribution
  full: 'Overview of _LoopInvGen_{:.small-caps}, our submission to the _Inv_{:.small-caps} track of the SyGuS Competition 2019'
  link: 'http://sygus.org/comp/2018'

links:
  PDF: '%BASE_URL%/assets/pdf/syguscomp_loopinvgen.pdf'
  Tool: 'https://github.com/SaswatPadhi/LoopInvGen'
  Slides: '%BASE_URL%/slides/syguscomp_loopinvgen'
---

###### Abstract

We describe the _LoopInvGen_{:.small-caps} tool for generating loop invariants that can
provably guarantee correctness of a program with respect to a given specification.
_LoopInvGen_{:.small-caps} is an efficient implementation of the inference technique
proposed in our earlier work on the [precondition inference engine (PIE)](/papers/pldi2016_pie).

In contrast to existing techniques, _LoopInvGen_{:.small-caps} is not restricted to a fixed set of _features_ ---
atomic predicates that are composed together to build complex loop invariants.
Instead, we start with no initial features, and use program synthesis techniques to grow the set on demand.
This not only enables a less onerous and more expressive approach,
but also appears to be significantly faster than the existing tools over
the [SyGuS-Comp 2018] benchmarks from the _Inv_{:.small-caps} track.

###### BibTeX Citation

```bibtex {% raw %}
@article{corr18/padhi/loopinvgen,
  title         = {LoopInvGen: A Loop Invariant Generator based on Precondition Inference},
  author        = {Saswat Padhi and Rahul Sharma and Todd Millstein},
  journal       = {CoRR},
  volume        = {abs/1707.02029},
  year          = {2018},
  eprint        = {1707.02029},
  archivePrefix = {arXiv},
  primaryClass  = {cs.PL},
  url           = {http://arxiv.org/abs/1707.02029}
}
{% endraw %} ```