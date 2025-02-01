import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  destinations = [
    {
      name: 'Rishikesh',
      description: 'A spiritual hub known for yoga, adventure sports, and the serene Ganges river.'
    },
    {
      name: 'Kedarnath',
      description: 'A sacred pilgrimage site nestled in the Himalayas, home to the famous Shiva temple.'
    },
    {
      name: 'Badrinath',
      description: 'A holy town featuring the Badrinath Temple and stunning views of the mountains.'
    },
    {
      name: 'Gangotri',
      description: 'The origin of the sacred Ganges, surrounded by pristine glaciers and natural beauty.'
    },
    {
      name: 'Yamunotri',
      description: 'The source of the Yamuna river, offering picturesque landscapes and hot springs.'
    },
    {
      name: 'Tungnath',
      description: 'The highest Shiva temple in the world, offering breathtaking views and a peaceful vibe.'
    },
    {
      name: 'Madhyamaheshwar',
      description: 'A hidden gem in the Himalayas, known for its quaint charm and ancient Shiva temple.'
    },
    {
      name: 'Rudranath',
      description: 'A mystical destination surrounded by forests and dedicated to Lord Shiva.'
    },
    {
      name: 'Kalpeshwar',
      description: 'A serene spot known for its cave temple and scenic surroundings in Uttarakhand.'
    }
  ];
  
  explore(destination: string) {
    alert(`Exploring ${destination}!`);
  }
}
