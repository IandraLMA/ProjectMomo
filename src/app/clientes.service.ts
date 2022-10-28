import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
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
    return this.httpClient.post<Cliente>(environment.api_host, cliente);

  }
  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(environment.api_host);

  }
  buscarPorId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.api_host+"/"+id);

  }
  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(environment.api_host, cliente);

  }

  deletar(id: number): Observable<Cliente> {
  
    
    return this.httpClient.delete<any>(environment.api_host+"/"+id);
  }
}
