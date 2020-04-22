import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    anio_actual: number;

    constructor (){
        this.anio_actual = new Date().getFullYear();
    }

}