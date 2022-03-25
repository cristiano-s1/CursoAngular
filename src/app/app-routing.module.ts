import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

//Criar Rotas
const routes: Routes = [
  //Caminhos
  {path: '', redirectTo: 'dashboard', pathMatch:'full'}, //Quando não tiver rota vai redicionar para dashboard
  {path: 'dashboard', component: DashboardComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
