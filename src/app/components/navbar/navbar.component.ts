import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
    
    constructor(){
    }
    ngOnInit(){
        this.hamburger();
    }
    hamburger(){
        const listaNavs = document.getElementById('ul-menu').getElementsByTagName('a') ;
        this.responsiveHamburger();
        document.getElementById('btn-open').addEventListener('click', () => {
            this.openMenu();
        });
        document.getElementById('btn-close').addEventListener('click', () => {
            this.closeMenu();
        });
        /* for(let i=0; i<listaNavs.length; i++){
            listaNavs[i].addEventListener('click', () => {
                this.closeMenu();
            });
        } */
    }
    responsiveHamburger(){
        window.addEventListener('resize', () => {
            if(window.screen.width < 1250){
                document.getElementById('hamburger-menu').style.display = 'flex';
            }else{
                document.getElementById('hamburger-menu').style.display = 'none';
            }
        });
    }
    openMenu(){
        document.getElementById('navbar-menu').classList.add('animateDown1s')
        document.getElementById('navbar-menu').classList.remove('animateUp1s')
        document.getElementById('navbar-menu').style.top='0';

        document.getElementById('navbar-menu').style.display = 'flex';
        document.getElementById('btn-close').style.display = 'block';
        document.getElementById('btn-open').style.display = 'none';
    }
    closeMenu(){
        document.getElementById('navbar-menu').classList.remove('animateDown1s')
        document.getElementById('navbar-menu').classList.add('animateUp1s');
        document.getElementById('navbar-menu').style.top='-100vh';

        document.getElementById('btn-open').style.display = 'block';
        document.getElementById('btn-close').style.display = 'none';
    }
}