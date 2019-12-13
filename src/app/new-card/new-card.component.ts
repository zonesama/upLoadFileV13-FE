import {Component, OnInit} from '@angular/core';
import {CardServiceService} from '../card-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Card} from '../card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  newCardForm: FormGroup;
  image: any = File;

  constructor(private cardServiceService: CardServiceService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.newCardForm = this.fb.group({
      name: [''],
      grade: [''],
      description: ['']
    });
  }

  onChangeImg(event) {
    const file = event.target.files[0];
    this.image = file;
  }

  onSubmit() {
    const card = this.newCardForm.value;
    const formData = new FormData();
    formData.append('card', JSON.stringify(card));
    formData.append('image', this.image);
    this.cardServiceService.saveCard(formData).subscribe(result => {
      this.gotoUserList();
    });
  }

  gotoUserList() {
    this.router.navigate(['/']);
  }
}
