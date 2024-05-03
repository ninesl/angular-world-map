import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getCountryInfo(countryCode: string) {
    let api = `/countryApi/v2/country/${countryCode}?format=json`
    // let country = cleanCountryInfo(this.http.get(api));
    return this.http.get(api);
  }

  setCountryInfo(countryCode: string) {
    let countryInfo = {
      name: String,
      capital: String,
      region: String,
      income: String,
      longitude: String,
      latitude: String
    }

    this.getCountryInfo(countryCode).subscribe((data: any) => {

      let cData = data[1][0]
      //gets 2nd index in array from fetched JSON
      //country is only element in 2nd element
      countryInfo.name = cData.name;
      countryInfo.capital = cData.capitalCity;
      countryInfo.region = cData.region.value;
      countryInfo.income = cData.incomeLevel.value;
      countryInfo.longitude = cData.longitude;
      countryInfo.latitude = cData.latitude;
    })
    // console.log(countryInfo);
    return countryInfo;
  }
}
