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
  dadosClienteMock(): Cliente[] {
    let cliente: Cliente = new Cliente();
    let clientes: Cliente[] = [];
    cliente.nome = "Rodrigo";
    cliente.cpf = "565566566";
    clientes.push(cliente);
    cliente = new Cliente();
    cliente.nome = "Iandra";
    cliente.cpf = "5989878670";
    cliente.idade = 24;
    cliente.id = 2;
    clientes.push(cliente);
    return clientes;
  }
  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>("http://localhost:8080/api/clientes", cliente);

  }
  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>("http://localhost:8080/api/clientes");

  }
}
