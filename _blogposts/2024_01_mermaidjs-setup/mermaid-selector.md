```mermaid {% raw %}
graph LR

classDef ghost fill:#E5FFAA,stroke:#A6F100
classDef tag fill:#FFE9EA,stroke:#FF787E

root(root):::ghost

subgraph pre
  direction TB

  A{{pre}}:::tag
  B(.no-highlight)

  A --- B
end

subgraph code
  direction TB

  C{{code}}:::tag
  D(.language-mermaid)
  E(:not)

  C --- D --- E
end

subgraph details
  direction TB

  F{{details}}:::tag
  G(:not)
  H("[open]")

  F --- G --o H
end
style details fill:#ECECEC,stroke:#787878,stroke-dasharray:4 4

root -..-> details -..-> pre -..-> code
E ---o details
{% endraw %} ```
{: .no-highlight }
