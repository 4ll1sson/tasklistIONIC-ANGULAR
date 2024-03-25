  import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private tarefaAdicionadaSubject = new Subject<void>();
  private tarefaAtualizadaSubject = new Subject<void>();

  tarefaAdicionada$ = this.tarefaAdicionadaSubject.asObservable();
  tarefaAtualizada$ = this.tarefaAtualizadaSubject.asObservable(); // Adicione esta linha
  
  tarefaAdicionada() {
  
    this.tarefaAdicionadaSubject.next();
   
  }

  tarefaAtualizada() {
    this.tarefaAtualizadaSubject.next();
    console.log(this.tarefaAtualizadaSubject.subscribe)
  }
}
