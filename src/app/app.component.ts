import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = 'HomePage';
	@ViewChild(Nav) nav: Nav;
	pages: Array<string>;
	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public push: Push) {
		this.initializeApp();
		this.pages = ['Film','Home'];
	}
	initializeApp(){
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.push.hasPermission().then((res: any) => {
				if (res.isEnabled) {
				console.log('We have permission to send push notifications');
				} else {
				console.log('We do not have permission to send push notifications');
				}
			});

			// Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
this.push.createChannel({
	id: "testchannel1",
	description: "My first test channel",
	// The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
	importance: 3
   }).then(() => console.log('Channel created'));
   
   // Delete a channel (Android O and above)
   //this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
   
   // Return a list of currently configured channels
   this.push.listChannels().then((channels) => console.log('List of channels', channels))
   
   // to initialize push notifications
   
   const options: PushOptions = {
	  android: {senderID:"702094498151"},
	  ios: {
		  alert: 'true',
		  badge: true,
		  sound: 'false',
	  },
	  windows: {},
	  browser: {
		  pushServiceURL: 'http://push.api.phonegap.com/v1/push'
	  }
   };
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

		});
	}
	openPage(page){
		this.nav.setRoot(page+'Page');
	}
}

