import { Component } from '@angular/core';
import exercisesJson from '../../../../../public/db/exercises.json';
import beautify from 'js-beautify';
import Prism from 'prismjs';

export interface Exercise {
    exercise: string;
    type: string;
    command: any[];
    result?: any[];
    answer: string;
    count?: boolean;
}

@Component({
    selector: 'app-ex-1',
    standalone: true,
    imports: [],
    templateUrl: './ex-1.component.html',
    styleUrl: './ex-1.component.scss',
})
export class Ex1Component {
    exercises: Exercise[] = exercisesJson;
    num: string;
    command: string;
    result: string;
    answer: string;

    constructor() {
        this.num = this.exercises[0].exercise;
        this.command = this.buildCommand(this.exercises[0].command);
        this.result = this.beautify(JSON.stringify(this.exercises[1].result));
        this.answer = this.exercises[4].answer;
    }

    private buildCommand(command: any[]): string {
        const commandContent: string = command
            .map((e) => JSON.stringify(e))
            .join(', ');
        const newCommand: string = `db.empleados.find(\n${commandContent}\n)`;
        return this.beautify(newCommand);
    }

    private beautify(command: string): string {
        const beautified: string = beautify.js(command, {
            indent_size: 4,
            space_in_empty_paren: true,
        });

        return Prism.highlight(
            beautified,
            Prism.languages['javascript'],
            'javascript'
        );
    }
}
