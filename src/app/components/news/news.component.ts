import { Component, OnInit } from '@angular/core';
import { Coment } from './Coment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  coments:Coment[] = [
    {
      title:'Magnífica gestión',
      coment:'Magnífica gestión y profesionalidad. Garantizan la entrega, autenticidad y el precio de los relojes.',
      date:'Ayer',
      image:'../assets/images/coment1.webp',
      city: 'España',
      name:'Maria Bartolome'
    },
    {
      title:'Muy lindo reloj',
      coment:'muy lindo reloj.. todo completo, aunque los impuestos me aumentaron el costo casi al 30% del valor de compra!!.',
      date:'13 sept 2022',
      image:'../assets/images/coment2.jpeg',
      city: 'Chile',
      name:'Cristian Diaz'
    },
    {
      title:'Excelente plataforma',
      coment:'Excelente plataforma para negociar relojes con tranquilidad y confianza.Gracias y Saludos',
      date:'10 sept 2022',
      image:'../assets/images/coment3.jpg',
      city: 'Argentina',
      name:'Carlos Bianchi'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
