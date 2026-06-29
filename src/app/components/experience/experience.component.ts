import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

interface TranslatedExperience {
  id: number;
  companyKey: string;
  positionKey: string;
  durationKey: string;
  descKeys: string[];
  icon: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: TranslatedExperience[] = [];
  isVisible = false;
  private animated = false;

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    const rawExperiences = this.portfolioService.getExperiences();
    this.experiences = rawExperiences.map((exp, i) => ({
      id: exp.id,
      companyKey: `EXPERIENCE.ITEMS.${i}.COMPANY`,
      positionKey: `EXPERIENCE.ITEMS.${i}.POSITION`,
      durationKey: `EXPERIENCE.ITEMS.${i}.DURATION`,
      descKeys: exp.description.map((_, j) => `EXPERIENCE.ITEMS.${i}.DESC.${j}`),
      icon: exp.icon
    }));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && !this.animated) {
      this.isVisible = true;
      this.animated = true;
    }
  }
}
