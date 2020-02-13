import { Article } from '../../models/article.model';

export namespace ArticleActions {
    export class AddArticle {
        static readonly type = '[ARTICLE] Add'
        constructor(public payload: Article) { }
    }

    export class RemoveArticle {
        static readonly type = '[ARTICLE] Remove'
        constructor(public payload: number) { }
    }

    export class EditArticle {
        static readonly type = '[ARTICLE] Edit'
        constructor(public payload: Article) { }
    }

    export class getArticles {
        static readonly type = '[ARTICLE] Get'
    }
}
