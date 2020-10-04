---
type: conference

title: 'CAV 2019 (Overfitting) Slides'

transition: 'slide'
transitionSpeed: 'fast'

heading: 'Overfitting in Synthesis'
publink: cav2019_overfitting

target: '[CAV 2019]'
location: 'New York City, NY'
presented_on: 2019-07-16

time: 18
frames: 17

tech: {icon: 'fab fa-html5', name: 'HTML5 (Reveal.js)'}
---

<section class='title-slide'>
## Overfitting in Synthesis
{: style="margin-top:2em" }

<br><br>
<span class='color-faded color-accent'>Saswat Padhi</span><small>$ \,^1 $</small>

[Todd Millstein]<small>$ ^1 $</small> &emsp;&emsp; [Aditya Nori]<small>$ \,^{2\,\texttt{GB}} $</small> &ensp;&ensp;&thinsp; [Rahul Sharma]<small>$ ^{2\,\texttt{IN}} $</small>

<p style='font-size:0.6em; margin-top:2.25em'>
  <small>$ ^1 $</small>
  ![UCLA logo]({{ site.baseurl }}/assets/img/logos/ucla.png){: .plain style='margin:0; height:1.275em; vertical-align:bottom' }
  University of California, Los Angeles, USA
</p>
<p style='font-size:0.6em'>
  <small>$ ^2 $</small>
  ![Microsoft logo]({{ site.baseurl }}/assets/img/logos/microsoft.png){: .plain style='margin:0; height:1.275em; vertical-align:bottom' }
  Microsoft Research
  &ensp; <small>$ ^\texttt{GB}\, $</small>Cambridge, UK
  &ensp; <small>$ ^\texttt{IN}\, $</small>Bengaluru, India
</p>
</section>



<section>
### Synthesis

{% include_relative cegis.svg %}

<div class='fragment color-medium-accent focus-box' data-fragment-index='4' style='margin-top:0.5em'>
  How does the choice of the _grammar_ <br>
  affect the _performance_ of synthesis tools?
</div>

<div class='columns' style='margin-top:1.25em; font-size:0.7em'>
<div class='fragment color-highlight focus-box' data-fragment-index='5'>
  Theoretical results & experiments <br>
  that demonstrate <span class='color-faded color-accent'>overfitting</span> in CEGIS
</div>
<div class='fragment color-highlight focus-box' data-fragment-index='6'>
  Practical mitigation strategies <br>
  inspired by ML techniques
</div>
</div>
</section>



<section>
### State of The Art

- <span class='subheading'>Grammars</span>&hairsp;: $ 6 $ commonly used arithmetic grammars
- <span class='subheading'>Benchmarks</span>&hairsp;: $ 180 $ invariant-synthesis tasks over integers
- <span class='subheading'>Tools</span>&hairsp;: $ 5 $ participants from [SyGuS-Comp&apos;18][SyGuS-Comp 2018]
{: style='font-size:0.85em; margin-top:-0.25em' }

{% include_relative state-of-the-art.svg %}

(Timeout = $ 30 $ mins per benchmark per tool per grammar)
{: .fragment data-fragment-index='1' style='text-align:center; font-size:0.4em; margin-top:0.125em' }

<div class='fragment color-accent focus-box' data-fragment-index='2'
     style='position:absolute; font-size:0.625em; width:22.75em; top:12.875em; left:3.75em'>
  With more expressive power,
  <em>every</em> tool fails on many benchmarks it could previously solve!
</div>

<div class='fragment color-medium-accent focus-box' data-fragment-index='3' style='margin-top:0.25em'>
  But is the <span class='color-faded color-accent'>performance degradation</span>
  <br> simply due to larger search spaces? ...
</div>
</section>



<section>
### Overfitting

{% include_relative cegis-compact.svg %}

<div class='color-medium-accent focus-box' style='font-size:0.625em; margin:0.5em auto; width:95%'>
  <span class='subheading'>ML notion:</span> &nbsp;
  A function does not correctly generalize beyond the training data
</div>

<table class='fragment' data-fragment-index='1' style='font-size:0.6em; width:97.5%; margin-top:1.5em'>
  <tr>
    <th class='heading'>
      On increasing expressiveness:
    </th>
    <th class='color-faded color-accent'>Increase</th>
    <th class='color-faded color-accent' style='font-size:0.9em'>No Change</th>
  </tr>
  <tr>
    <th style='border-bottom:none; border-right:1px solid DarkGray'>
      Increase in # Rounds $ \ \Rightarrow\ $ <span class='color-faded color-accent'> ________ </span> in Synth. Time
    </th>
    <td><span>$ 79 \,\% $</span></td>
    <td><span>$ 6 \,\% $</span></td>
  </tr>
  <tr>
    <th class='fragment' data-fragment-index='2' style='border-bottom:none; border-right:1px solid DarkGray'>
      Increase in Synth. Time $ \ \Rightarrow\ $ <span class='color-faded color-accent'> ________ </span> in # Rounds
    </th>
    <td><span class='fragment' data-fragment-index='2'>$ 27 \,\% $</span></td>
    <td><span class='fragment' data-fragment-index='2'>$ 67 \,\% $</span></td>
  </tr>
</table>

<div class='fragment' data-fragment-index='3'
     style='background: rgba(255, 0, 0, 0.125);
            position: absolute;
            top: 10.775em; left: 18.125em;
            width: 2.45em; height: 2em;
            border: 3px solid FireBrick;
            border-radius: 0.5em'>
</div>

(For =sc^LoopInvGen^sc= on all $ 180 $ benchmarks and all $ 6 $ grammars with $ 30 $ mins timeout per benchmark per grammar)
{: .fragment data-fragment-index='1' style='text-align:center; font-size:0.4em; margin-top:0.25em' }

<div class='fragment color-highlight focus-box' data-fragment-index='3'
     style='font-size:0.75em; text-align:left; margin:0.75em auto; width:77.5%'>
  &nbsp;Synthesizers not only spend more time
  <ul>
    <li style='margin-top:-0.125em'><em>searching</em> for a function within a large space,</li>
    <li style='margin:0.125em 0'>but also <em class='color-faded color-accent'>collecting more examples</em> from the verifier</li>
  </ul>
</div>
</section>



<section>
### Contributions

**=fa^search^fa= &hairsp;Theoretical Insights**
<ul class='fragment' data-fragment-index='1' style='font-size:0.775em; margin-top:-0.25em; margin-bottom:0.75em; line-height:1.45em'>
  <li>
    Formal notions of <span class='color-faded color-medium-accent'>learnability</span> and <span class='color-medium-accent'>overfitting</span> for SyGuS
  </li>
  <li style='margin-top:0.5em'>
    <span class='color-faded color-medium-accent'>No free lunch </span> &mdash; overfitting is inevitable at high expressiveness
  </li>
</ul>

**=fa^cogs^fa= &thinsp;Practical Solutions**
<ul class='fragment' data-fragment-index='2' style='font-size:0.775em; margin-top:-0.25em; line-height:1.4em'>
  <li>
    <span class='color-faded color-medium-accent'>=sc^PLearn^sc=</span>, a black-box technique inspired by <span class='color-faded color-medium-accent'>ensemble learning</span> &mdash; explores multiple grammars in parallel
  </li>
  <li style='margin-top:0.5em'>
    <span class='color-faded color-medium-accent'>Hybrid enumeration (HE)</span> &mdash;
    emulates =sc^PLearn^sc= by interleaving exploration of multiple grammars in a single thread
  </li>
  <li style='margin-top:0.5em'>
    When combined with HE, the winning solver from the =sc^Inv^sc= track of <a href='https://sygus.org/comp/2018/'>SyGuS-Comp&apos;18</a>
    is $ 5\times $ faster and solves $2$ more benchmarks
  </li>
</ul>
</section>



<section>
### $ \boldsymbol{m} $-Learnability

<div style='font-size:0.7em; margin-top:-0.25em'>
  &thinsp;(Learning from $ m $ observations / examples)
</div>

<div class='columns' style='font-size:0.85em; margin-top:1em'>
<div style='width:100%'>
#### Machine Learning
{: .subheading style='text-align:center'}

<ul style='font-size:0.85em; margin:0.125em -0.5em 0 -0.75em; text-align:justify'>
  <li>
    Learned functions only need to be <span class='color-faded color-medium-accent'>approximately</span> correct
  </li>
  <li class='fragment' data-fragment-index='1' style='margin-top:0.5em;'>
    Typically require learning from <span class='color-faded color-medium-accent'>any</span> set of $ m $ i.i.d. samples
  </li>
</ul>
</div>
<div class='separator'></div>
<div style='width:100%'>
#### CEGIS-Based SyGuS
{: .subheading style='text-align:center'}

<ul style='font-size:0.85em; margin:0.125em -0.25em 0 -1em; text-align:justify'>
  <li>
    Learned functions must match the specification <span class='color-faded color-medium-accent'>exactly</span>
  </li>
  <li class='fragment' data-fragment-index='1' style='margin-top:0.5em;'>
    <span class='color-faded color-accent'>Too strong</span> of a requirement for the
    CEGIS setting
  </li>
</ul>
</div>
</div>

<div class='fragment color-highlight focus-box' data-fragment-index='3'
     style='font-size:0.825em; margin:2em auto; width:82.5%'>
  A specification $ \phi $ is $ m $-learnable by a learner $ \mathcal{L} $
  <br> if there <b>exist</b> a set of $ m $ examples for $ \phi $ with which
  <br> $ \mathcal{L} $ can learn a correct function for $ \phi $.
</div>

<div class='fragment' data-fragment-index='3'
     style='font-size:0.8em; margin-top:-1em; text-align:center'>
(a significantly weaker notion of learnability)
</div>
</section>



<section>
### No Free Lunch

<div class='color-highlight focus-box' style='margin:1.25em auto; width:90%'>
  Explicit <b>tradeoff</b> between grammar <b>expressiveness</b>
  and the minimum number of <b>rounds</b> required
</div>

<div class='fragment' data-fragment-index='1' style='font-size:0.79em; text-align:justify; margin-top:1em'>
Let $ X $ and $ Y $ be arbitrary domains,
$ m \in \mathbb{Z} $ be s.t. $ 0 \leq m < |X| $,
and $ \mathcal{E} $ be an arbitrary grammar.
<span class='fragment' data-fragment-index='2'>Then, either:</span>
<ul style='margin-left:-0.125em'>
  <li class='fragment' data-fragment-index='2' style='margin-top:0.25em'>
    $ \mathcal{E} $ contains at most <span class='color-faded color-medium-accent'>$\texttt{bound}(m)$</span>
    number of distinct $X \to Y$ functions,
  </li>
  <li class='fragment' data-fragment-index='3' style='margin-top:0.75em'>
    or, for <span class='color-faded color-medium-accent'>every learner</span> $ \mathcal{L} $,
    there <span class='color-faded color-medium-accent'>exists a specification</span> $ \phi $ that admits a solution in $ \mathcal{E} $,
    but is <span class='color-faded color-medium-accent'>not $ m $-learnable</span> by $ \mathcal{L} $.
  </li>
</ul>
</div>

<div class='fragment' data-fragment-index='3' style='font-size:0.6em; text-align:center; margin-top:2.5em'>
  More details in [our paper]({{ site.base_root_url }}/publications/cav2019_overfitting) ---
  finite and infinite $ X $ and $ Y $, the precise $ \texttt{bound} $, etc.
</div>
</section>



<section>
### No Free Lunch: Examples

Two extreme cases:
<div style='font-size:0.875em; line-height:1.625; margin-top:0.75em'>
&ensp;&#x25BA; A singleton grammar $ \mathcal{E} $:
<div class='fragment' data-fragment-index='1' style='margin-left:1em; margin-top:-0.3125em'>
  - <span class='color-faded color-highlight'>Any specification</span> that admits a solution in $ \mathcal{E} $
    <br> is <span class='color-faded color-highlight'>$ 0 $-learnable</span> by any learner
  - <span class='color-faded color-accent'>Only one $ X \to Y $ function</span> is expressible in $ \mathcal{E} $
</div>
</div>
<div style='font-size:0.875em; line-height:1.625; margin-top:1em'>
&ensp;&#x25BA; A fully expressive grammar $ \mathcal{E} $:
<div class='fragment' data-fragment-index='2' style='margin-left:1em; margin-top:-0.3125em'>
  - <span class='color-faded color-highlight'>Every $ X \to Y $ function</span> is expressible in $ \mathcal{E} $
  - For <span class='color-faded color-accent'>every learner</span>, there <span class='color-faded color-accent'>exists a specification</span>
    <br> that requires <span class='color-faded color-accent'>all $ \lvert X \rvert $ examples</span> to be learnable
</div>
</div>
</section>



<section>
### Overfitting

<div style='font-size:0.7em; margin-top:-0.25em'>
  &thinsp;(Why some specifications require more examples to be learnable)
</div>

<div class='color-medium-accent focus-box' style='font-size:0.825em; margin:1em auto'>
  <span class='subheading'>ML notion:</span>
  When a learned function does not correctly generalize beyond the training data
</div>

<div class='fragment' data-fragment-index='1' style='font-size:0.775em'>
<span class='subheading'>SyGuS notion:</span>
When a learned function is <span class='color-faded color-highlight'>consistent with the observed examples</span>,
but <span class='color-faded color-accent'>does not satisfy the given specification</span>
</div>

<div class='fragment' data-fragment-index='2' style='font-size:0.765em; text-align:center'>
Potential for Overfitting = Number of such functions in the grammar
</div>

<div class='fragment color-highlight focus-box' data-fragment-index='2'
     style='font-size:0.85em; margin:1.25em auto'>
  The potential for overfitting increases <br> with grammar expressiveness
</div>

<div class='fragment' data-fragment-index='2' style='font-size:0.6em; text-align:center'>
  More details in [our paper]({{ site.base_root_url }}/publications/cav2019_overfitting) ---
  precise bounds on number of examples and expressiveness
</div>
</section>



<section>
### Contributions

<div style='opacity:0.25'>
**=fa^search^fa= &hairsp;Theoretical Insights**
<ul style='font-size:0.775em; margin-top:-0.25em; margin-bottom:0.75em; line-height:1.45em'>
  <li>
    Formal notions of <span class='color-faded color-medium-accent'>learnability</span> and <span class='color-medium-accent'>overfitting</span> for SyGuS
  </li>
  <li style='margin-top:0.5em'>
    <span class='color-faded color-medium-accent'>No free lunch </span> &mdash; overfitting is inevitable at high expressiveness
  </li>
</ul>
</div>

**=fa^cogs^fa= &thinsp;Practical Solutions**
<ul style='font-size:0.775em; margin-top:-0.25em; line-height:1.4em'>
  <li>
    <span class='color-faded color-medium-accent'>=sc^PLearn^sc=</span>, a black-box technique inspired by <span class='color-faded color-medium-accent'>ensemble learning</span> &mdash; explores multiple grammars in parallel
  </li>
  <li style='margin-top:0.5em'>
    <span class='color-faded color-medium-accent'>Hybrid enumeration (HE)</span> &mdash;
    emulates =sc^PLearn^sc= by interleaving exploration of multiple grammars in a single thread
  </li>
  <li style='margin-top:0.5em'>
    When combined with HE, the winning solver from the =sc^Inv^sc= track of <a href='https://sygus.org/comp/2018/'>SyGuS-Comp&apos;18</a>
    is $ 5\times $ faster and solves $2$ more benchmarks
  </li>
</ul>
</section>



<section>
### =sc^PLearn^sc=

<div style='font-size:0.95em'>
A technique inspired by <span class='color-faded color-medium-accent'>ensemble methods</span><a class='superscript subheading' style='font-size:0.6em'
                                                                                                 href='https://doi.org/10.1007/3-540-45014-9_1'>&hairsp;[Dietterich, MCS'00]</a>
--- run several learners and aggregate their results
</div>

<div class='fragment color-medium-accent focus-box' data-fragment-index='1' style='font-size:0.78em; margin:1em auto; width:90%'>
  Given a SyGuS problem $ \langle \phi, \mathcal{E} \rangle $ and grammars $ \mathcal{E}_1, \ldots, \mathcal{E}_n $ s.t. $ \mathcal{E}_i \subseteq \mathcal{E} $,
  create problems $ \langle \phi, \mathcal{E}_i \rangle $ and solve each in parallel.
</div>

<div class='fragment' data-fragment-index='2' style='font-size:0.9em; line-height:1.6'>
- A thin wrapper that generates subproblems
- Agnostic to the underlying SyGuS learner
</div>

<div class='fragment color-highlight focus-box' data-fragment-index='3' style='font-size:0.78em; margin:1em auto; width:90%'>
  <span class='subheading'>=sc^PLearn^sc= Reduces Overfitting</span>: &nbsp;
  Every subproblem has a lower potential for overfitting than the original problem.
  <br> (on <em>any</em> set of examples for the specification)
</div>
</section>



<section>
### =sc^PLearn^sc=: Evaluation

{% include_relative plearn-eval.svg %}

(Timeout = $ 30 $ mins per benchmark per tool per grammar)
{: style='text-align:center; font-size:0.4em; margin-top:0.125em' }

<table class='subheading' style='font-size:0.5em; margin-top:1.5em; width:75%'>
  <tr>
    <td>$ \mathcal{E}_1 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Equalities.g'>Equalities</a></td>
    <td>$ \mathcal{E}_2 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Intervals.g'>Inequalities</a></td>
    <td>$ \mathcal{E}_3 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Octagons.g'>Octagons</a></td>
  </tr>
  <tr>
    <td>$ \mathcal{E}_4 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Polyhedra.g'>Polyhedra</a></td>
    <td>$ \mathcal{E}_5 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Polynomials.g'>Polynomials</a></td>
    <td>$ \mathcal{E}_6 $ = <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Peano.g'>Peano</a></td>
  </tr>
</table>
</section>



<section>
### Limitations of =sc^PLearn^sc=

- Extremely <span class='color-faded color-accent'>resource intensive</span> ---
  <br> runs multiple SyGuS instances in parallel

- Many <span class='color-faded color-accent'>redundant computations</span> ---
  <br> functions common to different grammars are enumerated multiple times
{: style='font-size:0.9em'}

<div class='fragment color-medium-accent focus-box' data-fragment-index='3'
     style='margin:1em auto; padding: 0.125em 0.5em 0.25em 0.5em; text-align:justify; width:86%'>
  Can we:

  - **reuse expressions** across different grammars
  - enumerate each expression **at most once**

  in a <b>single-threaded</b> algorithm?
</div>
</section>



<section>
### A 2-Dimensional Search

{% include_relative well-ordering.svg %}

<div class='fragment color-highlight focus-box' data-fragment-index='3'
     style='font-size:0.85em; margin:0.75em auto; width:90%'>
  A relation $ \lhd $ on $ \mathcal{E}_{1,\ldots,n} \times \mathbb{N} $
  is said to be a <b>well order</b> <br> if
  <span style='font-size:0.9em'>
    $ \forall \mathcal{E}_1, \mathcal{E}_2, k_1, k_2 : [\mathcal{E}_1 \subseteq \mathcal{E}_2 \ \wedge \ k_1 < k_2] \Rightarrow (\mathcal{E}_1,k_1) \lhd (\mathcal{E}_2,k_2) $.
  </span>
</div>
</section>



<section>
### Hybrid Enumeration (=sc^HE^sc=)

<div style='font-size:0.9em'>
An efficient implementation of this 2-D search for <span class='color-faded color-medium-accent'>component-based</span> grammars&thinsp;[[Jha et al, ICSE&apos;10]](https://doi.org/10.1145/1806799.1806833){: .subheading .superscript style='font-size:0.65em' }
<br>
<div style='font-size:0.85em; margin-top:0.5em'>
Arguments to =sc^HE^sc=:
- A SyGuS Problem: a specification $ \phi $, a grammar $ \mathcal{E} $
- Component-based grammars: $ \mathcal{E}_1 \subset \cdots \subset \mathcal{E}_n \subseteq \mathcal{E} $
- A well-ordering relation: $ \lhd $
- A size bound: $ q $
{: style='margin-top:-0.5em' }
</div>
</div>

<div class='fragment color-highlight focus-box' data-fragment-index='1' style='margin:0.5em auto; width:87.5%; font-size:0.9em'>
  <span class='subheading'>Completeness</span>: &nbsp;
  =sc^HE^sc= can enumerate every expression in $ \mathcal{E}_n $ up to any size bound $ q $.
</div>

<div class='fragment color-highlight focus-box' data-fragment-index='2' style='margin:0.5em auto; width:87.5%; font-size:0.9em'>
  <span class='subheading'>Efficiency</span>: &nbsp;
  =sc^HE^sc= enumerates each syntactically <br> distinct expression in $ \mathcal{E}_n $ at most once.
</div>
</section>



<section>
### =sc^HE^sc=: Performance

<div class='columns'>
<div style='width:67.5%'>
{% include_relative henum-eval.svg %}
</div>
<div class='fragment' data-fragment-index='1' style='font-size:0.3925em; padding-top:0.2em'>
<table>
  <tr>
    <th class='heading'>
      Grammar
    </th>
    <th class='heading'>
      $ {\small \textbf{median}}\Big[\frac{\tau(\textbf{P})}{\tau(\textbf{H})}\Big] $
    </th>
    <th class='heading'>
      $ {\small \textbf{median}}\Big[\frac{\tau(\textbf{H})}{\tau(\textbf{L})}\Big] $
    </th>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Equalities.g'>Equalities</a>
    </th>
    <td> $ 1.00 $ </td>
    <td> $ 1.00 $ </td>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Intervals.g'>Inequalities</a>
    </th>
    <td> $ 1.91 $ </td>
    <td> $ 1.04 $ </td>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Octagons.g'>Octagons</a>
    </th>
    <td> $ 2.84 $ </td>
    <td> $ 1.03 $ </td>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Polyhedra.g'>Polyhedra</a>
    </th>
    <td> $ 3.72 $ </td>
    <td> $ 1.01 $ </td>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Polynomials.g'>Polynomials</a>
    </th>
    <td> $ 4.62 $ </td>
    <td> $ 1.00 $ </td>
  </tr>
  <tr>
    <th style='text-align:right'>
      <a href='https://github.com/SaswatPadhi/2019_CAV_Artifact_100/blob/master/grammars/Peano.g'>Peano</a>
    </th>
    <td> $ 5.49 $ </td>
    <td> $ 0.97 $ </td>
  </tr>
</table>
</div>
</div>

(On all $ 180 $ benchmarks with $ 30 $ mins timeout per benchmark per tool per grammar)
{: .fragment data-fragment-index='1' style='text-align:center; font-size:0.4em; margin-top:0.25em' }

<div style='font-size:0.775em; margin-top:2em'>
- Significantly more <span class='color-faded color-medium-accent'>resilient against increasing expressiveness</span>

<div class='fragment' data-fragment-index='1' style='margin-top:1.25em'>
- <span class='color-faded color-medium-accent'>Negligible impact on total time</span> $ \tau = $ wall-clock time $ \times $ # threads
</div>

<div class='fragment' data-fragment-index='2' style='margin-top:1.25em'>
- When combined with HE, the winning solver from the =sc^Inv^sc= track of <a href='https://sygus.org/comp/2018/'>SyGuS-Comp&apos;18</a>
  is $ 5\times $ faster and solves $2$ more benchmarks
</div>
</div>
</section>



<section>
### Related Work

<div class='fragment' style='font-size:0.85em; line-height:1.6'>
&#x25BA; Bias-variance tradeoffs in program analysis&thinsp;[[Sharma et al, POPL&apos;14]](http://doi.acm.org/10.1145/2535838.2535853){: .subheading .superscript style='font-size:0.65em' }
  - Observe overfitting empirically
    - We formally define it
  - Propose cross validation for hyperparameter tuning
    - We incrementally increase expressiveness
</div>

<div class='fragment' style='font-size:0.85em; margin-top:1.75em; line-height:1.6'>
&#x25BA; A theory of formal synthesis&thinsp;[[Jha and Seshia, Acta Informatica&apos;17]](https://doi.org/10.1007/s00236-017-0294-5){: .subheading .superscript style='font-size:0.65em' }
  - Synthesis with different kinds of counterexamples
  - And under various resource (memory) constraints
    - But do not consider variations in grammar
</div>
</section>



<section>
### Conclusion

<ul style='font-size:0.825em; text-align:justify; margin-left:0.5em'>
  <li>
    No free lunch in SyGuS &mdash; a fundamental tradeoff between expressiveness vs counterexamples required for learning
  </li>
  <li class='fragment' style='margin-top:0.3125em'>
    This is due to overfitting &mdash; the potential for overfitting increases with expressiveness
  </li>
  <li class='fragment' style='margin-top:0.3125em'>
    =sc^PLearn^sc= is a black-box technique to combat overfitting by exploring multiple grammars in parallel
  </li>
  <li class='fragment' style='margin-top:0.3125em; margin-bottom:0.25em'>
    Hybrid enumeration (=sc^HE^sc=) emulates the behavior of =sc^PLearn^sc=,
    but with negligible performance overhead
  </li>
</ul>

<div class='fragment'>
<hr>

#### Links:

<div style='font-size:0.75em; line-height:1.5; margin-top:-0.325em'>
- [Artifact](https://zenodo.org/record/2653957) (all benchmarks and scripts)
- [LoopInvGen] (our up-to-date codebase)
- [Our Full Paper]({{ site.base_root_url }}/publications/cav2019_overfitting) (with complete proofs)
</div>
</div>
</section>