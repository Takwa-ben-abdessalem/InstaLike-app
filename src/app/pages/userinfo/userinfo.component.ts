import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  url="https://www.gstatic.com/devrel-devsite/prod/v1241c04ebcb2127897d6c18221acbd64e7ed5c46e5217fd83dd808e592c47bf6/firebase/images/touchicon-180.png"
  selectFile(event) {
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event : any)  =>
    {this.url = event.target.result

    }}
   
  }
  cards = [{
    title: 'hello',
    image: ''  ,
    
    description: 'firebase',
  },{
    title: 'he',
    image: '',
    description: '',
  }]

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}