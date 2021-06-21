$(document).on("click", ".rear-info", function(){
	var a = $(this).siblings();
	var b = $(this).children(".indicator").children(".down");
	var c = $(this).children(".indicator").children(".up");

	if(a.hasClass("active")){
		a.slideUp( 400 );
		a.removeClass("active");
		b.show();
		c.hide();
	} else {
		a.slideDown( 400 );
		a.addClass("active");
		c.show();
		b.hide();
	}
});

function searchChar() {
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchChar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("CharacterList");
  li = ul.getElementsByClassName('box');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("name")[0];
    txtValue = a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";  
    } else {
      li[i].style.display = "none";
    }
  }
}
