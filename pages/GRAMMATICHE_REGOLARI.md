---
id: GRAMMATICHE REGOLARI
aliases: []
tags: []
index: 7
---
# GRAMMATICHE REGOLARI (TIPO 3)

grammatiche le cui  produzioni ammettono un solo simbolo non terminale nel membro di destra.

| LINEARI A DESTRA             | LINEARI A SINISTRA          |
| ---------------------------- | --------------------------- |
| $$A \rightarrow \sigma  $$   | $$A \rightarrow \sigma  $$  |
| $$A \rightarrow \sigma B  $$ | $$A \rightarrow B\sigma  $$ |

 I linguaggi generati dalle grammatiche regolari coincidono con quelli descritti da [ESPRESSIONI_REGOLARI](ESPRESSIONI_REGOLARI.md)

```mermaid
flowchart LR
A[GRAMMATICHE REGOLARI]
B[ESPRESSIONI REGOLARI]
A --> B
B --> A
```
a ogni grammatica regolare corrisponde un automa in grado di riconoscerla

[PREVIOUS](pages/GRAMMATICHE_TIPO_2.md) [NEXT](pages/ESPRESSIONI_REGOLARI.md)
