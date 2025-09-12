import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router'; // Adicione 'Router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
    constructor(private router: Router) { } // Adicione o construtor com o Router

    logout(): void {
        localStorage.removeItem('authToken'); // Remove o token do localStorage
        this.router.navigate(['/admin/login']); // Redireciona para a página de login
    }
}