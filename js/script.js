// primo-esercizio
// creare la lista emailù

var emaillist = ["francesco@fmail.com", "giovanna@fmail.com", "stefano@fmail.com", "margherita@fmail.com", "alexandra@fmail.com"];
for ( var i = 0; i < emaillist.lenght; i++) {
  conosle.log(emaillist[i]);
}

// variabile per la verifica

var accessmail = false;

//emailuser
var mailrequest = prompt('Qual\'è la tua mail??');

for ( var i = 0; i < emaillist.lenght; i++ ) {
  if(emaillist[i] === mailrequest) {
    accessmail = true;
  }
}

if(mailrequest === emaillist) {
  alert('Accesso eseguito correttamente!');
} else if (mailrequest |= emaillist)
  alert('Accesso errato!');

// fine primo-esercizio

// secondo-esercizio
var numeroumano = Math.floor(Math.random() *6) +1;
prompt('Scrivi un numero da 1 a 6:');

var numeropc = Math.floor(Math.random() *6) +1;
alert('Il numero scelto dal pc è: ' + numeropc);

//Formula per il vincitore
if(numeroumano > numeropc) {
  alert('Hai vinto!')
} else if(numeropc > numeroumano) {
  alert('Hai perso!');
  alert('Riprova!');
}

// fine formula
