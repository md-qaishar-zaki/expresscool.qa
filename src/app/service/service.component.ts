import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class ServiceComponent {


  services = [
    { image: 'Ducting-Insulation', title: 'Ducting Insulation', discription: 'Ducts are conduits or passages used in heating, ventilation, and air conditioning (HVAC) to deliver and remove air. The needed airflows include for example, supply air, return air, and exhaust air. Ducts commonly also deliver ventilation air as part of the supply air. As such, air ducts are one method of ensuring acceptable indoor air quality as well as thermal comfort.' },
    { image: 'Chiller-Work', title: 'Chiller Troubleshooting And Maintenance And Related Work', discription: 'A chiller is a machine that removes heat from a liquid via a vapor-compression or absorption refrigeration cycle. This liquid can then be circulated through a heat exchanger to cool equipment, or another process stream (such as air or process water). Chillers may use hermetic scroll, or semi hermetic screw, or centrifugal compressors.' },
    { image: 'Conditioning-Installation', title: 'Air Conditioning- Installation', discription: 'Air conditioning can be used in both domestic and commercial environments. This process is most commonly used to achieve a more comfortable interior environment, typically for humans and other animals; however, air conditioning is also used to cool and dehumidify rooms filled with heat-producing electronic devices.' },
    { image: 'Chiller-Refurbishment', title: 'Chiller Refurbishment', discription: 'A cooling coil is a device intended to allow the contents of the coil to cool as they move through it. Inside the building, the evaporator coil, sometimes referred to as the cooling coil, is located on the air intake side of the fan coil or the outlet side of the furnace. Its job is to remove heat from indoor air so the blower fan can return cool, refreshing air to the building.' },
    { image: 'Chill-Water', title: 'Chill Water Chemical Testing ', discription: 'Standard Cooling Water Analysis pH , Total Hardness , TDS , Calcium Hardness , Conductivity , Chloride , M. Alkalinity , Cool guard / Bromgard' },
    { image: 'Window-AC', title: 'Complete Solution For Split And Window AC', discription: 'Solution includes installation and maintenance.' }
  ]


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
