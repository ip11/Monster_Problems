window.onload = function() {

  function updateBatteryStatus(battery) {
      document.querySelector('#charging').textContent = battery.charging ? 'PLUGGED IN' : 'NOT PLUGGED IN';

      document.querySelector('#level').textContent = Math.floor(battery.level * 100) + "%";
      

      document.querySelector('#dischargingTime').textContent =Math.floor(battery.dischargingTime / 3600) + " hrs";
      if (battery.level >= 0.81){
        document.getElementById("set4").style.backgroundColor="green";
        document.getElementById("set3").style.backgroundColor="green";
        document.getElementById("set2").style.backgroundColor="green";
        document.getElementById("set1").style.backgroundColor="green";
        document.getElementById("set5").style.backgroundColor="green";
          
      }
      else if (battery.level >= 0.61){
        document.getElementById("set1").style.backgroundColor="#99ff33";
        document.getElementById("set2").style.backgroundColor="#99ff33";
        document.getElementById("set3").style.backgroundColor="#99ff33";
        document.getElementById("set4").style.backgroundColor="#99ff33";
      }
      else if (battery.level >= 0.41){
        document.getElementById("set1").style.backgroundColor="#ccff33";
        document.getElementById("set2").style.backgroundColor="#ccff33";
        document.getElementById("set3").style.backgroundColor="#ccff33";
          
      }else if (battery.level >= 0.21){
        document.getElementById("set1").style.backgroundColor="#ccff33";
        document.getElementById("set2").style.backgroundColor="#ccff33";
        document.getElementById("set3").style.backgroundColor="#ccff33";
  
          
      }
      else if (battery.level >= 0.11){
        document.getElementById("set1").style.backgroundColor="#ff9900";
        document.getElementById("set2").style.backgroundColor="#ff9900";
          
      }
      else if (battery.level >= 0.01){
        document.getElementById("set1").style.backgroundColor="#ff3300";

          
      }
  }

  navigator.getBattery().then(function(battery) {
      // Update the battery status initially when the promise resolves ...
      updateBatteryStatus(battery);

      // .. and for any subsequent updates.
      battery.onchargingchange = function() {
          updateBatteryStatus(battery);
      };

      battery.onlevelchange = function() {
          updateBatteryStatus(battery);
      };

      battery.ondischargingtimechange = function() {
          updateBatteryStatus(battery);
      };
  });
};
