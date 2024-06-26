$(document).ready(function() {
  $(".faq-toggle").click(function() {
      var $faq = $(this).closest(".faq");
      var $allFaqs = $(".faq");
      var currentIndex = $allFaqs.index($faq);

      $faq.toggleClass("active");

      $allFaqs.not($faq).removeClass("active");

      var $nextFaq = $allFaqs.eq(currentIndex + 1);
      if (!$nextFaq.length) {
          $nextFaq = $allFaqs.first(); 
      }
      $nextFaq.addClass("active");
  });
});
