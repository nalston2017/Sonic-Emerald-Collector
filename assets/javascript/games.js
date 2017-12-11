$(document).ready(function() {

  var random = Math.floor(Math.random() * 120 + 19);

  $("#randomNumber").text(random);

  var num1 = Math.floor(Math.random() * 12 + 1);
  var num2 = Math.floor(Math.random() * 12 + 1);
  var num3 = Math.floor(Math.random() * 12 + 1);
  var num4 = Math.floor(Math.random() * 12 + 1);

  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  $("#pictureToChange").attr("src","assets/images/Sonic.jpg");

  // $("#reset").on("click", function() {
    function reset(){
    random = Math.floor(Math.random() * 120 + 19);
    console.log(random);
    $("#randomNumber").text(random);
    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);
    userTotal = 0;
//Set that
    $("#finalTotal").text(userTotal);
    // $('#outcome').html('');
    if (wins >= 8) {
    $("#pictureToChange").attr("src","assets/images/supersonicemeralds.jpg");
    } else {
    $("#pictureToChange").attr("src","assets/images/Sonic.jpg");
    }
  }

  function winner() {
    // alert("You Won!!");
    wins++;
    $("#numberWins").text(wins);
    $('#outcome').html('You won!');
    // if (wins <= 2) {
    //   $("#Emeraldpic").append($(this).attr("src","assets/images/chaos_emerald.jpg"));
    // }
    reset();
  }

  function loser() {
    // alert("You Lose!!");
    losses++;
    $("#numberLosses").text(losses);
    $("#outcome").html('You Lose!');
    $("#pictureToChange").attr("src","assets/images/robotnik.jpg");
    reset();
  }

  $("#image1").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner()
    } else if (userTotal > random) {
      loser()
    }
  })

  $("#image2").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner()
    } else if (userTotal > random) {
      loser()
    }
  })

  $("#image3").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner()
    } else if (userTotal > random) {
      loser()
    }
  })

  $("#image4").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner()
    } else if (userTotal > random) {
      loser()
    }
  })
});
