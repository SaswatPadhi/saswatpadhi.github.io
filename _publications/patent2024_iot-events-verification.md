---
layout: article

type: patent
year: 2024
month: 9

title: 'IoT Event Detector Correctness Verification'
authors: ['[Vaibhav Sharma]', 'Andrew Gacek', '[Michael Whalen]', 'Saswat Padhi', 'Andrew Apicelli', 'Raveesh Yadav', 'Samuel Bayless', 'Roman Pruzhanskiy', 'Rajat Gupta', 'Harshil Shah', 'Fernando Dias Pauer', '[Ankush Das]', 'Dhivashini Jaganathan']

DOI:
  - target: US
    id: 12093160B1
  - target: US
    id: 20240403186A1

target:
  type: Grant
  assignee:
    short: Amazon
    full: 'Amazon Technologies Inc.'
---

###### Abstract

System and methods for IoT event detector correctness verification.
Detector models (e.g., state-based models including variables, states, transitions and actions)
take IoT device data as input and detect, based on the data, events that triggers actions.
To verify a correctness of the models prior to deploying the models at scale,
an event detector model correctness checker obtains a representation of a definition of the model,
verifies, based on analysis of the model definition, whether the model complies with correctness properties,
and generates a report indicating whether the model complies.
Example correctness properties include a reachability correctness property that indicates that
respective states or actions are reachable according to the definition of the event detector model.
The analysis may be accessed via an interface element and may result in generation of a report
that identifies a location of non-compliance within the model definition.


###### BibTeX Citation

```bibtex {% raw %}
@misc{patent/US12093160B1,
  title     = {Syntactic Profiling of Alphanumeric Strings},
  number    = {US12093160B1},
  author    = {Vaibhav B. Sharma and
               Andrew J. Gacek and
               Michael W. Whalen and
               Saswat Padhi and
               Andrew Apicelli and
               Raveesh Yadav and
               Samuel Bayless and
               Roman Pruzhanskiy and
               Rajat Gupta and
               Harshil R. Shah and
               Fernando D. Pauer and
               Ankush Das and
               Dhivashini Jaganathan},
  year      = {2024},
  month     = {September},
  url       = {https://patents.google.com/patent/US12093160B1}
}
{% endraw %} ```