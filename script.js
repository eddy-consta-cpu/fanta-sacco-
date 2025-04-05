document.addEventListener("DOMContentLoaded", () => {
    const atleti = [
        "Busso Riccardo", "Chiera Mattia", "Balocco Leonardo", "Mantero Giosuè", "Borio Giosuè",
        "Haxijhani Andrea", "Chaibi Moamed", "Fea Leonardo", "Borgan Jacopo", "Fulcheri Cristian",
        "Roccia Samuele", "Tomatis Jacopo", "Sabena Tommaso", "Bihi Elyas", "Crudo Danilo",
        "Milanesio Stefano", "Salomone Luca", "Bonavita Giacomo", "Ranondetti Matia", "Lamantia Amedeo",
        "Colombano Massimo", "De Salvo Leonardo", "Parubi Mattia", "Parubi Giovanni", "Quercio Luca",
        "Costantinica Edoardo", "Giberto Andrea", "Trucco Lorenzo", "Pettiti Meteo", "Barbero Edoardo",
        "Fabrizio Mana", "Grosso Tommaso", "Gallo Tommaso", "Gallo Nicolò", "Dubern Nicolas",
        "Marengo Matteo", "Ballario Emma", "Brero Viola", "Rovai Celeste", "Santanero Irene",
        "Spezia Viola", "Lattanzio Adele", "Sateri Antea", "Mele Miriam", "Giaccardi Nina",
        "Tesio Giada", "Parola Adele", "Grosso Giulia", "Bosio Mia", "Garbero Anna",
        "Panero Vittoria", "Rinero Aurora", "Operti Eleonora", "Chiaramello Michelle",
        "Ciubancan Ioana", "Ciravegna Lucia", "Rossi Giorgia", "Zoroddu Diletta", "Giraldo Lidia",
        "Bertolotti Giulia", "Cauli Francesca"
    ];

    let punteggi = {};
    atleti.forEach(atleta => punteggi[atleta] = 0);

    const listaAtleti = document.getElementById("listaAtleti");
    atleti.forEach(atleta => {
        let li = document.createElement("li");
        li.textContent = `${atleta}: ${punteggi[atleta]} punti`;
        li.setAttribute("data-nome", atleta);
        listaAtleti.appendChild(li);
    });

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("utente", JSON.stringify({
            nome: document.getElementById("nome").value,
            cognome: document.getElementById("cognome").value
        }));
        document.getElementById("registrazione").style.display = "none";
    });

    document.getElementById("legaForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let nomeLega = document.getElementById("nomeLega").value;
        let ulLeghe = document.getElementById("listaLeghe");
        let li = document.createElement("li");
        li.textContent = nomeLega;
        ulLeghe.appendChild(li);
    });
});
