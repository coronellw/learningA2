import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: '../html/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	constructor(private heroService:HeroService) { }
	heroes:Hero[] = [];
	getHeroes():void{
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
	}

	gotoDetail(hero:Hero):void{
		console.log("Selected hero is "+hero.name);
	}

	ngOnInit():void{
		this.getHeroes();
	}
}