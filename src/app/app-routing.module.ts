import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateRoomComponent } from './pages/create-room/create-room.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { RoomComponent } from './pages/room/room.component'
import { AuthGuard } from './shared/guard/auth.guard'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'create-room',
		component: CreateRoomComponent
	},
	{
		path: ':roomId',
		canActivate: [AuthGuard],
		component: RoomComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
