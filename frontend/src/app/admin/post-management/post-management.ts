import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post'; 

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-management.html',
  styleUrl: './post-management.scss'
})
export class PostManagement implements OnInit {
  posts: any[] = [];
  currentPost: any = {};
  
  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

  savePost(): void {
    if (this.currentPost.id) {
      // Lógica de edição
      this.postService.updatePost(this.currentPost.id, this.currentPost).subscribe(() => {
        this.loadPosts();
        this.clearForm();
      });
    } else {
      // Lógica de criação
      this.postService.createPost(this.currentPost).subscribe(() => {
        this.loadPosts();
        this.clearForm();
      });
    }
  }

  editPost(post: any): void {
    this.currentPost = { ...post };
  }

  deletePost(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta postagem?')) {
      this.postService.deletePost(id).subscribe(() => {
        this.loadPosts();
      });
    }
  }

  clearForm(): void {
    this.currentPost = {};
  }
}