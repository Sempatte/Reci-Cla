import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name: 'Home', route: 'Home', icon: 'home'},
    {name: 'List of Recyclers', route: 'Recicladores', icon: 'recycling'},
    {name: 'Scores', route: 'ListarScores', icon: 'star'},
    {name: 'History', route: 'ListarHistorial', icon: 'history'},
    {name: 'Rewards', route: 'ListarProductos', icon: 'military_tech'},
    {name: 'Type of rewards', route: 'ListarTipoProductos', icon: 'category'},
    {name: 'Users Rewards', route: 'ListarRewards_User', icon: 'supervisor_account'},
    {name: 'List of Ubications', route: 'ListarUbicacion', icon: 'location_on'},
    {name: 'Tickets', route: 'ListarTickets', icon: 'confirmation_number'}
  ]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleDarkTheme(): void {
    document.getElementById("sidenav-content")!.classList.toggle('dark-theme');
    document.getElementById("sidenav")!.classList.toggle('dark-theme');
  }

}
