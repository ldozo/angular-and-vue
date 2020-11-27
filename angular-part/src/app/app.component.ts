import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enginaar-ang-part';

  
  ngOnInit() {
    document.addEventListener("engClick", this.alertMe)
  }
 
  alertMe(event){
    let a = event.detail.clickedItem
    console.log("event handling from angular." + a)
  }
}
