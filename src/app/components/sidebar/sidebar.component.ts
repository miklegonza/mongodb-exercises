import { Component } from '@angular/core';
import exercisesJson from '../../../../public/db/exercises.json';
import { RouterLink } from '@angular/router';

export interface Exercise {
    exercise: string;
    type: string;
    command: any[];
    answer: string;
    count?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    exercises: Exercise[] = exercisesJson;
}
