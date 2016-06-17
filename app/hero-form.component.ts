import {Component} from "@angular/core"
import {Hero} from "./hero"
import {NgForm} from "@angular/common"

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent{
    active: boolean = true;

    powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    newHero(){
        this.model = new Hero(42,"","");
        this.active=false;
        setTimeout(()=> this.active = true,1);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}