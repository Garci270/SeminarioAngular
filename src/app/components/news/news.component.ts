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
      image:'https://www.entrenamiento.com/wp-content/uploads/2017/02/gente-feliz.jpg',
      city: 'España',
      name:'Maria Bartolome'
    },
    {
      title:'Muy lindo reloj',
      coment:'muy lindo reloj.. todo completo, los impuestos aumentaron el costo casi al 30% del valor de compra!!.',
      date:'13 sept 2022',
      image:'https://content.nationalgeographic.com.es/medio/2021/11/15/javier-flores-director-digital-national-geographic_11f07909_600x600.jpeg',
      city: 'Chile',
      name:'Cristian Diaz'
    },
    {
      title:'Excelente plataforma',
      coment:'Excelente plataforma para negociar relojes con tranquilidad y confianza.Gracias y Saludos',
      date:'10 sept 2022',
      image:'http://cdn.lavozdesanjusto.com.ar/Imagenes/1200Imagea40774db88b84c08bd18472097f2ba5c.jpg',
      city: 'Argentina',
      name:'Carlos Bianchi'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
