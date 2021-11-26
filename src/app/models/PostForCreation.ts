export class PostForCreation{
    constructor(
    public title: string,
    public poemText: string,
    public authorId: number,
    public categoryId: number
    ){}
}