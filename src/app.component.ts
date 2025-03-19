import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, PanelModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
