import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FilmPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html'
})
export class FilmPage {

  film_1Root = 'Film_1Page'
  film_2Root = 'Film_2Page'
  film_3Root = 'Film_3Page'
  film_4Root = 'Film_4Page'
  film_5Root = 'Film_5Page'


  constructor(public navCtrl: NavController) {}

}
