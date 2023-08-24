function summit() {
    var grade1 = document.getElementById("grade1").value;
    var gid1 = document.getElementById("gid1").value;
    var grade2 = document.getElementById("grade2").value;
    var gid2 = document.getElementById("gid2").value;
    var grade3 = document.getElementById("grade3").value;
    var gid3 = document.getElementById("gid3").value;
    var grade4 = document.getElementById("grade4").value;
    var gid4 = document.getElementById("gid4").value;
    var grade5 = document.getElementById("grade5").value;
    var gid5 = document.getElementById("gid5").value;
    var grade6 = document.getElementById("grade6").value;
    var gid6 = document.getElementById("gid6").value;
    
    var sgrade,ss,sgid;
    
    sgrade = (grade1*gid1)+(grade2*gid2)+(grade3*gid3)+(grade4*gid4)+(grade5*gid5)+(grade6*gid6);
    sgid = (gid1*1)+(gid2*1)+(gid3*1)+(gid4*1)+(gid5*1)+(gid6*1);
    ss = sgrade/sgid
    document.getElementById("demo").innerHTML = ss.toFixed(2);
    
}