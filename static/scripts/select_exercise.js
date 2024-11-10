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

            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determining the Elastic Coefficient of a Spring";
            btn.addEventListener("click", () => {
              alert("Coming soon! :)");
            });

            buttons.appendChild(btn);

            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determining the Equivalent Elastic Coefficient of Springs in Series and Parallel";
            btn.addEventListener("click", () => {
              alert("Coming soon! :)");
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
              window.location.replace("/templates/e_0701/e_0701.html");
            });

            buttons.appendChild(btn);

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determining the constant tension \n when the ball moves down the groove";
            btn.addEventListener("click", () => {
              window.location.replace("/templates/e_0702/e_0702.html");
            });

            buttons.appendChild(btn);
            break;
          case "8":
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Determining the equivalent resistance of\nseries and parallel connection of resistors";
            btn.addEventListener("click", () => {
              window.location.replace("/templates/e_0801/e_0801.html");
            });

            buttons.appendChild(btn);
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Measuring the Period of a Pendulum's Oscillatior";
            btn.addEventListener("click", () => {
              alert("Coming soon! :)");
            });

            buttons.appendChild(btn);
            buttons.innerHTML = "";

            btn = document.createElement("input");
            btn.type = "submit";
            btn.classList.add("exercise_button");
            btn.value = "Verifying the Law of Reflection Using a Plane Mirror";
            btn.addEventListener("click", () => {
              alert("Coming soon! :)");
            });

            buttons.appendChild(btn);
            break;
        }
      }

      updateOptions();