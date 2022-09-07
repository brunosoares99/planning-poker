import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TypeUserEnum } from 'src/app/shared/models/enums/typeUser.enum'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	private readonly url: string = environment.url_socket
	private socket: WebSocket

	on ({roomId, userId, userRoomType}: {roomId: string, userId: string,userRoomType: TypeUserEnum}): Observable<Event> {
		this.socket = new WebSocket(`${this.url}?userId=${userId}&roomId=${roomId}&userRoomType=${userRoomType}`)
		return new Observable(
			(observer) => {
				this.socket.onopen = (event) => {
					console.log('Socket is open', event)
					this.sendMessage('Hello from client')
					observer.next(event)
				}
    
				this.socket.onerror = (error) => {
					console.log('Socket error', error)
				}
    
				this.socket.onclose = (event) => {
					console.log('Socket was closed', event)
				}
    
				this.socket.onmessage = (event) => {
					console.log('Message was received', event)
				}
			}
		)
	}

	sendMessage (data: string) {
		if (!data) return
		this.socket.send(data)
	}

}



 
