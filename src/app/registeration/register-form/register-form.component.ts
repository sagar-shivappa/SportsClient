import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  gameType: string = '';
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((data) => (this.gameType = data['gameType']));
  }
}
