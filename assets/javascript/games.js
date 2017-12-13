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
  var emeraldcount = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  $("#pictureToChange").attr("src", "assets/images/Sonic.jpg");
  $("#Emeraldpic").attr("src", "assets/images/chaos_emeralds.jpg");
  $("#emeraldstrack").text(emeraldcount);

  $("#reset").on("click", function reset() {
    // function reset(){
    random = Math.floor(Math.random() * 120 + 19);
    console.log(random);
    $("#randomNumber").text(random);
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    userTotal = 0;
    $("#Emeraldpic").attr("src", "assets/images/chaos_emeralds.jpg");
    $("#finalTotal").text(userTotal);
    $('#outcome').html('');
    if (emeraldcount === 7) {
      $("#pictureToChange").attr("src", "assets/images/SuperSonic.jpg");
    } else {
      $("#pictureToChange").attr("src", "assets/images/Sonic.jpg");
    }
  });

  function winner() {
    // alert("You Won!!");
    wins++;
    $("#numberWins").text(wins);
    emeraldcount++;
    $("#emeraldstrack").text(emeraldcount);

    if (emeraldcount === 7) {
      $('#outcome').html("You've found all of the Chaos Emeralds. You have now become Super Sonic!");
      $("#pictureToChange").attr("src", "assets/images/SuperSonic.jpg");
    } else {
      $('#outcome').html("Congrations you received a Chaos Emerald!");
    }

  }

  function loser() {
    // alert("You Lose!!");
    losses++;
    $("#numberLosses").text(losses);
    $("#pictureToChange").attr("src", "assets/images/robotnik.jpg");

    if (emeraldcount === 0) {
      $("#outcome").html('You Lose!');
    } else {
      emeraldcount--;
      $("#outcome").html('Oh NO! Dr. Robotnik stole a Chaos Emerald');
      $("#emeraldstrack").text(emeraldcount);
    }
  }

  $("#image1").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New_userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner();
      num1 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    } else if (userTotal > random) {
      loser();
      num1 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    }
  })

  $("#image2").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner();
      num2 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    } else if (userTotal > random) {
      loser();
      num2 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
      userTotal = false;
    }
  })

  $("#image3").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner();
      num3 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    } else if (userTotal > random) {
      loser();
      num3 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    }
  })

  $("#image4").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random) {
      winner();
      num4 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    } else if (userTotal > random) {
      loser();
      num4 = false;
      wins = false;
      losses = false;
      emeraldcount = false;
    }
  })
});
