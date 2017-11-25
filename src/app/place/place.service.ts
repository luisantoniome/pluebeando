// import { Injectable } from '@angular/core'
// import { Place } from './place.model'
// import { Http } from '@angular/http'
// import { environment } from '../../environments/environment'
// import urljoin from 'url-join'
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class PlaceService {

// 	private placesUrl: string;

// 	constructor(private http: Http) {
// 		this.placesUrl = urljoin(environment.apiUrl, 'places')
// 	}

// 	getPlaces(): Promise<void | Place[]> {
// 		return this.http.get(this.placesUrl)
// 							.toPromise()
// 							.then(response => response.json() as Place[])
// 							.catch(this.handleError)
// 	}

// 	handleError() {

// 	}
// }