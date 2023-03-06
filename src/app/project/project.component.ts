import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
 
  Ongoing = [
    {image:'1',title:'Duhkan Tower Doha'},
    {image:'2',title:'Duhkan Tower Doha'},
    {image:'3',title:'Duhkan Tower Doha'},
    {image:'4',title:'Nord Angila International School Al Khor'},
    {image:'5',title:'Duhkan Tower Doha'},
    {image:'6',title:'Nord Angila International School Al Khor'}
  ]

  Completed = [
    {image:'1',title:'Nord Angila International School Al Khor'},
    {image:'2',title:'Bruj Al Marina - Lusail'},
    {image:'3',title:'Bruj Al Marina - Lusail'},
    {image:'4',title:'Bruj Al Marina - Lusail'},
    {image:'5',title:'Bruj Al Marina - Lusail'},
    {image:'6',title:'Bruj Al Marina - Lusail'}
  ]

  slides = [];
  slideConfig = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      }
    ]
  }
  constructor() { }
  ngOnInit(): void { 
    window.scrollTo(0, 0);
  }
}
