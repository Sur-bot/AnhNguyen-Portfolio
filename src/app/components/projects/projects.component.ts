import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

interface TranslatedProject {
  id: number;
  titleKey: string;
  descKey: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: TranslatedProject[] = [];
  filteredProjects: TranslatedProject[] = [];
  activeFilter = 'all';
  isVisible = false;
  private animated = false;

  filters = [
    { labelKey: 'PROJECTS.FILTER_ALL', value: 'all' },
    { labelKey: 'PROJECTS.FILTER_WEB', value: 'web' },
    { labelKey: 'PROJECTS.FILTER_FULLSTACK', value: 'fullstack' }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    const rawProjects = this.portfolioService.getProjects();
    this.projects = rawProjects.map((p, i) => ({
      id: p.id,
      titleKey: `PROJECTS.ITEMS.${i}.TITLE`,
      descKey: `PROJECTS.ITEMS.${i}.DESCRIPTION`,
      image: p.image,
      technologies: p.technologies,
      category: p.category,
      demoUrl: p.demoUrl,
      githubUrl: p.githubUrl
    }));
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
