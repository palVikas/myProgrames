var fileToLI = function(fileName){
	return "<li>"+fileName+"</li>";
};
var onSearchDone = function(fileNames){			
	var ulHtml = "<ul>"+fileNames.map(fileToLI).join('\n')+"</ul>";
	$('#result').html(ulHtml);
};
var onSearch = function(){
	var path = $('#path').val();
	$.ajax('/list?path='+path).done(onSearchDone).error(function(err){
		$('#result').html(err.responseText);		
	});
};

var onPageLoad = function(){
	$('#search').click(onSearch);
}
$(document).ready(onPageLoad);