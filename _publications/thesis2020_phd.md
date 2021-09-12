---
layout: article

type: thesis
year: 2020
month: 7

title: 'Data-Driven Learning of Invariants and Specifications'
authors: ['Saswat Padhi']

target:
  short: 'PhD Dissertation'

links:
  PDF: '%BASE_URL%/assets/pdf/thesis2020_phd.pdf'
---

###### Abstract

Although the program verification community has developed several techniques
for analyzing software and formally proving their correctness,
these techniques are too sophisticated for end users
and require significant investment in terms of time and effort.
In this dissertation,I present techniques that help programmers
easily formalize the initial requirements for verifying their programs --
specifications and inductive invariants.
The proposed techniques leverage ideas from program synthesis and statistical learning
to automatically generate these formal requirements from readily available program-related data,
such as test cases, execution traces etc.
I detail three of these data-driven learning techniques --
_FlashProfile_{:.small-caps} and PIE for specification learning,
and _LoopInvGen_{:.small-caps} for invariant learning.

I conclude with some principles for building robust synthesis engines,
which I learned while refining the aforementioned techniques.
Since program synthesis is a form of function learning,
it is perhaps unsurprising that some of the fundamental issues in program synthesis
have also been explored in the machine learning (ML) community.
I study one particular phenomenon -- _overfitting_.
I present a formalization of overfitting in program synthesis,
and discuss two mitigation strategies, inspired by existing ML techniques.

###### BibTeX Citation

```bibtex {% raw %}
@phdthesis{ucla20/padhi/data,
  title   = {Data-Driven Learning of Invariants and Specifications},
  author  = {Saswat Padhi},
  year    = {2020},
  school  = {University of California, Los Angeles}
}
{% endraw %} ```