import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Certifique-se de importar o AlertController

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  mensagem: string = "Ola mundo!"
  alerta: boolean = false;

  constructor(private alertController: AlertController) {} 

  async exibindoAlerta() { 
    const alert = await this.alertController.create({
      header: 'Lista de tarefas',
      subHeader: 'Uma tabela com lista de tarefas',
      message: 'Esta é uma tabela com lista de tarefas a serem concluidas',
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
