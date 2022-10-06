import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  clientes: Cliente[];
  constructor() {

    let fulano: Cliente = new Cliente('Rodrigo', 35);
    let cicrano: Cliente = new Cliente('Iandra', 24);
    let t: Cliente = new Cliente('t', 99);
    this.clientes = [fulano, cicrano, t];


  }

  ngOnInit(): void {
  }

}
class Cliente {
  constructor(
    public nome: string,
    public idade: number
  ) {
  }
}
