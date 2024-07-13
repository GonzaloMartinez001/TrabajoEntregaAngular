import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  maxCharacters = 6;
  captchaValue: string = '';
  captchaInput: string = '';
  captchaResult: string = '';
  formValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  createRandomValue(): string {
    let stringValue = '';
    for (let i = 0; i < this.maxCharacters; i++) {
      stringValue += this.characters[Math.floor(Math.random() * this.characters.length)];
    }
    return stringValue;
  }

  initialize(): void {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    this.captchaValue = this.createRandomValue();
  }

  isVerified(): boolean {
    return this.captchaInput === this.captchaValue;
  }

  onCaptchaButtonClick(event: Event): void {
    event.preventDefault();
    this.formValidated = true; // Simula la validación del formulario
    if (this.isVerified()) {
      if (this.formValidated) {
        this.captchaResult = 'Verified';
      }
    } else {
      this.captchaResult = 'Wrong answer, try again';
    }
  }

  onLoginButtonClick(event: Event): void {
    event.preventDefault();
    if (this.isVerified() && this.formValidated) {
      window.location.href = 'myLibrary.html';
    }
  }

  onCaptchaCopy(event: ClipboardEvent): void {
    event.clipboardData?.setData('text/plain', 'Escribí, no seas vago');
    event.preventDefault();
  }
}
