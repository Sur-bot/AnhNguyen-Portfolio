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
    { labelKey: 'NAV.HOME', target: 'hero' },
    { labelKey: 'NAV.ABOUT', target: 'about' },
    { labelKey: 'NAV.SKILLS', target: 'skills' },
    { labelKey: 'NAV.PROJECTS', target: 'projects' },
    { labelKey: 'NAV.EXPERIENCE', target: 'experience' },
    { labelKey: 'NAV.CONTACT', target: 'contact' }
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
