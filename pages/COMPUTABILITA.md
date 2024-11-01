---
index: 1
---
# TEORIA DELLA COMPUTABILITÀ

Partiamo dalla **TESI DI CHURCH-TURING**

*Se un problema è umanamente calcolabile, allora esisterà una macchina di Turing in grado di risolverlo (cioè di calcolarlo)*

Da questo si deduce che se la MdT non può risolvere un dato problema quel **problema e irresolubile**

Ma cosa succede se una MdT non e in grado di risolvere un problema? **essa stessa si blocca in un loop** e non produce output di conseguenza si può dare una definizione di **PROBLEMA RISOLUBILE** come segue

### PROBLEMA RISOLUBILE

un problema la cui soluzione può essere espressa da una MdT (*o formalismo equivalente*)

Ma la MdT computa funzioni non problemi, occorre quindi definire formalmente il concetto di **funzione caratteristica di un problema** per colmare il divario

Dato un problema $P$ e detti

- l’insieme $X$ dei suoi dati di ingresso
- l’insieme $Y$ delle risposte corrette

si dice **funzione caratteristica del problema** $P$

$$
f_P: X \rightarrow Y
$$

Con questo formalismo definito si può traslare la il problema della ricerca dei problemi risolubili su quello delle funzioni computabili e, riprendendo la tesi di Church-Turing:

### FUNZIONE COMPUTABILE 

Una funzione $f: A\rightarrow B$ è computabile se esiste una MdT che
- data sul nastro una rappresentazione di $x\in A$ dopo un **numero finito di passi**
- produce sul nastro una rappresentazione di $f(x)\in B$

Date le definizioni viene spontaneo chiedersi se tutte le funzioni siano computabili o se esistano invece funzioni definibili ma non computabili  per far cio occorre confrontare i due insiemi

Si fa presto dato che l’insieme delle funzioni dai naturali ai naturali 

$$
F = \{ f: N → N \}
$$

non e numerabile a differenza di quello delle funzioni computabili, dato che la cardinalità dei simboli di ingresso, di uscita e di stati di una MdT è finito

Di conseguenza **la gran parte delle funzioni definibili non e computabile**, tuttavia questo non risulta essere un problema dato che le funzioni che sono interessanti per una macchina che deve riconoscere un linguaggio sono quelle definite su un insieme finito di simboli, tuttavia neanche questo sottoinsieme e '*fortunato*'

### PROBLEMA DELL’ HALT DELLA MACCHINA DI TURING

*Stabilire se una data macchina di Turing $T$, con un generico ingresso $X$, si ferma oppure no.*

Tale problema, perfettamente definibile e tuttavia non computabile

>[!QUOTE] Ma allora come deve essere un linguaggio per far si che la MdT possa computarlo?

Poiché un linguaggio è un insieme di frasi, ci interessa indagare in generale il problema della **generabilità vs. decidibilità di un insieme**. 

### INSIEME NUMERABILE

Insieme per cui esiste una funzione $f:N\rightarrow I$ (*mappa l'insieme dei naturali in elementi dell'insieme*)

Tuttavia non e sufficiente, la funzione deve essere [computabile](#FUNZIONE%20COMPUTABILE)

### INSIEME RICORSIVAMENTE NUMERABILE (SEMI-DECIDIBILE)

Un insieme si dice ricorsivamente numerabile se $f: N\rightarrow I$ puo essere computata da una macchina di touring.

In questo caso l'automa esecutore e in grado di rispondere affermativamente quando una determinata frase appartiene al linguaggio, ma **non e in grado di stabilire se una frase non vi appartiene** (*esempio dei numeri pari e dispari*)

### INSIEME DECIDIBILE

Un insieme $S$ e' detto decidibile se sia $S$ che il complemento $N-S$ sono [semidecidibili](#INSIEME%20RICORSIVAMENTE%20NUMERABILE%20(SEMI-DECIDIBILE)).

Questo per un automa significa essere in grado di elencare sia gli elementi che fanno parte sia quelli che non fanno parte di un determinato linguaggio

E proprio qui che sta la chiave del problema, dato che i linguaggi di programmazione sono costruiti a partire da un alfabeto finito ma sono caratterizzati dall’insieme (infinito) delle frasi lecite Non basta che tale insieme possa essere generato, è indispensabile **poter decidere se una frase è**
**giusta o sbagliata senza entrare in ciclo infinito**

>[!QUOTE] In questo modo un compilatore e in grado di arrestarsi e segnalare errore se una **frase non appartiene al linguaggio**

 [NEXT](pages/LINGUAGGI_GRAMMATICHE.md)
