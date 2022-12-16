import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaDeTarefas = [
  {tarefa:'Aperte no +'}
  ];

  saudacao: any;
  diaDaSemana: any;
  nomeUser: any;

  
  constructor(private alertController: AlertController) {}

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
    switch (this.hora) {
      case 12: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 13: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 14: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 15: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 16: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 17: 
      this.saudacao = "Boa tarde, ";
      return this.saudacao;
      break;
      case 18: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 19: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 20: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 21: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 22: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 23: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 0: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 1: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 2: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 3: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 4: 
      this.saudacao = "Boa noite, ";
      return this.saudacao;
      break;
      case 5: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 6: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 7: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 8: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 9: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 10: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
      case 11: 
      this.saudacao = "Bom dia, ";
      return this.saudacao;
      break;
    }
  };

  async mostrarRotinaAdicao(){
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
      inputs: [{name: 'task', type: 'text', placeholder: 'Digite a tarefa'}],
      buttons: [{text: 'Cancelar', handler: () => {console.log('Cancelar...')}},
                {text: 'Adicionar', handler: (form) => {this.incluir(form.task)}}]
    });
    alert.present();
  };



  apagar(){
    

  };
  editar(){};




  async incluir(tarefaNova: string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Está em branco',
      buttons: ['OK']
    });

    if(tarefaNova.trim().length < 1){
      alert.present();
    } else {
      this.listaDeTarefas.push(
        {tarefa: tarefaNova}
      );
    };
    }
  };




