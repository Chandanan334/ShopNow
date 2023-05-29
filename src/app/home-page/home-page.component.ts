import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
 export class HomePageComponent {}
//implements OnInit {
//   slideIndex:number = 1;
//   ngOnInit():void{
//     this.showSlides(this.slideIndex);
//   }

// //showSlides(slideIndex);

// plusSlides(n: number) {
//   this.showSlides(this.slideIndex += n);
// }

// currentSlide(n: number) {
//   this.showSlides(this.slideIndex = n);
// }

// showSlides(n: number) {
//   let i: number;
//   let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
//   let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     this.slideIndex = 1;
//   }
//   if (n < 1) {
//     this.slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     (slides[i] as HTMLElement).style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("active");
//     // dots[i].classList.add("");
//   }
//   (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
//   dots[this.slideIndex - 1].classList.add("active");
// }

// }
