var $coffeeOrder = $('[data-type="coffeeOrder"]');
var $emailAddress = $('[data-type="emailAddress"]');
var $coffeeSize = $("[data-type='coffeeSize']");
var $shotFlavor = $("[data-type='shotFlavor']");
var $strengthLevel = $("[data-type='strengthLevel']");
var $theForm = $('[data-coffee-order="form"]')
var Key = "";
var Orders = {};
var length = Orders.length;
var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders";
var counter = 0;
var ORDERS_LISTING_SELECTOR = '[data-coffee-orders]';

//SUBMISSION
$theForm.on('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('coffeeOrder', $coffeeOrder.val());
    localStorage.setItem('emailAddress', $emailAddress.val());
    localStorage.setItem('coffeeSize', $coffeeSize.val());
    localStorage.setItem('shotFlavor', $shotFlavor.val());
    localStorage.setItem('strengthLevel', $strengthLevel.val());
    var recentOrder = pullFromLocal();
    storeOrder(recentOrder);
    counter++;
// Get callback
    getServerData();
    sendDataToServer(recentOrder);
    drawData(recentOrder);
    // $.get(URL, function(data) {
    //     console.log(data);
    deleteOrder(recentOrder.emailAddress);

});

// Posting truncated data to fit Chris's 
    // console.log(recentOrderId["responseText"]);
    // console.log(recentOrderId.responseText);
    // getServerData();

// });


// PULL ORDER FROM LOCAL STORAGE
function pullFromLocal() {
    var justPlaced = {};
    for (var i = 0; Key = window.localStorage.key(i); i++) {
        justPlaced[Key] = window.localStorage.getItem(Key);
    }
    return justPlaced;
};

// STORE PULL INTO ARRAY OF OBJECTS;
function storeOrder(recent) {
    Orders[counter] = recent;
}

$(window).on('load', function (event) {
    $coffeeOrder.val(localStorage.getItem('coffeeOrder'));
    $emailAddress.val(localStorage.getItem('emailAddress'));
    $coffeeSize.val(localStorage.getItem('coffeeSize'));
    $shotFlavor.val(localStorage.getItem('shotFlavor'));
    $strengthLevel.val(localStorage.getItem('strengthLevel')); 
});

function truncateData(object) {
    var newObject = {
        'coffee': object['coffeeOrder'],
        'emailAddress': object['emailAddress']
    }
    return newObject;
}


function getServerData() {
    $.get(URL, function(data) {
    console.log(data);
    })
};


function sendDataToServer(data) {
    $.post(URL, truncateData(data), function(response) {
    console.log(response);
    })
};


function iterateWithObj(obj, fn) {
    Object.keys(obj).forEach(fn);
}

function createCell(data) {
    return $('<td>', {
        'class': 'order-cell',
        html: data
    });
}

function createRow(cellArray) {
    var $tr = $('<tr>');
    cellArray.forEach(function (cell) {
        $tr.append(cell);
    })
    return $tr;
}


function drawData(data) {
    var $listing = $(ORDERS_LISTING_SELECTOR);
    console.log(data);
    var $table = $('<table>');
    iterateWithObj(data, function(key) {
        var $tr = createRow([
            createCell(key),
            createCell(data[key])
        ]);
        $table.append($tr);
        
    })
    var $wrapperDiv = $('<div>');
    var orderBox = $('<input type="checkbox" class="order-box"/>');
    orderBox.on('click', function(event) {
    var $target = $(event.target);
    $target.closest('div').remove();
});

    $wrapperDiv
        .append(orderBox)
        .append($table)
        .append('<br>')

    $listing
        .append($wrapperDiv)
}

function deleteOrder(id) {
    return $.ajax( {
        url: URL + '/' + id,
        method: 'DELETE'
    });
}


function deleteDom(item) {
    var $existingOrders = $(ORDERS_LISTING_SELECTOR);
    $existingOrders.remove(item);

}




getServerData();