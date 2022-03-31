import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  //Propriedades
  public titulo = 'Professores';
  public professorSelecionado: Professor | null = null;

  //Atribuindo objetos
  public professores = [
    {id: 1, nome: 'João', disciplina: 'Matematica'},
    {id: 2, nome: 'Vinicius', disciplina: 'Portugues'},
    {id: 3, nome: 'Rodrigo', disciplina: 'Informatica'},
  ];

  
    //Construtores
    constructor() { }

    ngOnInit() {
    }
  
  //Função
  professorSelectOnClick(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltarOnClick(){
    this.professorSelecionado = null;
  }

}
