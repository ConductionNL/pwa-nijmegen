import * as React from "react";
import {ActionMenu, BreakpointActionMenu} from "@conductionnl/nl-design-system/lib/ActionMenu/src/actionMenu";

export function MainActionMenu() {
  return (
    <ActionMenu
      items={[{ name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/products' }, { name: 'Mijn aanvragen', icon: 'fas fa-list-alt', link: '/cases' }, { name: 'Mijn gegevens', icon: 'fas fa-id-card-alt', link: '/data' }, { name: 'Mijn kluis', icon: 'fas fa-lock', link: '/vault' }]}
      breakpoint={BreakpointActionMenu.mobile}
    />
  );
}
