import { Injectable } from '@angular/core'
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, filter, catchError } from "rxjs/operators"
import { Router } from '@angular/router'
import { UtilitiesService } from '@app/services/utilities.service'

@Injectable({
	providedIn: 'root'
})
export class HttpResponseInterceptorService implements HttpInterceptor {

	constructor(
		private _router: Router,
		private _utilities: UtilitiesService
	) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
		
	        return next.handle(req)
	        	.pipe(
	        		filter(e => e.type !== 0),
		            tap(
		            	evt => {
			                if (evt instanceof HttpResponse) {
			                	if(evt.headers && evt.headers.has("auth_token")) {
		                    		//let userToken: string = evt.headers.get("auth_token")
		                    		//localStorage.setItem("auth_token", userToken)
			                	}
			                }
			            }
			        ),
					catchError(
						(error, caught) => {
							if(error.error == "notFound") this._router.navigate([""])
							else if(error.error == "userNotExist") this._utilities.Toast("danger", "Email non reconnue")
							else if(error.error == "alreadyExist") this._utilities.Toast("danger", "Email déjà utilisé")
							else if(error.error == "wrongPassword") this._utilities.Toast("danger", "Mot de passe incorrect")
							else if(error.error == "disconnected"){
								if(error instanceof HttpErrorResponse){
									localStorage.clear()
									this._router.navigate([""])
									return Observable.throw(error)
								}
							}
							
						}
					)
			    )    			
      }
}
