import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private personajesL: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];
  get personajes(): Personaje[] {
    return [...this.personajesL];
  }
  constructor() {}
  agregarPersonaje(personaje: Personaje): void {
    this.personajesL.push(personaje);
  }
}
