# CLASSIFICAZIONE DI CHOMSKY

 la classificazione delle grammatiche di Chomsky prevede 4 tipologie principali di grammatiche, divise in base alla capacita computazionale richiesta per riconoscerle

| GRAMMATICHE                              | AUTOMI RICONOSCITORI                                          |
| ---------------------------------------- | ------------------------------------------------------------- |
| [TIPO 0](GRAMMATICHE%20DI%20TIPO%200.md) | Se $L(G)$ e riconoscibile e necessaria una macchina di turing |
| [TIPO 1](GRAMMATICHE%20DI%20TIPO%201.md) | Macchina di turing                                            |
| [TIPO 2](GRAMMATICHE%20DI%20TIPO%202.md) | Push down automaton (PDA)                                     |
| [TIPO 3](GRAMMATICHE%20REGOLARI.md)      | Automa a stati finiti (ASF)                                   |

esiste una relazione gerarchica fra le grammatiche, **un linguaggio generato da una grammatica di tipo inferiore può essere generato anche da una grammatica di tipo superiore**

## PROBLEMA DELLA STRINGA VUOTA

i linguaggi generati da [GRAMMATICHE DI TIPO 1](GRAMMATICHE%20DI%20TIPO%201.md) non ammettono produzioni con la stringa vuota ma quelle di tipo 2 e 3 si data la relazione gerarchica grammatiche di tipo A possono generare linguaggi di tipo B con A>B **ma la grammatica di tipo A ha necessità computazionali più esose**

## GRAMMATICHE, TIPO 1 VS TIPO 2

le grammatiche di tipo 2 non ammettono produzioni della forma

$$BC \rightarrow CB$$

ovvero **non consentono di scambiare i simboli in una produzione**

## GRAMMATICHE, TIPO 2 VS TIPO 3

le produzioni di Tipo 2 **ammettono un metasimbolo in qualunque punto della frase** (*self embedding*) mentre le produzioni di tipo 3 **ammettono metasimboli solo a destra o a sinistra della frase**

| TIPO 2  | TIPO 3 |
| ------- | ------ |
| $$aBa$$ | $$Ba$$ |

## NELLA PRATICA

Le grammatiche 1 2 e 3 sono tutte riconoscibili, ma la capacita computazionale richiesta per riconoscerle cambia assieme alle capacita espressive della grammatica stessa, sta al progettista scegliere la corretta grammatica in base ai requisiti (*i linguaggi general purpose sono generati da grammatiche di tipo 2, riconosute da un push down automaton*)