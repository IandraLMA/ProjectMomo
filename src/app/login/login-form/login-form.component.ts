import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;


  constructor( private router: Router) { }

  ngOnInit(): void {
    this.cadastrando = false;
  }

  enviar(){
    this.router.navigate(["/index"]);
  }
  onSubmit(){
    console.log(`User : ${this.username} , Pass: ${this.username}`)
    this.router.navigate(["/index"]);
  }

  preparaCadastrar(evt : Event){
    evt.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }
}
