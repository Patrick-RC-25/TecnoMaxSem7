import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-resenas-componet',
  styleUrl: './resenas-componet.css',
  templateUrl: './resenas-componet.html',
})
export class ResenasComponet {}
import { CommonModule } from '@angular/common';

interface Resena {
  nombre: string;
  comentario: string;
  estrellas: number;
  producto: string;
}

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resenas.component.html'
})
export class ResenasComponent {

  resenas: Resena[] = [
    {
      nombre: 'Carlos Mendoza',
      comentario: 'Excelente atención y el celular llegó en perfecto estado.',
      estrellas: 5,
      producto: 'iPhone 15'
    },
    {
      nombre: 'María Torres',
      comentario: 'La laptop funciona muy bien y la entrega fue rápida.',
      estrellas: 5,
      producto: 'MacBook Air'
    },
    {
      nombre: 'Luis Ramírez',
      comentario: 'Buenos precios y los audífonos tienen excelente calidad.',
      estrellas: 4,
      producto: 'Audífonos inalámbricos'
    }
  ];

}