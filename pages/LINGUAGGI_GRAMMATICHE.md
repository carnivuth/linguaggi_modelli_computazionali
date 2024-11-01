---
id: LINGUAGGI GRAMMATICHE
aliases: 
tags: 
index: 2
---
# LINGUAGGI E GRAMMATICHE

In informatica un linguaggio e un insieme finito di stringhe costruite su un insieme non vuoto di simboli atomici (*alfabeto*), una stringa (sequenza di simboli) si dice frase del linguaggio se e formata da simboli dell' alfabeto.

Un linguaggio si compone di due concetti fondamentali **sintassi** e **semantica**

## SINTASSI DI UN LINGUAGGIO

La sintassi di un linguaggio consiste in un insieme di regole formali che determinano le modalità di costruzione delle frasi di un linguaggio, questa viene espressa dalla [grammatica](GRAMMATICA_FORMALE)

## SEMANTICA DI UN LINGUAGGIO

La semantica di un linguaggio consiste nell'insieme dei significati da attribuire alle frasi del linguaggio stesso, questa viene rappresentata da azioni, funzioni matematiche, formule logiche

## INTERPRETAZIONE DI UN LINGUAGGIO

Un interprete di un linguaggio e un entità in grado di riconoscerne le frasi (*analisi sintattica*) e applicarne il corretto significato (*analisi semantica*)

## CHIUSURA DI UN ALFABETO

Insieme finito di tutte le stringhe ottenibili da un dato alfabeto $A$, in caso la stringa vuota sia assente si parla di chiusura positiva di $A$



## GRAMMATICHE FORMALI

la grammatica e una notazione formale con cui definire la sintassi di un linguaggio: espressa dalla quadrupla $<VT,VN,P,S>$ dove:

- $VT$ insieme finito di **simboli terminali**
- $VN$ insieme finito di **simboli non terminali** (*metasimboli*)
- $P$ insieme finito delle **produzioni**
- $S$ simbolo non terminale speciale chiamato **scopo della grammatica**

Una stringa composta da simboli e metasimboli si dice forma di frase.

## DERIVAZIONE

date due forme di frase $\alpha,\beta$ si dice che $\beta$ deriva direttamente da $\alpha$ se e vero che

$$
a=\eta A\delta \space \beta = \eta \gamma\delta
$$

ed esiste una produzione $A \rightarrow \gamma$, in caso non esista una produzione ma una catena di produzioni si parla di derivazione (*non diretta*)

## LINGUAGGIO GENERATO DALLA GRAMMATICA

data una grammatica $G$ si dice linguaggio $L_G$ generato dalla grammatica $G$ **l'insieme delle frasi derivabili dal simbolo inziale della grammatica applicando le sue produzioni**

$$
L_G = \{ s \in VT^{*}: S\Rightarrow s\}
$$

quando due grammatiche producono lo stesso linguaggio si dice che sono equivalenti, stabilire se due grammatiche sono equivalenti e un problema indecidibile, inoltre **grammatiche diverse ma equivalenti potrebbero necessitare di riconoscitori diversi**

[PREVIOUS](pages/COMPUTABILITA.md) [NEXT](pages/CLASSIFICAZIONE_CHOMSKY.md)
