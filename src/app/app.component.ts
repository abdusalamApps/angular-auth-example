import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-auth-example';

  username = 'User';

  lat = 0;
  lng = 0;

  constructor(private _http: HttpClient) {
  }
  pingServer(location) {}
  ngOnInit() {
    this.get();
  }

  get() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((position => {
        console.log('lat: ' + position.coords.latitude);
        console.log('lng: ' + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }))
    }
  }


}
