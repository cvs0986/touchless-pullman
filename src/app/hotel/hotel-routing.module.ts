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
                path: 'fb',
                loadChildren: './hotel-home/journey/journey-highlights/journey-highlights.module#JourneyHighlightsPageModule'
              },
              {
                path: 'room',
                loadChildren: './hotel-home/journey/journey-service/journey-service.module#JourneyServicePageModule'
              },
              {
                path: 'bathroom',
                loadChildren: './hotel-home/journey/journey-experience/journey-experience.module#JourneyExperiencePageModule'
              },
              {
                path: 'public-area',
                loadChildren: './hotel-home/journey/journey-public-area/journey-public-area.module#JourneyPublicAreaPageModule'
              },
              {
                path: 'well-being',
                loadChildren: './hotel-home/journey/journey-well-being/journey-well-being.module#JourneyWellBeingPageModule'
              },
              {
                path: 'swimming-pool',
                loadChildren: './hotel-home/journey/journey-swimming-pool/journey-swimming-pool.module#JourneySwimmingPoolPageModule'
              },
              {
                path: 'meetings',
                loadChildren: './hotel-home/journey/journey-meetings/journey-meetings.module#JourneyMeetingsPageModule'
              },
              {
                path: 'connectivity',
                loadChildren: './hotel-home/journey/journey-connectivity/journey-connectivity.module#JourneyConnectivityPageModule'
              },
              {
                path: 'poi',
                loadChildren: './hotel-home/journey/journey-poi/journey-poi.module#JourneyPoiPageModule'
              },
              {
                path: 'transportation',
                loadChildren: './hotel-home/journey/journey-transportation/journey-transportation.module#JourneyTransportationPageModule'
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
                path: 'spa-kids',
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
            path: 'irs',
            children: [
              { path: '', loadChildren: './hotel-home/laundry-service/laundry-service.module#LaundryServicePageModule'},
              { path: 'irs-tv', loadChildren: './hotel-home/laundry-service/irs-tv/irs-tv.module#IrsTvPageModule'},
              { path: 'irs-pillow', loadChildren: './hotel-home/laundry-service/irs-pillow/irs-pillow.module#IrsPillowPageModule'},
              { path: 'irs-laundry', loadChildren: './hotel-home/laundry-service/irs-laundry/irs-laundry.module#IrsLaundryPageModule'}
            ]
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
