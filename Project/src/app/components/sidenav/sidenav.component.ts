import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  public adminName = '';

  fillerNav = [
    { name: 'Home', route: 'Home', icon: 'home' },
    { name: 'List of Recyclers', route: 'Recicladores', icon: 'recycling' },
    { name: 'List of Recolectors', route: 'Recolectores', icon: 'compost' },
    { name: 'Scores', route: 'Scores', icon: 'star' },
    /* { name: 'History', route: 'ListarHistorial', icon: 'history' },*/
    { name: 'Rewards', route: 'ListarProductos', icon: 'military_tech' },
    { name: 'Type of rewards', route: 'ListarTipoProductos', icon: 'category' },
    /* {
      name: 'Users Rewards',
      route: 'ListarRewards_User',
      icon: 'supervisor_account',
    }, */
    {
      name: 'List of Ubications',
      route: 'ListarUbicacion',
      icon: 'location_on',
    },
    { name: 'Tickets', route: 'ListarTickets', icon: 'confirmation_number' },
    {
      name: 'Type of Tickets',
      route: 'ListarTipoDeTickets',
      icon: 'book_online',
    },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.adminName = sessionStorage.getItem('username') || '';
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSession(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  toggleDarkTheme(): void {
    document.getElementById('sidenav-content')!.classList.toggle('dark-theme');
    document.getElementById('sidenav')!.classList.toggle('dark-theme');
  }
}
