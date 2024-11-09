const select = document.getElementById("year");
      const btns = document.getElementById("buttons");
      document.getElementById("f1").addEventListener("submit", (e) => {
        e.preventDefault();
      });


      function updateOptions() {
        const y = select.value;
        let btn;

        switch (y) {
          case "6":
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determination of liquid density using Archimedes' law";
            btn.addEventListener("click", () => {
              window.location.replace("/templates/e_0601/e_0601.html");
            });

            buttons.appendChild(btn);
            break;
          case "7":
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Proving Newton's Second Law with Atmund's machine";
            btn.addEventListener("click", () => {
              alert(1);
            });

            buttons.appendChild(btn);

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determining the constant tension \n when the ball moves down the groove";
            btn.addEventListener("click", () => {
              alert(1);
            });

            buttons.appendChild(btn);
            break;
          case "8":
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determination of liquid density using Archimedes' law";
            btn.addEventListener("click", () => {
              alert(1);
            });

            buttons.appendChild(btn);
            break;
        }
      }

      updateOptions();