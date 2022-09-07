import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateRoomComponent } from './pages/create-room/create-room.component'
import { HomeComponent } from './pages/home/home.component'
import { RoomComponent } from './pages/room/room.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'create-room',
		component: CreateRoomComponent
	},
	{
		path: ':roomId',
		component: RoomComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
