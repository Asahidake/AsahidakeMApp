import { Tile } from 'ol/layer';
import { XYZ } from 'ol/source';

const loadingState = {
  tileLoadComplete: false,
  tilesToLoad: 0,
  tilesLoaded: 0
};

const tileLoadCallbacks = [];

function handleTileStart() {
  loadingState.tilesToLoad += 1;
}

function handleTileFinish() {
  loadingState.tilesLoaded += 1;

  if (loadingState.tilesLoaded > 1 && loadingState.tilesToLoad === loadingState.tilesLoaded) {
      completeLoading();
  }
}

function completeLoading() {
  tileSource.un("tileloadstart", handleTileStart);
  tileSource.un("tileloadend", handleTileFinish);

  loadingState.tileLoadComplete = true;

  tileLoadCallbacks.forEach(cb => cb());
}

/**
 * Register a listener for when the first batch of tiles are finished loading
 * @param {function} cb 
 */
export function onTileLoadFinish(cb) {
  tileLoadCallbacks.push(cb)
}

const baseSource = {
  url: '/map/tiles/{z}/{x}/{y}.png',
  tilePixelRatio: 1,
  attributions: '(測量法に基づく国土地理院長承認（使用）R 2JHs 394)',
};

const retinaSource = {
  url: '/map/tiles/2x/{z}/{x}/{y}.png',
  tilePixelRatio: 2,
  attributions: '(測量法に基づく国土地理院長承認（使用）R 2JHs 394)',
};

const isRetina = window.matchMedia(
  '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
).matches;

const tileSource = new XYZ(isRetina ? retinaSource : baseSource);
tileSource.on("tileloadstart", handleTileStart);
tileSource.on("tileloadend", handleTileFinish);

export const baseTiles = new Tile({
  source: tileSource,
  extent: [15890800.0, 5401150.0, 15918700.0, 5426850.0],
  interactive: true,
});