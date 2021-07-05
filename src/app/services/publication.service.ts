import { EventEmitter, Injectable } from '@angular/core';
import { Publication } from '@app/models/publication.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class PublicationService {
    private _publications : Array<Publication> = new Array<Publication>()
    private _publication: Publication = new Publication();
    public publicationsEvent: EventEmitter<Array<Publication>> = new EventEmitter<Array<Publication>>()
    public publicationEvent: EventEmitter<Publication> = new EventEmitter<Publication>();

    constructor(private _http: HttpService) {}

    public GetPublication(): Publication {
        return this._publication;
    }

    public SetPublication(publication: Publication): void {
        console.log(publication)
        this._publication = publication;
        this._publications.forEach((e, i) => {
            if (e.id == publication.id) {
                Object.keys(e).forEach((k) => {
                    e[k] = publication[k];
                });
            }
        });
        console.log(this._publications)
        this.publicationsEvent.emit(this._publications);
    }

    public GetPublications(): Array<Publication> {
        return this._publications;
    }

    public SetPublications(publications: Array<Publication>): void {
        this._publications = publications;
        this.publicationsEvent.emit(publications);
    }
    /** Register
     * Params:
     * register: any
     */
    NewPublication(publication: any): Promise<Publication> {
        return new Promise<Publication>((resolve, reject) => {
            this._http.PostFormData('publication-new', publication).subscribe(
                (res) => {
                    var publication = new Publication(res);
                    console.log(publication)
                    var publications = this.GetPublications()
                    publications.unshift(publication)
                    this.SetPublications(publications)
                    resolve(publication);
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
    GetPublicationsList(): Promise<Array<Publication>> {
        return new Promise<Array<Publication>>((resolve, reject) => {
            this._http.Get('publication-get-all').subscribe(
                (res) => {
                    this.SetPublications(res.map(e => new Publication(e)))
                    resolve(null);
                },
                (Error) => {
                    console.log(Error);
                    reject(null);
                }
            );
        });
    }
}
