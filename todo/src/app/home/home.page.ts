import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private alertController: AlertController) {}
  saudacao: any;

  data = new Date();
  dia = String(this.data.getDate()).padStart(2, '0');
  mes = String(this.data.getMonth() + 1).padStart(2, '0');
  ano = this.data.getFullYear();
  hora = this.data.getHours();

  mensagemDeSaudacao(){
    if(this.hora >= 12){
      this.saudacao = "Boa tarde, ";
    } else if(this.hora >= 18){
      this.saudacao = "Boa noite, ";
    } else if(this.hora <= 12){
      this.saudacao = "Bom dia, ";
    }
    return this.saudacao;
  };







  
  


  
  dataAtual: number = Date.now();

  async mostrarRotinaAdicao(){
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
      inputs: [{name: 'task', type: 'text', placeholder: 'Digite a tarefa'}],
      buttons: [{text: 'Cancelar', handler: () => {console.log('Cancelar...')}},
                {text: 'Adicionar', handler: () => {console.log('Adicionou...')}}]
    });
    alert.present();
  };

  apagar(){};
  editar(){};

}
