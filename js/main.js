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

window.onload = function(){
  quotes();

};