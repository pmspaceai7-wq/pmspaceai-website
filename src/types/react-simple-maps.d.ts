declare module "react-simple-maps" {
  import type { ComponentType, ReactNode } from "react";

  export const ComposableMap: ComponentType<Record<string, unknown>>;
  export const Geographies: ComponentType<
    Record<string, unknown> & {
      geography: string | object;
      children: (props: { geographies: Array<Record<string, unknown> & { rsmKey: string }> }) => ReactNode;
    }
  >;
  export const Geography: ComponentType<
    Record<string, unknown> & {
      geography: Record<string, unknown>;
    }
  >;
  export const Marker: ComponentType<
    Record<string, unknown> & {
      coordinates: [number, number];
      children?: ReactNode;
    }
  >;
}
