import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from 'src/app/models/article.model';
import { Select, Store } from '@ngxs/store';
import { ArticleState } from '../state/article.state';
import { Observable } from 'rxjs';
import { ArticleActions } from '../state/article.actions';

@Component({
    selector: 'article-read',
    template: `
    <div class="articles_wrapper">
    <h3>Articles</h3>
    <select (change)="onChange($event.target.value)">
        <option value="0">Active</option>
        <option value="1">Completed</option>
    </select>
        <div *ngFor="let article of articles | async">
            <div (click)="edit = article.id">{{article.title}}</div>
            <div>{{article.description}}</div> 
            <article-edit *ngIf="edit == article.id" [article]="article"></article-edit>
        </div>
    </div>
    `
})
export class ArticleReadComponent implements OnInit {
    edit: boolean = false;
    @Select(ArticleState.filteredArticles) articles: Observable<Article[]>;

    constructor(private articlesService: ArticlesService, private store: Store) { }

    ngOnInit(): void {
        this.store.dispatch(new ArticleActions.getArticles());
    }

    onChange($event): void {
        this.store.dispatch(new ArticleActions.FilterOnChange($event));
    }
}