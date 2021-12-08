function generateDomain(){
    let pronoum = ["the","our","mine"];
    let adj = ["great","big","fantastic","fabulous","marvelous"];
    let noun = ["dog", "cat","bird","car","boat"];
    let tldr = [".us", ".pt",".com",".org",".eu",".io"];

    let domain = " ";

    return domain = "The best domain you can use is " + pronoum[Math.floor(Math.random(pronoum.length))] + adj[Math.floor(Math.random(adj.length))] + noun[Math.floor(Math.random(noun.length))] + tldr[Math.floor(Math.random(tldr.length))];
}

console.log(generateDomain());