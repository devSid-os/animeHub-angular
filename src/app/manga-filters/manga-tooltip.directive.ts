import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMangaTooltip]'
})
export class MangaTooltipDirective {

  @Input('appMangaTooltip') manga: any;
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.manga) return;
    if (!(window.innerWidth > 768)) return;

    // Create tooltip element
    this.tooltipElement = this.renderer.createElement('div');

    // MANGA TITLE
    const mangaTitleTextH6 = this.renderer.createElement('h6');
    this.addClasses(mangaTitleTextH6, ['font-bold', 'break-words', 'tracking-wide', 'text-[15px]', 'font-mulish', 'mb-[5px]']);
    const mangaTitleText = this.renderer.createText(this.manga.title_english || this.manga.title);
    this.renderer.appendChild(mangaTitleTextH6, mangaTitleText);
    this.renderer.appendChild(this.tooltipElement, mangaTitleTextH6);

    // MANGA ALT TITLES 
    if (this.manga.title_synonyms.length) {
      const altMangaTitlesH6 = this.renderer.createElement('h6');
      const span = this.renderer.createElement("span");
      this.addClasses(span, ['font-mulish', 'text-[12px]', 'italic', 'font-normal', 'tracking-wider'])
      this.renderer.appendChild(span, this.renderer.createText('Alt Titles: '));
      this.renderer.appendChild(altMangaTitlesH6, span);
      this.renderer.appendChild(altMangaTitlesH6, this.renderer.createText(this.manga.title_synonyms.join(', ')));
      this.addClasses(altMangaTitlesH6, ['text-[12px]', 'tracking-wider', 'italic', 'font-mulish', 'mb-[5px]']);
      this.renderer.setStyle(altMangaTitlesH6, 'font-weight', '300');
      this.renderer.appendChild(this.tooltipElement, altMangaTitlesH6);
    }

    const extraMangaDetailsDiv = this.renderer.createElement('div');
    this.addClasses(extraMangaDetailsDiv, ['flex', 'items-center', 'gap-2', 'flex-wrap']);

    // VOLUMES AND CHAPTERS OF MANGA
    const chapterTextElement = this.renderer.createElement('p');
    const chapterIconElement = this.renderer.createElement("span");
    this.addClasses(chapterIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(chapterIconElement, 'material-icons-outlined');
    this.renderer.appendChild(chapterIconElement, this.renderer.createText('book'));
    this.renderer.appendChild(chapterTextElement, chapterIconElement);
    if (this.manga.volumes) {
      this.renderer.appendChild(chapterTextElement, this.renderer.createText('Vol: ' + (this.manga.volumes || '0') + '+; '));
    }
    this.renderer.appendChild(chapterTextElement, this.renderer.createText('Ch: ' + (this.manga.chapters || '0') + '+'));
    this.addClasses(chapterTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(chapterTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(extraMangaDetailsDiv, chapterTextElement);

    // MANGA TYPE
    const mangaTypeTextElement = this.renderer.createElement('p');
    this.addClasses(mangaTypeTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(mangaTypeTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(mangaTypeTextElement, this.renderer.createText(this.manga.type || 'Manga'));
    this.renderer.appendChild(extraMangaDetailsDiv, mangaTypeTextElement);

    // PUBLISHED FROM-TO
    const publishedTextElement = this.renderer.createElement('p');
    const calenderIconElement = this.renderer.createElement("span");
    this.addClasses(calenderIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(calenderIconElement, 'material-icons-outlined');
    this.renderer.appendChild(calenderIconElement, this.renderer.createText('today'));
    this.renderer.appendChild(publishedTextElement, calenderIconElement);
    this.renderer.appendChild(publishedTextElement, this.renderer.createText((this.manga?.published?.string) || '?'));
    this.addClasses(publishedTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(publishedTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(extraMangaDetailsDiv, publishedTextElement);

    // MANGA RATINGS
    const scoreTextElement = this.renderer.createElement('p');
    const ratingIconElement = this.renderer.createElement("span");
    this.renderer.setStyle(ratingIconElement, 'color', '#ffd600');
    this.addClasses(ratingIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(ratingIconElement, 'material-icons-outlined');
    this.renderer.appendChild(ratingIconElement, this.renderer.createText('star'));
    this.renderer.appendChild(scoreTextElement, ratingIconElement);
    this.renderer.appendChild(scoreTextElement, this.renderer.createText((this.manga?.score) || 'n/a'));
    this.addClasses(scoreTextElement, ['flex', 'items-center', 'gap-1', 'mb-0']);
    this.renderer.appendChild(extraMangaDetailsDiv, scoreTextElement);

    this.renderer.appendChild(this.tooltipElement, extraMangaDetailsDiv);

    // BACKGROUND OR SYNOPSIS
    const backgroundTextElement = this.renderer.createElement('p');
    const backgroundText = this.manga.background || this.manga.synopsis || 'Description Not Available.';
    this.renderer.appendChild(backgroundTextElement, this.renderer.createText((backgroundText)));
    this.addClasses(backgroundTextElement, ['tracking-wider', 'my-2', 'font-mulish', 'text-[13px]'])
    this.renderer.setStyle(backgroundTextElement, 'font-weight', '300');
    this.renderer.appendChild(this.tooltipElement, backgroundTextElement);

    // THEMES
    if (this.manga.themes.length) {
      const themeDivContainerElement = this.renderer.createElement('div');
      this.addClasses(themeDivContainerElement, ['flex', 'gap-3', 'items-start']);
      const themeTextSpan = this.renderer.createElement('span');
      this.renderer.appendChild(themeTextSpan, this.renderer.createText('Themes'));
      this.addClasses(themeTextSpan, ['font-bold', 'text-[12px]', 'tracking-wider', 'py-1']);
      const themesDivElement = this.renderer.createElement('div');
      this.addClasses(themesDivElement, ['flex', 'flex-wrap', 'gap-2']);
      this.manga.themes.forEach((theme: any) => {
        const themeDivElement = this.renderer.createElement('div');
        this.addClasses(themeDivElement, ['bg-[#2e2e2e]', 'font-normal', 'text-[12px]', 'tracking-wider', 'p-1', 'rounded-sm', 'px-2']);
        this.renderer.appendChild(themeDivElement, this.renderer.createText(theme.name));
        this.renderer.appendChild(themesDivElement, themeDivElement);
      });
      this.renderer.appendChild(themeDivContainerElement, themeTextSpan);
      this.renderer.appendChild(themeDivContainerElement, themesDivElement);
  
      this.renderer.appendChild(this.tooltipElement, themeDivContainerElement);
    } 

    // Style the tooltip
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'top', '50%');
    this.renderer.setStyle(this.tooltipElement, 'transform', 'translateY(-50%)');
    this.renderer.setStyle(this.tooltipElement, 'left', '105%');
    this.renderer.setStyle(this.tooltipElement, 'background', '#1f1f1f');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');
    this.renderer.setStyle(this.tooltipElement, 'transition', 'opacity 0.2s');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
    this.renderer.setStyle(this.tooltipElement, 'min-width', '400px');
    this.renderer.setStyle(this.tooltipElement, 'width', 'max-content');
    this.renderer.setStyle(this.tooltipElement, 'max-width', '440px');
    this.renderer.setStyle(this.tooltipElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '1');

    // Append tooltip to the body
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    if (document.body.scrollWidth > document.body.clientWidth) {
      this.renderer.removeChild(this.el, this.tooltipElement);
      this.renderer.setStyle(this.tooltipElement, 'left', '-324%');
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    }

  }

  private addClasses(element: HTMLElement, classes: string[]) {
    classes.forEach((cls) => {
      this.renderer.addClass(element, cls);
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

}
