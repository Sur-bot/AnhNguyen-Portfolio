import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: PersonalInfo;
  isVisible = false;

  stats = [
    { value: 0, target: 6, label: 'Dự án', suffix: '+' },
    { value: 0, target: 1, label: 'Năm KN', suffix: '+' },
    { value: 0, target: 14, label: 'Kỹ năng', suffix: '' },
    { value: 0, target: 3, label: 'Chứng chỉ', suffix: '' }
  ];

  private animated = false;

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {
    this.info = this.portfolioService.getPersonalInfo();
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75 && !this.animated) {
      this.isVisible = true;
      this.animated = true;
      this.animateCounters();
    }
  }

  private animateCounters(): void {
    this.stats.forEach((stat) => {
      const duration = 1500;
      const steps = 40;
      const increment = stat.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.value = stat.target;
          clearInterval(interval);
        } else {
          stat.value = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}
