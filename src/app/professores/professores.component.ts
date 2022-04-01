import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  //Propriedades
  public modalRef?: BsModalRef; //Modal
  public titulo = 'Professores';
  public professorSelecionado: Professor | null = null;
  
  
  //Atribuindo objetos
  public professores = [
    {id: 1, nome: 'João', disciplina: 'Matematica'},
    {id: 2, nome: 'Vinicius', disciplina: 'Portugues'},
    {id: 3, nome: 'Rodrigo', disciplina: 'Informatica'},
  ];
  
  
  //Construtores
  constructor(private modalService: BsModalService) {  //Modal
    
  } 
  

  ngOnInit() {
  }
  
  
  //Função
  professorSelectOnClick(professor: Professor){
    this.professorSelecionado = professor;
  }
  
  voltarOnClick(){
    this.professorSelecionado = null;
  }


  //Modal
  openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  }
  
}
