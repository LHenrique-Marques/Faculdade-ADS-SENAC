import { Component } from '@angular/core';
import { FormClientesComponent } from './form-clientes.component';
import { TabelaClientesComponent } from './tabela-clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormClientesComponent, TabelaClientesComponent],
  template: `
    <h1>Cadastro de Clientes</h1>
    <form-clientes></form-clientes>
    <hr />
    <tabela-clientes></tabela-clientes>
  `
})
export class AppComponent {}
