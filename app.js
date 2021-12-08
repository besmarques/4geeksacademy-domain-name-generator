let pronoum = ["the","our","mine"];
let adj = ["great","big","fantastic","fabulous","marvelous"];
let noun = ["dog", "cat","bird","car","boat"];
let tldr = [".us", ".pt",".com",".org",".eu",".io"];

for (let i = 0; i < pronoum.length; i++){
  	for (let z = 0; z < adj.length; z++){
      	for (let x = 0; x < noun.length; x++){
        	for (let c = 0; c < tldr.length; c++){
   			    console.log(pronoum[i] + adj[z] + noun[x] + tldr[c]); 			
            }
        }
    }
}   