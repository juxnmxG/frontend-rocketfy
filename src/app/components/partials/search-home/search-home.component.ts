import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css'],
})
export class SearchHomeComponent {
  search: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.search = this.fb.group({
      search: ['', Validators.required],
    });
  }

  handleSearch = () => {
    if (this.search.get('search')?.value === '') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['search/' + this.search.get('search')?.value]);
    }
  };
}
