<figure markdown='1'>
  ```mermaid {% raw %}
  graph TB

  classDef actual fill:#FFE9EA,stroke:#FF787E
  classDef program fill:#E5FFAA,stroke:#A6F100

  VSo o-.-o Vo
  Vi o-.-o VSi
  linkStyle 1 stroke:magenta

  subgraph "`**AppVM Audio Setup**`"
      direction LR

      subgraph "`**Application**`"
          Ai(Input):::actual
          Ao(Output):::actual
      end

      VP{{AppVM <br> PulseAudio}}:::program

      subgraph "`**Virtual HW**`"
          VSo(Virtual <br> Source)
          VSi(Virtual <br> Sink)
      end

      VSo --> VP --> Ao
      Ai --> VP --> VSi
      linkStyle 4,5 stroke:magenta
  end

  subgraph "`**$\DomZ$ Audio Setup**`"
      direction LR

      subgraph "`**Virtual IO**`"
          Vi(Virtual <br> Input)
          Vo(Virtual <br> Output)
      end

      DP{{$\DomZ$ <br> PulseAudio}}:::program

      subgraph "`**Hardware**`"
          HSo(Source):::actual
          HSi(Sink):::actual
      end

      HSo --> DP --> Vo
      Vi --> DP --> HSi
      linkStyle 8,9 stroke:magenta
  end
  {% endraw %}```
  {: .no-highlight }
  <figcaption>
    PulseAudio-based audio virtualization setup in QubesOS.
  </figcaption>
</figure>
