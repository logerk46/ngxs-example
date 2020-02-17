import { State, Action, StateContext, Selector } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';
import { Article } from './../../models/article.model';
import { ArticleActions } from './article.actions';
import { ArticlesService } from 'src/app/services/articles.service';

export class ArticleStateModel {
    articles: Article[];
    filterStatus: number;
}

@State<ArticleStateModel>({
    name: 'articles',
    defaults: {
        articles: [],
        filterStatus: 0
    },
})

export class ArticleState {

    constructor(private articlesService: ArticlesService) { }

    @Selector()
    static filteredArticles(state: ArticleStateModel) {
        return state.articles.filter(a => a.status == state.filterStatus);
    }

    @Selector()
    static getArticlesList(state: ArticleStateModel) {
        return state.articles;
    }

    @Action(ArticleActions.FilterOnChange)
    updateFilter(ctx: StateContext<ArticleStateModel>, { payload }: ArticleActions.FilterOnChange) {
        ctx.setState(
            patch({
                filterStatus: payload
            })
        )
    }

    @Action(ArticleActions.getArticles)
    getARticles(ctx: StateContext<ArticleStateModel>) {
        return this.articlesService.get().pipe(tap((res) => {
            const state = ctx.getState();
            ctx.setState(
                patch({
                    articles: res
                }))
        }))
    }

    @Action(ArticleActions.AddArticle)
    add(ctx: StateContext<ArticleStateModel>, { payload }: ArticleActions.AddArticle) {
        ctx.setState(
            patch({
                articles: append([payload])
            })
        )
    }

    @Action(ArticleActions.EditArticle)
    edit(ctx: StateContext<ArticleStateModel>, { payload }: ArticleActions.EditArticle) {
        ctx.setState(
            patch({
                articles: updateItem<Article>(a => a.id === payload.id, patch<Article>({ title: payload.title, description: payload.description }))
            })
        )
    }

    @Action(ArticleActions.RemoveArticle)
    remove(ctx: StateContext<ArticleStateModel>, { payload }: ArticleActions.RemoveArticle) {
        ctx.setState(
            patch({
                articles: removeItem<Article>(a => a.id === payload)
            })
        )
    }

}