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
