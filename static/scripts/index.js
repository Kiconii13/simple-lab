const fields = document.querySelectorAll("input");

function next() {
    const name = fields[0].value;
    const code = fields[1].value;

    // send this data to backend...
    
    window.location.replace("/templates/select_exercise.html");
}