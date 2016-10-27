import { Component, OnInit } from '@angular/core';

import { Hero } 					from './hero';
import { Router }					from '@angular/router';
import { HeroService } 				from './hero.service';
import { HeroDetailComponent } 		from './hero-detail.component';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: '../html/heroes.component.html',
	styleUrls: ['../css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
	constructor(
		private heroService:HeroService,
		private router:Router
	){}
	heroes: Hero[];
	ngOnInit():void {
		this.getHeroes();
	}	
	selectedHero: Hero;//=this.heroes[0];
	getHeroes():void {
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
	}
	goToDetail():void {
		let link = ['/hero',this.selectedHero.id];
		console.log("Redirecting to hero details using " + link);
		this.router.navigate(link);
	}
	onSelect(hero:Hero):void {
		this.selectedHero = hero;
	}
}
