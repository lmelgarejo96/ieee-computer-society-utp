import { Component, OnInit  } from '@angular/core';

@Component({
    selector: 'app-talleres',
    templateUrl: './talleres.component.html',
    styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {
    constructor(){}
    ngOnInit(){
        const slider = document.getElementById('slider');
        const cards = document.querySelectorAll('.card-taller');
        const btnPrev = document.getElementById('prev-btn');
        const btnNext = document.getElementById('next-btn');
        const wrapperSlide = document.getElementById('wrapper-slide');
        new SliderEventos(slider,cards, btnPrev, btnNext, wrapperSlide);    
    }
}

class SliderEventos {
    container: any = 0;
    items: any[] = [];
    control_prev: any;
    control_next: any;
    wrapper: any;
    lengthItems: number = 0;
    anchoCard: number = 0;
    anchoTotal: number = 0;
    isDown: boolean = false; //verify is mouseDown
    scrollSlide: number = 0; //scroll left x
    startX: number = 0; // start eje x

    constructor(containerSlider, items, prevBtn, nextBtn, wrapper){
        this.container = containerSlider;
        this.items = items;
        this.control_prev = prevBtn;
        this.control_next = nextBtn;
        this.anchoCard = items[0].clientWidth;
        this.anchoTotal = items.length * (this.anchoCard+32);
        this.scrollSlide = 0;
        this.wrapper = wrapper;
        this.control_next.addEventListener('click', () =>  this.next());
        this.control_prev.addEventListener('click', () =>  this.prev()); 
        this.container.addEventListener('mousedown', (e) => this.mouseDown(e));
        this.container.addEventListener('mouseleave', () => this.mouseLeave());
        this.container.addEventListener('mouseup', () => this.mouseUp());
        this.container.addEventListener('mousemove', (e) => this.mouseMove(e));
    }
    next(){
        const scroll = this.scrollSlide+this.container.clientWidth;
        if(scroll<=this.anchoTotal){
            this.scrollSlide+=this.anchoCard+32;
            this.container.scroll({
                top: 0,
                left: this.scrollSlide,
                behavior: 'smooth'
            });
        }
    }
    prev(){
        if(this.container.scrollLeft>0){
            this.scrollSlide-=this.anchoCard+32;
            this.container.scroll({
                top: 0,
                left: this.scrollSlide,
                behavior: 'smooth'
            });
        }
    }
    mouseDown(e){
        this.isDown = true;
        this.wrapper.classList.add('active');
        this.startX = e.pageX - this.container.offsetLeft;
        this.scrollSlide = this.container.scrollLeft;
    }
    mouseLeave(){
        this.isDown = false;
        this.wrapper.classList.remove('active');
    }
    mouseUp(){
        this.isDown = false;
        this.wrapper.classList.remove('active');
    }
    mouseMove(e){
        if(!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.container.offsetLeft;
        console.log(x, this.startX);
        const walk = x - this.startX;
        this.container.scroll({
            top: 0,
            left: this.scrollSlide-walk,
        })
    }

}


