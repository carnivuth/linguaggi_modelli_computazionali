# INTERPRETI

Riconoscere se una frase appartiene o meno a un linguaggio non e sufficiente, e necessario applicare anche una semantica alle frasi riconoscute

```mermaid
flowchart LR
subgraph interprete
D[RICONOSCITORE]
E[TRUE]
F[FALSE]
G[DO SOMETHING]
START2:::hidden --> D --> E & F
E --> G
classDef hidden display: none;
end
subgraph riconoscitore
A[RICONOSCITORE]
B[TRUE]
C[FALSE]
START1:::hidden --> A --> B & C
classDef hidden display: none;
end
riconoscitore ~~~ interprete 
```

Gli interpreti suggeriscono quindi di usare la struttura generata da uno scanner/lexer per poi applicare un significato alle frasi, in questo caso la sequenza di derivazione delle frasi e fondamentale in quanto da essa dipende la semantica applicata (*[ricordiamo il caso della ricorsione sinistra](GRAMMATICHE_TIPO_2.md#PERCHÉ%20NON%20ELIMINARE%20SEMPRE%20LA%20RICORSIONE%20SINISTRA)*)
