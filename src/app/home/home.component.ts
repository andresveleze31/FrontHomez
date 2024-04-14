import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    {
      name: 'Producto 1',
      image: 'imagen1.jpg',
      price: 100,
    },
    {
      name: 'Producto 2',
      image: 'imagen2.jpg',
      price: 150,
    },
    {
      name: 'Producto 3',
      image: 'imagen3.jpg',
      price: 200,
    },
    {
      name: 'Producto 1',
      image: 'imagen1.jpg',
      price: 100,
    },
    {
      name: 'Producto 2',
      image: 'imagen2.jpg',
      price: 150,
    },
    {
      name: 'Producto 3',
      image: 'imagen3.jpg',
      price: 200,
    },
    {
      name: 'Producto 1',
      image: 'imagen1.jpg',
      price: 100,
    },
    {
      name: 'Producto 2',
      image: 'imagen2.jpg',
      price: 150,
    },
    {
      name: 'Producto 3',
      image: 'imagen3.jpg',
      price: 200,
    },
  ];

  tipos = [
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
    {
      name: 'Apartamentos',
      cantidad: 20,
      img: 'https://homez-appdir.vercel.app/_next/image?url=%2Fimages%2Flistings%2Fas-2.jpg&w=256&q=75',
    },
  ];
  responsiveOptions = [];
}
