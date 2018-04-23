import { Component } from '@angular/core';
import { SendmesPage } from '../sendmes/sendmes';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { NavigationDetailsPage } from '../navigation-details/navigation-details';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = SendmesPage;
  tab3Root = NavigationDetailsPage;
  tab4Root = AboutPage;
  constructor() {
  }
}
