var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;
var t11, t22, t33, t44, t55, t66;
function myFunction() {
//    validateth1();
    t11 = t1;
    t22 = t2;
    t33 = t3;
    t44 = t4;
    t55 = t5;
    t66 = t6;
    t1 = document.getElementById("th1").value;
    t2 = document.getElementById("th2").value;
    t3 = document.getElementById("th3").value;
    t4 = document.getElementById("th4").value;
    t5 = document.getElementById("th5").value;
    t6 = document.getElementById("th6").value;
    if (t1 >= 161 || t1 <= -161) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 1 should be within -160 to 160";
        return;
    }
    if (t2 >= 46 || t2 <= -226) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 2 should be within -225 to 45";
        return;
    }
    if (t3 >= 136 || t3 <= -136) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -135 to 135";
        return;
    }
    if (t4 >= 171 || t4 <= -111) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -110 to 170";
        return;
    }
    if (t5 >= 101 || t5 <= -101) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -100 to 100";
        return;
    }
    if (t6 >= 227 || t6 <= -227) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -226 to 226";
        return;
    }
    // trans formation matrixes 
    var T1 = ([[Math.cos(t1), 0, Math.sin(t1), 0], [Math.sin(t1), 0, Math.cos(t1), 0], [0, 1, 0, 0.6604], [0, 0, 0, 1]]);
    //alert("x"+a);
    var T2 = ([[Math.cos(t2), 0, -Math.sin(t2), 0.432 * Math.cos(t2)], [Math.sin(t2), Math.cos(t2), 0, 0.432 * Math.sin(t2)], [0, 0, 1, 0.1495], [0, 0, 0, 1]]);
    var T3 = ([[Math.cos(t3), 0, Math.sin(t3), 0], [Math.sin(t3), 0, Math.cos(t3), 0], [0, 1, 0, 0], [0, 0, 0, 1]]);
    //alert("x"+a);
    var T4 = ([[Math.cos(t4), 0, Math.sin(t4), 0], [Math.sin(t4), 0, Math.cos(t4), 0], [0, 1, 0, 0.432], [0, 0, 0, 1]]);
    var T5 = ([[Math.cos(t5), 0, Math.sin(t5), 0], [Math.sin(t5), 0, Math.cos(t5), 0], [0, 1, 0, 0], [0, 0, 0, 1]]);
    var T6 = ([[Math.cos(t6), -Math.sin(t6), 0, 0], [Math.sin(t6), Math.cos(t6), 0, 0], [0, 0, 1, 0.0565], [0, 0, 0, 1]]);


    var g = (math.multiply(T1, T2));
    var h = (math.multiply(g, T3));
    var i = (math.multiply(h, T4));
    var j = (math.multiply(i, T5));
    var l = (math.multiply(j, T6));
    //var px = (math.multiply(math.cos(t1)(0.0565 * (math.cos(t2 + t3) * math.cos(t4) * math.sin(t5) + math.sin(t2 + t3) * math.cos(t5)) + math.sin(t2 + t3) * 0.432 + 0.432 * math.cos(t2)) + math.sin(t1)(0.0565 * math.sin(t4) * math.sin(t5) + 0.1495)));

    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    for (var p = 0; p < 4; p++) {
        var row = table.insertRow(p);
        for (var q = 0; q < 4; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = l[p][q].toPrecision(3);
        }
    }
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo").appendChild(table);
    // var px = ((math.cos(t1)*(0.0565 * (math.cos(t2 + t3) * math.cos(t4) * math.sin(t5) + math.sin(t2 + t3) * math.cos(t5)) + math.sin(t2 + t3) * 0.432 + 0.432 * math.cos(t2)) + math.sin(t1)*(0.0565 * math.sin(t4) * math.sin(t5) + 0.1495)));
    // var py = ((math.sin(t1)*(0.0565 * (math.cos(t2 + t3) * math.cos(t4) * math.sin(t5) + math.sin(t2 + t3) * math.cos(t5)) + math.sin(t2 + t3) * 0.432 + 0.432 * math.cos(t2)) + math.cos(t1)*(0.0565 * math.sin(t4) * math.sin(t5) + 0.1495)));
    //var px = math.cos(t1) * (0.0565 * (math.cos(t2 + t3)));
    // document.getElementById("demo2").innerHTML = px;


    // change due to theta 
    var th1Val = document.getElementById("th1").value;
    oldham.link2Mesh.rotation.y = +th1Val * (Math.PI / 180);

    var th2Val = document.getElementById("th2").value;
    oldham.Link3Mesh.rotation.x = +th2Val * (Math.PI / 180);

    var th3Val = document.getElementById("th3").value;
    oldham.Link4Mesh.rotation.x = +th3Val * (Math.PI / 180);

    var th4Val = document.getElementById("th4").value;
    oldham.BoxL5.rotation.y = +th4Val * (Math.PI / 180);

    var th5Val = document.getElementById("th5").value;
    oldham.Cylinder3L5.rotation.x = +th5Val * (Math.PI / 180);

    var th6Val = document.getElementById("th6").value;
    oldham.CylinderL6.rotation.x = +th6Val * (Math.PI / 180);

   
}
function print(value) {
    var precision = 4;
    document.write(math.format(value, precision) + '<br>');
}


