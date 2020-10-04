---
layout: article

type: patent
year: 2018
month: 05

title: 'Record Profiling for Dataset Sampling'
authors: ['Daniel G. Simmons', 'Kevin D. J. Grealish', '[Sumit Gulwani]', 'Ranvijay Kumar', '[Kevin Michael Ellis]' , 'Saswat Padhi']

DOI:
  target: App.
  number: 20180121525A1

target:
  full: 'United States Patent Application Publication (2018)'
  owner: 'Microsoft Technology Licensing, LLC'

links:
  PDF: 'https://patentimages.storage.googleapis.com/e3/9d/16/2332cea71923fa/US20180121525A1.pdf'
---

###### Abstract

A method for generating a smaller dataset from a larger dataset,
each dataset holding a plurality of records,
includes profiling the larger dataset to identify a plurality of patterns,
each of which is descriptive of one or more records held in the larger dataset.
A plurality of slots of the smaller dataset is filled
with records held in the larger dataset.
Multiple records held in the larger dataset are individually retrieved,
and for each retrieved record it is determined
whether to place the retrieved record into a slot of the smaller dataset
and evict a record already occupying that slot,
or not place the retrieved record into the smaller dataset.
This determination is based on a pattern of the retrieved record
and a representation status of the pattern in the smaller dataset.

###### BibTeX Citation

```bibtex {% raw %}
@misc{patent/20180121525,
  title     = {Record Profiling for Dataset Sampling},
  number    = {US20180121525},
  author    = {Daniel G. Simmons and
               Kevin D. J. Grealish and
               Sumit Gulwani and
               Ranvijay Kumar and
               Kevin M. Ellis and
               Saswat Padhi},
  year      = {2018},
  month     = {May},
  url       = {https://patents.google.com/patent/US20180121525A1}
}
{% endraw %} ```