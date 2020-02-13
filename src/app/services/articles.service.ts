import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Array<Article> = [
    {id: 1, title: 'Title1', description: 'Description1'},
    {id: 2, title: 'Title2', description: 'Description2'},
    {id: 3, title: 'Title3', description: 'Description3'},
    {id: 4, title: 'Title4', description: 'Description4'},
    {id: 5, title: 'Title5', description: 'Description5'}
  ];

  constructor() { }

  get() {
    return of(this.articles);
  }
}
