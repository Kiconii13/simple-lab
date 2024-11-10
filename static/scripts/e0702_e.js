function calculateAvgTime() {
    const t30_1 = parseFloat(document.getElementById("d_11").value) || 0;
    const t30_2 = parseFloat(document.getElementById("d_21").value) || 0;
    const t30_3 = parseFloat(document.getElementById("d_31").value) || 0;

    const t45_1 = parseFloat(document.getElementById("d_41").value) || 0;
    const t45_2 = parseFloat(document.getElementById("d_51").value) || 0;
    const t45_3 = parseFloat(document.getElementById("d_61").value) || 0;

    const d30_1 = parseFloat(document.getElementById("d_11").value);
    const d30_2 = parseFloat(document.getElementById("d_21").value);
    const d30_3 = parseFloat(document.getElementById("d_31").value);

    if(t30_1 && t30_2 && t30_3){
        const avg30 = (t30_1 + t30_2 + t30_3) / 3;
        document.getElementById("t_avg_30").value = avg30.toFixed(2);
        document.getElementById("d_13").value = Math.ceil(Math.abs(avg30 - d30_1).toFixed(2));
        document.getElementById("d_23").value = Math.ceil(Math.abs(avg30 - d30_2).toFixed(2));
        document.getElementById("d_33").value = Math.ceil(Math.abs(avg30 - d30_3).toFixed(2));
        // document.getElementById("a1").value = 9.81 / 2;
        document.getElementById("a1").value = (2 * 48) / (avg30 * avg30);

        document.getElementById("sigma_1").value = (((2 * 48) / (avg30 * avg30) - 9.81 / Math.sqrt(2))/(9.81/Math.sqrt(2)) * 100).toFixed(2);
    }

    const d45_1 = parseFloat(document.getElementsByName("d_41").value);
    const d45_2 = parseFloat(document.getElementsByName("d_51").value);
    const d45_3 = parseFloat(document.getElementsByName("d_61").value);

    if(t45_1 && t45_2 && t45_3){
        const avg45 = (t45_1 + t45_2 + t45_3) / 3;
        document.getElementById("t_avg_45").value = avg45.toFixed(2);
        // d45_1.value = (avg45 - d45_1).toFixed(2);
        // d45_2.value = Math.abs(avg45 - d45_2).toFixed(2);
        // d45_2.value = Math.abs(avg45 - d45_2).toFixed(2);

        document.getElementById("d_43").value = Math.ceil(Math.abs(avg45 - t45_1).toFixed(2));
        document.getElementById("d_53").value = Math.ceil(Math.abs(avg45 - t45_2).toFixed(2));
        document.getElementById("d_63").value = Math.ceil(Math.abs(avg45 - t45_3).toFixed(2));
        // document.getElementById("a_2").value = 9.81 / 4;
        document.getElementById("a_2").value = (2 * 40) / (avg45 * avg45);
        document.getElementById("sigma_2").value = (((2 * 40) / (avg45 * avg45) - 9.81 / 2)/(9.81/2) * 100).toFixed(2);
    }

}
