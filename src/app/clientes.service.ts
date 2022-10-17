import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) {

  }
  dadosClienteMock(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = "Rodrigo";
    cliente.cpf = "565566566";
    return cliente;
  }
  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>("http://localhost:8080/api/clientes", cliente);

  }
}
