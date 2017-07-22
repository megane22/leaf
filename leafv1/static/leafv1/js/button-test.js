var joy_colors = [
  "rgb(227, 209, 235)", //unselected #e3d1eb
  "rgb(191, 149, 208)", //unselected-hover #bf95d0
  "rgb(155, 89, 182)", //selected #9b59b6
  "rgb(93, 53, 109)", //selected-hover #5d356d
];

function getTile(tile_title, tile_num) {
  var tile_id = "tile-" + tile_title + String(tile_num);
  return document.getElementById(tile_id);
}

function isSelected(tile) {
  if (tile.style.backgroundColor == joy_colors[2] || tile.style.backgroundColor == joy_colors[3]) {
    return true;
  }
  return false;
}

function hover(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    tile.style.backgroundColor = joy_colors[3]; //selected-hover
  }
  else {
    tile.style.backgroundColor = joy_colors[1] //unselected-hover
  }
}

function unhover(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    tile.style.backgroundColor = joy_colors[2]; //selected
  }
  else {
    tile.style.backgroundColor = joy_colors[0]; //unselected
  }
}

function toggle(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    tile.style.backgroundColor = joy_colors[1]; //unselected-hover
  }
  else {
    tile.style.backgroundColor = joy_colors[3]; //selected-hover
  }
  isSelected(tile);
}
