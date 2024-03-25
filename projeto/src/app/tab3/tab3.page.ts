import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa-service.service';
import { EventService } from '../event-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  change: boolean = false;
  tarefa: any;
  descricaotarefa: string = '';
  listaTarefas: { tarefa: string, descricao: string }[]=[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private eventService: EventService,
    private router: Router // Adicione o Router aqui
 
    ) {
    this.tarefa = { tarefa: '', descricao: '' }; // Inicializa a tarefa vazia
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['tarefa']) {
        this.tarefa = JSON.parse(params['tarefa']);
        console.log(this.tarefa);
      }
    });
  }
  
  changeToDark() {
    this.change = !this.change;
    console.log("Tema aplicado:", this.change);
  }

  atualizarTarefa() {
    const novaTarefa = { tarefa: this.tarefa.tarefa, descricao: this.tarefa.descricao };
    this.tarefaService.atualizarTarefa(this.tarefa.id, novaTarefa)
        this.eventService.tarefaAtualizada(); 
        console.log("Tarefa atualizada:", novaTarefa);
        localStorage.setItem("Tarefa atualizada", JSON.stringify(novaTarefa));
        this.router.navigate(['/tabs/tab1'], { queryParams: { tarefa: JSON.stringify(this.tarefa) }}).then(() => {
          this.eventService.tarefaAtualizada(); 
          this.listaTarefas = this.tarefaService.getListaTarefas();
 
        });
   }

  onSubmit() {
  }
}
