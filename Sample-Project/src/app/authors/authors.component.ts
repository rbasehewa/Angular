import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  title = "List of Autors";
  authors;
  
  constructor(private authorService: AuthorsService) {

    this.authors = authorService.getAuthors();
   }

  ngOnInit(): void {
  }


  



}
