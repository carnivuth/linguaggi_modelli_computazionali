---
id: PUMPING_LEMMA
aliases: []
tags: []
index: 9
---
# PUMPING LEMMA

è una condizione necessaria (*ma non sufficiente*) per dimostrare che un linguaggio è di [tipo 2](GRAMMATICHE_TIPO_2.md) o di [tipo 3](GRAMMATICHE_REGOLARI.md), si basa sul concetto che in un linguaggio infinito a un certo punto **deve essere presente una stringa motore che viene ripetuta $n$ volte** (*pompata*) per ottenere nuove stringhe del linguaggio

Se $L$ e un linguaggio di tipo 2 esiste un intero $N$ tale che per ogni stringa $z: len(z)\geq N$ per cui:

- $z$ e scomponibile in 5 parti $z = uvwxy$
- $vwx \leq N$
- $\vert vx \vert \geq 1$

Dove le componenti $v$ $x$ possono essere ripetute (*pompate*) per ottenere le altre frasi del linguaggio

$$uv^iwx^iy \in L \forall i \geq 0$$

## LINGUAGGI DI TIPO 3

Esiste una variante del teorema per linguaggi di tipo 3

Se $L$ e un linguaggio di tipo 3 esiste un intero $N$ tale che per ogni stringa $z: len(z)\geq N$ per cui:

- $z$ e scomponibile in 3 parti $z = xyw$
- $y\leq N$
- $\vert y\vert \geq 1$

Dove la componente centrale $y$ può essere ripetuta (*pompata*) per ottenere le altre frasi del linguaggio

$$xy^iw \in L \forall i \geq 0$$

[PREVIOUS](pages/ESPRESSIONI_REGOLARI.md) [NEXT](pages/RSF.md)
