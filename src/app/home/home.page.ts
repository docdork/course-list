import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  course: undefined;
  rating: undefined;
  courseList: { course: string | undefined; rating: number | undefined }[] = [];

  submitClick() {
    if (this.rating && this.course) {
      this.courseList.push({ course: this.course, rating: this.rating });
    }
    // console.log(this.courseList);

    this.course = undefined;
    this.rating = undefined;
  }
}
