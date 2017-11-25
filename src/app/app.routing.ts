import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { PlacesComponent } from './places/places.component';

const APP_ROUTES: Routes = [
	{ path: '', component: PlaceComponent, pathMatch: 'full' },
	{ path: 'places', component: PlacesComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);