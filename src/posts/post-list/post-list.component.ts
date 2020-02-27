import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

}
