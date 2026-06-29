import { Component, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  info: PersonalInfo;
  isVisible = false;
  private animated = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {
    this.info = this.portfolioService.getPersonalInfo();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && !this.animated) {
      this.isVisible = true;
      this.animated = true;
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}
