const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem);

   delete objPersonagem.aliado;
   delete objPersonagem['status'];
   console.log(objPersonagem.aliado);
   console.log(objPersonagem.status);