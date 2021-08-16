---
icon: code

post_date: 2019-09-15

title: 'Variadic Macros in LaTeX'
tagline: 'Crafting LaTeX macros that accept any number of arguments'

categories: [ 'latex', 'productivity' ]
---

Recently, while drafting a paper I found myself wishing for arbitrary-arity macros in LaTeX.

As concrete examples, consider two macros `\List` and `\Tuple`,
that should render lists and tuples of arbitrary lengths, respectively.
For example:

- `\List{1}{2}` should generate $[ 1; 2 ]$,
- `\Tuple{1}{2}{3}{4}` should generate $\langle 1, 2, 3, 4 \rangle$,
- `\List{1}{\ldots}{n}` should generate $[ 1; \ldots; n ]$, and
- `\Tuple{x_1}{\ldots}{x_n}` should generate $\langle x_1, \ldots, x_n \rangle$

These macros should "just work", like any other LaTeX macro,
without the user having to remember anything in particular about them.

<details markdown='1'>
<summary>Yes, I did try the obvious approaches ...</summary>
Of course, I could always write `[1,2,3,4]` and `\langle 1,2 \rangle`
to generate the lists and tuples directly,
but that takes away the key power of using LaTeX macros ---
the ability to easily reformat _all_ my lists.
For example, if I wanted to generate comma-separated lists instead,
like $[1,2,3,4]$, I would have had to manually replace every semicolon with a comma,
as opposed to simply tweaking my `\List` macro.

One idea, inspired by the [`cons` construct][cons] from [functional programming],
is to define a simple `\Cons` macro:

```latex {% raw %}
\newcommand{\Cons}[2]{#1;#2}
{% endraw %} ```

and use it as `[\Cons{1}{\Cons{2}{\Cons{3}{4}}}]`.[^cons]
Now I can simply tweak my `\Cons` macro to change the formatting of my lists globally.
However, even besides the fact that I still can't modify the brackets around the lists,
the syntax is just too verbose.
There had to be a better way to typeset this ...
</details>

To be more specific, I was looking for a solution with these properties:
(in that order of importance)[^braces]

1. _No special syntax_:
   The macro should look and behave just like regular LaTeX macros.
   For example, it shouldn't parse a long string that uses another delimiter to separate the real arguments, like in case of `\List{1|2|3|4}`.
1. _No special packages_:
   Ideally one should be able to create and use these macros easily without having to install any third-party packages.
1. _No special context_:
   The macros should not require special environments, nor should it make fragile assumptions such as no nesting etc.
   For example, `\List {\List{1}{2}} {\List{1}} {\List{1}{2}{3}}` should simply work as expected --- render a list of lists: $[[1;2];[1];[1;2;3]]$.
{: .custom style="--prefix:'P'" }



#### =fa^search^fa= Research

<details markdown='1'>
<summary>Some background and existing techniques</summary>
I was aware of [variadic functions][variadic function]
--- a feature that is supported by most modern programming languages.
So, I started to look for LaTeX's equivalent of those.
Well, to be precise, what I was actually looking for was a variadic _[macro]_.
In addition to variadic functions,
the C-family of languages also [support variadic macros][gcc-variadic-macros]
via two special macros: `__VA_ARGS__` and `__VA_OPT__`.
However, after a fair amount of Googling and StackOverflowing,
I was convinced that LaTeX didn't have any built-in support for variadic macros.

But, I stumbled upon [this question on TeX.StackExchange](https://tex.stackexchange.com/q/118114/187728)
that discusses this exact problem, and some of the solutions were quite enlightening.
The solutions were very close to what I was looking for,
but there were two main aspects of these solutions that left me wishing for something better:

- _Violated **P1**_:
  They had to be invoked via the `\usedecl` macro, e.g. `\usedecl{List}{1}{2}{3}`.
- _Violated **P2**_:
  They used third-party packages, such `etoolbox` or `xparse`.
</details>

After some more searching, I came across [this blog post][variadic-macro-blog-post],
which took the essence of these answers and outlined a very neat solution.
With some minor modifications, I had my first working version of a variadic `\List` macro!
&#x1F389;

```latex {% raw %}
\newcommand{\GobbleListArg}[1]{;#1\CheckListArg}
\newcommand{\CheckListArg}{\csname @ifnextchar\endcsname\bgroup{\GobbleListArg}{]}}
\newcommand{\List}[1]{[#1\CheckListArg}
{% endraw %} ```

<details markdown='1'>
<summary>How does this work?</summary>
Here is how this macro works:

1. The `\List` macro just outputs `[` and the first argument `#1`,
   and then invokes the `\CheckListArg` macro.
1. `\CheckNextListArg` checks the next character in the input stream
   using [the `\@ifnextchar` kernel macro](https://tex.stackexchange.com/a/57790/187728).
   If it finds `\bgroup` i.e. beginning of a LaTeX group,
   then it invokes `\GobbleListArg`, otherwise it outputs `]` and halts.
1. Finally, `\GobbleListArg` prints `;` and the next argument (its first argument),
   and then recurses by calling `\CheckListArg`.
{: .custom style="--prefix:'S'" }

There are two key implementation details here:
- The `@ifnextchar` macro must be wrapped within `\csname` and `\endcsname`
  because it contains the `@` character.
  LaTeX macros names can only contain characters from the "letter" category,
  and `@` is a character from the "other" category.
  One can also use `\makeatletter` and `\makeatother`, but I prefer this approach.
- One cannot simply use an opening brace `{` after `\@ifnextchar`,
  although arguments to macros are grouped within opening and closing braces.
  It is a syntax error to not have a corresponding closing brace.
  An escaped brace `\{` cannot be used either,
  because it's not a category-1 (begin-group) token.
  The `\bgroup` macro expands to a category-1 (begin-group) token.
  Its counterpart `\egroup` expands to a category-2 (end-group) token.

You can read [this TeX.StackExchange thread](https://tex.stackexchange.com/q/16410/187728)
to learn more about category codes in LaTeX.
</details>

Great, so now I had a very simple and elegant approach for crafting variadic macros,
and I soon found myself using a whole bunch of them, such as `\List`, `\Tuple`, etc.
But for every new variadic macro, I had to create these two intermediate Check and Gobble macros too.

Since these macros have very similar structure,
I began to wonder if I could write _a macro that defines a variadic macro_ &#x1F92F
(i.e., along with its required intermediate macros).
With such a generator macro, say `\VARIADIC`,
I could simply write `\VARIADIC{List}...` to create a new variadic macro named `\List`.



#### =fa^check-square^fa= Solution

The variadic `\List` macro has three key components ---
a _start_ symbol `[`, a _mid_ symbol `;`, and a _stop_ symbol `]`.
My first attempt was to simply parameterize the macro name and these three symbols:

```latex {% raw %}
% USAGE :: \VARIADIC {name} {start_sym} {mid_sym} {stop_sym}
\newcommand{\VARIADIC}[4]{%
  \expandafter\newcommand\csname Gobble#1Arg\endcsname[1]{%
    #3##1\csname Check#1Arg\endcsname%
  }%
  \expandafter\newcommand\csname Check#1Arg\endcsname{%
    \csname @ifnextchar\endcsname\bgroup{\csname Gobble#1Arg\endcsname}{#4}%
  }%
  \expandafter\newcommand\csname #1\endcsname[1]{%
    #2##1\csname Check#1Arg\endcsname%
  }%
}
{% endraw %} ```
{: .line-numbers }

Now I could easily generate several variadic macros:

```latex {% raw %}
\VARIADIC {List} {[} {;} {]}                   % generates the same \List as above
\VARIADIC {Tuple} {\langle} {,} {\rangle}      % generates a variadic \Tuple macro
{% endraw %} ```

<details markdown='1'>
<summary>What is this sorcery though?</summary>
In addition to the main ideas behind the intermediate macros for `\List`,
there are two other key ideas here:

- The `\expandafter` macro has been used to delay the expansion of `\newcommand` until its argument,
  in this case the name of the new macro, has been expanded.
  This is necessary since the macro names are constructed dynamically,
  e.g. `Check#1Arg` expands to `CheckListArg` for `\VARIADIC{List}...`.
- The `#` character has been escaped for arguments to the generated macros,
  e.g. while `#1` expands to the first argument to `\VARIADIC` itself,
  `###1` expands to `#1` which becomes the first argument to the generated macro.

Also see [this TeX.StakExchange thread](https://tex.stackexchange.com/a/519/187728)
to learn more about `\expandafter`.
</details>

Awesome! But, there was still something missing ...
The `\VARIADIC` macros were not easily _composable_ with other macros.
For example, I wanted my `\List` and `\Tuple` macros to automatically use math mode
by wrapping them inside `\ensuremath`.
The following straightforward hack does not work:

```latex {% raw %}
\VARIADIC {Tuple} {\ensuremath\bgroup\langle} {,} {\rangle\egroup}
{% endraw %} ```

<details markdown='1'>
<summary>Obvious approaches, failure, help from TeX gurus ...</summary>
Of course I could hardcode `\ensuremath` this within `\VARIADIC` itself,
but I didn't want it to be applied to _every_ variadic macro.
Plus, I wanted a more general solution that would allow me to apply an arbitrary
macro (or environment).
The main issue was delaying the application of the macro until the entire
variadic part had been expanded.
After a fair bit of hacking, I gave up and turned to the TeX gurus ---
I opened [this question on TeX.StackExchange][variadic-macro-question].

<kbd>@siracusa</kbd> came up with a brilliant solution ---
accept the macro name as a parameter,
accumulate the variadic expansion result in an additional parameter
to each intermediate macro,
and then finally apply the provided macro in front of the fully expanded result.

To take this a step further and be able to apply environment around the variadic macros,
I modified this solution and added another parameter that is a macro name
which is applied right after the fully expanded result.
This is useful for "closing" operations, such as `\end`-ing an environment.
</details>

&#x2728; The final variadic-macro generator that applies two arbitrary macros
before and after the variadic expansion is: &#x2728;

```latex {% raw %}
% View a sample document: https://www.overleaf.com/read/bwkjcwcktsqd
%
% USAGE :: \VARIADIC {name} {before} {start} {mid} {stop} {after}
\newcommand{\VARIADIC}[6]{%
  \expandafter\newcommand\csname Gobble#1Arg\endcsname[2]{%
    \csname Check#1Arg\endcsname{##1#4##2}%
  }%
  \expandafter\newcommand\csname Check#1Arg\endcsname[1]{%
    \csname @ifnextchar\endcsname\bgroup{\csname Gobble#1Arg\endcsname{##1}}{#2{##1#5}#6}%
  }%
  \expandafter\newcommand\csname #1\endcsname[1]{%
    \csname Check#1Arg\endcsname{#3##1}%
  }%
}
{% endraw %} ```
{: .line-numbers }

Now I could define things like:

```latex {% raw %}
\VARIADIC {List} {} {[} {;} {]} {}                             % a vanilla variadic macro
\VARIADIC {Tuple} {\ensuremath} {\langle} {,} {\rangle} {}     % wrapped inside \ensuremath
\VARIADIC {HugeList} {\begin{Huge}} {[} {;} {]} {\end{Huge}}   % wrapped inside Huge environment

% One can even apply an environment and a macro
\VARIADIC {TinyTuple} {\begin{tiny}\ensuremath} {\langle} {,} {\rangle} {\end{tiny}}
{% endraw %} ```



#### =fa^star^fa= Bonus Solution

At this point, it's straightforward to create a [_fold_ version][fold] of the `\VARIADIC` macro
that takes an arbitrary binary macro,
and "reduces" the given arguments by repeating applying this macro.

```latex {% raw %}
% View a sample document: https://www.overleaf.com/read/bwkjcwcktsqd
%
% USAGE :: \FOLDVARIADIC {name} {before} {binary_macro} {after}
\newcommand{\FOLDVARIADIC}[4]{%
  \expandafter\newcommand\csname FoldGobble#1Arg\endcsname[2]{%
    \csname FoldCheck#1Arg\endcsname{#3{##1}{##2}}%
  }%
  \expandafter\newcommand\csname FoldCheck#1Arg\endcsname[1]{%
    \csname @ifnextchar\endcsname\bgroup{\csname FoldGobble#1Arg\endcsname{##1}}{#2{##1}#4}%
  }%
  \expandafter\newcommand\csname Fold#1\endcsname[2]{%
    \csname FoldCheck#1Arg\endcsname{#3{##1}{##2}}%
  }%
}
{% endraw %} ```
{: .line-numbers }



#### =fa^question-circle^fa= FAQs

1. **Any [gotchas]? ...**
   <br>
   The only ones I know of are standard LaTeX gotchas.
   LaTeX ignores spaces or newlines between argument groups,
   e.g. `\textcolor{red}{red text}` is equivalent to `\textcolor {red}  {red text}`.
   This might lead to `\VARIADIC` macros consuming more arguments than you intended,
   e.g. `\List{1}{2}   {\bf X}` would render $[1;2;{\bf X}]$.
1. **Can I use multiple macros in the `before` argument?**
   <br>
   Not directly, but you could create a intermediate unary macro
   that applies your macros to the its input, and use this intermediate macro as the `before` argument.
1. **Does it work with [MathJax](https://www.mathjax.org)?**
   <br>
   Unfortunately no, at least I wasn't able to get it working.
   I found that MathJax doesn't understand the `\expandafter` macro.
   If you know a way to make this work on MathJax, please let me know.
{: .custom .heading-list-items style="--prefix:'Q'" }


Go ahead and try some examples on [Overleaf](https://www.overleaf.com/read/bwkjcwcktsqd).
Cheers! &#x1F642;

[^braces]: _Disclaimer_: I am prioritizing convenience of using the macro
           over its robustness here.
           Although the approaches I discuss in this post are fairly robust,
           they involve low-level handling of braces.
           If you notice something that doesn't work with `\VARIADIC` macros,
           please let me know!

[^cons]:   This isn't exactly the type-correct `cons` operator,
           but let's not be pedantic and make things harder than necessary.

[cons]:                     https://en.wikipedia.org/wiki/Cons
[fold]:                     https://en.wikipedia.org/wiki/Fold_(higher-order_function)
[functional programming]:   https://en.wikipedia.org/wiki/Functional_programming
[gcc-variadic-macros]:      https://gcc.gnu.org/onlinedocs/cpp/Variadic-Macros.html
[gotchas]:                  https://en.wikipedia.org/wiki/Gotcha_(programming)
[macro]:                    https://en.wikipedia.org/wiki/Macro_(computer_science)
[variadic function]:        https://en.wikipedia.org/wiki/Variadic_function
[variadic-macro-blog-post]: https://davidyat.es/2016/07/27/writing-a-latex-macro-that-takes-a-variable-number-of-arguments/
[variadic-macro-question]:  https://tex.stackexchange.com/q/507434/187728