function ct() {
    var num = document.getElementById("numtr").value;
    var text = "";
    var table = "<center><table>";
    var table2 = "</table></center>";

    for (let i = 0; i < num; i++) {
        text += "<tr style='border-bottom : 2px solid #FF9933;'><th>Sub " + (i+1) + ".</th><th style='width: 90px;'><input name='num' size='1' type='number' id='grade" + (i+1) + "' style='width: 50px;' placeholder='Grade'></th><th style='width: 90px;'><input type='number' id='gid" + (i+1) + "' style='width: 50px;' step='0.1' placeholder='Credit" + (i+1) + "'></th></tr>";
    }
    table += text;
    table += table2;
    document.getElementById("ctr").innerHTML = table;
    document.getElementById("butct").innerHTML = "<button onclick='summit()'>Start calculating</button><button onclick='re()'>Re</button>";
    document.getElementById("pls").innerHTML = "Please enter your grade";
}

function re() {
    document.getElementById("ctr").innerHTML = "<input  size='1' type='number' id='numtr' style='width: 110px;' placeholder='How mara Supject?''>";
    document.getElementById("butct").innerHTML = "<button onclick='ct()'>Create a table</button>";
    document.getElementById("pls").innerHTML = "How mara Supject?";
    
}

function summit() {
    var numG = document.getElementsByName("num").length;
    const grade = [];
    const gid = [];
    var sgrade = 0;
    var sgid = 0;
    var ss = 0;


    for (let i = 0; i < numG; i++ ) {
        var ingrade = document.getElementById("grade" + (i+1)).value;
        grade.push(ingrade);
        var ingid = document.getElementById("gid" + (i+1)).value;
        gid.push(ingid);

        sgrade = sgrade + (grade[i]*gid[i]);
        sgid = sgid + (gid[i]*1);
        ss = sgrade/sgid;
    }
    document.getElementById("demo").innerHTML = ss.toFixed(2); 
}
