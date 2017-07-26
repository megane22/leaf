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
  //colors 2 and 3 of all color palettes map to the selected
  //and selected-hover states, respectively
  return tile.style.backgroundColor == joy_colors[2] || tile.style.backgroundColor == joy_colors[3];
}

function setColor(tile_title, tile_num, color_type) {
  tile = getTile(tile_title, tile_num);
  if (color_type == "unselected") {
    tile.style.backgroundColor = joy_colors[0]; //unselected
  }
  else {
    if (color_type == "unselected-hover") {
      tile.style.backgroundColor = joy_colors[1] //unselected-hover
    }
    else {
      if (color_type == "selected") {
        tile.style.backgroundColor = joy_colors[2]; //selected
      }
      else { //if (color_type == "selected-hover")
        tile.style.backgroundColor = joy_colors[3]; //selected-hover
      }
    }
  }
  return;
}

//onmouseover function - change to the appropriate hover state's color
function hover(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    setColor(tile_title, tile_num, "selected-hover");
  }
  else {
    setColor(tile_title, tile_num, "unselected-hover");
  }
  return;
}

//onmouseout function - change to the appropriate non-hover state's color
function unhover(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    setColor(tile_title, tile_num, "selected");
  }
  else {
    setColor(tile_title, tile_num, "unselected");
  }
  return;
}

//onclick function - switch unselected to selected and vice versa
function toggle(tile_title, tile_num) {
  var tile = getTile(tile_title, tile_num);
  if (isSelected(tile)) {
    setColor(tile_title, tile_num, "unselected-hover");
  }
  else {
    setColor(tile_title, tile_num, "selected-hover");
    untoggleExcept(tile_title, tile_num);
  }
  return;
}

//when one tile is toggled, un-select all other tiles
function untoggleExcept(tile_title, tile_num) {
  for (var i = 0; i < 6; i++) {
    if (i == tile_num) {
      continue;
    }
    setColor(tile_title, i, "unselected");
  }
  return;
}

//determine which tile is toggled for a given entry
function getToggledButton(tile_title) {
  for (var i = 0; i < 6; i++) {
    var tile = getTile(tile_title, i);
    if (isSelected(tile)) {
      return i;
    }
  }
  return -1;
}

//When the submit button is clicked, send a post request
function submitRecord() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1/submit_record", true);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.send("HELLO FRIEND!");
  console.log("sent-request");
}
