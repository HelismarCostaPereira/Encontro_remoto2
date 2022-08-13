let notasAlunos = [
    { matricula: "Ana", nome: "Joao", materia: "Matemática", nota: 78 },
    { matricula: "Ana", nome: "Joao", materia: "Português", nota: 80 },
    { matricula: "Ana", nome: "Joao", materia: "Geografia", nota: 94 },
    { matricula: "João", nome: "Pedro", materia: "Matemática", nota: 66 },
    { matricula: "João", nome: "Pedro", materia: "Inglês", nota: 90 },
    { matricula: "Paulo", nome: "Joana", materia: "História", nota: 80 },
    { matricula: "Paulo", nome: "Joana", materia: "Matemática", nota: 75 } 
   ];
   
   
   let MediaNotasAluno = {};
   for (let notaAluno of notasAlunos) {
       
       if (! MediaNotasAluno[notaAluno.matricula]) {
           MediaNotasAluno[notaAluno.matricula] = {
               'matricula': notaAluno.matricula, 'total': 0, 'qtd': 0
           };
       }
       
       MediaNotasAluno[notaAluno.matricula].total += notaAluno.nota;
       MediaNotasAluno[notaAluno.matricula].qtd++;
   }
   
  
   
   MediaNotasAluno = Object.values(MediaNotasAluno);
   for (let m of MediaNotasAluno) {
       m.media = m.total / m.qtd;
      
       delete m['qtd'];
       delete m['total'];
   }
   console.log(MediaNotasAluno);