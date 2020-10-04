---
layout: article

type: report
year: 2018
month: 12

title: 'SyGuS-Comp 2018: Results and Analysis'
authors: ['[Rajeev Alur]', '[Dana Fisman]', 'Saswat Padhi', '[Rishabh Singh]', '[Abhishek Udupa]']

target:
  short: SyGuS-Comp
  full: 'The 5&hairsp;<sup>th</sup> Annual Syntax-Guided Synthesis Competition, 2018'
  link: 'http://sygus.org/comp/2018/'

links:
  PDF: '%BASE_URL%/assets/pdf/report2018_syguscomp.pdf'
---

###### Abstract

_Syntax-guided synthesis (SyGuS)_ is the computational problem of finding an implementation $$ f $$
that meets both a semantic constraint given by a logical formula $$ \varphi $$ in a background theory $$ \mathbb{T} $$,
and a syntactic constraint given by a grammar $$ G $$, which specifies the allowed set of candidate implementations.
Such a synthesis problem can be formally defined in the _SyGuS input format (SyGuS-IF)_, a language that is built on top of SMT-LIB.

The syntax-guided synthesis competition (_SyGuS-Comp_) is an effort to facilitate,
bring together and accelerate research and development of efficient solvers for SyGuS
by providing a platform for evaluating different synthesis techniques on a comprehensive set of benchmarks. 
In the 5<sup>th</sup> SyGuS-Comp, five solvers competed on over $1600$ benchmarks across various tracks.
This paper presents and analyses the results of this year's [(2018) SyGuS competition][SyGuS-Comp 2018].

###### BibTeX Citation

```bibtex {% raw %}
@article{corr18/alur/syguscomp,
  title         = {SyGuS-Comp 2018: Results and Analysis},
  author        = {Rajeev Alur and
                   Dana Fisman and
                   Saswat Padhi and
                   Rishabh Singh and
                   Abhishek Udupa},
  journal       = {CoRR},
  volume        = {abs/1904.07146},
  year          = {2019},
  eprint        = {1904.07146},
  archivePrefix = {arXiv},
  primaryClass  = {cs.PL},
  url           = {http://arxiv.org/abs/1904.07146}
}
{% endraw %} ```