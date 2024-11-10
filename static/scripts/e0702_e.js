function calculateAvgTime() {
    const t30_1 = parseFloat(document.getElementById("d_11").value) || 0;
    const t30_2 = parseFloat(document.getElementById("d_21").value) || 0;
    const t30_3 = parseFloat(document.getElementById("d_31").value) || 0;

    const t45_1 = parseFloat(document.getElementById("d_41").value) || 0;
    const t45_2 = parseFloat(document.getElementById("d_51").value) || 0;
    const t45_3 = parseFloat(document.getElementById("d_61").value) || 0;

    const d30_1 = parseFloat(document.getElementById("d_13").value);
    const d30_2 = parseFloat(document.getElementById("d_23").value);
    const d30_3 = parseFloat(document.getElementById("d_33").value);

    if(t30_1 && t30_2 && t30_3){
        const avg30 = (t30_1 + t30_2 + t30_3) / 3;
        document.getElementById("t_avg_30").value = avg30.toFixed(2);
        d30_1.value = Math.abs(avg30 - d30_1).toFixed(2);
        d30_2.value = Math.abs(avg30 - d30_2).toFixed(2);
        d30_2.value = Math.abs(avg30 - d30_2).toFixed(2);
    }

    const d45_1 = parseFloat(document.getElementsByName("d_43").value);
    const d45_2 = parseFloat(document.getElementsByName("d_53").value);
    const d45_3 = parseFloat(document.getElementsByName("d_63").value);

    
    if(t45_1 && t45_2 && t45_3){
        const avg45 = (t45_1 + t45_2 + t45_3) / 3;
        document.getElementById("t_avg_45").value = avg45.toFixed(2);
        d45_1.value = (avg45 - d45_1).toFixed(2);
        console.log(d45_1.value);
        d45_2.value = Math.abs(avg45 - d45_2).toFixed(2);
        d45_2.value = Math.abs(avg45 - d45_2).toFixed(2);
    }

}
