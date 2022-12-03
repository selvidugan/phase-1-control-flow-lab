function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    return "This one is on me!";
  }
  else if (ride > 400 && ride < 2000) {
    return "That will be twenty bucks."
  }
  else if (ride > 2000 && ride < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (ride >2500){
    return "No can do."
  }
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
}
else{
  return "No go."
}
}
ternaryCheckCity(NYC)

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much."
  }
  else if (tip === "not as generous"){
    return "Thank you."
  }
  return "Bye."
}