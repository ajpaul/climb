import { Component, OnInit } from '@angular/core';
import { Gym } from '../../classes/gym';
import { GymService } from '../../services/gym/gym.service';
import { LoadingService } from '../../services/loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.page.html',
  styleUrls: ['./gym-list.page.scss'],
})
export class GymListPage implements OnInit {

  gyms$: Observable<Gym[]>; // check type, add $ if it's an observable

  constructor(private gymService: GymService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.presentLoading('Loading', 2000); //figure out dismiss
    this.gyms$ = this.gymService.getGyms();
  }

}
