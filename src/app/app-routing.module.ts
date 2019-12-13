import {RouterModule, Routes} from '@angular/router';
import {CardListComponent} from './card-list/card-list.component';
import {NewCardComponent} from './new-card/new-card.component';
import {NgModule} from '@angular/core';
import {EditCardComponent} from './edit-card/edit-card.component';


const routes: Routes = [
    {
      path: '',
      component: CardListComponent
    },
    {
      path: 'newCard',
      component: NewCardComponent
    },
    {
      path: 'updateCard',
      component: EditCardComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule {
}
