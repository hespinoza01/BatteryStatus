try{
  navigator.getBattery()
    .then(battery => {

      // Detect charging state
      battery.addEventListener('chargingchange', () => {
        let charging = (battery.charging) ? 'conectado' : 'desconectado';
        console.log(`Charging state: Cargador ${charging}`);
      });

    });
}catch (e) {
  console.error("Battery API not found");
}
