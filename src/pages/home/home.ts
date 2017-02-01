import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  good: boolean;
  cheap: boolean;
  fast: boolean;

  constructor(public navCtrl: NavController) {

  }

  verifyGood(e) {
    if(e == true && this.cheap == true && this.fast == true) {
      this.fast = false;
    }
  }

  verifyCheap(e) {
    if(e == true && this.cheap == true && this.fast == true) {
      this.good = false;
    }
  }

  verifyFast(e) {
    if(e == true && this.cheap == true && this.fast == true) {
      this.cheap = false;
    }
  }
}
