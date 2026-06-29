import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  info: PersonalInfo;
  displayedText = '';
  typingTexts: string[] = ['Frontend Developer', 'Angular Enthusiast', 'UI/UX Lover', 'Problem Solver'];
  currentTextIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  private typingInterval: any;
  private langSub!: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private translate: TranslateService
  ) {
    this.info = this.portfolioService.getPersonalInfo();
  }

  ngOnInit(): void {
    this.loadTypingTexts();
    this.startTyping();

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadTypingTexts();
    });
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private loadTypingTexts(): void {
    this.translate.get([
      'HERO.TYPING.0',
      'HERO.TYPING.1',
      'HERO.TYPING.2',
      'HERO.TYPING.3'
    ]).subscribe(translations => {
      this.typingTexts = [
        translations['HERO.TYPING.0'],
        translations['HERO.TYPING.1'],
        translations['HERO.TYPING.2'],
        translations['HERO.TYPING.3']
      ];
    });
  }

  private startTyping(): void {
    const currentText = this.typingTexts[this.currentTextIndex];

    if (this.isDeleting) {
      this.displayedText = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
      this.typingSpeed = 50;
    } else {
      this.displayedText = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      this.typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.typingTexts.length;
      this.typingSpeed = 500;
    }

    this.typingInterval = setTimeout(() => this.startTyping(), this.typingSpeed);
  }

  scrollTo(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
