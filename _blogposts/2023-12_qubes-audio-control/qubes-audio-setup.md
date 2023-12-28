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

      subgraph "`**Virtual HW**`"
          VSo(Virtual \n Source)
          VSi(Virtual \n Sink)
      end

      VP{{AppVM \n PulseAudio}}:::program

      subgraph "`**Application**`"
          Ai(Input):::actual
          Ao(Output):::actual
      end

      VSo --> VP --> Ao
      Ai --> VP --> VSi
      linkStyle 4,5 stroke:magenta
  end

  subgraph "`**$\DomZ$ Audio Setup**`"
      direction LR

      subgraph "`**Hardware**`"
          HSo(Source):::actual
          HSi(Sink):::actual
      end

      DP{{$\DomZ$ \n PulseAudio}}:::program

      subgraph "`**Virtual IO**`"
          Vi(Virtual \n Input)
          Vo(Virtual \n Output)
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
