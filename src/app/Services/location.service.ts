import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public url =
    'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-cities-demographics&q=&facet=city&facet=state';

  constructor(private http: HttpClient) {}

  // Methods
  public getLocation() {
    return this.http.get(this.url);
  }
}
