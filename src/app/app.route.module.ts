import {ExploreComponent} from './component/explore/explore.component';
import {FormComponent} from './component/form/form.component';
import {HomeComponent} from './component/home/home.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ViewComponent} from './component/view/view.component';
import {EventComponent} from './component/event/event.component';
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import { DetailsComponent } from './details/details.component';

export const AppRoutes = [
    {path:'',component:ExploreComponent},
    {path: 'form',component:FormComponent},
    {path:'details',component:DetailsComponent,children:[
      {path: 'home',component:HomeComponent},
        {path:'navbar',component:NavbarComponent},
        {path:'view',component:ViewComponent},
        {path:'event',component:EventComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},  
    ]},
    
    
];

