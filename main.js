var words = ["BELENENSES", "BENFICA", "ESTORIL", "SPORTING", "PORTO", "GUIMARAES", "BRAGA", "CHAVES", "MARITIMO", "PORTIMONENSE"];
var letras = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ç', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

function getword() {
    return words[Math.floor(Math.random() * words.length)];
}

function representword(string) {
    document.getElementsByClassName("word")[0].textContent = "";
    document.getElementsByClassName("word")[0].textContent = "\n" + string + "\n";
    var stringlength = string.length;

    for (let i = 0; i < stringlength; i++) {
        document.getElementsByClassName("word")[0].textContent += "_ ";
    }

}

function startgame() {
    var palavra = getword();
    representword(palavra);
}

function representkeys() {
    for (let i = 0; i < letras.length; i++) {
        const letra = letras[i];
        var element = document.createElement("button");
        element.id = 'letra' + i;
        element.className = 'keyplay';
        element.appendChild(document.createTextNode(letra));
        document.getElementById('keyboard_place').appendChild(element);
    }
}
representkeys();

function theFuncToCall(event) {
    //func code
    console.log($(this));
    jogada($(this)[0].innerHTML);
}

$(document).on('click', '.keyplay', theFuncToCall);

function jogada(letter) {
    var palavra = getword();
    document.getElementsByClassName("word")[0].textContent = "";
    document.getElementsByClassName("word")[0].textContent = "\n" + palavra + "\n";
    for (var i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) == letter) {
            document.getElementsByClassName("word")[0].textContent += letter;
        } else {
            document.getElementsByClassName("word")[0].textContent += "_ ";
        }

    }
}