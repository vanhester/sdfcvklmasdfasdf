// $(document).ready(function () {
//   $(".searching").change(function () {
//     var value = $(".searching").val();//выбираем значение выбранного элемента
//     $("#inputSearch").text(value);//записываем его в значение тексового поля
//   });

//   $('.autoplay').slick({
//     infiniti: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [{
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 2
//                     }
//                 },
//                 {
//                   breakpoint: 768,
//                   settings: {
//                       slidesToShow: 1
//                   }
//                 }]
//   });
// });

$('#loginindex').on('click', function (event) {
    document.location.href = '/login/index.php';
});
