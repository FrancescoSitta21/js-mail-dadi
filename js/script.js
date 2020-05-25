// primo-esercizio
// creare la lista emailù

var emaillist = ["francesco@fmail.com", "giovanna@fmail.com", "stefano@fmail.com", "margherita@fmail.com", "alexandra@fmail.com"];
for ( var i = 0; i < emaillist.lenght; i++ ) {
  conosle.log(emaillist[i]);
}

// variabile per la verifica

var acessmail = false;

for ( var i = 0; i < emaillist.lenght; i++ ) {
  if(emaillist[i] == email) {
    acessmail = true;
  }
}

if(acessmail) {
  alert('Accesso eseguito!')
} else {
  alert('Accesso errato!')
}

// fine primo-esercizio

// secondo-esercizio
var numeroumano = Math.floor(Math.random() *6) +1;
prompt('Scrivi un numero da 1 a 6:');

var numeropc = Math.floor(Math.random() *6) +1;
alert('Il numero scelto dal pc è: '+ numeropc);

//Formula per il vincitore
if(numeroumano > numeropc) {
  alert('Hai vinto!')
} else if(numeropc > numeroumano) {
  alert('Hai perso!');
  alert('Riprova!');
}

// fine formula
