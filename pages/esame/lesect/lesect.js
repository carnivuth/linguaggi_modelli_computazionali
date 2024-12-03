// COSTRUTTO LESECT
module.exports=function lesect(iterable,target){
  return function(expr){
    if (iterable.length!==0){
      if (iterable[0] === target){expr(iterable[0])}
      lesect(iterable.slice(1),target)(expr)
    }
  }
}

