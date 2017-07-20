var $coffeeOrder = $('[data-type="coffeeOrder"]');
var $emailAddress = $('[data-type="emailAddress"]');
var $coffeeSize = $("[data-type='coffeeSize']");
var $shotFlavor = $("[data-type='shotFlavor']");
var $strengthLevel = $("[data-type='strengthLevel']");
var $theForm = $('[data-coffee-order="form"]')
var $page =
// $coffeeOrder.on('input', function(event) {
//     console.log($coffeeOrder.val());
// })


// localStorage.setItem('')

//SUBMISSION
$theForm.on('submit', function (event) {
    localStorage.setItem('coffeeOrder', $coffeeOrder.val());
    localStorage.setItem('emailAddress', $emailAddress.val());
    localStorage.setItem('coffeeSize', $coffeeSize.val());
    localStorage.setItem('shotFlavor', $shotFlavor.val());
    localStorage.setItem('strengthLevel', $strengthLevel.val());
});


$(window).on('load', function (event) {
    $coffeeOrder.val(localStorage.getItem('coffeeOrder'));
    $emailAddress.val(localStorage.getItem('emailAddress'));
    $coffeeSize.val(localStorage.getItem('coffeeSize'));
    $shotFlavor.val(localStorage.getItem('shotFlavor'));
    $strengthLevel.val(localStorage.getItem('strengthLevel')); 
});



    // localStorage.setItem('emailAddress', $emailAddress.val());
    // localStorage.setItem('coffeeSize', $coffeSize.val());
    // localStorage.setItem('shotFlavor', $shotFlavor.val());
    // localStorage.setItem('strengthLevel', $strengthLevel.val());
// });

// })