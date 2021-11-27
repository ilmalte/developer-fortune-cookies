import { Injectable } from '@angular/core';
import html2canvas from "html2canvas";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  //#region Array
  getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
  //#endregion

  //#region Image
  exportAsPicture
    (id: string, excludeClasses: string[] | null = null): void {
    let html: any = document.getElementsByTagName('HTML')[0]
    let body: any = document.getElementsByTagName('BODY')[0]
    let htmlWidth: number = html.clientWidth;
    let bodyWidth: number = body.clientWidth;
    const data = document.getElementById(id);

    if (data == null || data == undefined) {
      return;
    }
    var newWidth = data.scrollWidth - data.clientWidth;
    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + 'px';
    body.style.width = bodyWidth + 'px';

    // clone the document
    var documentCopy = data.cloneNode(true) as HTMLElement;
    document.body.appendChild(documentCopy);

    // exclude items with unwanted classes
    if (excludeClasses != null) {
      excludeClasses.forEach(excludeClass => {
        documentCopy.querySelectorAll(excludeClass).forEach(e => e.remove());
      });
    }

    // TODO (export-picture): Pass as parameters an array of { query: x, remove: y }
    Array.from(documentCopy.querySelectorAll('.message.message-shadow'))
      .forEach((el) => el.classList.remove('message-shadow'));
    Array.from(documentCopy.querySelectorAll('.message-bottom.message-bottom-hidden'))
      .forEach((el) => el.classList.remove('message-bottom-hidden'));
    Array.from(documentCopy.querySelectorAll('.message-copyright.message-copyright-hidden'))
      .forEach((el) => el.classList.remove('message-copyright-hidden'));

    // export using html2canvas
    html2canvas(documentCopy).then((canvas) => {
      var image = canvas.toDataURL('image/png', 1.0);
      var fileName = this.generateGuid() + '.png';
      this.saveAs(image, fileName);
    })

    // remove copy from DOM
    documentCopy.remove();
  }
  //#endregion

  //#region File
  saveAs(blob: string, fileName: string) {
    var elem: any = window.document.createElement('a');
    elem.href = blob;
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    } else {
      elem.target = '_blank';
      elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
  }
  //#endregion

  //#region Guid
  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  //#endregion

  //#region Clipboard
  copyToClipboard(val: string) {

    let selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  //#endregion

  //#region Enum
  enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
  }
  //#endregion
}
