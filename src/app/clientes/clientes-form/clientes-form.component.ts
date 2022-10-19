import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucesso: boolean = false;
  errors: String[];
  id: number;
  atualizado: boolean = false;

  constructor(private service: ClientesService, private routerA: ActivatedRoute, private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const idC = +this.routerA.snapshot.paramMap.get("id");
    console.log(idC);
    if (idC > 0) {
      this.id = idC;
      this.service.buscarPorId(this.id).subscribe(response => {
        this.cliente = response;
      },
        errorResponse => {
          //this.router.navigate(["/clientes-lista"]);
          this.cliente = new Cliente();
        }
      );
    } else {
      this.cliente = new Cliente();
    }
  }
  onSubmit(): void {
    if (this.cliente.id == null) {
      this.service.salvar(this.cliente).subscribe(response => {
        console.log(response);

        this.cliente = response;
        this.sucesso = true;
        this.errors = null;

      },
        errorResponse => {
          this.errors = errorResponse.error.erros;
          this.sucesso = false;
        }
      );

    } else {
      this.service.atualizar(this.cliente).subscribe(response => {
        console.log(response);

        this.atualizado = true;
        this.errors = null;
      },
        errorResponse => {
          this.errors = errorResponse.error.erros;
          this.atualizado = false;
        }
      );



    }
  }
}
