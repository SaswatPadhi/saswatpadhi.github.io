---
layout: article

type: manuscript
year: 2019
month: 11

title: 'OASIS: ILP-Guided Synthesis of Loop Invariants'
authors: ['Sahil Bhatia', 'Saswat Padhi', 'Nagarajan Natarajan', '[Rahul Sharma]', '[Prateek Jain]']

target:
  short: In Preparation

links:
  PDF: '%BASE_URL%/assets/pdf/oasis.pdf'
---

###### Abstract

Finding appropriate inductive _loop invariants_ for a program
is a key challenge in verifying its functional properties.
Although the problem is undecidable in general,
several heuristics have been proposed to handle practical programs
that tend to have simple control-flow structures.
However, these heuristics only work well when the space of invariants is small.
On the other hand, machine-learned techniques that use continuous optimization
have a high sample complexity, i.e.,
the number of invariant guesses and the associated counterexamples,
since the invariant is required to _exactly_ satisfy a specification.
We propose a novel technique that is able to solve complex verification problems
involving programs with larger number of variables and non-linear specifications.

We formulate an invariant as a piecewise low-degree polynomial,
and reduce the problem of synthesizing it to a set of integer linear programming (ILP) problems.
This enables the use of state-of-the-art ILP techniques
that combine enumerative search with continuous optimization;
thus ensuring fast convergence for a large class of verification tasks
while still ensuring low sample complexity.
We instantiate our technique as the open-source _Oasis_{:.small-caps} tool using an off-the-shelf ILP solver,
and evaluate it on more than $ 300 $ benchmark tasks
collected from the annual SyGuS competition and recent prior work.
Our experiments show that _Oasis_{:.small-caps} outperforms the state-of-the-art tools,
including the winner of last year’s SyGuS competition,
and is able to solve $ 9 $ challenging tasks that existing tools fail on.

###### BibTeX Citation

```bibtex {% raw %}
@article{corr19/bhatia/oasis,
  title         = {OASIS: ILP-Guided Synthesis of Loop Invariants},
  author        = {Sahil Bhatia and Saswat Padhi and Nagarajan Natarajan and Rahul Sharma and Prateek Jain},
  journal       = {CoRR},
  volume        = {abs/1911.11728},
  year          = {2019},
  eprint        = {1911.11728},
  archivePrefix = {arXiv},
  primaryClass  = {cs.LG},
  url           = {https://arxiv.org/abs/1911.11728}
}
{% endraw %} ```