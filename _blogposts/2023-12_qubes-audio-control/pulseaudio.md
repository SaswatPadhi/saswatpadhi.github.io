```mermaid {% raw %}
graph TB

classDef phantom fill:none,stroke:none
classDef actual fill:#FFE9EA,stroke:#FF787E
classDef program fill:#E5FFAA,stroke:#A6F100

subgraph "`**Application**`"
    I(fa:fa-circle-play <br> Input):::actual
    O(fa:fa-wave-square <br> Output):::actual
end

subgraph "`**Hardware**`"
    So(fa:fa-microphone <br> Source):::actual
    Si(fa:fa-headphones <br> Sink):::actual
end

P{{PulseAudio}}:::program

So --> P --> O
linkStyle 0,1 stroke:blue
I --> P --> Si
linkStyle 2,3 stroke:magenta
{% endraw %} ```
{: .no-highlight }
