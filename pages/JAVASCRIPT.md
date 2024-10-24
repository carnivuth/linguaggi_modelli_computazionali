---
index: 17
---
> eh beh era anche ora di impararlo..... stavolta sul serio
# JAVASCRIPT

Linguaggio con un approccio funzionale con funzioni e chiusure semplice e pratico, con una sintassi leggera, adotta un modello object-based senza classi, basato sul concetto di prototipo è un linguaggio interpretato, con aspetti dinamici di grande interesse

Ci sono anche dei contro dovuti alla giovinezza e alla crescita troppo rapida:

- un ambiente globale (*mal definito*) con variabili globali
- alcuni operatori contorti
- richiede disciplina per evitare stili che non rispettano le buone pratiche
- Perché offre alcune caratteristiche controverse
- il loose typing riduce le possibilità di intercettare errori di tipo,
- l'ereditarietà prototype-based è concettualmente potente, ma non facile da applicare per chi viene da linguaggi "class based"

## CRASH COURSE: LE BASI

### TIPI

Il tipo `string` denota stringhe di caratteri Unicode **no tipo char** (*un carattere è una stringa lunga 1*), le stringhe sono **oggetti immutabili** (*java maniera*), l'operatore `+` le concatena 

```javascript
console.log("hello" + "world")
console.log("hello" + 3)
```

Il tipo `number` denota un reale a 64 bit **no interi** (*la divisione è sempre fra reali, anche con operandi interi*),gli operatori bit a bit **operano su interi ottenuti convertendo sul momento il valore reale** (*lentissimi e inefficienti*)

- la costante `NaN` rappresenta il "risultato" di operazioni matematiche impossibili: non è uguale a nulla, incluso lei stessa, un'operazione che coinvolga un `NaN` dà come risultato `NaN`
- la costante Infinity rappresenta un valore maggiore del massimo reale positivo rappresentabile ($1.79 * 10+308$)

Costanti boolean: `true` e `false`, Altre costanti: `null` e `undefined` (*valore indefinito restituito da funzioni che non restituiscono nulla e assegnato a variabili prima della loro valorizzazione*)

### ESPRESSIONI

espressioni numeriche: somma, sottrazione, prodotto, divisione (*sempre fra reali*), modulo, shift (*come in java*)
- espressioni condizionali con ? … :
- espressioni stringa: concatenazione con +
- espressioni di assegnamento: con = (e sue varianti)

```javascript
document.write(18/4) // fra reali
document.write(18%2)
document.write("paolino" + 'paperino')
```

### VARIABILI

Le variabili in Javascript sono **loosely typed** ovvero è possibile assegnare alla stessa variabile prima un valore di un tipo, poi un valore di un altro tipo

```javascript
alfa = 19
beta = "paperino"
alfa = "zio paperone" // tipo diverso!!
```

Sono consentiti incrementi, decrementi e operatori di assegnamento estesi (`++`,`--`, `+=` … )

La dichiarazione di una variabile può essere implicita (*la si usa e basta*) o esplicita (*con la parola chiave var*)

```javascript
pluto = 18
var pippo = 19
```

Lo scope delle variabili è:
- locale, in caso di dichiarazione esplicita dentro a funzioni
- globale, in tutti gli altri casi

A differenza di Java, **un blocco non delimita uno scope** (*variabili definite dentro a blocchi innestati sono comunque riferite all'ambiente che le contiene*)

```javascript
x = '3' + 2; // la stringa '32'
{
	{ x = 5 } // blocco interno
	y = x + 3; // x denota 5, non "32"
}
```

Il tipo di una variabile **non è fissato a priori**: dipende dal contenuto attuale della variabile (*per scoprire il tipo `typeof()`*)

```javascript
a=18;
typeof(a) //dà number
a="ciao"; 
typeof(a) //da string
typeof(18/4) //da number
typeof("aaa")//da string
typeof(false)//da boolean
typeof(document)//da object
typeof(document.write)//da function

// questo invece da object
typeof([1,2,3]) 
```

Le istruzioni sono separate o da un punto e virgola (*come in C o Java*) o da un fine riga (*come in Pascal*)

```javascript
alfa = 19
// fine riga
beta = "paperino" ; gamma = true
document.write(beta + alfa)
// fine riga
```

```javascript
//ATTENZIONE: se si va a capo dove non si deve, rischio di semicolon insertion
return 18; // restituisce 18
return // restituisce undefined
18;// (statement irraggiungibile)
```

Solite strutture if, switch, for, while, do/while
• Costrutti per operare su oggetti: for … in … e with
• NB: il for..in di JavaScript non equivale al foreach di Java
poiché itera sui nomi degli elementi, non sugli elementi
• per gli array, i nomi degli elementi sono gli indici (0,1,2…)
• è una caratteristica utile per gli array associativi, che però può
risultare fuorviante se sconosciuta o inattesa


Soliti operatori relazionali (==, !=, >, <, >=, <=)
e logici AND (&&), OR (||), NOT (!)
– PROBLEMA 1: nella valutazione si considera falso non solo il
valore false, ma ogni valore falsy ovvero anche null,
undefined, la stringa vuota (''), il valore 0 ed NaN
Ogni altro oggetto, inclusa la stringa 'false', è vero.
– PROBLEMA 2: == e != applicano type coercion secondo regole
innaturali, con risultati talora incomprensibili → The evil brothers
• The good brothers: nuovi operatori ===, !==
– offrono una alternativa più sensata al comportamento discutibile
dei due operatori classici ==, !=


The evil brothers
0 == '' true, perché sono entrambi falsy values (ehm..)
0 == '0' true, perché.. 0 è coercibile a '0' (cough cough)
false == 'false'
false, come è giusto che sia, MA
false == '0'
true, perché sono due falsy (ehm..)
false == undefined false (ok, accettabile)
false == null
false (ok, accettabile) MA
null == undefined true – fulgido esempio di coerenza ☺
La perla finale (anche con sottoparti della stringa):
' \t\r\n' == 0
true – perché..
• The good brothers
=== e !== non applicano type coercion → chiari e predicibili
Riferimento: Douglas Crockford, "Javascript: The Good Parts", O'Reilly, 2008

