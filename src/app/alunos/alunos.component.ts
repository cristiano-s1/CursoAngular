import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //Propriedades
  public modalRef?: BsModalRef; //Modal
  public alunoForm!: FormGroup; //Formulário
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno | null = null;
  public textSimple: string | null = null;


  //Atribuindo objetos
  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Campos', telefone: '2223-4456' },
    {id: 2, nome: 'Paula', sobrenome: 'Souza', telefone: '2223-4456' },
    {id: 3, nome: 'Laura', sobrenome: 'Paulo', telefone: '2223-4456' },
  ];


  //Construtores
  constructor(private fb: FormBuilder, //Formulário
              private modalService: BsModalService) {  //Modal
    this.criarForm();
  }


  ngOnInit() {
  }


  //Formulário
  criarForm(){
    this.alunoForm = this.fb.group({ //Agrupador de campos do formlário
      nome: ['', Validators.required], //Validators.required -> quer dizer que o campo é obrigatório
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    }); 
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }


  //Função
  alunoSelectOnClick(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno); //Atribui os valores aos campos do form ao clicar em cima de um aluno
  }

  voltarOnClick(){
    this.alunoSelecionado = null;
  }


  //Modal
  openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  }

}
