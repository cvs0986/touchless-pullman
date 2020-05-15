import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPage } from './hotel.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HotelPage,
    children: [
      {
        path: 'hotel-home',
        children: [
          {
            path: '',
            loadChildren: './hotel-home/hotel-home.module#HotelHomePageModule',
          },
          {
            path: 'journey',
            children: [
              {path: '', loadChildren: './hotel-home/journey/journey.module#JourneyPageModule'},
              {
                path: 'journey-welcome',
                loadChildren: './hotel-home/journey/journey-welcome/journey-welcome.module#JourneyWelcomePageModule'
              },
              {
                path: 'journey-highlights',
                loadChildren: './hotel-home/journey/journey-highlights/journey-highlights.module#JourneyHighlightsPageModule'
              },
              {
                path: 'journey-service',
                loadChildren: './hotel-home/journey/journey-service/journey-service.module#JourneyServicePageModule'
              },
              {
                path: 'journey-experience',
                loadChildren: './hotel-home/journey/journey-experience/journey-experience.module#JourneyExperiencePageModule'
              },
            ]
          },
          {
            path: 'nourishment',
            children: [
              {
                path: '',
                loadChildren:
                  './hotel-home/nourishment/nourishment.module#NourishmentPageModule',
              },
              {
                path: 'nourishment-guide',
                loadChildren:
                  './hotel-home/nourishment/nourishment-guide/nourishment-guide.module#NourishmentGuidePageModule',
              },
              {
                path: 'ird-menu',
                loadChildren:
                  './hotel-home/nourishment/ird-menu/ird-menu.module#IrdMenuPageModule',
              },
              {
                path: 'refreshment-menu',
                loadChildren:
                  './hotel-home/nourishment/refreshment-menu/refreshment-menu.module#RefreshmentMenuPageModule',
              },
              {
                path: 'pre-order-breakfast',
                loadChildren:
                  './hotel-home/nourishment/pre-order-breakfast/pre-order-breakfast.module#PreOrderBreakfastPageModule',
              },
            ],
          },
          {
            path: 'spa',
            children: [
              {path: '', loadChildren: './hotel-home/spa/spa.module#SpaPageModule'},
              {
                path: 'spa-explore',
                loadChildren: './hotel-home/spa/spa-explore/spa-explore.module#SpaExplorePageModule'
              },
              {
                path: 'spa-menu',
                loadChildren: './hotel-home/spa/spa-menu/spa-menu.module#SpaMenuPageModule'
              },
              {
                path: 'spa-etiq',
                loadChildren: './hotel-home/spa/spa-etiq/spa-etiq.module#SpaEtiqPageModule'
              }
            ]
          },
          {
            path: 'conserve',
            loadChildren: './hotel-home/conserve/conserve.module#ConservePageModule',
          },
          {
            path: 'tv-guide',
            loadChildren: './hotel-home/tv-guide/tv-guide.module#TvGuidePageModule',
          },
          {
            path: 'connect',
            loadChildren: './hotel-home/connect/connect.module#ConnectPageModule',
          },
          {
            path: 'laundry',
            loadChildren: './hotel-home/laundry-service/laundry-service.module#LaundryServicePageModule',
          },
        ],
      },
      {
        path: 'covid-info',
        loadChildren: './covid-info/covid-info.module#CovidInfoPageModule'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPageRoutingModule {}
