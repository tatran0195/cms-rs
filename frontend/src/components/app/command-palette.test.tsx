import { act } from "react";
import { createRoot } from "react-dom/client";
import { parseHTML } from "linkedom";
import { afterEach, describe, expect, it } from "vitest";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@cms/design-system/components/ui/command";

const dom = parseHTML("<!doctype html><html><body></body></html>");
Object.assign(globalThis, {
  window: dom.window,
  document: dom.document,
  HTMLElement: dom.HTMLElement,
  Element: dom.Element,
  Node: dom.Node,
  navigator: dom.window.navigator,
  customElements: dom.window.customElements,
});
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const roots: Array<ReturnType<typeof createRoot>> = [];

afterEach(async () => {
  for (const root of roots.splice(0)) {
    await act(async () => root.unmount());
  }
  document.body.replaceChildren();
});

describe("CommandDialog and cmdk context", () => {
  it("throws Cannot read properties of undefined (reading 'subscribe') when CommandInput is used outside Command", async () => {
    const container = document.createElement("div");
    const root = createRoot(container);

    let caught: Error | null = null;
    try {
      await act(async () => {
        root.render(<CommandInput placeholder="Search..." />);
      });
    } catch (e) {
      caught = e as Error;
    }

    expect(caught).not.toBeNull();
    expect(caught?.message).toContain("subscribe");
  });

  it("renders CommandDialog with Command context successfully", async () => {
    const container = document.createElement("div");
    document.body.append(container);
    const root = createRoot(container);
    roots.push(root);

    let caught: Error | null = null;
    try {
      await act(async () => {
        root.render(
          <CommandDialog open={true} onOpenChange={() => undefined}>
            <CommandInput placeholder="Search projects..." />
            <CommandList>
              <CommandEmpty>No results</CommandEmpty>
              <CommandGroup heading="Projects">
                <CommandItem>Project A</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>,
        );
      });
    } catch (e) {
      caught = e as Error;
    }

    expect(caught).toBeNull();
  });
});
