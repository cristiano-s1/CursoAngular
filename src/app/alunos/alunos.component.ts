import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //Propriedades
  public alunoForm!: FormGroup; //Nome para o formulário html
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
  constructor(private fb: FormBuilder) { //FormBuilder é criador de formulário
    this.criarForm();
  }

  ngOnInit() {
  }

  //Função para o formulário
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

}
