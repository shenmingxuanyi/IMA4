import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];

    constructor(public menuController: MenuController) {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ngOnInit() {
    }

    viewDetail($event, item) {

    }

    async ionViewDidEnter() {
        this.menuController.enable(true, 'SEARCH_MENU');
    }

    async ionViewWillLeave() {
        this.menuController.enable(false, 'SEARCH_MENU');
    }
}
