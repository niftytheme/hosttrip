import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Website Page Component
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'compare',
    component: CompareComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
