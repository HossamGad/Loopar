
var Lista = document.getElementById("ul");
var minLista = [ 
    ["","Köra bil"],
    ["","Spela"],
    ["","Springa"],
    ["","Kul att ...."],
    ["","Kul att ...."]
    ];



for(var i=0;i<minLista.length;i++){
		 var item = minLista[i];
 		 var saker = document.createElement("li");
 		 saker.value=item[0];
 		 saker.innerHTML=item[1];

		 Lista.appendChild(saker);
	}    