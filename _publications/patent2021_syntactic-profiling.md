---
layout: article

type: patent
year: 2021
month: 12

title: 'Syntactic Profiling of Alphanumeric Strings'
authors: ['[Sumit Gulwani]', '[Prateek Jain]', 'Daniel A. Perelman' , 'Saswat Padhi', '[Oleksandr Polozov]']

DOI:
  target: Grant
  number: 11210327B2

target:
  full: 'United States Patent Application Publication (2021)'
  owner: 'Microsoft Technology Licensing, LLC'

links:
  PDF: 'https://patentimages.storage.googleapis.com/79/a4/1a/babc0c6b6a8053/US20190034437A1.pdf'
---

###### Abstract

A computing device includes a storage machine holding instructions
executable by a logic machine to generate multi-string clusters,
each containing alphanumeric strings of a dataset.
Further multi-string clusters are generated via iterative performance
of a combination operation in which a hierarchically-superior cluster
is generated from a set of multi-string clusters.
The combination operation includes, for candidate pairs of multi-string clusters,
generating syntactic profiles describing an alphanumeric string
from each multi-string cluster of the candidate pair.
For each of the candidate pairs, a cost factor is determined
for at least one of its syntactic profiles.
Based on the cost factors determined for the syntactic profiles,
one of the candidate pairs is selected.
The multi-string clusters from the selected candidate pair
are combined to generate the hierarchically-superior cluster
including all of the alphanumeric strings from the selected
candidate pair of multi-string clusters.


###### BibTeX Citation

```bibtex {% raw %}
@misc{patent/US11210327B2,
  title     = {Syntactic Profiling of Alphanumeric Strings},
  number    = {US11210327B2},
  author    = {Sumit Gulwani and
               Prateek Jain and
               Daniel A. Perelman and
               Saswat Padhi and
               Oleksandr Polozov},
  year      = {2021},
  month     = {December},
  url       = {https://patents.google.com/patent/US11210327B2}
}
{% endraw %} ```