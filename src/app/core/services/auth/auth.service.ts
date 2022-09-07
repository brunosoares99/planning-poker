import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly url: string = environment.url
	userLogged: { _id: string } = {_id: ''}
	constructor(
    private readonly http: HttpClient
	) { }

	private authUser(): Observable<{ token: string, user: { _id: string }}> {
		return this.http.post<{ token: string, user: { _id: string }}>(`${this.url}/auth`, {})
	}

	authUserAndSetToken(): Observable<string> {
		return new Observable((observer) => { 
			this.authUser().pipe(take(1)).subscribe({
				next: ({ token, user }) => {
					this.setUser(user)
					this.setToken(token)
					observer.next(token)
				}
			})
		})
	}

	private setToken(token: string) {
		localStorage.setItem('@x-api-key', token)
	}

	private setUser(user: { _id: string }) {
		this.userLogged = user
		localStorage.setItem('@POKER_userId', user._id)
	}

	getToken(): string {
		return localStorage.getItem('@x-api-key') || ''
	}

	getUserId(): string {
		return localStorage.getItem('@POKER_userId') || ''
	}

	isLogged(): boolean {
		if(this.getUserId()) this.userLogged._id = this.getUserId()
		return !!this.getToken() && !!this.getUserId()
	}
}
