import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: `
    .swiper{
      width: 100%;
      height: 100%;
    }
  `
})
export class AppComponent implements AfterViewInit {

  swiperDiv = viewChild.required<ElementRef>('swiperDiv');
  swiper:Swiper|undefined = undefined;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'bg']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  selectedLanguage(event: Event){
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translate.use(lang);
  }

  ngAfterViewInit(): void {
    this.swiperInit();
  }

  swiperInit() {
    this.swiper = new Swiper(this.swiperDiv().nativeElement, {
      modules: [Navigation, Pagination, Scrollbar],
      speed: 500,
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      scrollbar: { el: '.swiper-scrollbar', draggable: true },
    });
  }

}
