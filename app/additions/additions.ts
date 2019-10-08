import { Component } from '@angular/core';
import{ActivatedRoute}from'@angular/router';
import{Camera,CameraOptions} from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FireBaseService } from '../provider.service';
import * as firebase from 'firebase';
import {firebaseConfig} from '../../app/environment';
import { NavController } from '@ionic/angular';
import {snapshotToArray} from '../environment';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'additions',
  templateUrl: 'additions.html',
  styleUrls: ['additions.scss'],
})
export class additions {
    dates:any = [];
    time:any =[];
    info:any=[];
    ref = firebase.database().ref('dates/');
    refT = firebase.database().ref('time/');
    refInfo=firebase.database().ref('info/')
    inputText:string = '';
    return(){
        

      }
    
    constructor(public activeRoute:ActivatedRoute,public camera:Camera, public router:Router,private FireBaseService:FireBaseService,public navCtrl:NavController) {
    this.ref.on('value',resp=>{
        this.dates = snapshotToArray(resp);
        this.time = snapshotToArray(resp);
        this.info = snapshotToArray(resp);
    });
    }
    
    addDates(dates: any,time:any,info:any){

        if(dates!==undefined &&dates!==null){
        let newDate = this.ref.push();
        newDate.set(dates);}
        this.inputText = '';
        
        if(time!==undefined && time!==null){
            let newTime = this.ref.push();
            time.set(time);}
        
        
        if(info!==undefined && info!==null){
            let newInfo = this.ref.push();
            newInfo.set(info);}
            //this.router.navigateByUrl('home/home.page');
            

        }
      
    


    init(){
        document.getElementById('camera').addEventListener("click",this.takephoto,false);
    }
    takephoto(){
       
            this.camera.getPicture({ quality:50,allowEdit:true, sourceType:1,mediaType:0,
                  saveToPhotoAlbum: true}).then((imageData)=>{ var image = document.getElementById('pic') as HTMLImageElement;image.src=imageData;
                   }).catch((msg)=>{ document.getElementById('msg').textContent=msg;});
    }

  addMe(){
    alert('addme!')
  }
  
  
 
}

