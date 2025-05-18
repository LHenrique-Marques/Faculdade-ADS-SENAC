import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'tabela-clientes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Clientes</h2>
    <table border="1" width="100%">
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Data de Nascimento</th>
      </tr>
      <tr *ngFor="let cliente of clientes()">
        <td>{{ cliente.nome }}</td>
        <td>{{ cliente.email }}</td>
        <td>{{ cliente.telefone }}</td>
        <td>{{ cliente.nascimento | date: 'dd/MM/yyyy' }}</td>
      </tr>
    </table>
  `
})
export class TabelaClientesComponent {
  clientes = computed(() => this.clienteService.getClientes()());

  constructor(private clienteService: ClienteService) {}
}
