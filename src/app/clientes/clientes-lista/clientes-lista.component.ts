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
  errors: String[];
  message: String;
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
    this.clienteService.deletar(this.clienteSelecionado.id).subscribe(response => {
      console.log(response);

      this.message = "Cliente deletado com sucesso";
      this.errors = null;
      this.ngOnInit();
    },
      errorResponse => {
        this.errors = errorResponse.error.erros;
      }
    );
  }


}
