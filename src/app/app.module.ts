import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderModule } from './shared/components/header/header.module'
import { WrapperModule } from './shared/components/wrapper/wrapper.module'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { IconModule } from '@visurel/iconify-angular'


import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { ButtonModule } from './shared/components/button/button.module'
import { CreateRoomComponent } from './pages/create-room/create-room.component'
import { NameDialogModule } from './shared/components/dialogs/name-dialog/name-dialog.module'
import { RoomComponent } from './pages/room/room.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpHeaderInterceptorService } from './core/config/http-header-interceptor/http-header-interceptor.service'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CreateRoomComponent,
		RoomComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		WrapperModule,
		ButtonModule,
		MatDialogModule,
		NameDialogModule,
		IconModule,
		MatIconModule,
		HttpClientModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpHeaderInterceptorService,
		multi: true,
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
