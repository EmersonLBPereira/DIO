let lines = 6;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
let frase = " ";
let N = parseInt(lines);

for ( let i = 1; i <= N; i++  ) {
    if ( i === N ) frase +=  'Ho!'    ;
    else frase +=  'ho '   ; //acumla pois (frase += 'ho')=> (frase = frase + ho, "onde frase já é 'ho'")
}
console.log(frase+" ");
  