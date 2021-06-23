import { Injectable } from '@angular/core';
import { Publication } from '@app/models/publication.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private _http: HttpService) { }

  /** Register
     * Params:
     * register: any
     */
   NewPublication(publication: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        this._http.PostFormData('publication-new', publication).subscribe(
            (res) => {
                resolve(true);
            },
            (Error) => {
                console.log(Error);
                reject(false);
            }
        );
    });
  }

  /** Get user team invitation
     */
   GetEventsList(): Promise<Array<Publication>> {
      return new Promise<Array<Publication>>((resolve, reject) => {
          this._http
              .Get('publication-get-all')
              .subscribe(
                  (res) => {
                      resolve(res.map(e => new Publication(e)));
                  },
                  (Error) => {
                      console.log(Error);
                      reject(null);
                  }
              );
      });
  }
}
