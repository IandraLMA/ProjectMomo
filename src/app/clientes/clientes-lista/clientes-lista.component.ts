import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[];
  clienteSelecionado: Cliente;
  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(response => {
      this.clientes = response;

    });

  }
  editarCliente(): void {

  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;

  }

  deletarCliente() {
    console.log(this.clienteSelecionado)
  }


}
