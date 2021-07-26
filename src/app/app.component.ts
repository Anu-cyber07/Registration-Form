import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,Validators, NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  isSubmitted = false;
  baseURI = 'https://cloudide.appson.in/workspace/karunya/registration.php';


  constructor(
    private http: HttpClient,
  ) {
    this.data = {
      name: '',
      email: '',
      phone: '',
      profession: '',
      city: ''
    };
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.data = {
      name: '',
      email: '',
      mobile: '',
      profession: '',
      city: ''
    }
  }
  
  onSubmit(form: NgForm) {
  this.isSubmitted = true;
  this.sending();
  this.resetForm(form);
  }
  sending(){
    const file=JSON.stringify(
      {
      name: this.data.name,
      email: this.data.email,
      phone: this.data.mobile,
      city: this.data.city,
      profession: this.data.profession
       
     }
    );
    
    console.log(file);
    this.http.post(this.baseURI,file)
    .subscribe(data1 => {
     console.log(data1);
    
    },
    err => {
    console.log('ERROR!: ', err);
  });}
  }
