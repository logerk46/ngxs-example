import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Array<Article> = [
    { id: 1, title: 'Title1', description: 'Description1', status: 0 },
    { id: 2, title: 'Title2', description: 'Description2', status: 0 },
    { id: 3, title: 'Title3', description: 'Description3', status: 0 },
    { id: 4, title: 'Title4', description: 'Description4', status: 0 },
    { id: 5, title: 'Title5', description: 'Description5', status: 0 }
  ];

  constructor() { }

  get() {
    return of(this.articles);
  }
}
