import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})
export class AdditionalServicesComponent {

  AllDetails = [
    { serviceName: 'Split Systems Service', depreciation: 'An air conditioner that is regularly maintained will run better and last longer.' , Image:'events-1.jpg'},
    { serviceName: 'Humidifiers', depreciation: 'When your conditioned air isn’t cold enough or is humid, it’s time to schedule an air conditioner maintenance service.' , Image:'events-2.jpg' },
    { serviceName: 'Chill Water Chemical Testing', depreciation: 'Don’t sweat it out this summer and ensure your AC unit will perform efficiently and reliably. When your AC unit needs service or maintenance.' , Image:'events-3.jpg' },
    { serviceName: 'On Demand Heater', depreciation: 'It includes a wide range of water heaters to suit various requirements, usage, capacity, and living conditions.' , Image:'events-4.jpg' },
    { serviceName: 'Humidifiers', depreciation: 'When your conditioned air isn’t cold enough or is humid, it’s time to schedule an air conditioner maintenance service.' , Image:'events-2.jpg' },
    { serviceName: 'Chill Water Chemical Testing', depreciation: 'Don’t sweat it out this summer and ensure your AC unit will perform efficiently and reliably. When your AC unit needs service or maintenance.' , Image:'events-3.jpg' },
    { serviceName: 'On Demand Heater', depreciation: 'It includes a wide range of water heaters to suit various requirements, usage, capacity, and living conditions.' , Image:'events-4.jpg' },
  ]

  slides = [];
  slideConfig = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  }
  constructor() { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
