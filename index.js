$(document).ready(function () {

    setTimeout(youHaveToBeReady, 3000);

    function youHaveToBeReady () {
      $('#red-light').css({"opacity": "0.3"});
      $('#yellow-light').css({"opacity": "1"});
      setTimeout(youHaveToGo, 2000);
    }

    function youHaveToGo () {
      $('#yellow-light').css({"opacity": "0.3"});
      $('#green-light').css({"opacity": "1"});
      setTimeout(youHaveToStop, 3000);
    }

    function youHaveToStop () {
      $('#green-light').css({"opacity": "0.3"});
      $('#red-light').css({"opacity": "1"});
      setTimeout(youHaveToBeReady, 3000);
    }
});
