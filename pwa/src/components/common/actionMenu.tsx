import * as React from "react";
import { ActionMenu, BreakpointActionMenu } from "@conductionnl/nl-design-system/lib/ActionMenu/src/actionMenu";

export function MainActionMenu() {
  return (
    <ActionMenu
      items={[{ name: 'Verwerkingsregister', icon: 'fas fa-book', link: '/register' },
       { name: 'Contracten inzien', icon: 'fas fa-file-contract', link: '/contract' }]}
      breakpoint={BreakpointActionMenu.mobile}
    />
  );
}