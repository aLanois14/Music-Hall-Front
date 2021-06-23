import { Injectable } from '@angular/core'
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class HttpRequestInterceptorService implements HttpInterceptor {

	constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

    	if(req instanceof HttpRequest) {
			const clonedRequest = req.clone(
	            { 
	                setHeaders: { 
                        "Authorization": "Bearer " + localStorage.getItem('auth_token')
	                }
	            }
	        )
	        return next.handle(clonedRequest)
		}  			
    }
}
