import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: '../html/dashboard.component.html',
	styleUrls:['../css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	constructor(
		private heroService:HeroService,
		private router:Router
	){ }

	heroes:Hero[] = [];
	getHeroes():void{
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
	}

	goToDetail(hero:Hero):void{
		let link = ['/hero', hero.id];
		console.log("Showing details of hero " + hero.name);
		this.router.navigate(link);
	}

	ngOnInit():void{
		this.getHeroes();
	}
}