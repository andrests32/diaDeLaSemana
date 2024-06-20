const imgLogo = document.getElementById("imgLogo");
const h1 = document.querySelector("h1");
const inputWeek = document.getElementById("inputWeek");
const bttnNext = document.getElementById("bttnNext");
const imgRandom = document.getElementById("imgRandom");
const span = document.querySelector("span");
const a = document.querySelector("a");

bttnNext.style.display = "none";
imgRandom.style.display = "none";
a.style.display = "none";

const dia = "jueves";

inputWeek.addEventListener("input", () => {
  const useIput = inputWeek.value.trim().toLowerCase();
  if (useIput !== "") {
    bttnNext.style.display = "block";
  } else {
    return;
  }
});

bttnNext.addEventListener("click", () => {
  const useIput = inputWeek.value.trim().toLowerCase();
  if (useIput === dia) {
    imgRandom.style.display = "block";
    imgLogo.style.display = "none";
    h1.style.display = "none";
    inputWeek.style.display = "none";
    bttnNext.style.display = "none";
    span.textContent =
      "¡Ahhss!! Al fín uno que pudo JAJA, no te creas pero tengo un regalo para ti..";
    a.style.display = "block";
  } else {
    alert(`${useIput}!! No es el día correcto, Sigue intentado eres mejor esto! JAJA pero sí lo logras tengo un regalo para tí.`);
    location.reload();
    inputWeek.value = "";
  }
});
