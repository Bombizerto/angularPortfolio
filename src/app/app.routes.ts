import { Router, RouterModule, Routes } from '@angular/router';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { BodyComponent } from './components/body/body.component';



const APP_ROUTES: Routes=[     
    { path: 'presentacion', component: BodyComponent },
    { path: 'trabajo', component: TrabajoComponent },
    {path:"**", pathMatch:"full", redirectTo:"presentacion"}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash : true});
