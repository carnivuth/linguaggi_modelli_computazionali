---
index: 20
---
# SCALA



• Inner scope & variable shadowing
• Scala consente di definire in un inner scope una variabile omonima
a una già esistente in un outer scope (shadowing)
• ma è molto poco leggibile…. non abusare!


Definizione di funzioni
• nuova sintassi introdotta dalla parola chiave def
• specifica di tipo postfissa (anziché prefissa come in C e Java),
e solitamente omessa se può essere inferita


def abs( x:Float ) : Float
if (x<0) –x else x
= {
Specifica di tipo postfissa
}



Type inference
• la specifica di tipo può essere omessa in tutti quei casi in cui possa
essere inferita in modo certo
Esempio rivisto
• in questo caso, il tipo del risultato può essere facilmente dedotto dal
tipo dell'argomento, quindi …
Specifica di tipo OMESSA: si può
dedurre un tipo di risultato Float
def abs( x:Float ) = {
if (x<0) –x else x
}


Una funzione che non restituisce nulla ha tipo di ritorno Unit
Esempio:
Specifica di tipo OMESSA
(si può omettere anche l'=)
def hello( s:String ) = {
println("Hello" + s)
}



Scala volutamente non supporta l’assegnamento multiplo
• a tal fine, l'assegnamento è una espressione di tipo Unit
che restituisce la speciale costante ()
• tale costante NON è la chiamata di funzione: non c’entra nulla!
• Occhio al codice convertito «alla bruta» da Java!




Scala ha solo cinque strutture di controllo predefinite:
if, while (e do-while), for, try, match
• principio: anziché "più sintassi", meglio "più librerie"
• altre strutture di controllo possono essere definite dall'utente
• Tutte le strutture di controllo sono espressioni
• quindi, restituiscono sempre un valore del «giusto» tipo
• approccio orientato al funzionale: codice più semplice e leggibile
• si evitano variabili di appoggio e i bug legati alla loro gestione
• l'if di Scala è sostanzialmente l'operatore ternario di C e Java
• preferenza al for (più funzionale) rispetto al while (più imperativo)
• L'assegnamento è un'espressione di tipo Unit
• niente assegnamento multiplo (a differenza di C/Java)


In Scala, il main non può stare in una classe, che non
ammette membri statici: sta in un oggetto singleton
• gli oggetti singleton, introdotti dalla keyword object, sostituiscono
le parti statiche delle classi Java
• Di conseguenza, cambia leggermente la dichiarazione:
• non piùpublic static void main(String[] args){…}
• bensìdef main(args: Array[String]): Unit = …
• Highlight:
• niente keyword static, perché tutti i membri dell'object lo sono
• nuova keyword Array per definire gli array (uniformità collection)


Il generatore 0 to 2 usato sopra era un caso particolare di
uno strumento più generale di Scala: la sintassi infissa
val v = Array("Paperino", "Pippo", "Pluto");
for (i <- 0 to 2) println(v(i))
• La notazione 0 to 2 equivale a 0.to(2)
• è semplicemente un altro modo per chiamare un metodo
• in questo caso, il metodo to della classe Int, che infatti si può
anche chiamare direttamente



Ancora più in generale, in Scala una lista di valori fra
parentesi usata come R-value sottintende sempre una
chiamata implicita a un metodo factory di nome apply
• Per questo abbiamo potuto scrivere
val v = Array("Paperino", "Pippo", "Pluto");
• invece dell’insieme di istruzioni classico:
• In pratica, la scrittura Array(…) viene rimappata dal compilatore
nella chiamata ad Array.apply(…), che è un factory method
dell’oggetto singleton Array, companion della classe Array


Questo mapping vale in generale
• anche, eventualmente, per le classi definite dall’utente
• Perfino l'operatore di selezione in lettura delle celle di un
array non è altro che un’applicazione di questo pattern:
• per questo Scala usa le tonde anziché le quadre ☺
• ergo:
String s = v(2);
• equivale a:
String s = v.apply(2);


Dualmente, una lista di valori fra parentesi usata come
L-value in un assegnamento sottintende una chiamata
implicita al metodo update dell'oggetto ricevente
• a cui vengono passati N+1 argomenti, di cui l’ultimo è l’espressione
assegnata
• In particolare quindi l'operatore di selezione in scrittura delle
celle di un array è un’applicazione di questo pattern:
• di nuovo, per questo Scala usa le tonde anziché le quadre ☺
• ergo:
v(2) = "Quack!"
• equivale a:
v.update(2,"Quack!")


Procedure
• una funzione che non restituisce nulla è di tipo Unit, non void
def increment(i:Int) : Unit = { tot += i }
• Argomenti
• gli argomenti sono sempre implicitamente val, non var
• perciò non sono modificabili dentro la funzione
NO! def change(i:Int) : Unit = { i = 2 }
• Valore di ritorno implicito
• una funzione (non-void) priva di un’istruzione return esplicita
restituisce comunque l’ultimo valore calcolato
Ritorna tot
def increment(i:Int) : Int = { tot += i }


Scala non consente di definire funzioni con un numero
variabile di argomenti (vararg) in modo classico..
• .. ma permette di ripetere l'ultimo argomento, con una
sintassi analoga alle regular expression: * (asterisco)
Argomento ripetuto
def myprint(args: String*)
• Attenzione ai tipi degli argomenti ripetuti:
• INTERNAMENTE alla funzione, l’argomento ripetuto è mappato su
un array, quindi il tipo dell’argomento ripetuto è Array di quel tipo
• ESTERNAMENTE, però, il tipo argomento ripetuto è considerato
diverso da un array e quindi incompatibile con esso


Un oggetto singleton
• è introdotto dalla parola chiave object anziché class
• è strutturalmente identico a una classe
• ma non definisce un tipo perché non ne esisteranno altre istanze
object Boss {
Tutti i campi devono essere
private val name = "The Boss"; obbligatoriamente inizializzati
def getName() = name
Proprietà e metodi di un singleton
sono pubblici per default
}
object Main {
def main(args: Array[String]) {
println(Boss.getName()) L'oggetto singleton è usabile senza
doverlo creare esplicitamente
}
(come nelle parti statiche Java)
}

Questo non significa che un singleton non abbia un tipo!
• in effetti, un singleton estende una classe-base
• (del cui tipo, quindi, si considera istanza)
• perciò, può essere passato a metodi che accettino tale tipo,
referenziato da riferimenti di quel tipo, etc.
• non ammette parametri né costruttori: per questo, tutti i suoi membri
devono essere già inizializzati
• stessa semantica delle parti statiche di Java
(anche perché sotto è implementato proprio così..)
• Un oggetto singleton può essere usato:
• da solo, come standalone object
• insieme a una classe, come suo companion object
• nella composizione di tratti


Un oggetto companion è un particolare singleton
• omonimo di una classe
• definito nel suo stesso file
• Fra i due si instaura una speciale relazione
• ognuno dei due può accedere ai membri privati dell'altro
(come fra la parte statica e non-statica di una classe Java..)
class Counter(v:Int) {
Counter.scala
Counter.howMany += 1;
Accesso privilegiato al campo
...
privato dell'oggetto companion
}
object Counter {
private var howMany : Int = 0
...
Variabile privata dell’oggetto singleton
}


In Scala una classe non ha costruttori espliciti
• al loro posto, ha parametri di classe usati dal compilatore per
generare automaticamente il costruttore primario
• ciò evita la classica serie di assegnamenti this.nome = nome
• il costruttore primario include tutto il codice scritto dentro una classe
che non sia dentro a una qualche funzione
• Costruttori ausiliari solo definibili solo tramite this
• in tal modo, il costruttore primario funge da single entry point

Per ridefinire metodi ereditati è richiesto l'uso esplicito del
qualificatore override (come in C#)
class Counter(v:Int) {
...
Counter.scala
private var value = v;
def setValue(v:Int) = { value = v }
def getValue() : Int
= value
Ridefinizione di metodo
override def toString() =
"Counter di valore " + value
}


Essendo statico, il main dev'essere posto in un singleton
• ad esempio, nel companion object di una classe
object Counter {
private var howMany : Int = 0
Counter.scala
Stato privato (del companion)
def main(args: Array[String]) : Unit = {
val c1 = new Counter(18);
Scatta il costruttore primario
println(c1)
c1.setValue(22);
println(c1)
Scatta il costruttore primario
val c2 = new Counter(37);
Output
println(c2)
Counter di valore 18
}
}


Il pieno supporto alle funzioni come first-class objects
comporta un altrettanto pieno supporto alle chiusure
• strategia di chiusura lessicale
• Quale significato per i nomi delle variabili?
[in particolare: valori o riferimenti?]
• le variabili libere sono chiuse su riferimenti alle variabili esterne,
ergo percepiscono i loro cambiamenti nel tempo (→ Esempio 16)
• ..MA in caso vi siano istanze multiple di tali variabili, chiusure
diverse ne possono fotografare istanze diverse (→ Esempio 22


Scala e Kotlin forniscono gli strumenti per definire nuovi
costrutti anziché definirne a priori un insieme fisso e
prestabilito
• funzioni come first class objects
• letterali funzione (lambda) e chiusure
• funzioni parzialmente specificate
• currying, ovvero la possibilità di applicare a una funzione a più
argomenti una serie di argomenti in sequenza, uno dopo l'altro,
anziché tutti assieme nella classica "lista degli argomenti".
• block-like syntax per passare un argomento usando parentesi graffe
anziché tonde, in modo che "non sembri una funzione"
• Scala: call by name nel passaggio degli argomenti (a richiesta)
Kotlin: call by name non supportata, ma «effetto scenico» simile
seppur non altrettanto completo e «pulito»



## DEFINIRE UN COSTRUTTO BUILTIN

Scala ha tutti gli strumenti per consentire la definizione di costrutti builtin:

- block like syntax
- [currying](JAVASCRIPT.md#CURRYING)
- [call by name](PROCESSI_COMPUTAZIONALI.md#ALTERNATIVA,%20MODELLO%20CALL%20BY%20NAME)
- [chiusura](PROCESSI_COMPUTAZIONALI.md#CHIUSURA)

quindi per creare il costrutto `repeat`:

```scala
// si sfrutta il curring per definire una funzione a 2 argomenti
def repeat(n:Int)(expr: =>Unit):Unit={
	//tail recursion per ripetere l'azione dove si richiama la funzione esterna della chiusura
	expr; if (n>1) repeat(n-1)(expr)
}

//il chiamante puo sfruttare la block like sintax e il costrutto e completato
repeat(3){print("hi")}
```


```scala
def container(name:String)(main: =>Unit):Unit= {
	print("creo il container"+ name + "che compie l'azione"+ main)
}
container("pippo"){
	print("hello world")
}
```
[PREVIOUS](LINGUAGGI_BLENDED.md)
