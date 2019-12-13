import {Component, OnInit} from '@angular/core';
import {CardServiceService} from '../card-service.service';
import {Router} from '@angular/router';
import {Card} from '../card';
import {TranferDataService} from '../tranfer-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];

  constructor(private cardServiceService: CardServiceService,
              private tranferDataService: TranferDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllCard();
  }

  deleteCard(card: Card) {
    this.cardServiceService.delete(card.id).subscribe(result => {
      this.getAllCard();
    });
  }

  getAllCard() {
    this.cardServiceService.findAllCard().subscribe(data => {
      this.cards = data;
    });
  }

  goToEdit(card: Card) {
    this.tranferDataService.setData(card);
    this.router.navigateByUrl('/updateCard');
  }
}
