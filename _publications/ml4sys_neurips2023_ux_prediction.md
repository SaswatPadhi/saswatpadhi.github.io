---
layout: article

type: workshop
year: 2023
month: 12

title: 'Predicting User Experience on Laptops from Hardware Specifications'
authors: ['Saswat Padhi', 'Sunil Bhasin', 'Udaya Kiran Ammu', 'Alex Bergman', 'Allan Knies']

DOI:
  target: OpenReview
  id: mHShSE7MSU

awards:
  - icon: microphone
    desc: 'Oral Spotlight Presentation'

tweet: 'We present regression-based models for predicting ChromeOS user experience metrics
        from hardware specifications of Chromebook laptops.'

target:
  short: ML4Sys @ NeurIPS
  full: 'Proceedings of the NeurIPS 2023 Workshop on Machine Learning for Systems'
  link: 'https://neurips.cc/virtual/2023/workshop/66501'

links:
  PDF: '%BASE_URL%/assets/pdf/ml4sys_neurips2023_ux_prediction.pdf'
  Poster: '%BASE_URL%/assets/pdf/poster_ml4sys_neurips2023_ux_prediction.pdf'
  Slides: '%BASE_URL%/slides/ml4sys_neurips2023_ux_prediction'
---

###### Abstract

Estimating the overall user experience (UX) on a device
is a common challenge faced by manufacturers.
Today, device makers primarily rely on microbenchmark scores, such as Geekbench,
that stress test specific hardware components, such as CPU or RAM,
but do not satisfactorily capture consumer workloads.
System designers often rely on domain-specific heuristics
and extensive testing of prototypes to reach a desired UX goal,
and yet there is often a mismatch between the manufacturers’ performance claims
and the consumers’ experience.

We present our initial results on predicting real-life experience on laptops
from their hardware specifications.
We target web applications that run on Chromebooks (ChromeOS laptops)
for a simple and fair aggregation of experience across applications and workloads.
On 54 laptops, we track 9 UX metrics on common end-user workloads:
web browsing, video playback and audio / video calls.
We focus on a subset of high-level metrics exposed by the Chrome browser,
that are part of the Web Vitals initiative for judging the UX on web applications.

With a dataset of 100K UX data points, we train gradient boosted regression trees
that predict the metric values from device specifications.
Across our 9 metrics, we note a mean $R^2$ score (goodness-of-fit on our dataset) of 97.8%
and a mean MAAPE (percentage error in prediction on unseen data) of 10.1%.

###### BibTeX Citation

```bibtex {% raw %}
@article{ml4sys_neurips23/padhi/predicting,
  title         = {Predicting User Experience on Laptops from Hardware Specifications},
  author        = {Saswat Padhi and
                   Sunil Bhasin and
                   Udaya Kiran Ammu and
                   Alex Bergman and
                   Allan Knies},
  booktitle     = {Proceedings of the NeurIPS 2023 Workshop on Machine Learning for Systems,
                   December 16, 2023},
  year          = {2023},
  url           = {https://openreview.net/pdf?id=mHShSE7MSU}
}
{% endraw %} ```