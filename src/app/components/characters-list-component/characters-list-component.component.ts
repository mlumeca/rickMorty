import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.interfaces';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit{
  characterList: Character[] = [];

  constructor(private characterServices: CharacterServiceService) {}

  ngOnInit(): void {
    this.characterServices.getCharacterList().subscribe((resp) => {
      this.characterList = resp.results; // con .results accedemos a la lista de la respuesta, no a la respuesta completa
    });
  }
}