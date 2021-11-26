import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { Post } from 'src/app/models/Post';
import { PostForCreation } from 'src/app/models/PostForCreation';
import { PostForEdit } from 'src/app/models/PostForEdit';
import { CategoryService } from 'src/app/services/category.service';
import { ImportPostDataService } from 'src/app/services/import-post-data.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() post: Post | undefined
  @Input() editMod!: boolean
  @Input() authorId!: number
  categories: Category[] = [];
  public form: FormGroup = new FormGroup({
    "title": new FormControl(" ", [Validators.required, this.inputValidator]),
    "poemText": new FormControl(" ", [Validators.required, this.inputValidator]),
    "category": new FormControl()
  })
  constructor(private readonly categoryService: CategoryService,
    private readonly postService: PostService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
    if (this.post != undefined) {
      this.form = new FormGroup({
        "title": new FormControl(this.post.title, [Validators.required, this.inputValidator]),
        "poemText": new FormControl(this.post.poemText, [Validators.required, this.inputValidator]),
        "category": new FormControl(this.post.categoryId)
      })
    }
  }
  inputValidator(control: FormControl) {
    if (control.value == " ") {
      return { "title": true };
    }
    return null;
  }

  public create() {
    this.postService.createPost(new PostForCreation(
      this.form.value['title'],
      this.form.value['poemText'],
      this.authorId,
      this.form.value['category'],
    )).subscribe((post:Post)=>alert(`Post ${post.title} was created`));
  }
  public edit(){
    this.postService.updatePost(new PostForEdit(
      this.post!.id,
      this.form.value['title'],
      this.form.value['poemText'],
      this.form.value['category']
    )).subscribe(()=>alert("Post was updated"))
  }
}
