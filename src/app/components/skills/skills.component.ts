import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  filteredSkills: Skill[] = [];
  activeFilter: string = 'all';
  isVisible = false;
  private animated = false;

  filters = [
    { labelKey: 'SKILLS.FILTER_ALL', value: 'all' },
    { labelKey: 'SKILLS.FILTER_FRONTEND', value: 'frontend' },
    { labelKey: 'SKILLS.FILTER_BACKEND', value: 'backend' },
    { labelKey: 'SKILLS.FILTER_TOOLS', value: 'tools' }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
    this.filteredSkills = this.skills;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && !this.animated) {
      this.isVisible = true;
      this.animated = true;
    }
  }

  filterSkills(category: string): void {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(s => s.category === category);
    }
  }
}
