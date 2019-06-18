'use strict';

// Constructor
var Carta = function() {

    var cartaOptions = $('.carta__option');
    var cartaContents = $('.carta__group');
    var closeButton = $('.-close-button');
    var arrows = $('.-arrow');
    var dotsContainer = $('.-dots');
    var dots = $('.-dot');
    var arrowPrev = $('.-arrow--prev');
    var arrowNext = $('.-arrow--next');

    var contentsArray =  $.makeArray(cartaContents);
    var dotsArray =  $.makeArray(dots);

    function init() {
        if($('div').hasClass('-active')) {
            $('div').removeClass('-active')
        }
        cartaContents.first().addClass('-active');
    };
    
    init();
    
    cartaOptions.on('click', function() {
        setActiveContent(arrows);
        setActiveContent(dotsContainer);
        setActiveContent(closeButton);

        var index = cartaOptions.index($(this));

        showSelectedTab(index + 1);
        setActiveDot(index);
    });

    arrowPrev.on('click', function() {
        var newIndex = prevIndex();

        showSelectedTab(newIndex);
        closeContent($(dotsArray));
        setActiveDot(newIndex - 1);

    });

    arrowNext.on('click', function() {
        var newIndex = nextIndex();

        showSelectedTab(newIndex);
        closeContent($(dotsArray));
        setActiveDot(newIndex - 1);
    });

    function nextIndex() {
        var currentIndex = currentActiveIndex();

        return currentIndex >= 0 && currentIndex < contentsArray.length - 1 ? currentIndex + 1 : 1;
    };

    function prevIndex() {
        var currentIndex = currentActiveIndex();

        return currentIndex > 1 && currentIndex < contentsArray.length ? currentIndex - 1 : 4;
    };

    function currentActiveIndex() {
        return contentsArray.findIndex(activeElement);
    }

    function activeElement(element) {
        return $(element).hasClass('-active');
    };

    function setActiveDot(index) {
        $(dotsArray[index]).addClass('-active');
    };

    function showSelectedTab(index) {
        cartaContents.removeClass('-active');
        // setActiveContent(cartaContents);
        $(contentsArray[index]).addClass('-active');
    }
    
    function setActiveContent(element) {
        element.addClass('-active');
    }

    closeButton.on('click', function() {
        closeContent(arrows);
        closeContent(dotsContainer);
        closeContent(closeButton);
        closeContent($(contentsArray));
        closeContent($(dotsArray));
        setActiveContent($(contentsArray).first());
    });

    function closeContent(element) {
        element.removeClass('-active');
   }

};

module.exports = Carta;
