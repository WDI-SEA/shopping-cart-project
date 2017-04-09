function shopItem(name, price, counter, image, category) {
    this.counter = counter;

    var boxCreator = document.createElement('div');
    boxCreator.classList.add('box');
    var imgDiv = document.createElement('img');
    imgDiv.setAttribute('src', image);
    boxCreator.appendChild(imgDiv);
    var innerBox = document.createElement('div');
    var h3Div = document.createElement('h3');
    h3Div.innerHTML = name;
    innerBox.appendChild(h3Div);
    var priceSpan = document.createElement('span');
    priceSpan.innerHTML = `$${price}.00`;
    innerBox.appendChild(priceSpan);
    boxCreator.appendChild(innerBox);
    document.getElementById(category).appendChild(boxCreator);

    boxCreator.addEventListener('click', function() {
        if (counter <= 1) {
            var liCreator = document.createElement('li');
            var itemName = document.createElement('span');
            itemName.innerHTML = name;
            var itemPrice = document.createElement('span');
            itemPrice.setAttribute('id', name);
            itemPrice.innerHTML = `$${price}.00`;
            liCreator.appendChild(itemName);
            liCreator.appendChild(itemPrice);
            document.querySelector('ul').appendChild(liCreator);
            counter += 1;
        } else if (counter > 1) {
            var priceMultiplied = document.getElementById(name);
            var multiplyer = price * counter;
            priceMultiplied.innerHTML = `$${multiplyer}.00`;
            counter += 1;
        }
    });
}

function hideCategory(buttonId, show, hide1, hide2) {
    document.getElementById(buttonId).addEventListener('click', function() {
        document.getElementById(show).classList.remove('hide');
        document.getElementById(hide1).classList.add('hide');
        document.getElementById(hide2).classList.add('hide');
    });
}

function onLoad() {
    var purpPunch = new shopItem('Purple Sticky Punch', 55, 1, 'images/indica/indica1.jpg', 'indica');
    var dutchCrunch = new shopItem('OG Dutch Crunch', 55, 1, 'images/indica/indica2.jpg', 'indica');
    var pricklyPear = new shopItem('Prickly Pear', 45, 1, 'images/indica/indica3.jpg', 'indica');
    var snicklefritz = new shopItem('Snicklefritz', 45, 1, 'images/indica/indica4.jpg', 'indica');
    var donnieDanko = new shopItem('Donnie Danko', 65, 1, 'images/indica/indica5.jpg', 'indica');
    var headBand = new shopItem('Cherry Head Band', 55, 1, 'images/sativa/sativa1.jpg', 'sativa');
    var capnCrunch = new shopItem('Capn Crunch', 60, 1, 'images/sativa/sativa2.jpg', 'sativa');
    var strawCough = new shopItem('Strawberry Cough', 50, 1, 'images/sativa/sativa3.jpg', 'sativa');
    var dirtyHarry = new shopItem('Dirty Harry', 40, 1, 'images/sativa/sativa4.jpg', 'sativa');
    var blueDream = new shopItem('Blue Dream', 55, 1, 'images/sativa/sativa5.jpg', 'sativa');
    var bigBlackB = new shopItem('Big Black Bong', 350, 1, 'images/para/black-bong.jpg', 'para');
    var snoWhite = new shopItem('Sno White', 350, 1, 'images/para/white-bong.png', 'para');
    var rastaBong = new shopItem('Rasta Bong', 200, 1, 'images/para/rasta-bong.jpg', 'para');
    var revoPipe = new shopItem('The Six Shooter', 90, 1, 'images/para/revolver-pipe.jpg', 'para');
    var popeye = new shopItem('The Popeye', 45, 1, 'images/para/popeye-pipe.jpg', 'para');
    var rawPapers = new shopItem('Raw Rolling Papers', 2, 1, 'images/para/raw-papers.jpg', 'para');
    var zigZags = new shopItem('Zig Zags', 2, 1, 'images/para/zig-zag-papers.jpg', 'para');

    var boxArray = document.getElementsByClassName('box');
    for (i = 0; i < boxArray.length; i++) {
        boxArray[i].addEventListener('click', function() {
            if (this.counter > 0) {

            }
        });
    }

    hideCategory('sativa-btn', 'sativa', 'indica', 'para');
    hideCategory('indica-btn', 'indica', 'sativa', 'para');
    hideCategory('para-btn', 'para', 'indica', 'sativa');
}

document.addEventListener('DOMContentLoaded', onLoad);
