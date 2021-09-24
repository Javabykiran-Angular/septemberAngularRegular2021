
import { Shape } from "./shape";

export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(radius:number){
        super();
       
        this.radius=radius;
        this.area=0;
    }

    MyArea(){
        this.area=3.14*this.radius*this.radius;
    }

    Display(){
        console.log(`
        ---------Circle area-------------
            Radius  :: ${this.radius}
            Area    :: ${this.area}
        `);
    }
}
