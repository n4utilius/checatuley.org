(function(){
	var that = this;
	this.alpha = [ "A","B","C","D","E","F","G","H","I","J","K","L",
				   "M","N","Ñ","O","P","Q","R","S","T","U","V","W",
				   "X","Y","Z","a","b","c","d","e","f","g","h","i",
				   "j","k","l","m","n","ñ","o","p","q","r","s","t",
				   "u","v","w","x","y","z" ];
	this.alphaNum = [ "A","B","C","D","E","F","G","H","I","J","K","L",
				  	  "M","N","Ñ","O","P","Q","R","S","T","U","V","W",
				  	  "X","Y","Z","0","1","2","3","4","5","6","7","8",
				  	  "9" ];
	this.estados = [ "Aguascalientes","Baja California","Baja California Sur",
				    "Campeche","Chiapas","Chihuahua","Coahuila","Colima",
	 			    "Distrito Federal","Durango","Estado de México","Guanajuato",
					"Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit",
					"Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo",
					"San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas",
					"Tlaxcala","Veracruz","Yucatán","Zacatecas" ];

	this.aleatorio = function(inferior,superior){ 
	    numPosibilidades = superior - inferior; 
	    aleat = Math.random() * numPosibilidades; 
	    aleat = Math.floor(aleat);
	    return parseInt(inferior) + aleat; 
	};

	this.randomState = function(){
		indice = that.aleatorio(0, 31);						
		$(tag).html(estados[indice]);
	};

	this.randomWord = function(){
		var word ="";
		for(j=0; j<=7; j++){
			indice = that.aleatorio(0, 36);//54						
			letter = alphaNum[indice];//alpha[indice];
			word += letter;
		};	
		$(tag).html(word);
	};
				
})();			

var showTitle = function(tag, title){
	this.tag = tag;
	var wordInterval = setInterval(randomWord,60);  
				
	$(tag).show("drop", { direction: "left" }, 420, function(){
		$(tag).html(title);
		clearInterval(wordInterval); 
	});
}

$("ul#menu_principal li").hover(function(){
	back = $(this).css("background-color");
	width = $(this).css("min-width"); 

	$(this).css("background-color", "#ccc");
	$(this).css("min-width", "295px");
}, function(){
	$(this).css("background-color", back);
	$(this).css("min-width", width);
})