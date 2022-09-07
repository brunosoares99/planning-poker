import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { take } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { RoomService } from 'src/app/core/services/room/room.service'
import { NameDialogComponent } from 'src/app/shared/components/dialogs/name-dialog/name-dialog.component'

@Component({
	selector: 'app-create-room',
	templateUrl: './create-room.component.html',
	styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent  {
	constructor(
		private readonly matDialog: MatDialog,
		private readonly roomService: RoomService,
		private readonly auth: AuthService,
		private readonly router: Router
	) { }

	joinRoom() {
		this.matDialog.open(NameDialogComponent, {
			panelClass: 'dialog'
		}).afterClosed().pipe(take(1)).subscribe({
			next: ()=> {
				this.handleCreateRoom()
			}
		})
	}

	handleCreateRoom() {
		if(this.auth.isLogged()) {
			this.createRoom()
			return
		}
		this.auth.authUserAndSetToken().pipe(take(1)).subscribe({
			next: () => {
				this.createRoom()
			}
		})
	}

	createRoom() {
		const teste = {
			nickname: 'Brunão',
			title: 'IUGU'
		}
		this.roomService.createRoom(teste).pipe(take(1)).subscribe({
			next: ({ _id }) => {
				this.router.navigate(['', _id])
			}
		})
	}

	

}
