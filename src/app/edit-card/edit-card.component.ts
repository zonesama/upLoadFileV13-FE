import {Component, OnInit} from '@angular/core';
import {Card} from '../card';
import {Router} from '@angular/router';
import {TranferDataService} from '../tranfer-data.service';
import {CardServiceService} from '../card-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  card: Card;
  cardForm: FormGroup;
  image: any = File;

  constructor(private router: Router,
              private tranferDataService: TranferDataService,
              private cardServiceService: CardServiceService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.card = this.tranferDataService.getData();
    this.cardForm = this.fb.group({
      id: [this.card.id],
      name: [this.card.name],
      grade: [this.card.grade],
      description: [this.card.description],
      image: [this.card.image]
    });
  }

  onChangeImg(event) {
    const file = event.target.files[0];
    this.image = file;
  }

  onSubmit() {
    const card = this.cardForm.value;
    const formData = new FormData();
    formData.append('card', JSON.stringify(card));
    formData.append('image', this.image);
    this.cardServiceService.updateCard(formData).subscribe(result => {
      this.router.navigateByUrl('');
    });
  }
}
