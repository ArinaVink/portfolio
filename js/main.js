function quotes(){
  var randNumber = Math.round(Math.random() * 10)+1;
  var melding = '';

  console.log(randNumber);

  switch(randNumber){
    case 1:
      melding = ' "Ik heb veel talenten waaronder dat ik makkelijk val." ';
      break;
    case 2:
      melding = ' "Ik ben eigenlijk wel een nerd, maar ik zie er niet zo uit." ';
      break;
    case 3:
      melding = ' "Ik heb nooit genoeg schoenen." ';
      break;
    case 4:
      melding = ' "Ik ben niet gek, maar ik ben creatief." ';
      break;
    case 5:
      melding = '"Maar waarom?" ';
      break;
    case 6:
      melding = '"Ik ben niet perfect, maar ik ben wel mijzelf." ';
      break;
    case 7:
      melding = '"Ik hou van lezen van boeken in diverse genres."';
      break;
    case 8:
      melding = '"Ik ben een dromer, een reiziger en ik wil graag leren."';
      break;
    case 9:
      melding = '"Ik hou van pannenkoeken"';
      break;
    default:
      melding = '"Insert your own qoute for the day here..." ';
  }

    document.getElementById('quote').innerHTML = melding;

}
// about me pagina - cv button
function fadeIn() {
    TweenMax.from(document.getElementById('cvButton'), 5, {opacity:0}, {opacity:1});
}

//voor about me pagina - buttons
function showDivIk(){
  var e = document.getElementById('ik');
  e.style.display = ((e.style.display!='none') ? 'none' : 'block');
  }

  function showDivSport(){
    var e = document.getElementById('sport');
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }

  function showDivVragen(){
      var e = document.getElementById('vragen');
      e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }

// hide and show menu lists
function showNested(){
    var e = document.getElementById('ul');
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');

  }
  console.log(showNested);

window.onload = function(){
  quotes();
  fadeIn();
};
