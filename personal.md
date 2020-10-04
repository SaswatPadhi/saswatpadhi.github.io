---
layout: page
css: personal

icon: user-circle
title: Personal
---

#### <i class='fas fa-fw fa-volume-up'></i>&nbsp; Pronouncing My Name

<div class='pure-g' style='text-align: center; font-size: 1.25em;'>
    <div class='pure-u-md-7-24 pure-u-1-2' style='margin-top: -1em;'>
        <p>
            <a class='color-faded color-medium-accent syl1'>SHAH</a>-<a class='color-faded color-medium-accent syl2'>shw&#x0259;</a>-<a class='color-faded color-medium-accent syl3'>t</a>
            <a class='color-faded color-medium-accent syl4'>pa</a>-<a class='color-faded color-medium-accent syl5'>DEE</a>
        </p>
        <p style='margin-top: -1em;'>
            <em style='font-size: 0.75em;'>
                (&hairsp;Approximate <a href='https://en.wikipedia.org/wiki/Pronunciation_respelling_for_English'>Respelling</a>&hairsp;)
            </em>
        </p>
    </div>
    <div class='pure-u-md-5-24 pure-u-1-2' style='font-size: 1.25em; margin-top: -1.125em;'>
        <p>
            <a class='color-faded color-medium-accent syl1'>&#x0936;&#x093E;</a><!--
          --><a class='color-faded color-medium-accent syl2'>&#x0936;&#x094D;&#x0935;</a><!--
          --><a class='color-faded color-medium-accent syl3'>&#x0924;</a>
            <a class='color-faded color-medium-accent syl4'>&#x092A;&#x093E;</a><!--
          --><a class='color-faded color-medium-accent syl5'>&#x0922;&#x093C;&#x0940;</a>
        </p>
        <p style='margin-top: -1.33333333em;'>
            <em style='font-size: 0.6em;'>
                (&hairsp;<a href='https://en.wikipedia.org/wiki/Devanagari'>Devanagari</a> Script&hairsp;)
            </em>
        </p>
    </div>
    <div class='pure-u-md-5-24 pure-u-1-2' style='font-size: 1.125em; margin-top: -1.125em;'>
        <p>
            <a class='color-faded color-medium-accent syl1'>&#x0B36;&#x0B3E;</a><!--
          --><a class='color-faded color-medium-accent syl2'>&#x0B36;&#x0B4D;&#x0B71;</a><!--
          --><a class='color-faded color-medium-accent syl3'>&#x0B24;</a>
            <a class='color-faded color-medium-accent syl4'>&#x0B2A;&#x0B3E;</a><!--
          --><a class='color-faded color-medium-accent syl5'>&#x0B22;&#x0B3C;&#x0B40;</a>
        </p>
        <p style='margin-top: -1.125em;'>
            <em style='font-size: 0.66666666em;'>
                (&hairsp;<a href='https://en.wikipedia.org/wiki/Odia_alphabet'>Odia</a> Script&hairsp;)
            </em>
        </p>
    </div>
    <div class='pure-u-md-7-24 pure-u-1-2' style='font-size: 1.125em; margin-top: -1.125em;'>
        <p>
            [<a class='color-faded color-medium-accent syl1'>'&#x0283;&#x251;<b>&#x2D0;</b></a><!--
          --><a class='color-faded color-medium-accent syl2'>&#x0283;w&#x028C;</a><!--
          --><a class='color-faded color-medium-accent syl3'>t&#x032A;</a>
            <a class='color-faded color-medium-accent syl4'>p&#x251;<b>&#x2D0;</b></a><!--
          --><a class='color-faded color-medium-accent syl5'>'&#x0256;&#x02B1;i<b>&#x2D0;</b></a>]
        </p>
        <p style='margin-top: -1.125em;'>
            <em style='font-size: 0.66666666em;'>
                (&hairsp;<a href='https://en.wikipedia.org/wiki/International_Phonetic_Alphabet'>IPA</a> Notation&hairsp;)
            </em>
        </p>
    </div>
</div>
<div style='text-align: center; font-size: 1.125em; margin: -0.5em 0 0.5em 0;'>
Listen to <a onclick='play_steps();'>individual syllables</a>,
or my <a onclick='play_name();'>full name</a>.
</div>



#### <i class='fas fa-fw fa-list-ol'></i>&nbsp; [Erd&#337;s Number][ErdosNumber] (&thinsp;<span class='color-faded color-accent'>4</span>&thinsp;)

(Source = [MathSciNet])&thinsp;**:**
&nbsp;
[Paul Erd&#337;s](https://en.wikipedia.org/wiki/Paul_Erd%C5%91s)
    <i class='fas fa-fw fa-long-arrow-alt-right'></i>
[Peter Montgomery](https://en.wikipedia.org/wiki/Peter_Montgomery_(mathematician))
    <i class='fas fa-fw fa-long-arrow-alt-right'></i>
[Ramarathnam Venkatesan](https://www.microsoft.com/en-us/research/people/venkie/)
    <i class='fas fa-fw fa-long-arrow-alt-right'></i>
[Sumit Gulwani](https://www.microsoft.com/en-us/research/people/sumitg/)
    <i class='fas fa-fw fa-long-arrow-alt-right'></i>
Me



#### <i class='fas fa-fw fa-laptop-code'></i>&nbsp; Open Source Support


<script>
    var audio_dict = {
        'syl1': new Audio('{{ site.baseurl }}/assets/mp3/Sa.mp3'),
        'syl2': new Audio('{{ site.baseurl }}/assets/mp3/Swa.mp3'),
        'syl3': new Audio('{{ site.baseurl }}/assets/mp3/T.mp3'),
        'syl4': new Audio('{{ site.baseurl }}/assets/mp3/Pa.mp3'),
        'syl5': new Audio('{{ site.baseurl }}/assets/mp3/Dhi.mp3'),
        'syl123': new Audio('{{ site.baseurl }}/assets/mp3/Saswat.mp3'),
        'syl45': new Audio('{{ site.baseurl }}/assets/mp3/Padhi.mp3')
    };

    function activate(syl) {
        Array.prototype.forEach.call(document.getElementsByClassName(syl),
                                     e => e.classList.add('hovering'));
    }

    function deactivate(syl) {
        Array.prototype.forEach.call(document.getElementsByClassName(syl),
                                     e => e.classList.remove('hovering'));
    }

    function play(syl, callback, highlight) {
        if (!highlight) highlight = [syl];
        highlight.forEach(activate);
        audio_dict[syl].currentTime = 0;
        audio_dict[syl].onended = () => { highlight.forEach(deactivate); if (callback) callback(); }
        audio_dict[syl].play();
    }

    ['syl1','syl2','syl3','syl4','syl5'].forEach(function (syl) {
        Array.prototype.forEach.call(document.getElementsByClassName(syl), function (e) {
            e.onmouseenter = () => activate(syl);
            e.onmouseleave = () => deactivate(syl);
            e.onclick = () => play(syl);
        });
    });

    function play_steps() {
        play('syl1',
             () => play('syl2',
                        () => play('syl3',
                                   () => setTimeout(play, 300,
                                                    'syl4', () => play('syl5')))));
    }

    function play_name() {
        play('syl123', () => setTimeout(() => play('syl45', null, ['syl4','syl5']), 150),
             ['syl1','syl2','syl3']);
    }
</script>

[ErdosNumber]: https://en.wikipedia.org/wiki/Erd%C5%91s_number
[MathSciNet]:  https://mathscinet.ams.org/mathscinet/collaborationDistance.html?AuthorSourceName=Gulwani,%20Sumit&AuthorTargetName=Erdos,%20Paul&group_target=189017