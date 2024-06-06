import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formData = {
    email: '',
    password: ''
  };

  constructor() { }

  login() {
    // Implement login logic here
    console.log('Login data:', this.formData);
    // Reset form after login
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      email: '',
      password: ''
    };
  }

}
