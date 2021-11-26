export class Post{
    constructor(
    public id: number,    
    public title: string,
    public poemText: string,
    public likesCount: number,
    public creationDate: string,
    public authorName: string,
    public authorId: number,
    public categoryId: number
    ){}
}