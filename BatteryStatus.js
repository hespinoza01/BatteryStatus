try{
  navigator.getBattery()
    .then(battery => {
      let chargingBattery = false;

      // Detect charging state
      battery.addEventListener('chargingchange', () => {
        chargingBattery = battery.charging;
        let charging = (chargingBattery) ? 'conectado' : 'desconectado';
        console.log(`Charging state: Cargador ${charging}`);
      });

      // Detect battery level change
      battery.addEventListener('levelchange', () => {
        console.log(`Battery level: ${battery.level * 100}%`);
      });

      // Calc battery charging time change
      battery.addEventListener('chargingtimechange', () => {
        if(chargingBattery) console.log(`Tiempo estimado para carga completa de la batería: ${battery.chargingTime} segundos`);
      });

      // Calc battery discharging time change
      battery.addEventListener('dischargingtimechange', () => {
        if(!chargingBattery) console.log(`Duración estimada de la batería: ${battery.dischargingTime} segundos`);
      });

    });
}catch (e) {
  console.error("Battery API not found");
}
