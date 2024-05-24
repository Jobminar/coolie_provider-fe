import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  Language:any=[
    {languages:'English',isChecked: false },
    {languages:'हिंदी',isChecked: false },
    {languages:'తెలుగు',isChecked: false},
    {languages:'ಕನ್ನಡ',isChecked: false}, 
    {languages:'اردو',isChecked: false},
  ]
  toggleCheckbox(item: any) {

   if (item.isChecked) {
    item.isChecked=false
   }
   else{
    item.isChecked=true
   }
  }
  selectOnlyOne(selectedItem:any) {
    this.Language.forEach((item: { isChecked: boolean; }) => {
      item.isChecked = false;
    });
    selectedItem.isChecked = true;
  }
}
