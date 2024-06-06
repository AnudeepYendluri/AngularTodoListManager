import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData = {
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  };

  constructor() { }

  register() {
    // Implement registration logic here
    console.log('Registration data:', this.formData);
    // Reset form after registration
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      username: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: ''
    };
  }
}
