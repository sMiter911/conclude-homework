import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { WebForm } from 'src/app/shared/models/web-form';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-web-form',
  templateUrl: './web-form.component.html',
  styleUrls: ['./web-form.component.scss']
})
export class WebFormComponent implements OnInit {
  webForm: FormGroup;
  timeStamp: {};
  tempForm: WebForm;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  // The web reactive form
  private reactiveForm() {
    this.webForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      idNum: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postal: ['', [Validators.required]],
    });
  }

  // Handling of form errors
  public errorHandling = (control: string, error: string) => {
    return this.webForm.controls[control].hasError(error);
  }

  onSubmit(): void {
    if (this.webForm.valid){
      const createdAt = new Date();
      const date = createdAt.getFullYear() + '-' + (createdAt.getMonth() + 1) + '-' + createdAt.getDate();
      const time = createdAt.getHours() + ':' + createdAt.getMinutes() + ':' + createdAt.getSeconds();
      const dateTime = date + ' ' + time;

      this.timeStamp = {
        created_at: dateTime
      };
      this.tempForm = {
        ...this.webForm.value,
        ...this.timeStamp
      };
      console.log(this.tempForm);
      // POST to Backend server
      this.userService.postUser(this.tempForm)
      .pipe(first())
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this.webForm.reset();
    }else{
      console.log('Something is amiss');
    }
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
