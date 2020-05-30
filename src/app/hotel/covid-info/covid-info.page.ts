import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.page.html',
  styleUrls: ['./covid-info.page.scss'],
})
export class CovidInfoPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
