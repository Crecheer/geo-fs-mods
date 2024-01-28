function checkAndImplementChanges(){
  // make mq9b fun :D
  if (geofs.aircraft.instance.id == 2989) {
    geofs.aircraft.instance.engines[0].thrust = 1000000
    geofs.aircraft.instance.engines[1].thrust = 1000000
  }
}
var repeatChecks = setInterval(checkAndImplementChanges, 1000)
