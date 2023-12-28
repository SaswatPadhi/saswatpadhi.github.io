```mermaid {% raw %}
graph TB

classDef phantom fill:none,stroke:none
classDef actual fill:#FFE9EA,stroke:#FF787E
classDef program fill:#E5FFAA,stroke:#A6F100

subgraph "`**Application**`"
    I(fa:fa-circle-play \n Input):::actual
    O(fa:fa-wave-square \n Output):::actual
end

subgraph "`**Hardware**`"
    So(fa:fa-microphone \n Source):::actual
    Si(fa:fa-headphones \n Sink):::actual
end

P{{PulseAudio}}:::program

So --> P --> O
linkStyle 0,1 stroke:blue
I --> P --> Si
linkStyle 2,3 stroke:magenta
{% endraw %} ```
{: .no-highlight }
