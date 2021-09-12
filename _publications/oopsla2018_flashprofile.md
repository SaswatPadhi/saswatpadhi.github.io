---
layout: article

type: journal
year: 2018
month: 11

title: 'FlashProfile: A Framework for Synthesizing Data Profiles'
authors: ['Saswat Padhi', '[Prateek Jain]', 'Daniel Perelman', '[Oleksandr Polozov]', '[Sumit Gulwani]', '[Todd Millstein]']

DOI:
  target: ACM DL
  number: 10.1145/3276520

artifact_badges: ['acm_available', 'acm_functional']

tweet: 'We present a technique, called _FlashProfile_{:.small-caps}, to generate _hierarchical_ data profiles.
        Existing tools, including commercial ones, generate a single _flat_ profile, and are often overly general or incomplete.
        Furthermore, we show that data profiles can improve accuracy and efficiency of PBE techniques.'

target:
  short: OOPSLA
  full: 'Proceedings of the ACM on Programming Languages Vol. 2 (OOPSLA), 2018'
  link: 'https://2018.splashcon.org/track/splash-2018-OOPSLA'

links:
  PDF: '%BASE_URL%/assets/pdf/oopsla2018_flashprofile.pdf'
  Tool: 'https://github.com/SaswatPadhi/FlashProfileDemo'
  Slides: '%BASE_URL%/slides/oopsla2018_flashprofile'
  Talk: 'https://www.youtube.com/watch?v=xpKLzqT5Ta4'
---

###### Abstract

We address the problem of learning a _syntactic profile_ for a collection of strings,
i.e. a set of regex-like patterns that succinctly describe the syntactic variations in the strings.
Real-world datasets, typically curated from multiple sources, often contain data in various syntactic formats.
Thus, any data processing task is preceded by the critical step of data format identification.
However, manual inspection of data to identify the different formats is infeasible in standard big-data scenarios.

Prior techniques are restricted to a small set of pre-defined patterns
(e.g. digits, letters, words etc.), and provide no control over granularity of profiles.
We define syntactic profiling as a problem of clustering strings based on _syntactic similarity_,
followed by identifying patterns that succinctly describe each cluster.
We present a technique for synthesizing such profiles over a given language of patterns,
that also allows for interactive refinement by requesting a desired number of clusters.

Using a state-of-the-art inductive synthesis framework, PROSE, we have implemented our technique as _FlashProfile_{:.small-caps}.
Across $153$ tasks over $75$ large real datasets, we observe a median profiling time of only ∼$0.7$s.
Furthermore, we show that access to syntactic profiles may allow for more accurate synthesis of programs,
i.e. using fewer examples, in programming-by-example (PBE) workflows such as _Flash Fill_{:.small-caps}.

###### BibTeX Citation

```bibtex {% raw %}
@article{pacmpl18/padhi/flashprofile,
  title     = {FlashProfile: A Framework for Synthesizing Data Profiles},
  author    = {Saswat Padhi and
               Prateek Jain and
               Daniel Perelman and
               Oleksandr Polozov and
               Sumit Gulwani and
               Todd D. Millstein},
  journal   = {PACMPL},
  volume    = {2},
  number    = {OOPSLA},
  pages     = {150:1--150:28},
  year      = {2018},
  url       = {https://doi.org/10.1145/3276520},
  doi       = {10.1145/3276520}
}
{% endraw %} ```