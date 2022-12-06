/**
 * 
 *  Document     : controller.js
 *  Created on   : 13 February, 2017, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Kharagpur
 *  
 */
function initializeSimulation() {
    oldham.init();
    animate();

}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
   // var t1 = document.getElementById("th1").value;
   // var v = 0.15 * t1;
   // document.getElementById("output").value = v;
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    Vo=2*sliderVal*600/sliderVal * (Math.PI / 180);
   
    if (sliderVal > 100 && sliderVal < 180) {
        //alert('fsdaf')
       Sphere.position.y =  sliderVal-310;
        // Cylinder2.translateY(0.02 * sliderVal);
    }
    else if (sliderVal > 180 && sliderVal < 270) {
        //alert('fsdaf')
        Sphere.position.y = -(sliderVal-60);
        //Cylinder2.translateY(0.02 * sliderVal);

    }
//   if (sliderVal >120 && sliderVal <180) {
//        //alert('fsdaf')
//        Cylinder2.position.y = (sliderVal);
//
//    }
    //Cylinder2.position.y = (0.5 * sliderVal);
    //Cylinder1.rotation.y = sliderVal * (Math.PI / 180);
    link1mesh.rotation.z = sliderVal * (Math.PI / 180);
    render();
   
}
