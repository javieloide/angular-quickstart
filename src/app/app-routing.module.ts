import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotometrosComponent } from './components/fotometros/fotometros.component';
import { HomeComponent } from './components/home/home.component';
import { PrediccionesComponent } from './components/predicciones/predicciones.component';

// Estan son las diferentes rutas de la aplicacion
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'estaciones-meteorologicas', component: HomeComponent},
  {path: 'predicciones', component: PrediccionesComponent},
  {path: 'fotometros', component: FotometrosComponent},
  {path: '**', redirectTo: 'estaciones-meteorologicas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
