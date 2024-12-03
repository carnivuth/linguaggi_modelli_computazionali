---
id: ESAME
aliases: []
tags: []
---

# ESAME

> data una grammatica mostrare che e riconoscibile per mezzo di $LL(1)$
## GRAMMATICA

- $S \rightarrow dSAB|BC$
- $A \rightarrow aA|C$
- $B \rightarrow bB|\epsilon$
- $C \rightarrow c$

### PUMPING LEMMA PER DIMOSTRARE CHE NON E DI TIPO 3

si dimostra per mezzo della stringa $d^ncc^n$ in cui non e identificabile il pezzo centrale per effettuare la scomposizione nei tre pezzi $xwy$ in quanto il pezzo centrale ripetuto non e in grado di generare le due parti della stringa

>[!NOTE] si vedeva subito anche dal fatto che la prima regola di produzione presenta [self embedding](GRAMMATICHE_TIPO_2.md#SELF%20EMBEDDING) e il corrispondente automa a stati finiti avrebbe avuto infiniti stati

### CALCOLO DEI [DIRECTOR SYMBOLS SET](GRAMMATICHE_LLK.md#DIRECTOR%20SYMBOLS%20SET)

- $DSS(S -> dSAB)= \{d\}$
- $DSS(S -> BC)= \{c,b\}$
- $DSS(A -> aA)= \{a\}$
- $DSS(A -> c)= \{c\}$
- $DSS(B -> bB)= \{b\}$
- $DSS(C -> c) =\{c\}$

- aggiungere una regola di ricorsione sinistra e mostrare che la grammatica non e più $LL(1)$

- $C\rightarrow Cd$

si ha un conflitto nei [director symbol set](GRAMMATICHE_LLK.md#DIRECTOR%20SYMBOLS%20SET) che riguardano il metasimbolo $C$ dato che si ha $DSS(C \rightarrow c)$ non disgiunto con $DSS(C\rightarrow Cd)$ la grammatica non e $LL(1)$

> mostrare che la ricorsione sinistra si può rimuovere ma si ottiene una grammatica diversa

### RIMOZIONE DELLA RICORSIONE SINISTRA

- $S \rightarrow dSAB|BC$
- $A \rightarrow aA|C$
- $B \rightarrow bB|\epsilon$
- $C \rightarrow c|cD$
- $D \rightarrow d|dD$

La ricorsione sinistra e rimovibile ma si ottiene una grammatica diversa, non ottimale in caso si voglia applicare una semantica

> tentare l'approccio con analisi $LR(0)$  e $SLR$ per verificare se si può mantenere la ricorsione sinistra senza modificare il linguaggio

### CALCOLO DEI [CONTESTI SINISTRI](GRAMMATICHE_LRK.md#CONTESTI%20SINISTRI%20DI%20UNA%20PRODUZIONE)

- $LEFTCTXLR(0)(Z) = \{\epsilon\}$
- $LEFTCTXLR(0)(S) = LEFTCTXLR(0)(Z),LEFTCTXLR(0)(S)d$
- $LEFTCTXLR(0)(A) = LEFTCTXLR(0)(S)dS,LEFTCTXLR(0)(A)a$
- $LEFTCTXLR(0)(B) = LEFTCTXLR(0)(S)dSA,LEFTCTXLR(0)(S),LEFTCTXLR(0)(B)b$
- $LEFTCTXLR(0)(C) = LEFTCTXLR(0)(A),LEFTCTXLR(0)(C),LEFTCTXLR(0)(S)B$

### CALCOLO DEI [CONTESTI LR(0)](GRAMMATICHE_LRK.md#CONTESTI%20$LR\(0\)$)

- $CTXLR(0)(Z \rightarrow S) = \epsilon$
- $CTXLR(0)(S \rightarrow dSAB) = d^*dSAB$
- $CTXLR(0)(S \rightarrow BC) = d^*BC$
- $CTXLR(0)(A\rightarrow aA) = (d^*dS)a^*aA$
- $CTXLR(0)(A\rightarrow C) = (d^*S)a^*C$
- $CTXLR(0)(B \rightarrow bB) = (d^*dSA+d^*)b^*bB$
- $CTXLR(0)(B \rightarrow \epsilon) =(d^*dSA+d^*)b^*$
- $CTXLR(0)(C \rightarrow c) =((d^*S)a^*+d^*B)^*c$
- $CTXLR(0)(C \rightarrow Cd) = ((d^*S)a^*+d^*B)^*Cd$

La grammatica in questione non risulta essere [lr(0)](GRAMMATICHE_LRK.md#ANALISI%20$LR\(0\)$) in quanto la regola di produzione $B \rightarrow \epsilon$ genera un conflitto shift/reduce nell'automa

> [!NOTE] per essere $LR(0)$ non devono esserci ricorsioni destre del tipo $A\rightarrow aA|a$ ne produzioni dello stesso metasimbolo che iniziano con la stessa forma di frase e si differiscono per un terminale $S\rightarrow B|Ba$, neanche le produzioni della forma $B\rightarrow bB|\epsilon$ sono corrette in quanto generano nel automa conflitti shift/reduce per via dell $\epsilon$-mossa

### CALCOLO DEGLI INSIEMI $FOLLOW_1$

- $FOLLOW_1(S)=END,a,c$
- $FOLLOW_1(A)=b,END,$
- $FOLLOW_1(B)=c,END,$
- $FOLLOW_1(C)=d,END$

e i conseguenti contesti $SLR$

- $SLR(1)CTX(Z \rightarrow S) = \epsilon$
- $SLR(1)CTX(S \rightarrow aSAB) = d^*dSAB(END+a+c)$
- $SLR(1)CTX(S \rightarrow BC) = d^*BC(END+a+c)$
- $SLR(1)CTX(A\rightarrow aA) = (d^*dS)a^*aA+aA))(b+END)$
- $SLR(1)CTX(A\rightarrow C) = a^*a(SC+C)(b+END)$
- $SLR(1)CTX(B \rightarrow bB) = (a^*aSA+a^*+b^*)bB(c,END)$
- $SLR(1)CTX(B \rightarrow \epsilon) = (a^*aSA+a^*+b^*)(c,END)$
- $SLR(1)CTX(C \rightarrow c) = ((a^*)B+aS)^*c(c+END)$
- $SLR(1)CTX(C \rightarrow Cd) = ((a^*)B+aS)^*Cd(c+END)$

La grammatica risulta essere $SLR$

## COSTRUTTO `lesect`

costrutto per eseguire una data azione su tutti gli elementi di un array uguali a un dato target

```pseudo
lesect(oggetto_da_iterare,target){funzione da svolgere sull'oggetto}
```

### SCALA

```scala
def lesect[T](a:Iterable[T],t:T)(expr:(T) =>Unit):Unit={
	if (!a.isEmpty){
		if (a.head == t) expr(a.head)
		lesect(a.drop(1),t)(expr)
	}
}
//il chiamante puo sfruttare la block like sintax e il costrutto e completato
val a=Array("a","b","b")
lesect(a,"b"){print}
```

### JAVASCRIPT

```javascript
function lesect(iterable,target){
  return function(expr){
    if (iterable.length!==0){
      if (iterable[0] === target){expr(iterable[0])}
      lesect(iterable.slice(1),target)(expr)
    }
  }
}

var a=Array("a","b","b")
lesect(a,"a")(console.log)
lesect(a,"b")(console.log)
lesect(a,"c")(console.log)
```

## IL CACCIAVITE DEL SISTEMISTA (`grep` DEI POVERI)

con il potentissimo costrutto `lesect`  e la possibilità offerta da javascript di [costruire funzioni dinamicamente](JAVASCRIPT.md#COSTRUIRE%20FUNZIONI%20DINAMICAMENTE) si possono ricreare molti tool unix semplicemente modificando un file,

```javascript
const readline = require('readline');
const lesect = require('./lesect.js')
const fs = require('node:fs');

// check sui parametri
if (process.argv.length<4){console.error("wrong parameters"); process.exit(1)}

try {
  var commandfile=process.argv[2]
  var target=process.argv[3]
  const commandBody = fs.readFileSync(commandfile, 'utf8');
  var commmand= Function("x",file)
  var lines = [];
  
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
  });

  rl.on('line', (line) => {
    lines.push(line);
  });
  // approssimazione pessima, in questo modo non si consuma input prima di averne concluso la lettura, crash assicurato
  rl.on('close', (line) => {
    lesect(lines,target)(command)
  });

} catch (err) {
  process.exit(1)
}
```

e cosi possibile cambiare la semantica del costrutto `lesect` a runtime per mezzo di un semplice file javascript

- con questo `lesect` emula `grep`

```javascript
console.log
```

- con questo emula il comando replace di `sed`

```javascript
console.log(x.replace(process.argv[3],process.argv[4]))
```

esempi di chiamate

```bash
echo -e "a\nb\nb" | node mktool.js poorgrep.txt b
echo -e "a\nb\nb" | node mktool.js poorsed.txt a c
```

## TRATTI DI SCALA: LE REVERSE PIPES

mostrare come scala risolve il problema dell'ereditarietà multipla per mezzo dei [tratti](#TRATTI%20DI%20SCALA), e le limitazioni dei tratti parametrici

```scala
// GIRA SOLO SU SCALA 3, TESTARE QUI https://scastie.scala-lang.org
class Pipe(var input:String){
	def run():Unit={
		print(input)
	}
}
trait grep(regex:String) extends Pipe{
  override def run():Unit={
    input= input.split("\\\\n").filter((x)=>{x.contains(regex)}).toList.mkString("\n");
    super.run();
  }
}
trait sed(regex:String,replace:String) extends Pipe{
  override def run():Unit={
    input= input.split("\\\\n").toList.map(x => x.replaceAll(regex,replace)).mkString("\n");
    super.run();
  }
}
(new Pipe("hello world")  with grep("pippo") with sed("hello","pippo") ).run()
```

non e possibile creare reverse pipes con comandi ripetutu perche perche un tratto parametrico se esteso due volte con parametro non puo essere linearizzato

```scala
class PipeGrepSed extends Pipe("Hello world") with grep("pippo") with sed("hello","pippo")
class PipeGrepSedGrep extends PipeGrepSed with grep("world")
```

>[!ERROR] questo non compila perche la seconda classe cerca di richiamare il costruttore del tratto `grep()` che viene già chiamato dalla classe padre
