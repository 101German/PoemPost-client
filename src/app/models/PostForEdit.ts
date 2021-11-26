export class PostForEdit {
    constructor(
        public id: number,
        public title: string,
        public poemText: string,
        public categoryId: number
    ) { }
}