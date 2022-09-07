import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { HeaderComponent } from './header.component'
import { ButtonModule } from '../button/button.module'
import { CircleModule } from '../circle/circle.module'
import { RouterModule } from '@angular/router'



@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		ButtonModule,
		CircleModule,
		RouterModule
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
