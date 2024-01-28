function checkAndImplementChanges(){
  // make mq9b fun :D
  if (geofs.aircraft.instance.id == 2989) {
    geofs.aircraft.instance.engines[0].thrust = 1000000
    geofs.aircraft.instance.engines[1].thrust = 1000000
  }
  // f16
  if (geofs.aircraft.instance.id == 7) {
    geofs.aircraft.instance.engines[0].thrust = 100000
  }
  // an-140 gets POWER!!!!
  if (geofs.aircraft.instance.id == 26) {
    geofs.aircraft.instance.engines[0].thrust = 100000
    geofs.aircraft.instance.engines[1].thrust = 100000
  }
}
var repeatChecks = setInterval(checkAndImplementChanges, 1000)
