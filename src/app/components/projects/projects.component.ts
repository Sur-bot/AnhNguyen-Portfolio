import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'all';
  isVisible = false;
  private animated = false;

  filters = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Web App', value: 'web' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.filteredProjects = this.projects;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && !this.animated) {
      this.isVisible = true;
      this.animated = true;
    }
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === category);
    }
  }
}
