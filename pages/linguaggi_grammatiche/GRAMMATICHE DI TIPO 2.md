 - #### TIPO 2 (CONTEXT FREE)
	- produzioni in cui un metasimbolo puo essere sostituito a prescindere dal contesto
	![image.png](image_1680616600716_0.png)
	- viene rimosso il vincolo sull'accorciamento della frase
#### SELF EMBEDDING

grammatica self-embedding quando contiene una produzione della forma
				- ![image.png](image_1680618562921_0.png)
			- ![image.png](image_1680618618393_0.png)
			- utilità: generare una ricorsione dove si generano simboli sia a destra che a sinistra (*fondamentale per le parentesi :)* ) 

## CONVERSIONE DI GRAMMATICHE DI TIPO 2
 - ![image.png](image_1680617524682_0.png)
una grammatica di tipo 2 e sempre convertibile in una gramatica senza produzioni in stringa vuota, ammettendo la regola `S -> e` dove `S` non e mai una conseguenza delle produzioni 