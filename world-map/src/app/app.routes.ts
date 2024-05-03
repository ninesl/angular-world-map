import { Routes } from '@angular/router';
import { GlobeMapComponent } from './globe-map/globe-map.component';

export const routes: Routes = [
    // { path: 'globe', component: GlobeMapComponent}
    { path: '', component: GlobeMapComponent} //blank is root route
];
