---
id: GRAMMATICHE_LLK
aliases: [starter_symbol_set,director_symbol_set]
tags: []
index: 12
---

# GRAMMATICHE $LL(k)$

Le grammatiche $LL(k)$ sono grammatiche che risultano deterministiche al patto di poter *"sbirciare"* $k$ simboli di input, caso eccellente quello in cui $k=1$

## STARTER SYMBOLS SET

Lo starter symbols set di una riscrittura $\alpha$ e l'insieme:

$$
SS(\alpha) = \{a \in VT | \alpha \rightarrow a\beta \}, con \space \alpha \in V^+, \beta \in V^*
$$

ovvero l'insieme di simboli terminali iniziali delle produzioni che coinvolgono il metasimbolo $\alpha$ sulla sinistra

## COME OTTENERE UNA GRAMMATICA $LL(1)$

Condizione **necessaria** (sufficiente per le grammatiche senza $\epsilon -rules$) per far si che una grammatica sia $LL(1)$ e che gli **starter symbols** (*ovvero gli elementi iniziali della parte destra di una produzione*) **di un metasimbolo siano tutti diversi fra loro**

## IL PROBLEMA DELLE $\epsilon$

Le grammatiche che presentano produzioni in grado di annullare un metasimbolo non sono considerate dalla definizione di [starter symbols set](#STARTER%20SYMBOLS%20SET), dato che in caso di produzione vuota e necessario considerare il metasimbolo successivo per verificare il determinismo della produzione

$$
S \rightarrow AB|c
$$
$$
A \rightarrow a|\epsilon
$$
$$
B \rightarrow b|dc
$$

in questa grammatica lo [starter symbols set](#STARTER%20SYMBOLS%20SET) di $S$ e dipendente anche dal metasimbolo $B$ perché e necessario considerare che il metasimbolo $A$ può essere eliminato

## DIRECTOR SYMBOLS SET

Per ovviare a questo problema si estende la nozione di [starter symbols set](#STARTER%20SYMBOLS%20SET), dato l'insieme $SS(\alpha)$ e l'insieme $FOLLOW(A)$ definito:

$$
FOLLOW(A) = \{a \in VT | S \rightarrow \gamma Aa\beta\}, con \space \gamma,\beta \in V^*
$$
ovvero l'insieme dei simboli terminali che compaiono come primi in caso di annullamento delle produzioni precedenti

il director symbol set e dato da

$$
DS(A\rightarrow \alpha) = trunc_1(FIRST(\alpha)\bullet FOLLOW(A))
$$

ovvero la troncatura a un carattere della concatenazione dei due insiemi.

## COME OTTENERE UNA GRAMMATICA $LL(1)$

Condizione necessaria e sufficiente per ottenere una grammatica $LL(1)$ e che il [director symbols set](#DIRECTOR%20SYMBOLS%20SET) relativi alle produzioni siano disgiunti

## GRAMMATICHE $LL(1)$ IL PROBLEMA DELLA [IL PROBLEMA DELLA RICORSIONE SINISTRA](GRAMMATICHE_TIPO_2.md#IL%20PROBLEMA%20DELLA%20RICORSIONE%20SINISTRA)

Le grammatiche $LL(k)$ non sono compatibili con la ricorsione a sinistra delle produzioni $A \rightarrow A\alpha | a$, che tuttavia [può essere sempre rimossa](GRAMMATICHE_TIPO_2.md#ELIMINAZIONE%20DELLA%20RICORSIONE%20SINISTRA) a patto di poter fare a meno della sua capacita espressiva (*no necessita di dare una semantica alla frase*)

questa problematica può essere risolta adottando tecniche di analisi più avanzate come le [grammatiche LR(k)](GRAMMATICHE_LRK.md)

[PREVIOUS](pages/PDA.md) [NEXT](pages/INTERPRETI.md)
