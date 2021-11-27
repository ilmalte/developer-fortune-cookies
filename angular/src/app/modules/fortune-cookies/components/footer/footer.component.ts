import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fortune-cookie-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToGithub(): void {
    location.replace("https://github.com/ilmalte")
  }

}
