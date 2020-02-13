import { Component, OnInit, Input } from "@angular/core";
import { Store } from '@ngxs/store';
import { Article } from 'src/app/models/article.model';
import { ArticleActions } from '../state/article.actions';


@Component({
    selector: 'article-edit',
    template: `
        <input type="text" [(ngModel)]="article.title" name="title">
        <input type="text" [(ngModel)]="article.description" name="description">
        <button (click)="onSubmit()">Save</button>
    `
})
export class ArticleEditComponent implements OnInit {
    @Input('article') article: Article;

    constructor(private store: Store) {}

    ngOnInit(): void {

    }

    onSubmit(): void {
        this.store.dispatch(new ArticleActions.EditArticle(this.article));
    }
}