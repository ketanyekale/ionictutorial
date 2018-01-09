import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = 'HomePage';
	@ViewChild(Nav) nav: Nav;
	pages: Array<string>;
	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();
		this.pages = ['Film','Home'];
	}
	initializeApp(){
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	openPage(page){
		this.nav.setRoot(page+'Page');
	}
}

