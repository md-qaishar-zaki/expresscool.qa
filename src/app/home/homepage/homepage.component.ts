import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../home.component.scss']
})
export class HomepageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  service = [
    { title: 'Heating & Water', discription: 'Our company carries out installation, service and repair of water and gas appliances.' },
    { title: 'Installation', discription: 'Installation is the act of putting something in, a device that stays in one place, or an art piece that often involves building and different types of materials.' },
    { title: 'Ducting', discription: 'Ducting is used to distribute airflow from your heating or cooling system throughout your home.' },
  ]

  noSpeakers = [
    { number: '8870', discription: 'Air Conditioning Repairs and Install' },
    { number: '4760', discription: 'Air Conditioning Repairs and Install' },
    { number: '9032', discription: 'Customizers are Satisfied with our Services' },
    { number: '32', discription: 'Workers' }
  ]

  services = [
    { image:'1', title:'Air Filter Service', discription: 'An air filter collects the humongous amount of dust & dirt during operations.'},
    { image:'2', title:'Coil Cleaning', discription: 'The technician cleans the dust & debris from the condenser & evaporator coil.' },
    { image:'3', title:'Maintenance & Repair', discription: 'We are equipped with all the latest tools to give full maintenance.' }
  ]


  silderImg = [
    {Image:'3'},
    {Image:'4'},
    {Image:'1'},
    {Image:'2'},
    {Image:'5'} 
  ]
  
  slides = [];
  slideConfig = {
    dots: false,
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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

}
