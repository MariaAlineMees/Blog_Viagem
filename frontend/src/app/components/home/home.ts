import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  searchTerm: string = '';
  private currentCategoryId: number | undefined;

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Combina as assinaturas para params e queryParams
    combineLatest([this.route.params, this.route.queryParams])
      .subscribe(([params, queryParams]) => {
        // Pega o ID da categoria do parâmetro de rota
        this.currentCategoryId = params['id'] ? +params['id'] : undefined;
        // Pega o termo de busca do parâmetro de consulta
        this.searchTerm = queryParams['q'] || '';

        // Chama a função para buscar os posts com os novos filtros
        this.fetchPosts();
      });
  }

  fetchPosts(): void {
    this.postService.getPosts(this.currentCategoryId, this.searchTerm).subscribe(data => {
      this.posts = data;
    });
  }

  getSafeSummary(content: string): SafeHtml {
    const summary = content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
    return this.sanitizer.bypassSecurityTrustHtml(summary);
  }

  
}