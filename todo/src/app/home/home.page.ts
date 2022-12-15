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
  diaDaSemana: any;
  nomeUser: any;

  solicitarNomeUser(){
    this.nomeUser = "Arian Weslley";
    return this.nomeUser;
  }

  data = new Date();
  dia = String(this.data.getDate()).padStart(2, '0');
  mes = String(this.data.getMonth() + 1).padStart(2, '0');
  ano = this.data.getFullYear();
  hora = this.data.getHours();

  dSemana = this.data.getDay();

  diaSemanaTratado(){
    if (this.dSemana == 0){
      this.diaDaSemana = "Domingo";
    }
    else if (this.dSemana == 1){
      this.diaDaSemana = "Segunda";
    }
    else if (this.dSemana == 2){
      this.diaDaSemana = "Terça";
    }
    else if (this.dSemana == 3){
      this.diaDaSemana = "Quarta";
    }
    else if (this.dSemana == 4){
      this.diaDaSemana = "Quinta";
    }
    else if (this.dSemana == 5){
      this.diaDaSemana = "Sexta";
    }
    else if (this.dSemana == 6){
      this.diaDaSemana = "Sábado";
    }
    return this.diaDaSemana;
  }

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
