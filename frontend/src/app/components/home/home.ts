import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  searchTerm: string = '';

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  searchPosts(): void {
    // Implementação da busca de posts
  }

  // Método que remove as tags HTML e retorna um resumo seguro
  getSafeSummary(content: string): SafeHtml {
    const textWithoutHtml = content.replace(/<[^>]*>/g, '');
    const summary = textWithoutHtml.substring(0, 100) + '...';
    return this.sanitizer.bypassSecurityTrustHtml(summary);
  }
}