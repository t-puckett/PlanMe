import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dates = [];

  
  addMe(){
    
    this.router.navigateByUrl('additions/additions');
    screen.orientation.lock('portrait');
    
  }

  async delete(key){
    firebase.database().ref('dates/'+key).remove();
  }

  constructor(public router:Router,public navCtrl:NavController) {
    
  }
}
