/** Importaciones de librerias a usar */

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

// Decorador Componente este indica que el Home Page es un Componente
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
})
export class HomePage implements OnInit{
  Usuarios={
    id:"",
    nombre:"",
    password:"",
  }

  
  data: any; 
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.data = this.router.getCurrentNavigation().extras.state.Usuarios; 
        console.log(this.data) 
      }else{this.router.navigate(["login"])} 
    });
  }
  ngOnInit() {
  }
  registro(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.Usuarios 
      }
    };

    this.router.navigate(['registropac'],navigationExtras);
  }
}
