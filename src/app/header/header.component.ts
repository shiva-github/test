import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';




@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],

	animations: [
	trigger('myAwesomeAnimation', [
		state('small', style({
			
		})),
		state('large', style({
			
		})),
		transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
	]),
	    
    ]
})


// trigger('ngIfAnimation', [
//         transition('void => *', [
//             query('*', style({ opacity: 0 }), {optional: true}),
//             query('*', stagger('50ms', [
//                 animate('0.8s ease-in', keyframes([
//                     style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//                     style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
//                     style({opacity: 1, transform: 'translateY(100%)', offset: 1.0}),
//                     ]))]), {optional: true}),
//             ]),
//         transition('* => void', [
//             query('*', style({ opacity: 1 }), {optional: true}),
//             query('*', stagger('50ms', [
//                 animate('0.8s ease-in', keyframes([
//                     style({opacity: 1, transform: 'translateY(100%)', offset: 0}),
//                     style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
//                     style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
//                     ]))]), {optional: true}),
//             ])
//         ])
export class HeaderComponent implements OnInit {
	test: Number;
	toggleClassHeader:boolean;
	state: string = 'small';
	state2: string = 'small';

	animateMe() {
		this.state = (this.state === 'small' ? 'large' : 'small');
	}
	animate2() {
		this.state = (this.state === 'abc' ? 'def' : 'abc');
		console.log(this.state);
	}
	constructor() { }

	ngOnInit() {
		this.test = 1;	
		// this.typing_function();
		this.toggleClassHeader = true;
	}

	toggleHeader(): void {
		this.toggleClassHeader = !this.toggleClassHeader;
		this.animate();
	}

	toggleMenu() {
		let classes = {
			important: true,
			inactive: false
		};
		return classes;
	}

	typing_function():void {

		var TxtType = function(el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 4000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtType.prototype.tick = function() {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function() {
				that.tick();
			}, delta);
		};

		window.onload = function() {
			var elements = document.getElementsByClassName('typewrite');
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "";
        document.body.appendChild(css);
    }
}

}

