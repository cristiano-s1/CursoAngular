import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  //Propriedades
  public titulo = 'Professores';
  public professorSelecionado: string | undefined;

  //Atribuindo objetos
  public professores = [
    {id: 1, nome: 'João', sobrenome: 'Campos', telefone: '2223-4456' },
    {id: 2, nome: 'Vinicius', sobrenome: 'Souza', telefone: '2223-4456' },
    {id: 3, nome: 'Rodrigo', sobrenome: 'Paulo', telefone: '2223-4456' },
  ];
  
  //Função
  professorSelectOnClick(aluno: any){
    this.professorSelecionado = aluno.nome;
  }

  voltarOnClick(){
    this.professorSelecionado = "";
  }

  //Construtores
  constructor() { }

  ngOnInit() {
  }

}
