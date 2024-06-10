import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    repo: string = 'https://github.com/miklegonza/';
    doc: string =
        'https://docs.google.com/document/d/1OTeSSXKKp4vT2Xgd27MwLX04z8DX1ktEkIHAw440wpE/edit';
}
