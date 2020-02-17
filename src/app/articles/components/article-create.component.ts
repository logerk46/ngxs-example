import { Component, OnInit } from "@angular/core";
import { Store } from '@ngxs/store';
import { ArticleActions } from '../state/article.actions';


@Component({
    selector: 'article-create',
    template: `
    <div class="article-create-form">
        <input type="text" placeholder="name" #name>
        <input type="text" placeholder="description" #description>

        <button (click)="addArticle(name.value, description.value)">Add an Article</button>
    </div>`
})
export class ArticleCreateComponent implements OnInit {
    constructor(private store: Store) { }

    ngOnInit(): void { }

    addArticle(name, description) {
        this.store.dispatch(new ArticleActions.AddArticle({ id: Math.floor(Math.random() * 2800), title: name, description: description, status: 0 }))
    }
}   