---
layout: article

type: industry
year: 2023
month: 07

title: 'Automated Analyses of IoT Event Monitoring Systems'
authors: ['Andrew Apicellii', 'Sam Bayless', '[Ankush Das]', 'Andrew Gacek', 'Dhiva Jaganathan', 'Saswat Padhi', '[Vaibhav Sharma]', '[Michael Whalen]', 'Raveesh Yadav']

DOI:
  target: Springer
  number: 10.1007/978-3-031-37706-8_2

target:
  short: CAV
  full: 'Proceedings of the 35&hairsp;<sup>th</sup> International Conference on Computer-Aided Verification, 2023'
  link: 'http://i-cav.org/2023/'

links:
  PDF: '%BASE_URL%/assets/pdf/cav2023_iot.pdf'
---

###### Abstract

AWS IoT Events is an AWS service that makes it easy to respond to events from IoT sensors and applications.
Detector models in AWS IoT Events enable customers to monitor
their equipment or device fleets for failures or changes in operation and trigger actions when such events occur.
If these models are incorrect, they may become out-of-sync with the actual state of the equipment
causing customers to be unable to respond to events occurring on it. 

Working backwards from common mistakes made when creating detector models,
we have created a set of automated analyzers that allow customers to prove
their models are free from six common mistakes.
Our analyzers have been running in the AWS IoT Events production service since December 2021.
Our analyzers check six correctness properties in the production service in real time.
93% of customers of AWS IoT Events have run our analyzers without needing to have any knowledge of them.
Our analyzers have reported property violations in 22% of submitted detector models in the production service. 

###### BibTeX Citation

```bibtex {% raw %}
@inproceedings{cav23/apicellii/iot,
  author    = {Andrew Apicellii and
               Sam Bayless and
               Ankush Das and
               Andrew Gacek and
               Dhiva Jaganathan and
               Saswat Padhi and
               Vaibhav Sharma and
               Michael Whalen and
               Raveesh Yadav},
  title     = {Automated Analyses of IoT Event Monitoring Systems},
  booktitle = {Computer Aided Verification - 35th International Conference, {CAV}
               2023, Paris, France, July 17-22, 2023, Proceedings, Part {I}},
  series    = {Lecture Notes in Computer Science},
  volume    = {13964},
  pages     = {27--39},
  publisher = {Springer},
  year      = {2023},
  url       = {https://doi.org/10.1007/978-3-031-37706-8\_2},
  doi       = {10.1007/978-3-031-37706-8\_2},
}
{% endraw %} ```