import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SeoService} from 'src/app/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private title:Title, private seo:SeoService){}

  ngOnInit(){
    let t:string="IEEE Computer Society UTP";
    this.title.setTitle(t);

    this.seo.generateTags({
      title:"IEEE Computer Society UTP",
      description:"Somos una organizión dedicada a difundir conocimiento entre sus miembros",
      slug:""
    })

  }

}
