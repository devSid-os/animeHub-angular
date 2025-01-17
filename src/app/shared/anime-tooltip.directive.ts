import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimeTooltip]'
})
export class AnimeTooltipDirective {
  @Input('appAnimeTooltip') anime: any = null;
  private tooltipElement: HTMLElement | null = null;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.anime) return;
    if (!(window.innerWidth > 768)) return;

    // Create tooltip element
    this.tooltipElement = this.renderer.createElement('div');

    // ANIME TITLE
    const movieTitleTextH6 = this.renderer.createElement('h6');
    this.addClasses(movieTitleTextH6, ['font-bold', 'break-words', 'tracking-wide', 'text-[15px]', 'font-mulish', 'mb-[5px]']);
    const movieTitleText = this.renderer.createText(this.anime.title_english || this.anime.title);
    this.renderer.appendChild(movieTitleTextH6, movieTitleText);
    this.renderer.appendChild(this.tooltipElement, movieTitleTextH6);

    // ANIME ALT TITLES 
    if (this.anime.title_synonyms.length) {
      const altAnimeTitlesH6 = this.renderer.createElement('h6');
      const span = this.renderer.createElement("span");
      this.addClasses(span, ['font-mulish', 'text-[12px]', 'italic', 'font-normal', 'tracking-wider'])
      this.renderer.appendChild(span, this.renderer.createText('Alt Titles: '));
      this.renderer.appendChild(altAnimeTitlesH6, span);
      this.renderer.appendChild(altAnimeTitlesH6, this.renderer.createText(this.anime.title_synonyms.join(', ')));
      this.addClasses(altAnimeTitlesH6, ['text-[12px]', 'tracking-wider', 'italic', 'font-mulish', 'mb-[5px]']);
      this.renderer.setStyle(altAnimeTitlesH6, 'font-weight', '300');
      this.renderer.appendChild(this.tooltipElement, altAnimeTitlesH6);
    }

    const extraAnimeDetailsDiv = this.renderer.createElement('div');
    this.addClasses(extraAnimeDetailsDiv, ['flex', 'items-center', 'gap-2', 'flex-wrap']);

    // ANIME DURATION
    const chapterTextElement = this.renderer.createElement('p');
    const chapterIconElement = this.renderer.createElement("span");
    this.addClasses(chapterIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(chapterIconElement, 'material-icons-outlined');
    this.renderer.appendChild(chapterIconElement, this.renderer.createText('desktop_windows'));
    this.renderer.appendChild(chapterTextElement, chapterIconElement);
    this.renderer.appendChild(chapterTextElement, this.renderer.createText((this.anime?.duration || 'Duration not available')));
    this.addClasses(chapterTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(chapterTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(extraAnimeDetailsDiv, chapterTextElement);

    // ANIME TYPE
    const movieTypeTextElement = this.renderer.createElement('p');
    this.addClasses(movieTypeTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(movieTypeTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(movieTypeTextElement, this.renderer.createText(this.anime.type || 'MOVIE'));
    this.renderer.appendChild(extraAnimeDetailsDiv, movieTypeTextElement);

    // PUBLISHED FROM-TO
    const publishedTextElement = this.renderer.createElement('p');
    const calenderIconElement = this.renderer.createElement("span");
    this.addClasses(calenderIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(calenderIconElement, 'material-icons-outlined');
    this.renderer.appendChild(calenderIconElement, this.renderer.createText('today'));
    this.renderer.appendChild(publishedTextElement, calenderIconElement);
    this.renderer.appendChild(publishedTextElement, this.renderer.createText((this.anime?.aired?.string) || '?'));
    this.addClasses(publishedTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
    this.renderer.setStyle(publishedTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
    this.renderer.appendChild(extraAnimeDetailsDiv, publishedTextElement);

    // ANIME RATINGS
    const scoreTextElement = this.renderer.createElement('p');
    const ratingIconElement = this.renderer.createElement("span");
    this.renderer.setStyle(ratingIconElement, 'color', '#ffd600');
    this.addClasses(ratingIconElement, ['font-light', 'text-[15px]']);
    this.renderer.addClass(ratingIconElement, 'material-icons-outlined');
    this.renderer.appendChild(ratingIconElement, this.renderer.createText('star'));
    this.renderer.appendChild(scoreTextElement, ratingIconElement);
    this.renderer.appendChild(scoreTextElement, this.renderer.createText((this.anime?.score) || 'n/a'));
    this.addClasses(scoreTextElement, ['flex', 'items-center', 'gap-1', 'mb-0']);
    this.renderer.appendChild(extraAnimeDetailsDiv, scoreTextElement);

    this.renderer.appendChild(this.tooltipElement, extraAnimeDetailsDiv);

    // BACKGROUND OR SYNOPSIS
    const backgroundTextElement = this.renderer.createElement('p');
    const backgroundText = this.anime.background || this.anime.synopsis || 'Description Not Available.';
    this.renderer.appendChild(backgroundTextElement, this.renderer.createText((backgroundText)));
    this.addClasses(backgroundTextElement, ['tracking-wider', 'my-2', 'font-mulish', 'text-[13px]'])
    this.renderer.setStyle(backgroundTextElement, 'font-weight', '300');
    this.renderer.appendChild(this.tooltipElement, backgroundTextElement);

    // ANIME SOURCE
    if (this.anime.source) {
      const movieSourceTextElement = this.renderer.createElement('p');
      const movieSourceText = 'Source: ' + this.anime.source;
      this.renderer.appendChild(movieSourceTextElement, this.renderer.createText((movieSourceText)));
      this.addClasses(movieSourceTextElement, ['italic', 'tracking-wider', 'mb-2', 'font-mulish', 'text-[11px]']);
      this.renderer.appendChild(this.tooltipElement, movieSourceTextElement);
    }

    // THEMES
    if (this.anime.themes.length) {
      const themeDivContainerElement = this.renderer.createElement('div');
      this.addClasses(themeDivContainerElement, ['flex', 'gap-3', 'items-start']);
      const themeTextSpan = this.renderer.createElement('span');
      this.renderer.appendChild(themeTextSpan, this.renderer.createText('Themes'));
      this.addClasses(themeTextSpan, ['font-bold', 'text-[12px]', 'tracking-wider', 'py-1']);
      const themesDivElement = this.renderer.createElement('div');
      this.addClasses(themesDivElement, ['flex', 'flex-wrap', 'gap-2']);
      this.anime.themes.forEach((theme: any) => {
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
