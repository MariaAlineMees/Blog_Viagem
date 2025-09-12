import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {

  categories: any[] = [];
  searchTerm: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  searchPosts(): void {
    // Redireciona para a página inicial (HomeComponent) com o termo de busca na URL
    if (this.searchTerm.trim()) {
      this.router.navigate(['/'], { queryParams: { q: this.searchTerm } });
    } else {
      // Se o campo de busca estiver vazio, navega para a página inicial sem parâmetros
      this.router.navigate(['/']);
    }
  }
}