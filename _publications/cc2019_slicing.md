---
layout: article

type: conference
year: 2019
month: 2

title: 'A Static Slicing Method for Functional Programs and Its Incremental Version'
authors: ['Prasanna Kumar K.', 'Amitabha Sanyal', '[Amey Karkare]', 'Saswat Padhi']

DOI:
  target: ACM DL
  number: 10.1145/3302516.3307345

tweet: 'We propose a static analysis for slicing functional programs,
        which precisely captures structure-transmitted dependencies
        and provides a weak form of context sensitivity --- weakened to guarantee decidability.
        We also show an incremental version this technique that is efficient in practice.'

target:
  short: CC
  full: 'Proceedings of the 28&hairsp;<sup>th</sup> International Conference on Compiler Construction, 2019'
  link: 'https://cc-conference.github.io/19/'

links:
  PDF: '%BASE_URL%/assets/pdf/cc2019_slicing.pdf'
---

###### Abstract

An effective static slicing technique for functional programs must have two features.
Its handling of function calls must be context sensitive without being inefficient,
and, because of the widespread use of algebraic datatypes,
it must take into account structure transmitted dependences.
It has been shown that any analysis that combines these two characteristics is undecidable,
and existing slicing methods drop one or the other.
We propose a slicing method that only weakens (and not entirely drop)
the requirement of contextsensitivity and that too for some and not all programs.

We then consider applications that require the same program to be sliced
with respect to several slicing criteria.
We propose an incremental version of our slicing method to handle such situations efficiently.
The incremental version consists of a one time precomputation step
that uses the non-incremental version to slice the program
with respect to a fixed default slicing criterion and processes the results to a canonical form.
Presented with a slicing criterion, a low-cost incremental step
uses the results of the precomputation to obtain the slice.

Our experiments with a prototype incremental slicer confirms the expected benefits ---
the cost of incremental slicing, even when amortized over only a few slicing criteria,
is much lower than the cost of non-incremental slicing.

###### BibTeX Citation

```bibtex {% raw %}
@inproceedings{cc19/kumar/slicing,
  title     = {A Static Slicing Method for Functional Programs and Its Incremental Version},
  author    = {Prasanna Kumar K. and
               Amitabha Sanyal and
               Amey Karkare and
               Saswat Padhi},
  booktitle = {Proceedings of the 28th International Conference on Compiler Construction,
               {CC} 2019, Washington, DC, USA, February 16-17, 2019},
  pages     = {53--64},
  publisher = {ACM},
  year      = {2019},
  url       = {https://doi.org/10.1145/3302516.3307345},
  doi       = {10.1145/3302516.3307345}
}
{% endraw %} ```