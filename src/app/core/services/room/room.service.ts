import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { IRoom, IRoomGetRes } from 'src/app/shared/models/interfaces/room.model'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class RoomService {
	private readonly url: string = environment.url
	constructor(
    private readonly http: HttpClient
	) { }

	createRoom(data: unknown): Observable<IRoom> {
		return new Observable((observer) => {
			this.http.post<IRoomGetRes>(`${this.url}/room`, data).pipe(take(1)).subscribe({
				next: ({ room }) => {
					observer.next(room)
				}
			})
		})
	}

	getRoom(roomId: string): Observable<IRoom> {
		return new Observable((observer) => {
			this.http.get<IRoomGetRes>(`${this.url}/room/${roomId}`).pipe(take(1)).subscribe({
				next: ({ room }) => {
					observer.next(room)
				}
			})
		})
	}

	joinRoom(roomId: string, password?: string): Observable<any> {
		return new Observable((observer) => {
			this.http.post<any>(`${this.url}/room/join/${roomId}`, { password }).pipe(take(1)).subscribe({
				next: (data) => {
					console.log(data)
					observer.next(data)
				}
			})
		})
	}

}
