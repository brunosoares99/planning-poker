import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../../services/auth/auth.service'
@Injectable({
	providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {
	constructor(
    private readonly auth: AuthService
	) {}
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const X_API_KEY = this.auth.getToken()
		let clonedRequest
		if(X_API_KEY) {
			clonedRequest = request
				.clone(
					{ 
						headers: request.headers.append('x-api-token', `${X_API_KEY}`) 
					}
				)
			return next.handle(clonedRequest)
		}
		return next.handle(request)
	}
}
