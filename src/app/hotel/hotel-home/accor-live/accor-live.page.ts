import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accor-live',
  templateUrl: './accor-live.page.html',
  styleUrls: ['./accor-live.page.scss'],
})
export class AccorLivePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  benefits() {
    window.open('https://all.accor.com/loyalty-program/cards-status-benefits/index.en.shtml', '_blank');
  }

  llp() {
    window.open('https://all.accor.com/loyalty-program/reasonstojoin/index.en.shtml', '_blank');
  }

}
