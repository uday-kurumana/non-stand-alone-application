import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name-validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  standalone: false,
  styleUrls: ['./contact-form.scss']
})
export class ContactForm {
  loginForm!: FormGroup;
  regexPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), forbiddenNameValidator(/admin|test|abc/)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(this.regexPattern) ]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)
        
      ]],
      
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login credentials:', this.loginForm.value);
      console.log('Email:', this.loginForm.value.email);
      console.log('Password:', this.loginForm.value.password);
      console.log('Form Submitted Successfully!');

      // Implement your authentication logic here (e.g., call an API)
      // On success, redirect to another page.
      // On failure, display an error message.
    } 
    else {
      console.log('Form is invalid. Please correct the errors and try again.');
    }
     }
}
