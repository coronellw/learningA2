import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { HeroesComponent } 		from './heroes.component';
import { DashboardComponent }	from './dashboard.component';
import { HeroDetailComponent }	from './hero-detail.component';

const AppRoutes:Routes = [
	{ path:'', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}