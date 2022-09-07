import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from 'src/app/core/services/auth/auth.service'

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
    private readonly auth: AuthService,
    private readonly router: Router
	){}
	canActivate() {
		console.log('a')
		if(!this.auth.isLogged()) {
			this.router.navigate(['login'])
			return false
		}
    
		return true
	}
}
