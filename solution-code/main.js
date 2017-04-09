function shopItem(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

var purpPunch = new shopItem('Purple Sticky Punch', 55, 'images/indica/indica1.jpg');
var dutchCrunch = new shopItem('OG Dutch Crunch', 55, 'images/indica/indica2.jpg');
var pricklyPear = new shopItem('Prickly Pear', 45, 'images/indica/indica3.jpg');
var snicklefritz = new shopItem('Snicklefritz', 45, 'images/indica/indica4.jpg');
var donnieDanko = new shopItem('Donnie Danko', 65, 'images/indica/indica5.jpg');

var indicaArray = [purpPunch, dutchCrunch, pricklyPear, snicklefritz, donnieDanko];

var headBand = new shopItem('Cherry Head Band', 55, 'images/sativa/sativa1.jpg');
var capnCrunch = new shopItem('Capn Crunch', 60, 'images/sativa/sativa2.jpg');
var strawCough = new shopItem('Strawberry Cough', 50, 'images/sativa/sativa3.jpg');
var dirtyHarry = new shopItem('Dirty Harry', 40, 'images/sativa/sativa4.jpg');
var blueDream = new shopItem('Blue Dream', 55, 'images/sativa/sativa5.jpg');

var sativaArray = [headBand, capnCrunch, strawCough, dirtyHarry, blueDream];

var bigBlackB = new shopItem('Big Black Bong', 350, 'images/para/black-bong.jpg');
var snoWhite = new shopItem('Sno White', 350, 'images/para/white-bong.png');
var rastaBong = new shopItem('Rasta Bong', 200, 'images/para/rasta-bong.jpg');
var revoPipe = new shopItem('The Six Shooter', 90, 'images/para/revolver-pipe.jpg');
var popeye = new shopItem('The Popeye', 45, 'images/para/popeye-pipe.jpg');
var rawPapers = new shopItem('Raw Rolling Papers', 2, 'images/para/raw-papers.jpg');
var zigZags = new shopItem('Zig Zags', 2, 'images/para/zig-zag-papers.jpg');

var paraArray = [bigBlackB, snoWhite, rastaBong, revoPipe, popeye, rawPapers, zigZags];

function boxMaker(category, objectArray) {
    for (i = 0; i < objectArray.length; i++) {
        var boxCreator = document.createElement('div');
        boxCreator.classList.add('box');
        var imgDiv = document.createElement('img');
        imgDiv.setAttribute('src', objectArray[i].image);
        boxCreator.appendChild(imgDiv);
        var innerBox = document.createElement('div');
        var h3Div = document.createElement('h3');
        h3Div.innerHTML = objectArray[i].name;
        innerBox.appendChild(h3Div);
        var priceSpan = document.createElement('span');
        priceSpan.innerHTML = `$${objectArray[i].price}.00`;
        innerBox.appendChild(priceSpan);
        boxCreator.appendChild(innerBox);
        var priceDiv = document.createElement('div');
        priceDiv.classList.add('hide');
        priceDiv.classList.add('objectPrice');
        priceDiv.innerHTML = objectArray[i].price;
        boxCreator.appendChild(priceDiv);
        document.getElementById(category).appendChild(boxCreator);
    }
}

function hideCategory(buttonId, show, hide1, hide2) {
    document.getElementById(buttonId).addEventListener('click', function() {
        document.getElementById(show).classList.remove('hide');
        document.getElementById(hide1).classList.add('hide');
        document.getElementById(hide2).classList.add('hide');
    });
}

function onLoad() {
    boxMaker('indica', indicaArray);
    boxMaker('sativa', sativaArray);
    boxMaker('para', paraArray);

    hideCategory('sativa-btn', 'sativa', 'indica', 'para');
    hideCategory('indica-btn', 'indica', 'sativa', 'para');
    hideCategory('para-btn', 'para', 'indica', 'sativa');

    var boxArray = document.getElementsByClassName('box');
    for (i = 0; i < boxArray.length; i++) {
        boxArray[i].addEventListener('click', function() {
            var liCreator = document.createElement('li');
            var itemName = document.createElement('span');
            itemName.innerHTML = this.getElementsByTagName('h3')[0].innerHTML;
            var price = document.createElement('span');
            var objPrice = this.getElementsByClassName('objectPrice')[0].innerHTML;
            price.innerHTML = `$${objPrice}.00`;
            liCreator.appendChild(itemName);
            liCreator.appendChild(price);
            document.querySelector('ul').appendChild(liCreator);
        });
    }
}

document.addEventListener('DOMContentLoaded', onLoad);
