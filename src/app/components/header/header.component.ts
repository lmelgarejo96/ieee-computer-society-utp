import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    ngOnInit(){
        this.scroll();
    }
    scroll(){
        const navbar = document.getElementById('menu');
        const listaNavs = document.getElementById('ul-menu').getElementsByTagName('li') ;
        const items = document.getElementById('wrapper').getElementsByTagName('section');
        window.onscroll =  () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if(scroll>100){
                document.getElementById('logo-ieeecs').style.height = '70px';
                document.getElementById('social-links').style.height = '75px';
                navbar.style.height= '75px';
            }else{
                document.getElementById('logo-ieeecs').style.height = '85px';
                document.getElementById('social-links').style.height = '100px';
                navbar.style.height= '100px';
            }
            for(let i=0; i<items.length; i++){
                let position = i;
                let coordenadas=0;
                if(i>0){
                    for(let j=i; j>=0; j--){
                        coordenadas += items[j].clientHeight;
                    }
                }else{
                    coordenadas = items[i].clientHeight;
                }
                if(scroll<coordenadas){
                    for(let i=0; i<listaNavs.length; i++){
                        listaNavs[i].classList.remove('link-active');
                    }
                    return listaNavs[position].classList.add('link-active');
                }
            }
        }
    }

}