import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import {
    AccordionModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    PanelMenuModule,
    PasswordModule,
    SplitButtonModule,
    TooltipModule,
    TreeModule,
    CheckboxModule,
    TieredMenuModule,
    MenuModule,
    SidebarModule,
    DynamicDialogConfig,
    DialogService,
    OverlayPanelModule,
    ListboxModule,
    PanelModule,
    BlockUIModule
} from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';

const primeNGModules = [
    CardModule,
    FormsModule,
    ChipsModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    PanelModule,
    DropdownModule,
    ConfirmDialogModule,
    PanelMenuModule,
    AccordionModule,
    InputSwitchModule,
    KeyFilterModule,
    SplitButtonModule,
    ToastModule,
    MultiSelectModule,
    TreeModule,
    ContextMenuModule,
    TooltipModule,
    DynamicDialogModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    CheckboxModule,
    TieredMenuModule,
    MenuModule,
    SidebarModule,
    OverlayPanelModule,
    ListboxModule,
    BlockUIModule
];

@NgModule({
    imports: [...primeNGModules],
    exports: [FormsModule, CommonModule, ...primeNGModules],
    providers: [DynamicDialogConfig, DialogService]
})
export class AppSharedLibsModule {
    static forRoot() {
        return {
            ngModule: AppSharedLibsModule
        };
    }
}
