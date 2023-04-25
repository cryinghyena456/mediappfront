import { Injectable } from '@angular/core';
import { Medi } from './medi';
@Injectable({
  providedIn: 'root'
})
export class MediService {

  constructor() { }

  getAll():Medi[]{
    return [{
      id: 1,
      name: 'Liv 52',
      cookTime: '2 hour',
      price: 10,
      favorite: false,
      origins: ['india'],
      stars: 4.5,
      imageUrl: '/assets/images/dea.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id: 2,
      name: 'Crocin',
      price: 20,
      cookTime: '3 hours',
      favorite: true,
      origins: ['India'],
      stars: 4.7,
      imageUrl: '/assets/images/download.jpeg',
      tags: ['SlowFood', 'Lunch'],
    },
    {
      id: 3,
      name: 'Paracetamol',
      price: 5,
      cookTime: '2.5 hr',
      favorite: false,
      origins: ['India'],
      stars: 3.5,
      imageUrl: '/assets/images/download(1).jpeg',
      tags: ['FastFood', 'Hamburger'],
    },
    {
      id: 4,
      name: 'Paracetamol',
      price: 2,
      cookTime: '1 hr',
      favorite: true,
      origins: ['India'],
      stars: 3.3,
      imageUrl: '/assets/images/downloads.jpeg',
      tags: ['FastFood', 'Fry'],
    },
    {
      id: 5,
      name: 'Roll on',
      price: 11,
      cookTime: '4 hr',
      favorite: false,
      origins: ['India'],
      stars: 3.0,
      imageUrl: '/assets/images/img2.jpg',
      tags: ['SlowFood', 'Soup'],
    },
    {
      id: 6,
      name: 'VLIV 52 DS',
      price: 9,
      cookTime: '3 hr',
      favorite: false,
      origins: ['India'],
      stars: 4.0,
      imageUrl: '/assets/images/pur.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },]
  }
}
