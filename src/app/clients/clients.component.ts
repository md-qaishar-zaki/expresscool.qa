import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  client=[
    {clientImg:'1'},
    {clientImg:'2'},
    {clientImg:'3'},
    {clientImg:'4'},
    {clientImg:'5'},
    {clientImg:'6'},
    {clientImg:'7'},
    {clientImg:'8'},
    {clientImg:'9'},
    {clientImg:'10'},
    {clientImg:'11'},
    {clientImg:'12'}
    
  ]

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
