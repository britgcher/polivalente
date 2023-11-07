import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isFilterVisible = true;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
  
  isModalOpen = false;

  receita_selecionada: any;

  receitas=[
    {src:'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'1', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'2', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'3', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/1425174/pexels-photo-1425174.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  ]
  constructor() {} 

  setOpen(isOpen: boolean, receita: any | null) {
    this.isModalOpen = isOpen;
    this.receita_selecionada = receita;
  }

  onWillDismiss(event: Event) {
    this.isModalOpen = false;
  }

//   isLoading: boolean = false;

//   alunos = [];

//   nome = 'Joaozinho';

//   aluno = {
//     nome: null,
//     idade: null,
//     ra: null,
//     id: null
//   }

//   public file: any = {};

//   constructor(
//     public _authenticate: AuthenticateService,
//     private _crudService: CrudService,
//     public storage: Storage,
//     private _message: MessageService
//   ) { }

//   criarConta(dados: any){
//     this._authenticate.register(dados.email, dados.password)
//   }

//   realizarLogin(dados: any) {
//     this._authenticate.login(dados.email, dados.password);
//   }

//   inserirAluno(dados: any){
//     this.aluno.nome = dados.nome;
//     // this.aluno.idade = 10;
//     // this.aluno.ra = 321321;

//     this._crudService.insert(this.aluno, 'alunos');
//   }

//   listarAlunos(){
//     this._crudService.fetchAll('alunos')
//     .then( alunos => {
//       this.alunos = alunos;
//     })
//   }


//   removerAluno(aluno: any){
//     console.log(aluno);
//     this._crudService.remove(aluno.id, 'alunos')
//   }

//   consultarAluno(dados: any){
//     console.log(dados);
//     this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
//     .then( aluno => {
//       console.log(aluno[0].id);
//     })
//   }

//   atualizarDadosAluno(dados: any){
//     if (this.aluno.id == null) {
//       this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
//       .then( aluno => {
//         this.aluno = aluno[0];
//         console.log(this.aluno);
//       })
//     } else {
//       this._crudService.update(this.aluno.id, dados, 'alunos');
//     }
//   }

//   memorizarArquivo(event: any) {
//     this.file = event.target.files[0];
//   }

//   fazerUpload() {
//     if (!this.file.name) {
//       this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
//       return;
//     }

//     // Upload file and metadata to the object 'images/mountains.jpg'
//       const storageRef = ref(this.storage, this.file.name);
//       const uploadTask = uploadBytesResumable(storageRef, this.file);

//       // Listen for state changes, errors, and completion of the upload.
//       uploadTask.on('state_changed',
//         (snapshot) => {
//           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//           console.log('Upload is ' + progress + '% done');

//           switch (snapshot.state) {
//             case 'paused':
//               console.log('Envio pausado');
//               break;
//             case 'running':
//               console.log('Carregando arquivo');
//               this._message.show('Carregando arquivo, favor aguardar!', 2000);
//               break;
//           }
//         },
//         (error) => {
//           // A full list of error codes is available at
//           // https://firebase.google.com/docs/storage/web/handle-errors
//           switch (error.code) {
//             case 'storage/unauthorized':
//               // User doesn't have permission to access the object
//               console.log('Não enviado! Usuário sem permissão');
//               this._message.show('Não enviado! Usuário sem permissão!');
//               break;
//             case 'storage/canceled':
//               // User canceled the upload
//               console.log('Não enviado: upload cancelado');
//               this._message.show('Erro: Upload cancelado!');
//               break;
//             case 'storage/unknown':
//               // Unknown error occurred, inspect error.serverResponse
//               console.log('Não enviado. Ocorreu um erro desconhecido!');
//               this._message.show('Oops! Ocorreu um erro desconhecido!');
//               break;
//           }

//           console.log('Arquivo enviado');
//           this._message.show('Arquivo enviado com sucesso!');
//         },
//         () => {
//           // Upload completed successfully, now we can get the download URL
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log('Url do arquivo é ' + downloadURL)
//           });
//         }
//       );
//   }

}
