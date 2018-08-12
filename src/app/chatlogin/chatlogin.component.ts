import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatlogin',
  templateUrl: './chatlogin.component.html',
  styleUrls: ['./chatlogin.component.css']
})
export class ChatloginComponent implements OnInit {
  checkauthentication = false;
  constructor(private socialAuthService: AuthService, private router: Router) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    // else if(socialPlatform == "twitter"){}
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + ' Login data : ', userData);
      this.checkauthentication = true;
      localStorage.setItem('Identity', userData.email);
      this.router.navigate(['/mechat']);
    });
  }

  ngOnInit() {}
}
