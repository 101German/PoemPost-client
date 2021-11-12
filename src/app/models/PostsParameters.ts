import { SortDirection } from "@angular/material/sort";

export class PostParameters{
    constructor(
    public authorId: number = 0,
    public pageNumber: number = 1,
    public pageSize: number = 5,
    public sortField: string = ' ',
    public order: SortDirection = "asc"
    ){}
}