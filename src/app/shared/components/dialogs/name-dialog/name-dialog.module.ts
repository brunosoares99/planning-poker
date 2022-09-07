import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatIconModule } from '@angular/material/icon'
import { IconModule } from '@visurel/iconify-angular'

import { NameDialogComponent } from './name-dialog.component'
import { ButtonModule } from '../../button/button.module'

@NgModule({
	declarations: [
		NameDialogComponent
	],
	imports: [
		CommonModule,
		IconModule,
		MatIconModule,
		ButtonModule,
	],
	exports: [
		NameDialogComponent
	]
})
export class NameDialogModule { }
