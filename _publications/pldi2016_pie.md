---
layout: article

type: conference
year: 2016
month: 06

title: 'Data-Driven Precondition Inference with Learned Features'
authors: ['Saswat Padhi', '[Rahul Sharma]', '[Todd Millstein]']

DOI:
  target: ACM DL
  number: 10.1145/2908080.2908099

awards:
  - icon: trophy
    desc: 'Winner of SyGuS-Comp (=sc^Inv^sc= Track) 2017&hairsp;--&hairsp;18'

tweet: 'We present a technique, called the _precondition inference engine_ (PIE),
        which uses on-demand feature learning to automatically infer a precondition
        that would satisfy a given postcondition.
        We use PIE to also construct a novel automatic verification system called =sc^LoopInvGen^sc=.'

target:
  short: PLDI
  full: 'Proceedings of the 37&hairsp;<sup>th</sup> ACM SIGPLAN Conference on Programming Language Design and Implementation, 2016'
  link: 'http://conf.researchr.org/home/pldi-2016'

links:
  PDF: '%BASE_URL%/assets/pdf/pldi2016_pie.pdf'
  Tool: 'https://github.com/SaswatPadhi/LoopInvGen'
  Slides: '%BASE_URL%/slides/pldi2016_pie'
  Talk: 'https://www.youtube.com/watch?v=eN73jayoUAE'
---

###### Abstract

We extend the data-driven approach to inferring preconditions for code from a set of test executions.
Prior work requires a fixed set of features, atomic predicates that define the search space of possible preconditions,
to be specified in advance.
In contrast, we introduce a technique for on-demand feature learning,
which automatically expands the search space of candidate preconditions in a targeted manner as necessary.
We have instantiated our approach in a tool called PIE.
In addition to making precondition inference more expressive,
we show how to apply our feature-learning technique to the setting of data-driven loop invariant inference.
We evaluate our approach by using PIE to infer rich preconditions for black-box OCaml library functions
and using our loop-invariant inference algorithm as part of an automatic program verifier for C++ programs.

###### BibTeX Citation

```bibtex {% raw %}
@inproceedings{pldi16/padhi/pie,
  title     = {Data-Driven Precondition Inference with Learned Features},
  author    = {Saswat Padhi and
               Rahul Sharma and
               Todd D. Millstein},
  booktitle = {Proceedings of the 37th {ACM} {SIGPLAN} Conference on Programming
               Language Design and Implementation, {PLDI} 2016, Santa Barbara, CA,
               USA, June 13-17, 2016},
  pages     = {42--56},
  publisher = {ACM},
  year      = {2016},
  url       = {https://doi.org/10.1145/2908080.2908099},
  doi       = {10.1145/2908080.2908099}
}
{% endraw %} ```