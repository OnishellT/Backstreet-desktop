import { type VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";
import { type Size } from "components/system/Window/RndWindow/useResizable";
import type MatrixConfig from "components/system/Desktop/Wallpapers/Matrix/config";

declare global {
  interface Window {
    DEBUG_DISABLE_WALLPAPER?: boolean;
    WallpaperDestroy?: () => void;
  }
}

export type WallpaperConfig =
  | Partial<typeof MatrixConfig>
  | VantaWavesConfig;

export type WallpaperFunc = (
  el: HTMLElement | null,
  config?: WallpaperConfig,
  fallback?: () => void
) => Promise<void> | void;

export type OffscreenRenderProps = {
  canvas: OffscreenCanvas;
  clockSize?: Size;
  config?: VantaWavesConfig;
  devicePixelRatio: number;
};

export type WallpaperMenuItem = {
  id: string;
  name?: string;
  requiresWebGPU?: boolean;
  startsWith?: boolean;
};

export type WallpaperMessage = { message: string; type: string };
