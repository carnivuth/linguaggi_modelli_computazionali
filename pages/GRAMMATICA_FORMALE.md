---
id: GRAMMATICA FORMALE
aliases: []
tags: []
index: 3
---
# GRAMMATICHE FORMALI

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






[PREVIOUS](COMPUTABILITA.md) [NEXT](CLASSIFICAZIONE_CHOMSKY.md)
