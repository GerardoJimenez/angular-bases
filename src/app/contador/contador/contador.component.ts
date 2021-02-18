import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `
    <h1>{{ titulo }}</h1>
    <span>La base es <strong>{{ base }}</strong></span>
    <br>
    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
    `,
})
export class AcumuladorComponent {
    titulo = 'Acumulador App';
    numero = 10;
    base = 5;
    acumular( valor: number ): void {
      this.numero += valor;
    }
  }


