import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Importe DomSanitizer

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  
  // Injete DomSanitizer no construtor
  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer 
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  // Novo método para obter um resumo do conteúdo de forma segura
  getSafeSummary(content: string): SafeHtml {
    const summary = content.replace(/<[^>]*>/g, '').substring(0, 100);
    return this.sanitizer.bypassSecurityTrustHtml(summary);
  }
}