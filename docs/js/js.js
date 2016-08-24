$(function(){

    $.ajax({
		url: "list.json",
		dataType: "json",
		success: function(data){
			for(var i=0;i<data.length;i++){
				var data_title = data[i].title;
				var data_link = data[i].link;
				var data_niubi = "";
				for(var i = 0; i < data_title.length; i++){
					data_niubi += "<span>" + data_title.substr(i, i+1) + "</span>";
				}
				$("logo ul").append("<li><a class='link link--yaku' href=" + data_link + ">" + data_niubi + "</a></li>");
			}
		}
	});

});
