import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) { }

  onLogin() {
    this.errorMessage = '';

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.email, password: this.password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Credenciais inválidas.');
      }
      return response.json();
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        this.router.navigate(['/admin/dashboard']);
      } else {
        throw new Error('Resposta da API inválida: token não encontrado.');
      }
    })
    .catch(error => {
      this.errorMessage = error.message || 'Ocorreu um erro ao tentar fazer o login. Verifique sua conexão e tente novamente.';
      console.error('Erro de login:', error);
    });
  }
}