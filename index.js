$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});

// document.getElementById("myButton").onclick = function () {
//     location.href = "https://wa.me/919099622301";
// };
$('.a1-g').change(function() {
    $("#a1").html("Total Price : ₹100.00")
 });
 $('.a1-o').change(function() {
    $("#a1").html("Total Price : ₹150.00")
 });
 $('.a1-s').change(function() {
    $("#a1").html("Total Price : ₹50.00")
 });
 $('.a2-g').change(function() {
    $("#a2").html("Total Price : ₹100.00")
 });
 $('.a2-o').change(function() {
    $("#a2").html("Total Price : ₹150.00")
 });
 $('.a2-s').change(function() {
    $("#a2").html("Total Price : ₹50.00")
 });
//  function displayRadioValue() {
//    var ele = document.getElementsByName('a1');
     
//    for(i = 0; i < ele.length; i++) {
//        if(ele[i].checked)
//        document.getElementById("#a1").innerHTML
//                = "Total Price : ₹100.00";
//    }
// }
