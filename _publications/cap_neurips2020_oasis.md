---
layout: article

type: workshop
year: 2020
month: 12

title: 'OASIS: ILP-Guided Synthesis of Loop Invariants'
authors: ['Sahil Bhatia', 'Saswat Padhi', 'Nagarajan Natarajan', '[Rahul Sharma]', '[Prateek Jain]']

target:
  short: CAP @ NeurIPS
  full: 'Proceedings of the NeurIPS 2020 Workshop on Computer-Assisted Programming'
  link: 'https://nips.cc/virtual/2020/public/workshop_16161.html'

links:
  PDF: '%BASE_URL%/assets/pdf/cap_neurips2020_oasis.pdf'
---

###### Abstract

Automated synthesis of inductive invariants is an important problem in software verification.
We propose a novel technique that is able to solve complex loop invariant synthesis problems
involving large number of variables.
We reduce the problem of synthesizing invariants to a set of integer linear programming (ILP) problems.
We instantiate our techniques in the tool _Oasis_{:.small-caps}
that outperforms state-of-the-art systems on benchmarks
from the invariant synthesis track of the Syntax Guided Synthesis competition.

###### BibTeX Citation

```bibtex {% raw %}
@article{cap_neurips20/bhatia/oasis,
  title         = {OASIS: ILP-Guided Synthesis of Loop Invariants},
  author        = {Sahil Bhatia and
                   Saswat Padhi and
                   Nagarajan Natarajan and
                   Rahul Sharma and
                   Prateek Jain},
  booktitle     = {Proceedings of the NeurIPS 2020 Workshop on Computer-Assisted Programming,
                   December 12, 2020},
  year          = {2020},
  url           = {https://openreview.net/pdf?id=T591RKxIh6Q}
}
{% endraw %} ```