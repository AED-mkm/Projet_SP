import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CheckboxModule} from "primeng/checkbox";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FieldsetModule} from "primeng/fieldset";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButton, SplitButtonModule} from "primeng/splitbutton";
import {FileUpload} from "primeng/fileupload";
import {Ripple} from "primeng/ripple";
import {Rating, RatingModule} from "primeng/rating";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, NgModel} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollPanelModule,
    CheckboxModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    RatingModule,
    ToastModule,
    InputTextModule,
    FormsModule,


  ],
  exports: [
    ScrollPanelModule,
    CheckboxModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    RatingModule,
    ToastModule,
    InputTextModule,
    FormsModule,





  ]
})
export class PrimengModule { }
