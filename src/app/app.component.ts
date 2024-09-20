import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HeroComponent } from './component/hero/hero.component';
import { SkillsComponent } from './component/skills/skills.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent,AboutComponent , SkillsComponent , PortfolioComponent , FooterComponent , FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
