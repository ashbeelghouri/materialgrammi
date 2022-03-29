import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MaterialgrammiModule } from 'projects/materialgrammi/src/public-api';
import { GettingStartedComponent } from './parts/getting-started/getting-started.component';
import { GsIntroductionComponent } from './parts/gs-introduction/gs-introduction.component';
import { HeadersComponent } from './tools/headers/headers.component';
import { DescriptopmComponent } from './tools/descriptopm/descriptopm.component';
import { TemplatesComponent } from './parts/templates/templates.component';
import { ConfigureComponent } from './parts/configure/configure.component';
import { CssBasicComponent } from './parts/css-basic/css-basic.component';
import { CssGridComponent } from './parts/css-grid/css-grid.component';
import { CssColorsComponent } from './parts/css-colors/css-colors.component';
import { CssAnimationComponent } from './parts/css-animation/css-animation.component';
import { CssHelperComponent } from './parts/css-helper/css-helper.component';
import { CssTypographyComponent } from './parts/css-typography/css-typography.component';
import { CompAccordionComponent } from './parts/comp-accordion/comp-accordion.component';
import { CompAlertComponent } from './parts/comp-alert/comp-alert.component';
import { CompBreadcrumbComponent } from './parts/comp-breadcrumb/comp-breadcrumb.component';
import { CompButtonComponent } from './parts/comp-button/comp-button.component';
import { CompCalendarComponent } from './parts/comp-calendar/comp-calendar.component';
import { CompCardComponent } from './parts/comp-card/comp-card.component';
import { CompChatComponent } from './parts/comp-chat/comp-chat.component';
import { CompCheckboxComponent } from './parts/comp-checkbox/comp-checkbox.component';
import { CompChipComponent } from './parts/comp-chip/comp-chip.component';
import { CompCollapseComponent } from './parts/comp-collapse/comp-collapse.component';
import { CompComponentComponent } from './parts/comp-component/comp-component.component';
import { CompCowntdownComponent } from './parts/comp-cowntdown/comp-cowntdown.component';
import { CompDateComponent } from './parts/comp-date/comp-date.component';
import { CompDateRangeComponent } from './parts/comp-date-range/comp-date-range.component';
import { CompDragableComponent } from './parts/comp-dragable/comp-dragable.component';
import { CompDropableComponent } from './parts/comp-dropable/comp-dropable.component';
import { CompFooterComponent } from './parts/comp-footer/comp-footer.component';
import { CompImageComponent } from './parts/comp-image/comp-image.component';
import { CompInputComponent } from './parts/comp-input/comp-input.component';
import { CompListComponent } from './parts/comp-list/comp-list.component';
import { CompLoadersComponent } from './parts/comp-loaders/comp-loaders.component';
import { CompMegaMenuComponent } from './parts/comp-mega-menu/comp-mega-menu.component';
import { CompModalComponent } from './parts/comp-modal/comp-modal.component';
import { CompNavbarComponent } from './parts/comp-navbar/comp-navbar.component';
import { CompNoteComponent } from './parts/comp-note/comp-note.component';
import { CompNotificationsComponent } from './parts/comp-notifications/comp-notifications.component';
import { CompOffcanvasComponent } from './parts/comp-offcanvas/comp-offcanvas.component';
import { CompOverlayComponent } from './parts/comp-overlay/comp-overlay.component';
import { CompPaginationComponent } from './parts/comp-pagination/comp-pagination.component';
import { CompRadioComponent } from './parts/comp-radio/comp-radio.component';
import { CompSelectComponent } from './parts/comp-select/comp-select.component';
import { CompSidebarComponent } from './parts/comp-sidebar/comp-sidebar.component';
import { CompSlideShowComponent } from './parts/comp-slide-show/comp-slide-show.component';
import { CompSwitchComponent } from './parts/comp-switch/comp-switch.component';
import { CompTabComponent } from './parts/comp-tab/comp-tab.component';
import { CompTableComponent } from './parts/comp-table/comp-table.component';
import { CompTextInputComponent } from './parts/comp-text-input/comp-text-input.component';
import { CompToastComponent } from './parts/comp-toast/comp-toast.component';
import { CompWidgetComponent } from './parts/comp-widget/comp-widget.component';
import { CompWizardComponent } from './parts/comp-wizard/comp-wizard.component';
import { CompDropDownComponent } from './parts/comp-drop-down/comp-drop-down.component';
import { InputOptionsComponent } from './tools/input-options/input-options.component';
import { OutputOptionsComponent } from './tools/output-options/output-options.component';
import { SelectorsComponent } from './tools/selectors/selectors.component';
import { ExamplesComponent } from './tools/examples/examples.component';
import { OutputComponent } from './tools/output/output.component';
import { ColorPillComponent } from './tools/color-pill/color-pill.component';
import { FixerComponent } from './parts/fixer/fixer.component';


@NgModule({
  declarations: [
    LandingComponent,
    GettingStartedComponent,
    GsIntroductionComponent,
    HeadersComponent,
    DescriptopmComponent,
    TemplatesComponent,
    ConfigureComponent,
    CssBasicComponent,
    CssGridComponent,
    CssColorsComponent,
    CssAnimationComponent,
    CssHelperComponent,
    CssTypographyComponent,
    CompAccordionComponent,
    CompAlertComponent,
    CompBreadcrumbComponent,
    CompButtonComponent,
    CompCalendarComponent,
    CompCardComponent,
    CompChatComponent,
    CompCheckboxComponent,
    CompChipComponent,
    CompCollapseComponent,
    CompComponentComponent,
    CompCowntdownComponent,
    CompDateComponent,
    CompDateRangeComponent,
    CompDragableComponent,
    CompDropableComponent,
    CompFooterComponent,
    CompImageComponent,
    CompInputComponent,
    CompListComponent,
    CompLoadersComponent,
    CompMegaMenuComponent,
    CompModalComponent,
    CompNavbarComponent,
    CompNoteComponent,
    CompNotificationsComponent,
    CompOffcanvasComponent,
    CompOverlayComponent,
    CompPaginationComponent,
    CompRadioComponent,
    CompSelectComponent,
    CompSidebarComponent,
    CompSlideShowComponent,
    CompSwitchComponent,
    CompTabComponent,
    CompTableComponent,
    CompTextInputComponent,
    CompToastComponent,
    CompWidgetComponent,
    CompWizardComponent,
    CompDropDownComponent,
    InputOptionsComponent,
    OutputOptionsComponent,
    SelectorsComponent,
    ExamplesComponent,
    OutputComponent,
    ColorPillComponent,
    FixerComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule, MaterialgrammiModule
  ]
})
export class DocumentationModule { }
