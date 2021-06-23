import { Injectable } from '@angular/core'
import { Observable, of, from } from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { map, mergeMap } from 'rxjs/operators'

import { APICATALOG, ENVS } from '../app.api.catalog'
import { environment } from '../../environments/environment'


@Injectable({
	providedIn: 'root'
})
export class HttpService {

    constructor(
        private _http: HttpClient
    ) { }

    /** HTTPGET */
    Get(endPoint: string, params?: any): Observable<any> {
        let url: string = APICATALOG[endPoint].url

        if(params) {
            Object.keys(params).forEach(
                param => {
                    url = url.replace("{{" + param + "}}", params[param])
                }
            )            
        }

        return this._http.get(ENVS[environment.ENV] + "/" + url)
            .pipe(
                map(
                    resp => { return resp }
                )
            )                       
    }

    /** HTTPPOST */
    Post(endPoint: string, params: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(ENVS[environment.ENV] + "/" + APICATALOG[endPoint].url, 
            { ...params }, {headers})
            .pipe(
                map(
                    data => { return data } 
                )
            )                       
    }

    /** HTTPPOST */
    PostFormData(endPoint: string, params: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        return this._http.post(ENVS[environment.ENV] + "/" + APICATALOG[endPoint].url, 
            params, {headers})
            .pipe(
                map(
                    data => { return data } 
                )
            )                       
    }

    /** HTTPPUT */
    Put(endPoint: string, urlParams?: any, params?: any): Observable<any> {
        let url: string = APICATALOG[endPoint].url

        Object.keys(urlParams).forEach(
            param => {
                url = url.replace("{{" + param + "}}", urlParams[param])
            }
        )

        return this._http.put(ENVS[environment.ENV] + "/" + url, 
            { ...params })
            .pipe(
                map(
                    data => { return data } 
                )
            )                       
    }

    /** HTTPDELETE */
    Delete(endPoint: string, params?: any): Observable<any> {
        let url: string = APICATALOG[endPoint].url

        if(params) {
            Object.keys(params).forEach(
                param => {
                    url = url.replace("{{" + param + "}}", params[param])
                }
            )            
        }

        return this._http.delete(ENVS[environment.ENV] + "/" + url)
            .pipe(
                map(
                    resp => { return resp }
                )
            )                       
    }   
}
