import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-globe-map',
  standalone: true,
  imports: [],
  templateUrl: './globe-map.component.html',
  styleUrl: './globe-map.component.css'
})
export class GlobeMapComponent {

  countryInfo: any = {}

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    this.countryInfo = this.apiService.setCountryInfo(event.target.id);
    // console.log(countryData);
    // console.log(data)
  }
}
