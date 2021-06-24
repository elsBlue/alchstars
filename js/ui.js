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

$(document).on("click", ".expand-all", function(){
	var a = $(".rear-info").siblings();
	var b = $(".rear-info").children(".indicator").children(".down");
	var c = $(".rear-info").children(".indicator").children(".up");

	
		a.slideDown( 400 );
		a.addClass("active");
		c.show();
		b.hide();
});

$(document).on("click", ".shrink-all", function(){
	var a = $(".rear-info").siblings();
	var b = $(".rear-info").children(".indicator").children(".down");
	var c = $(".rear-info").children(".indicator").children(".up");

	
		a.slideUp( 400 );
		a.removeClass("active");
		b.show();
		c.hide();
});

$(document).on("click", ".jump", function(){
		var a = $(".mini-characterlist");
		a.show();
		$(this).removeClass("jump");
		$(this).addClass("jump-out");
		$(this).css("background-color","#FFD700");
		$(".holder").html("<span class='material-icons'>arrow_drop_down</span>");
});

$(document).on("click", ".jump-out", function(){
		var a = $(".mini-characterlist");
		a.hide();
		$(this).removeClass("jump-out");
		$(this).addClass("jump");
		$(this).css("background-color","#FFF");
		$(".holder").html("Jump");
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

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});