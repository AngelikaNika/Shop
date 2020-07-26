import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'x1fm7lu6yaf1',
  accessToken: '2QPN9VhkKZnoHxka71RVX0ycMvFIk-AaeCV5eo1zmI8',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M'
  }
}

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'abcd',
        imageUrl: 'abcdcdc',
        description: 'cdsa',
        price: 12
      },
      {
        id: 2,
        name: 'abcdrtyui',
        imageUrl: 'rtyui',
        description: 'cdsa',
        price: 15
      }
    ];
  }
    
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}
