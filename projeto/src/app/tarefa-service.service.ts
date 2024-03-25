import { Injectable } from '@angular/core';
import { EventService } from './event-service.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private listaTarefa: { tarefa: string, descricao: string }[] = [];

  constructor(private eventService: EventService) { }

  adicionarTarefa(tarefa: string, descricao: string) {
    this.listaTarefa.push({ tarefa, descricao });
    localStorage.setItem("Tarefas", JSON.stringify(this.listaTarefa));
    this.eventService.tarefaAdicionada();
  }

  getListaTarefas() {
    const storedTarefas = localStorage.getItem("Tarefas");
    if (storedTarefas) {
      this.listaTarefa = JSON.parse(storedTarefas);
    }
    return this.listaTarefa;
  }

  deleteTarefas(id: number) {
    this.listaTarefa.splice(id, 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.listaTarefa));
  }

  atualizarTarefa(index: number, novaTarefa: { tarefa: string, descricao: string }) {
    let listaTarefas = JSON.parse(localStorage.getItem('Tarefa atualizada:') || '[]');
    if (index >= 0 && index < listaTarefas.length) {
        listaTarefas[index] = novaTarefa;
        localStorage.setItem('Tarefas', JSON.stringify(listaTarefas));
    }
}

}
