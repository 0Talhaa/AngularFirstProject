import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CarouselComponent } from './carousel/carousel.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path: "product",
        component:ProductsComponent
    },
    {
        path: "carousel",
        component:CarouselComponent

    }
];
