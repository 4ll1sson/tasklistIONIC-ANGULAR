import { Component } from '@angular/core';
import { TarefaService } from '../tarefa-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  change: boolean = false;
  tarefa: string ='';
  descricaotarefa:string = '';
  id:number=1;
  constructor(private tarefaService: TarefaService) {}


  changeToDark() {
    this.change = !this.change;
  }


  onSubmit() {
    console.log('Formulário enviado!');
    console.log('Tarefa:', this.tarefa);
    console.log('Descrição da Tarefa:', this.descricaotarefa);
    this.tarefaService.adicionarTarefa(this.tarefa, this.descricaotarefa);
    console.log("Tarefa adicionada:", this.tarefaService.getListaTarefas());
    console.log("Descricao de tarefa:", this.descricaotarefa)
  }

}


