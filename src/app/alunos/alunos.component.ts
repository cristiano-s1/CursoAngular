import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //Propriedades
  public titulo = 'Alunos';
  public alunoSelecionado: string | undefined;

  //Atribuindo objetos
  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Campos', telefone: '2223-4456' },
    {id: 2, nome: 'Paula', sobrenome: 'Souza', telefone: '2223-4456' },
    {id: 3, nome: 'Laura', sobrenome: 'Paulo', telefone: '2223-4456' },
  ];

  //Função
  alunoSelectOnClick(aluno: any){
    this.alunoSelecionado = aluno.nome;
  }

  voltarOnClick(){
    this.alunoSelecionado = "";
  }

  //Construtores
  constructor() { }

  ngOnInit() {
  }

}
