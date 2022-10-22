import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  showSecret = false
  logs = []

  onToggle(event){
    console.log(event)
    this.showSecret = !this.showSecret
    this.logs.push(new Date().toISOString())
  }

  getIndex(log) {
    return this.logs.indexOf(log)
  }
}
