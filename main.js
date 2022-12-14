var idGame = 1;

function createGame(group, player1, hour, player2) {
  var placarInicial = JSON.parse(localStorage.getItem(idGame))
  console.log(placarInicial)
  return `
    <li>
      <p>Grupo ${group}</p>
      <div class="horario">
        <div style="width: 90px; height: 80px;">
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <p>${player1}</p>
        </div>
        <form id="scr1">
          <select id="score" name="number" onchange="salvaPlacar(${idGame})">
            <option ${
              !!placarInicial && placarInicial.golsT1 == 0 ? "selected" : ""
            } value="0">0</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 1 ? "selected" : ""
            } value="1">1</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 2 ? "selected" : ""
            } value="2">2</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 3 ? "selected" : ""
            } value="3">3</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 4 ? "selected" : ""
            } value="4">4</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 5 ? "selected" : ""
            } value="5">5</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 6 ? "selected" : ""
            } value="6">6</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 7 ? "selected" : ""
            } value="7">7</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 8 ? "selected" : ""
            } value="8">8</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 9 ? "selected" : ""
            } value="9">9</option>
            <option ${
              !!placarInicial && placarInicial.golsT1 == 10 ? "selected" : ""
            } value="10">10</option>
          </select>
        </form>
        <strong>${hour}</strong>
        <form id="scr2">
          <select value=5 id="score" name="number" onchange="salvaPlacar(${idGame++})">
            <option ${
              !!placarInicial && placarInicial.golsT2 == 0 ? "selected" : ""
            } value="0">0</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 1 ? "selected" : ""
            } value="1">1</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 2 ? "selected" : ""
            } value="2">2</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 3 ? "selected" : ""
            } value="3">3</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 4 ? "selected" : ""
            } value="4">4</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 5 ? "selected" : ""
            } value="5">5</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 6 ? "selected" : ""
            } value="6">6</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 7 ? "selected" : ""
            } value="7">7</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 8 ? "selected" : ""
            } value="8">8</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 9 ? "selected" : ""
            } value="9">9</option>
            <option ${
              !!placarInicial && placarInicial.golsT2 == 10 ? "selected" : ""
            } value="10">10</option>
          </select>
        </form>
        <div style="width: 90px; height: 80px;">
          <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
          <p>${player2}</p>
        </div>
      </div>
    </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  return `
    <div class="card" >
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
      <img src="./assets/logo-fifa.svg" alt="Logo Copa do Mundo Fifa Qatar 2022" />
    </header>
    <main id="cards">
      ${createCard(
        "20/11",
        "domingo",
        createGame("A", "catar", "13:00", "equador")
      )}
      ${createCard(
        "21/11",
        "segunda-feira",
        createGame("B", "inglaterra", "10:00", "ir??") +
          createGame("A", "senegal", "13:00", "holanda") +
          createGame("B", "estados unidos", "16:00", "gales")
      )}
      ${createCard(
        "22/11",
        "ter??a-feira",
        createGame("C", "argentina", "07:00", "ar??bia saudita") +
          createGame("D", "dinamarca", "10:00", "tun??sia") +
          createGame("C", "m??xico", "13:00", "pol??nia") +
          createGame("D", "fran??a", "16:00", "austr??lia")
      )}
      ${createCard(
        "23/11",
        "quarta-feira",
        createGame("F", "marrocos", "07:00", "cro??cia") +
          createGame("E", "alemanha", "10:00", "jap??o") +
          createGame("E", "espanha", "13:00", "costa rica") +
          createGame("F", "b??lgica", "16:00", "canad??")
      )}
      ${createCard(
        "24/11",
        "quinta-feira",
        createGame("G", "su????a", "07:00", "camar??es") +
          createGame("H", "uruguai", "10:00", "coreia do sul") +
          createGame("H", "portugal", "13:00", "gana") +
          createGame("G", "brasil", "16:00", "s??rvia")
      )}
      ${createCard(
        "25/11",
        "sexta-feira",
        createGame("B", "gales", "07:00", "ir??") +
          createGame("A", "catar", "10:00", "senegal") +
          createGame("A", "holanda", "13:00", "equador") +
          createGame("B", "inglaterra", "16:00", "estados unidos")
      )}
      ${createCard(
        "26/11",
        "s??bado",
        createGame("D", "tun??sia", "07:00", "austr??lia") +
          createGame("C", "pol??nia", "10:00", "ar??bia saudita") +
          createGame("D", "fran??a", "13:00", "dinamarca") +
          createGame("C", "argentina", "16:00", "m??xico")
      )}
      ${createCard(
        "27/11",
        "domingo",
        createGame("E", "jap??o", "07:00", "costa rica") +
          createGame("F", "b??lgica", "10:00", "marrocos") +
          createGame("F", "cro??cia", "13:00", "canad??") +
          createGame("E", "espanha", "16:00", "alemanha")
      )}
      ${createCard(
        "28/11",
        "segunda-feira",
        createGame("G", "camar??es", "07:00", "s??rvia") +
          createGame("H", "coreia do sul", "10:00", "gana") +
          createGame("G", "brasil", "13:00", "su????a") +
          createGame("H", "portugal", "16:00", "uruguai")
      )}
      ${createCard(
        "29/11",
        "ter??a-feira",
        createGame("A", "equador", "12:00", "senegal") +
          createGame("A", "holanda", "12:00", "catar") +
          createGame("B", "ir??", "16:00", "estados unidos") +
          createGame("B", "gales", "16:00", "inglaterra")
      )}
      ${createCard(
        "30/11",
        "quarta-feira",
        createGame("D", "tun??sia", "12:00", "fran??a") +
          createGame("D", "austr??lia", "12:00", "dinamarca") +
          createGame("C", "pol??nia", "16:00", "argentina") +
          createGame("C", "ar??bia saudita", "16:00", "m??xico")
      )}
      ${createCard(
        "01/12",
        "quinta-feira",
        createGame("F", "cro??cia", "12:00", "b??lgica") +
          createGame("F", "canad??", "12:00", "marrocos") +
          createGame("E", "jap??o", "16:00", "espanha") +
          createGame("E", "costa rica", "16:00", "alemanha")
      )}
      ${createCard(
        "02/12",
        "sexta-feira",
        createGame("H", "coreia do sul", "12:00", "portugal") +
          createGame("H", "gana", "12:00", "uruguai") +
          createGame("G", "s??rvia", "16:00", "su????a") +
          createGame("G", "camar??es", "16:00", "brasil")
      )}  
    </main>
`
