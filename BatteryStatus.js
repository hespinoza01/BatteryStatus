try{
  navigator.getBattery()
    .then(battery => {

      // Detect charging state
      battery.addEventListener('chargingchange', () => {
        let charging = (battery.charging) ? 'conectado' : 'desconectado';
        console.log(`Charging state: Cargador ${charging}`);
      });

      // Detect battery level change
      battery.addEventListener('levelchange', () => {
        console.log(`Battery level: ${battery.level * 100}%`);
      });

    });
}catch (e) {
  console.error("Battery API not found");
}
