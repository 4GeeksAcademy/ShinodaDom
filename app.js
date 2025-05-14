let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.hack'];


let domainNames = [];


for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        domainNames.push(`${p}${a}${n}${ext}`);
      }
    }
  }
}

console.log("=== Lista de Dominios conseguidos <3 ===\n");
console.log(domainNames.join('\n'));