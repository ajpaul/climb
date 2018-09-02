import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';
import { RegisterService } from '../../services/user/register.service';
import { NgForm } from '@angular/forms';
import { User } from '../../classes/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  addUser: User = new User(null, '', '', ''); //there has to be a better way...

  constructor(private toastService: ToastService, private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('submitting');

    if(form.valid) {

      (form.value.$key == null) ?
        this.registerService.addUser(this.addUser) :
        this.registerService.updateUser(this.addUser); //future case

      this.resetForm(form);

      //toast success!
      this.toastService.presentToast('User added!', 2000);
    }
  }

  resetForm(form? : NgForm) {
    
    if(form != null)
      form.reset();
  }

  resetUser() {
    this.addUser = {
      $key : null,
      firstName : '',
      lastName : '', 
      userSince : '',
      homeGym : '', 
      blurb : '', 
    }
  }
}
