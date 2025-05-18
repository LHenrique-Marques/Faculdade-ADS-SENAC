import { Injectable, signal } from '@angular/core';

export interface Cliente {
  nome: string;
  email: string;
  telefone: string;
  nascimento: Date;
}

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes = signal<Cliente[]>([]);

  getClientes() {
    return this.clientes;
  }

  adicionar(cliente: Cliente) {
    this.clientes.update(lista => [...lista, cliente]);
  }
}
