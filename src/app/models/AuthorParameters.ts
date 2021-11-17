import { SortDirection } from "@angular/material/sort";

export class AuthorParameters{
    constructor(
        public authorType: number = 0,
        public pageNumber: number = 1,
        public pageSize: number = 5,
        public sortField: string = ' ',
        public order: SortDirection = "asc"
    ){}
}