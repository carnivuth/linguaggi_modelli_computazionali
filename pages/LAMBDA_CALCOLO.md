---
index: 18
---
# LAMBDA CALCOLO

Nasce contemporaneamente alla macchina di Turing con l'obbiettivo di descrivere ogni algoritmo (*Turing-equivalente*), e **basato sul solo concetto di funzione**

## SINTASSI E SEMANTICA

$$
L::= \lambda x.L \vert x \vert LL
$$
$$
(\lambda x.L_b)L_a\rightarrow L_b[L_a/x]
$$

dove $L$ può esprimere **qualunque struttura dati e qualunque algoritmo**

$\rightarrow$ invece rappresenta una trasformazione atomica che applica la sostituzione di testo, ovvero nella espressione 

$$
(\lambda x.x)y
$$

La semantica risulta essere *sostituisci tutte le occorrenze del parametro $x$ nel corpo della funzione  $x$* con risultato $y$