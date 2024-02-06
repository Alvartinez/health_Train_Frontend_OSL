import { VideoComponent } from './../pages/Recurso/recursosModulo/recursoVideo/video.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineaTiempoComponent } from '../pages/Recurso/recursosModulo/linea-tiempo/linea-tiempo.component';
import { PodcastComponent } from '../pages/Recurso/recursosModulo/podcast/podcast.component';
import { SabiaQueComponent } from '../pages/Recurso/recursosModulo/sabia-que/sabia-que.component';
import { TextoPlanoComponent } from '../pages/Recurso/recursosModulo/texto-plano/texto-plano.component';
import { RecursosComponent } from '../pages/Recurso/recursos/recursos.component';

const routes: Routes = [
   
  {
    path:"new-resource",
    component:RecursosComponent
  }, 
  {
    path:"timeline",
    component:LineaTiempoComponent
  },
  {
    path:"podcast",
    component:PodcastComponent
  },
  {
    path:"sabias-que",
    component:SabiaQueComponent
  },
  {
    path:"video",
    component:VideoComponent
  },
  {
    path:"texto-plano",
    component:TextoPlanoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceRoutingModule {}