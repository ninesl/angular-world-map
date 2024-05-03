import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  countryInfo = {
    name: String,
    capital: String,
    region: String,
    income: String,
    longitude: String,
    latitude: String
  }

  constructor(private http: HttpClient) { }

  getCountryInfo(countryCode: string) {
    let api = `/countryApi/v2/country/${countryCode}?format=json`
    // let country = cleanCountryInfo(this.http.get(api));
    return this.http.get(api);
  }

  setCountryInfo(countryCode: string) {

    this.getCountryInfo(countryCode).subscribe((data: any) => {

      let cData = data[1][0]
      //gets 2nd index in array from fetched JSON
      //country is only element in 2nd element
      this.countryInfo.name = cData.name;
      this.countryInfo.capital = cData.capitalCity;
      this.countryInfo.region = cData.region.value;
      this.countryInfo.income = cData.incomeLevel.value;
      this.countryInfo.longitude = cData.longitude;
      this.countryInfo.latitude = cData.latitude;

    })
    return this.countryInfo;
    // console.log(countryInfo);
  }
}
