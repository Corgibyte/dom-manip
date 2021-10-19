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

  $("button#bark").click(function() {
    $("ul#meow-text").prepend("<li>meow!</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#bark-text").prepend("<li>bark!</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });
});