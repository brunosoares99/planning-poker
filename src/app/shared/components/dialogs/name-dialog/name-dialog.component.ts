import { Component } from '@angular/core'
import icClose from '@iconify/icons-clarity/close-line'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
	selector: 'app-name-dialog',
	templateUrl: './name-dialog.component.html',
	styleUrls: ['./name-dialog.component.scss']
})
export class NameDialogComponent {
	icClose = icClose
	constructor(
    private readonly dialogRef: MatDialogRef<NameDialogComponent>
	) { }

	joinRoom() {
		this.dialogRef.close()		
	}
}
