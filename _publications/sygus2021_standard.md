---
layout: article

type: report
year: 2021
month: 7

title: 'The SyGuS Language Standard Version 2.1'
authors: ['Saswat Padhi', '[Elizabeth Polgreen]', '[Mukund Raghothaman]', '[Andrew Reynolds]', '[Abhishek Udupa]']

target:
  short: 'SyGuS Standard'

links:
  PDF: '%BASE_URL%/assets/pdf/sygus_2.1.pdf'
---

###### Abstract

The classical formulation of the program-synthesis problem
is to find a program that meets a correctness specification
given as a logical formula.
Syntax-guided synthesis (SyGuS) is a standardized format
for specifying the correctness specification with a syntactic template
that constrains the space of allowed implementations.

The input to SyGuS consists of a background theory,
a semantic correctness specification for the desired program
given by a logical formula,
and a syntactic set of candidate implementations
given by a grammar.
The computational problem then is to find an implementation
from the set of candidate expressions
that satisfies the specification in the given theory.
The formulation of the problem builds on SMT-LIB.

This document defines the SyGuS 2.1 standard,
which is intended to be used as the standard input and output language for solvers
targeting the syntax-guided synthesis problem.
It borrows many concepts and language constructs
from the standard format for Satisfiability Modulo Theories (SMT) solvers,
the SMT-LIB 2.6 standard.

###### BibTeX Citation

```bibtex {% raw %}
@article{sygus21/padhi/standard,
  title   = {The SyGuS Language Standard Version 2.1},
  author  = {Saswat Padhi and
             Elizabeth Polgreen and
             Mukund Raghothaman and
             Andrew Reynolds and
             Abhishek Udupa},
  year    = {2021},
  url     = {https://sygus.org/assets/pdf/SyGuS-IF_2.1.pdf}
}
{% endraw %} ```