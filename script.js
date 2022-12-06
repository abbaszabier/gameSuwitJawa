let scorePlayer = 0;
let scoreComputer = 0;

function pilihanComputer() {
  const pilComp = Math.floor(Math.random() * 3);
  if (pilComp == 0) return "gajah";
  if (pilComp == 1) return "orang";
  return "semut";
}

function hasil(pilPlayers, pilComp) {
  if (pilPlayers == pilComp) {
    return "SERI!";
  } else if (pilPlayers == "gajah") {
    if (pilComp == "orang") {
      scorePlayer++;
      return "MENANG!";
    } else {
      scoreComputer++;
      return "KALAH!";
    }
  } else if (pilPlayers == "orang") {
    if (pilComp == "semut") {
      scorePlayer++;
      return "MENANG!";
    } else {
      scoreComputer++;
      return "KALAH!";
    }
  } else if (pilPlayers == "semut") {
    if (pilComp == "gajah") {
      scorePlayer++;
      return "MENANG!";
    } else {
      scoreComputer++;
      return "KALAH!";
    }
  }
}

const pilihan = document.querySelectorAll("div button");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pCom = pilihanComputer();
    const pPlay = pil.id;
    const hasilMain = hasil(pPlay, pCom);

    const oCom = document.querySelector(".img-komputer");
    oCom.setAttribute("src", "img/" + pCom + ".png");

    const oPlay = document.querySelector(".img-player");
    oPlay.setAttribute("src", "img/" + pPlay + ".png");

    const sPlay = document.querySelector(".score-computer");
    sPlay.innerHTML = `${scorePlayer}`;

    const sCom = document.querySelector(".score-player");
    sCom.innerHTML = `${scoreComputer}`;

    const output = document.querySelector(".info");
    output.innerHTML = hasilMain;
  });
});
