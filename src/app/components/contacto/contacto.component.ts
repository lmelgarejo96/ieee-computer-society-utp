import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    constructor() {
    }

    ngOnInit(){
        this.contact();
    }

    contact() {
        const contactoBlack = document.querySelectorAll('.textColor');
        const spanBlue = document.querySelectorAll('.span-form');
        const buttonBlue = document.querySelector('.btn-submit');
        const focus_input = document.querySelectorAll('.input-activo');
        const color_fondo = document.getElementById('color-fondo');
        const color_interno = document.getElementById('color-interno');
        const cuerpo = document.querySelector('body')
        buttonBlue.classList.add('button-inactived');

        for(let i = 0; i < focus_input.length; i++) {
            focus_input[i].addEventListener('click', () => {
                for(let i = 0; i < contactoBlack.length; i++) {
                    contactoBlack[i].classList.add('active');
                }
                
                for(let i = 0; i < spanBlue.length; i++) {
                    spanBlue[i].classList.add('span-active');
                }
                
                buttonBlue.classList.remove('button-inactived');
                buttonBlue.classList.add('button-active');
        
                color_fondo.style.backgroundColor = '#EFEFEF';
                color_interno.style.backgroundColor = '#167BB1';
                color_interno.style.borderRadius = '0';
            })
        }

        for(let i = 0; i < focus_input.length; i++) {
            cuerpo.addEventListener('click', () => {
                if (focus_input[i].getAttribute('checked')) {
                    for(let i = 0; i < contactoBlack.length; i++) {
                        contactoBlack[i].classList.add('active');
                    }
                    
                    for(let i = 0; i < spanBlue.length; i++) {
                        spanBlue[i].classList.add('span-active');
                    }
                    
                    buttonBlue.classList.remove('button-inactived');
                    buttonBlue.classList.add('button-active');
        
                    color_fondo.style.backgroundColor = '#EFEFEF';
                    color_interno.style.backgroundColor = '#167BB1';
                    color_interno.style.borderRadius = '0';
                }
        
                else {
                    for(let i = 0; i < contactoBlack.length; i++) {
                        contactoBlack[i].classList.remove('active');
                    }
                    
                    for(let i = 0; i < spanBlue.length; i++) {
                        spanBlue[i].classList.remove('span-active');
                    }
                    
                    buttonBlue.classList.add('button-inactived');
                    buttonBlue.classList.remove('button-active');
        
                    color_fondo.style.backgroundColor = '#167BB1';
                    color_interno.style.backgroundColor = '#EFEFEF';
                    color_interno.style.borderRadius = '10rem';
        
                }
                
            }, {capture: true})
        }
    }  
}