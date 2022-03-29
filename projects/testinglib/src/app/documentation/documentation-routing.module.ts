import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
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
import { CompDateRangeComponent } from './parts/comp-date-range/comp-date-range.component';
import { CompDateComponent } from './parts/comp-date/comp-date.component';
import { CompDragableComponent } from './parts/comp-dragable/comp-dragable.component';
import { CompDropDownComponent } from './parts/comp-drop-down/comp-drop-down.component';
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
import { ConfigureComponent } from './parts/configure/configure.component';
import { CssAnimationComponent } from './parts/css-animation/css-animation.component';
import { CssBasicComponent } from './parts/css-basic/css-basic.component';
import { CssColorsComponent } from './parts/css-colors/css-colors.component';
import { CssGridComponent } from './parts/css-grid/css-grid.component';
import { CssHelperComponent } from './parts/css-helper/css-helper.component';
import { CssTypographyComponent } from './parts/css-typography/css-typography.component';
import { FixerComponent } from './parts/fixer/fixer.component';
import { GettingStartedComponent } from './parts/getting-started/getting-started.component';
import { GsIntroductionComponent } from './parts/gs-introduction/gs-introduction.component';
import { TemplatesComponent } from './parts/templates/templates.component';

const routes: Routes = [{
  path: "",
  component: LandingComponent,
  children: [{
    path: "",
    component: GettingStartedComponent
  }, {
    path: "getting-started/introduction",
    component: GsIntroductionComponent
  }, {
    path: "getting-started/configure",
    component: ConfigureComponent
  }, {
    path: "getting-started/templates",
    component: TemplatesComponent
  }, {
    path: "css/basic",
    component: CssBasicComponent
  }, {
    path: "css/grid",
    component: CssGridComponent
  }, {
    path: "css/colors",
    component: CssColorsComponent
  }, {
    path: "css/animations",
    component: CssAnimationComponent
  }, {
    path: "css/helpers",
    component: CssHelperComponent
  }, {
    path: "css/typography",
    component: CssTypographyComponent
  }, {
    path: "components/accordion",
    component: CompAccordionComponent
  }, {
    path: "components/alert",
    component: CompAlertComponent
  }, {
    path: "components/breadcrumb",
    component: CompBreadcrumbComponent
  }, {
    path: "components/buttons",
    component: CompButtonComponent
  }, {
    path: "components/calendar",
    component: CompCalendarComponent
  }, {
    path: "components/card",
    component: CompCardComponent
  }, {
    path: "components/chat",
    component: CompChatComponent
  }, {
    path: "components/checkbox",
    component: CompCheckboxComponent
  }, {
    path: "components/chip",
    component: CompChipComponent
  }, {
    path: "components/collapse",
    component: CompCollapseComponent
  }, {
    path: "components/component",
    component: CompComponentComponent
  }, {
    path: "components/countdown",
    component: CompCowntdownComponent
  }, {
    path: "components/date",
    component: CompDateComponent
  }, {
    path: "components/date-range",
    component: CompDateRangeComponent
  }, {
    path: "components/dragable",
    component: CompDragableComponent
  }, {
    path: "components/dropable",
    component: CompDropableComponent
  }, {
    path: "components/dropdown",
    component: CompDropDownComponent
  }, {
    path: "components/fixer",
    component: FixerComponent
  }, {
    path: "components/footer",
    component: CompFooterComponent
  }, {
    path: "components/image",
    component: CompImageComponent
  }, {
    path: "components/input",
    component: CompInputComponent
  }, {
    path: "components/list",
    component: CompListComponent
  }, {
    path: "components/loaders",
    component: CompLoadersComponent
  }, {
    path: "components/megamenu",
    component: CompMegaMenuComponent
  }, {
    path: "components/modal",
    component: CompModalComponent
  }, {
    path: "components/navbar",
    component: CompNavbarComponent
  }, {
    path: "components/note",
    component: CompNoteComponent
  }, {
    path: "components/notifications",
    component: CompNotificationsComponent
  }, {
    path: "components/offcanvas",
    component: CompOffcanvasComponent
  }, {
    path: "components/overlay",
    component: CompOverlayComponent
  }, {
    path: "components/pagination",
    component: CompPaginationComponent
  }, {
    path: "components/radio",
    component: CompRadioComponent
  }, {
    path: "components/select",
    component: CompSelectComponent
  }, {
    path: "components/sidebar",
    component: CompSidebarComponent
  }, {
    path: "components/slideshow",
    component: CompSlideShowComponent
  }, {
    path: "components/switch",
    component: CompSwitchComponent
  }, {
    path: "components/tab",
    component: CompTabComponent
  }, {
    path: "components/table",
    component: CompTableComponent
  }, {
    path: "components/text-input",
    component: CompTextInputComponent
  }, {
    path: "components/toast",
    component: CompToastComponent
  }, {
    path: "components/widget",
    component: CompWidgetComponent
  }, {
    path: "components/wizard",
    component: CompWizardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
