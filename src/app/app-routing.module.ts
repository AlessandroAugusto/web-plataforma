import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarefasFormComponent} from './tarefas/tarefas-form.component';
import { TarefasListaComponent} from './tarefas/tarefas-lista.component';


const routes: Routes = [
      { path: '', component: TarefasListaComponent },
      { path: 'new', component: TarefasFormComponent },
      { path: 'edit/:id', component: TarefasFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
