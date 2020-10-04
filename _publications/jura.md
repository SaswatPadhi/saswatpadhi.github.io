---
layout: article

type: manuscript
year: 2019
month: 8

title: 'CNN-Based Table Identification in Spreadsheets with Near-Human Accuracy'
authors: ['Saswat Padhi', 'Pallavi Choudhury', '[Marc Brockschmidt]', '[Rishabh Singh]', '[Oleksandr Polozov]', '[Ben Zorn]']

target:
  short: In Preparation
---

###### Abstract

Spreadsheets allow a flexible arrangement of data, computation,
and presentation so that users ranging from novices to expert programmers
can inspect, analyse, and make decisions based on complex data.
While this flexibility enables a wide variety of uses,
it hampers automatic data-analysis tools that benefit from well-formed table structure.
We consider the problem of automatically identifying table boundaries in a spreadsheet.
While table identification can be intuitive to a human,
previous rule-based approaches to it have had limited success
due to the diversity of visual information in a sheet.

Our work contributes to the understanding of this problem in two ways.
First, we define the table identification problem concretely,
provide a public corpus of spreadsheets with table annotations,
and measure a baseline effectiveness of humans attempting the task on our corpus.
Second, we also describe a novel table identification technique
that uses a convolutional neural network to identify independent corners of rectangular tables.
After identifying the best candidates for each corner,
we stitch together likely corners to build entire tables.
We evaluate our approach on a collection of spreadsheets from the EUSES and TROY200 datasets.
Using the Jaccard index metric,
our approach has overall precision of $ 74.9\,\% $ and recall of $ 93.6\,\% $,
with F-measure of $ 83.2\,\% $
(compared to precision/recall/F-measure of $ 86.9\,\% $/$ 93.2\,\% $/$ 89.9\,\% $ for human performance).