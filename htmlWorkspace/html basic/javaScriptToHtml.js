var index={
	html:{
		head:{
			title:"heloo"
		},
		body:{
			p:"this is a new paragraph.",
			i:"this is italic line.",
			b:"this is bold line."
		}
		
	}
};

var dolly={
	html:{
		head:{
			title:"dollyGyanchandani"
		},
		body:{
			p:"this is dolly.",
			i:"this is dolly italic line.",
			b:"this is dolly bold line."
		}
		
	}
}
var sayli={
	html:{
		head:{
			title:"Sayli Kadam"
		},
		body:{
			p:"this is sayli kadam paragraph.",
			i:"this is Sayli italic line.",
			b:"this is sayli bold line.",
			u:"this is underline sayli"
		}
		
	}
}
OpenTag = function(t){
	if(t=="body")
		return "<"+t+" bgcolor="+color+">";
	return "<"+t+">";
}
CloseTag = function(t){
	return "</"+t+">"
}

 Htmlcode = function(tag){
 	var content = "";
 	if(typeof(tag) == "string" ){
 		return tag;
 	}
 	var tags = Object.keys(tag);
 	tags.forEach(function(t){
 		content = content+OpenTag(t);
 		content = content+Htmlcode(tag[t]);
 		content = content+CloseTag(t);
 	})
 	return  content;
 }
var file  = eval(process.argv[2]);
var color = process.argv[3]; 
 console.log(Htmlcode(file))