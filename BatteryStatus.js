try{
  navigator.getBattery()
    .then(battery => {
    });
}catch (e) {
  console.error("Battery API not found");
}
