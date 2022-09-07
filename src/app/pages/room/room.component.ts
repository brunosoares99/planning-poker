import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { RoomService } from 'src/app/core/services/room/room.service'
import { SocketService } from 'src/app/core/services/socket/socket.service'
import { TypeUserEnum } from 'src/app/shared/models/enums/typeUser.enum'

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
	title = ''
	constructor(
		private readonly roomService: RoomService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly socketService: SocketService,
		private readonly auth: AuthService
	) { }

	ngOnInit(): void {
		this.handleGetRoom()
	}

	handleGetRoom() {
		if(this.auth.isLogged()) {
			this.getRoomId()
			return
		}
		this.auth.authUserAndSetToken().pipe(take(1)).subscribe({
			next: () => {
				this.getRoomId()
			}
		})
	}



	getRoomId() {
		this.activatedRoute.params.pipe(take(1)).subscribe({
			next: (params) => {
				this.connectSocket(params['roomId'],this.auth.userLogged._id,TypeUserEnum.PLAYER)
			}
		})
	}	

	getRoom(roomId: string) {
		if(!roomId) return
		this.roomService.getRoom(roomId).pipe(take(1)).subscribe({
			next: ({ title, hasPassword }) => {
				this.roomService.joinRoom(roomId).pipe(take(1)).subscribe({
					next: (data)=> {
						this.title = title
						console.log(data)
					}
				})
			}
		})
	}

	connectSocket(roomId: string,userId: string, userRoomType: TypeUserEnum) {
		this.socketService.on({roomId, userId, userRoomType}).pipe(take(1)).subscribe({
			next: () => {
				this.getRoom(roomId)
			}
		})
	}
}
