var $coffeeOrder = '[data-type="coffeeOrder"]';
var $emailAddress = '[data-type="emailAddress"]';
var $coffeSize = "[data-type='coffeeSize']";
var $shotFlavor = "[data-type='shotFlavor']";
var $strengthLevel = "[data-type='strengthLevel']";


var $theForm = $('[data-coffee-order="form"]')
$theForm.on('submit', function (event) {
    localStorage.setItem('formData', $form);
})