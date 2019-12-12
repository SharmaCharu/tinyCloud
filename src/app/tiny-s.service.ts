import { Injectable } from '@angular/core';
declare var tinymce: any;
@Injectable({
  providedIn: 'root'
})
export class TinyServiceService {
 

  constructor() { }

  get() {

    tinymce.wirisUrl = 'https://wiris-tinymce-dev.mheducation.com/4.8.0.1377';
    tinymce.init({
      selector: '#mytextarea',
      external_plugins: { tiny_mce_wiris: tinymce.wirisUrl + '/ui/plugins/tiny_mce_wiris/plugin.js'},
      plugins: 'tiny_mce_wiris link image textcolor colorpicker lists',
      toolbar: 'bold | italic | underline | link | backcolor | forecolor | numlist | bullist| image | Source Code | tiny_mce_wiris_formulaEditor',
      mode: "specific_textareas",
      editor_selector: "mceEditor"
    });

  }
  get_editor_content() {
    var text = tinymce.activeEditor.getContent();
    return text;
  }

}
