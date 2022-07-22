//Functions with same logic but with differente values, those values can be parameterized

function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

//TO

function rise(aPerson, aRaise) {
  aPerson.salary = aPerson.salary.multiply(aRaise);
}
