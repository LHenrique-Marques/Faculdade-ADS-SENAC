import { Component } from '@angular/core';
import { ClienteService, Cliente } from './cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Cadastro de Cliente</h2>
    <form (ngSubmit)="salvar()">
      <input [(ngModel)]="cliente.nome" name="nome" placeholder="Nome" required />
      <input [(ngModel)]="cliente.email" name="email" placeholder="Email" required />
      <input [(ngModel)]="cliente.telefone" name="telefone" placeholder="Telefone" required />
      <input [(ngModel)]="cliente.nascimento" name="nascimento" type="date" required />
      <button type="submit">Cadastrar</button>
    </form>
  `
})
export class FormClientesComponent {
  cliente: Cliente = { nome: '', email: '', telefone: '', nascimento: new Date() };

  constructor(private clienteService: ClienteService) {}

  salvar() {
    this.clienteService.adicionar(this.cliente);
    this.cliente = { nome: '', email: '', telefone: '', nascimento: new Date() };
  }
}
