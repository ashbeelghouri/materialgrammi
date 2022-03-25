import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() position = "topRight";
  @Input() close = `<i class="fas fa-times"></i>`;
  notificationData:any = [];

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.watchNotifications();
  }

  watchNotifications(){
    this.service.watchNotification(this.position).subscribe((data:any) => {
      console.log("Data recieved!!", data);
      this.notificationData = data;
    });
  }

  closeNotification(id:string){
    this.service.deleteNotification(this.position, id);
  }

  mainClass(){
    let classes = "";
    if(this.position.toLowerCase() === "centercenter"){
      classes += " center-center";
    }else {
      if(this.position.toLowerCase().includes("top")){
        classes += " top";
      }
      if(this.position.toLowerCase().includes("bottom")){
        classes += " bottom";
      }
      if(this.position.toLowerCase().includes("left")){
        classes += " left";
      }
      if(this.position.toLowerCase().includes("right")){
        classes += " right";
      }
      if(this.position.toLowerCase().includes("center")){
        classes += " center";
      }
    }
    
    return classes;
  }

}
