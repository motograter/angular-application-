import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server has creation";
  serverName: string = "test";
  userName: string = "";
  serverCreated: boolean = false;
  servers = ['Broadcast Server', 'Unit Server']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {}

  onCreareServer(event: Event) {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus =
      "Server was crated!" + " Name is: " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = "";
  }
}
