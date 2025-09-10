import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category';

@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-management.html',
  styleUrl: './category-management.scss'
})
export class CategoryManagement implements OnInit {
  categories: any[] = [];
  currentCategory: any = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  saveCategory(): void {
    if (this.currentCategory.id) {
      // Lógica de edição
      this.categoryService.updateCategory(this.currentCategory.id, this.currentCategory).subscribe(() => {
        this.loadCategories();
        this.clearForm();
      });
    } else {
      // Lógica de criação
      this.categoryService.createCategory(this.currentCategory).subscribe(() => {
        this.loadCategories();
        this.clearForm();
      });
    }
  }

  editCategory(category: any): void {
    this.currentCategory = { ...category };
  }

  deleteCategory(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.loadCategories();
      });
    }
  }

  clearForm(): void {
    this.currentCategory = {};
  }
}