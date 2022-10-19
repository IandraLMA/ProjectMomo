import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucesso: boolean = false;
  errors: String[];
  message:String;
  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
  } 

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.salvar(this.cliente).subscribe(response => {
      console.log(response);

      this.cliente = response;
      this.message = "Cliente salvo com sucesso.";
      this.errors = null;
    },
      errorResponse => {
        this.errors = errorResponse.error.erros;
        this.message = null;
      }
    );
  }
}
