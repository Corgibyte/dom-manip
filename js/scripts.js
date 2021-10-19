$(document).ready(function() {
  $("button#say-a").click(function() {
    $("ul").prepend("<li>Response A</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#say-b").click(function() {
    $("ul").prepend("<li>Response B</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#say-c").click(function() {
    $("ul").prepend("<li>Response C</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  
});