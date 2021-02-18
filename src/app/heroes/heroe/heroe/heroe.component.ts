import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre = 'Ironman';
    edad   = 45;
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(): string {
        return this.nombre = 'Spiderman';
    }
    cambiarEdad(): number {
        return this.edad = 16;
    }
}
