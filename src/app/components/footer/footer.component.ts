import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  info: PersonalInfo;
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Trang chủ', target: 'hero' },
    { label: 'Giới thiệu', target: 'about' },
    { label: 'Kỹ năng', target: 'skills' },
    { label: 'Dự án', target: 'projects' },
    { label: 'Kinh nghiệm', target: 'experience' },
    { label: 'Liên hệ', target: 'contact' }
  ];

  constructor(private portfolioService: PortfolioService) {
    this.info = this.portfolioService.getPersonalInfo();
  }

  scrollTo(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
