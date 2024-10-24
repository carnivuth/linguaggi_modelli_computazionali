---
id: COMPUTABILITA
aliases: []
tags: []
index: 2
---
# TEORIA DELLA COMPUTABILITÀ

La teoria della computabilità mira a comprendere le varie classi di problemi e a determinare se un dato problema può essere risolto da un automa esecutore.

## PROBLEMA RISOLUBILE

Si dice che un problema $P$ e risolubile se questo può essere risolto da una macchina di Turing

Dato un problema $P$ si possono dare le seguenti definizioni

## FUNZIONE CARATTERISTICA

- sia $X$ l'insieme dei dati di ingresso di $P$
- sia $Y$ l'insieme delle risposte corrette

La funzione caratteristica di un dato problema e definita come

$$
f_P:X \rightarrow Y
$$

## FUNZIONE COMPUTABILE

Una funzione $f:A\rightarrow B$ si dice computabile se esiste una macchina di Turing che dato sul nastro una rappresentazione di $x\in A$ dopo un numero finito di passi produce sul nastro una rappresentazione di $f(x)\in B$

Non tutte le funzioni sono computabili, per esempio:

- l'insieme delle funzioni definite sui naturali **non è numerabile**
- l'insieme delle funzioni computabili **è numerabile**

Un altro esempio e il **problema dell'halt della macchina di Turing**

*stabilire se una data macchina di touring T con un generico ingresso X si ferma oppure no*

Per quanto riguarda la generazione e il riconoscimento dei linguaggi e necessario determinare se un linguaggio sia decidibile

## INSIEME NUMERABILE

Insieme per cui esiste una funzione $f:N\rightarrow I$ (*mappa l'insieme dei naturali in elementi dell'insieme*)

## INSIEME RICORSIVAMENTE NUMERABILE (SEMI-DECIDIBILE)

Un insieme si dice ricorsivamente numerabile se $f: N\rightarrow I$ puo essere computata da una macchina di touring.
In questo caso l'automa esecutore e in grado di rispondere affermativamente quando una determinata frase appartiene al linguaggio, ma non e in grado di stabilire se una frase non vi appartiene (*esempio dei numeri pari e dispari*)
## INSIEME DECIDIBILE

Un insieme $S$ e' detto decidibile se sia $S$ che il complemento $N-S$ sono [semidecidibili](#INSIEME%20RICORSIVAMENTE%20NUMERABILE%20(SEMI-DECIDIBILE)).
Questo per un automa significa essere in grado di elencare sia gli elementi che fanno parte sia quelli che non fanno parte di un determinato linguaggio


[PREVIOUS](LINGUAGGI_E_GRAMMATICHE.md) [NEXT](GRAMMATICA_FORMALE.md)
