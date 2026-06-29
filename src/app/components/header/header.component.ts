import { Component, HostListener } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  info: PersonalInfo;
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLang = 'vi';

  navLinks = [
    { label: 'NAV.HOME', target: 'hero' },
    { label: 'NAV.ABOUT', target: 'about' },
    { label: 'NAV.SKILLS', target: 'skills' },
    { label: 'NAV.PROJECTS', target: 'projects' },
    { label: 'NAV.EXPERIENCE', target: 'experience' },
    { label: 'NAV.CONTACT', target: 'contact' }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {
    this.info = this.portfolioService.getPersonalInfo();
    this.currentLang = this.translate.currentLang || 'vi';
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
    this.translate.use(this.currentLang);
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
