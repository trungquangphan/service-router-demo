import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictionaryPageComponent } from './components/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './components/dictionary-detail/dictionary-detail.component';


const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [
    {
      path: ':key',
      component: DictionaryDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
