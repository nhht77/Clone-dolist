// Check of specific todos by clicking
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});

//Click on span to delete todos
$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove()
		});
		event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grab
		var todoText =  $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-battery-three-quarters").click(function(){
	$("input[type='text']").fadeToggle();
})
