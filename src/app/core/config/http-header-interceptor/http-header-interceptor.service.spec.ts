import { TestBed } from '@angular/core/testing'

import { HttpHeaderInterceptorService } from './http-header-interceptor.service'

describe('HttpHeaderInterceptorService', () => {
	let service: HttpHeaderInterceptorService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(HttpHeaderInterceptorService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
