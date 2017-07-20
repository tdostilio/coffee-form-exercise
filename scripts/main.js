var $coffeeOrder = $('[data-type="coffeeOrder"]');
var $emailAddress = $('[data-type="emailAddress"]');
var $coffeeSize = $("[data-type='coffeeSize']");
var $shotFlavor = $("[data-type='shotFlavor']");
var $strengthLevel = $("[data-type='strengthLevel']");
var $theForm = $('[data-coffee-order="form"]')
var recentOrder = {};
var Key = "";
var Orders = [];

//SUBMISSION
$theForm.on('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('coffeeOrder', $coffeeOrder.val());
    localStorage.setItem('emailAddress', $emailAddress.val());
    localStorage.setItem('coffeeSize', $coffeeSize.val());
    localStorage.setItem('shotFlavor', $shotFlavor.val());
    localStorage.setItem('strengthLevel', $strengthLevel.val());
    pullFromLocal();
    storeOrder(recentOrder);
    console.log(recentOrder);
    console.log(Orders);
});

// PULL ORDER FROM LOCAL STORAGE
function pullFromLocal() {
    for (var i = 0; Key = window.localStorage.key(i); i++) {
        recentOrder[Key] = window.localStorage.getItem(Key);
    }
    return recentOrder;
};

// STORE PULL INTO ARRAY OF OBJECTS;
function storeOrder(recent) {
    Orders.push(recent);
}

$(window).on('load', function (event) {
    $coffeeOrder.val(localStorage.getItem('coffeeOrder'));
    $emailAddress.val(localStorage.getItem('emailAddress'));
    $coffeeSize.val(localStorage.getItem('coffeeSize'));
    $shotFlavor.val(localStorage.getItem('shotFlavor'));
    $strengthLevel.val(localStorage.getItem('strengthLevel')); 
});