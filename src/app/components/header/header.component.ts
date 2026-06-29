import { Component, HostListener } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  info: PersonalInfo;
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
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

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(target: string): void {
    this.isMobileMenuOpen = false;
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
