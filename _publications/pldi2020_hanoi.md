---
layout: article

type: conference
year: 2020
month: 06

title: 'Data-Driven Inference of Representation Invariants'
authors: ['Anders Miltner', 'Saswat Padhi', '[Todd Millstein]', '[David Walker]']

artifact_badges: ['acm_available', 'acm_functional', 'acm_reusable']

awards:
  - icon: star
    desc: 'ACM SIGPLAN Distinguished Paper'

tweet: 'We present a counterexample-driven algorithm to infer provably sufficient representation invariants
        that certify correctness of data-structure implementations.
        Our implementation, _Hanoi_{:.small-caps}, can automatically infer representation invariants for several common
        recursive data structures, such as sets, lists, trees, etc.'

target:
  short: PLDI
  full: 'Proceedings of the 41&hairsp;<sup>st</sup> ACM SIGPLAN Conference on Programming Language Design and Implementation, 2020'
  link: 'http://conf.researchr.org/home/pldi-2020'

links:
  PDF: '%BASE_URL%/assets/pdf/pldi2020_hanoi.pdf'
  Tool: 'https://github.com/Miltnoid/DSInvariant'
---

###### Abstract

A _representation invariant_ is a property that holds of all
values of abstract type produced by a module.
Representation invariants play important roles in software engineering and program verification.
In this paper, we develop a counterexample-driven algorithm
for inferring a representation invariant that is sufficient
to imply a desired specification for a module.
The key novelty is a type-directed notion of _visible inductiveness_,
which ensures that the algorithm makes progress toward its goal
as it alternates between weakening and strengthening candidate invariants.
The algorithm is parameterized by an example-based synthesis engine and a verifier,
and we prove that it is sound and complete for first-order modules over finite types,
assuming that the synthesizer and verifier are as well.
We implement these ideas in a tool called _Hanoi_{:.small-caps},
which synthesizes representation invariants for recursive data types.
_Hanoi_{:.small-caps} not only handles invariants for first-order code, but higher-order code as well.
In its back end, _Hanoi_{:.small-caps} uses an enumerative synthesizer called Myth
and an enumerative testing tool as a verifier.
Because _Hanoi_{:.small-caps} uses testing for verification, it is not sound,
though our empirical evaluation shows that it is successful on the benchmarks we investigated.

###### BibTeX Citation

```bibtex {% raw %}
@inproceedings{pldi20/miltner/hanoi,
  title     = {Data-Driven Inference of Representation Invariants},
  author    = {Anders Miltner and
               Saswat Padhi and
               Todd D. Millstein and
               David Walker},
  booktitle = {Proceedings of the 41st {ACM} {SIGPLAN} Conference on Programming
               Language Design and Implementation, {PLDI} 2020, London, UK,
               June 15-20, 2020},
  publisher = {ACM},
  year      = {2020},
  note      = {To appear}
}
{% endraw %} ```