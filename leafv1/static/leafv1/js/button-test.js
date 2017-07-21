var joy_colors = [
  "#e3d1eb", //unselected
  "#bf95d0", //unselected-hover
  "#9b59b6", //selected
  "#5d356d", //selected-hover
];

function hover(tile_id) {
  var tile = document.getElementById(tile_id);
  console.log(tile_id)
  if (isSelected(tile_id)) {
    tile.style.backgroundColor = joy_colors[3]; //selected-hover
  }
  else {
    tile.style.backgroundColor = joy_colors[1] //unselected-hover
  }
}

function unhover(tile_id) {
  var tile = document.getElementById(tile_id);
  console.log(tile_id)
  if (isSelected(tile_id)) {
    tile.style.backgroundColor = joy_colors[2]; //selected
  }
  else {
    tile.style.backgroundColor = joy_colors[0]; //unselected
  }
}

function toggle(tile_id) {
  	var tile = document.getElementById(tile_id);
    if (isSelected(tile_id)) {
      tile.style.backgroundColor = "rgb(155, 89, 182)";
    }
    else {

    }
}

function isSelected(tile_id) {
  var tile = document.getElementById(tile_id);
  console.log(tile.style.backgroundColor);
  if (tile.style.backgroundColor == "rgb(155, 89, 182)") {
    return true;
  }
  return false;
}
