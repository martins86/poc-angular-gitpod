import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() numberStars!: number | string;
  @Input() numberPoints!: number | string;

  stars = () => { return new Array(this.numberStars) }

  showPoints(i: number) {
    if (i < this.numberPoints) {
      return 'star_rate'
    } else {
      return 'star_border'
    }
  }
}
