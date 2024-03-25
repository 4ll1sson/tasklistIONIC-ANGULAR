import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../tarefa-service.service';
import { EventService } from '../event-service.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaTarefas: { tarefa: string, descricao: string }[]=[];
  private subscription: Subscription;
  change: boolean = false;
  alerta: boolean = false;

  constructor(
    private tarefaService: TarefaService,
    private eventService: EventService,
    private navController: NavController,
    private router: Router
  ) {
    this.subscription = this.eventService.tarefaAdicionada$.subscribe(() => {
      this.carregarTarefas();
    });
    this.subscription = this.eventService.tarefaAtualizada$.subscribe(() => {
      this.carregarTarefas();
    });
  }

  ionViewWillEnter() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.listaTarefas = this.tarefaService.getListaTarefas();
  }

  deletarTarefa(id: number) {
    this.tarefaService.deleteTarefas(id);
    this.carregarTarefas();
  }

  atualizarTarefa(tarefa: object) {
    this.router.navigate(['/tabs/tab3'], { queryParams: { tarefa: JSON.stringify(tarefa) }}).then(() => {
      this.eventService.tarefaAtualizada(); 
    });
    this.listaTarefas = this.tarefaService.getListaTarefas();
 
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const { from, to } = event.detail;
    const itemToMove = this.listaTarefas.splice(from, 1)[0];
    this.listaTarefas.splice(to, 0, itemToMove);
    event.detail.complete();
  }

  changeToDark() {
    this.change = !this.change;
  }

  cadTarefa() {
    this.alerta = !this.alerta;
    confirm('EXIBINDO UM CONFIRM')
  }
}
