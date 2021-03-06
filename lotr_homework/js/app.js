console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const modal = $('#myModal');
const span = $('.close')[0];

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  console.log("Trying to make middle earth.");
    const middleEarth = $('<section id="middle-earth"></section>');
      for (let i = 0; i < lands.length; i++) {
        let land = $('<article>');
        land.attr('id', lands[i]);
        land.html("<h1>" + lands[i] + "</h1>");
        middleEarth.append(land);
      };
    $('body').append(middleEarth);

};

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');
  const shire = $("#The-Shire");
  const list = $('<ul id="hobbits"></li>');
  shire.append(list);
  for (let i = 0; i < hobbits.length; i++){
    let hobbit = $('<li class="hobbit"></li>');
    hobbit.text(hobbits[i]);
    list.append(hobbit);
  };
};

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  const ring = $('<div id="the-ring"></div>');
  $(".hobbit:contains('Frodo Baggins')").append(ring);

};

// ============
// Chapter 4
// ============
const makeBaddies = () => {
    const badUL = $('<ul id="baddies"></ul>');
      for (let i = 0; i < baddies.length; i++) {
        let baddy = $('<li class="baddy"></li>');
        baddy.text(baddies[i]);
        badUL.append(baddy);
      };
    $('#Mordor').append(badUL);
};

// ============
// Chapter 5
// ============
const makeBuddies = () => {
    const budUL = $('<aside id="buddies"></aside>');
      for (let i = 0; i < buddies.length; i++) {
        let buddy = $('<li class="buddy"></li>');
        buddy.text(buddies[i]);
        budUL.append(buddy);
      };
    $('#middle-earth').append(budUL);

};

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
$('#Rivendell').append($('#hobbits'));
};

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $("li:contains('Strider')").text('Aragorn');
  };

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const fellowship = $('<div id="the-fellowship"></div>');
  fellowship.html('<h1>The Fellowship</h1>');
  $('#middle-earth').append(fellowship);
  fellowship.append($('#hobbits'));
  fellowship.append($('#buddies'));
  };

// ============
// Chapter 9
// ============
const theBalrog = () => {
  $('li:contains("Gandalf the Grey")').attr('class', "the-white").text("Gandalf the White");
  };

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  modal.css('display', 'block');
  modal.attr('class', 'animated shake');
  $("li:contains('Boromir')").css('text-decoration', 'line-through');
  $("li:contains('Uruk-hai')").remove();
};
$(span).on('click', () => {
      modal.css('display', 'none');
  });

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  $("li:contains('Frodo Baggins')").appendTo($('#Mordor'));
  $(`li:contains("Samwise 'Sam' Gamgee")`).appendTo($('#Mordor'));
  $('#Mordor').append($('<div id="mount-doom"></div>'));
};

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  $('#Mordor').append($('<div id="gollum"></div>'));
  $('#gollum').append($('#the-ring'));
  $('#mount-doom').append($('#gollum'));
};

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $('#gollum').remove();
  $('#baddies').remove();
  $('.hobbit').appendTo($('#The-Shire'));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
