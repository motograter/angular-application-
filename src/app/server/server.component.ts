import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`
    .small-btn {
      margin: '10px 10px'
    }
    .online {
        color: white;
    }

    .offline {
        color: gray;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getSereverStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
