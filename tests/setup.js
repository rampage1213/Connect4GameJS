import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Connect 4</title><link rel="stylesheet" href="styles.css"></head><body><h1>Connect 4</h1><h2 id="winner"></h2><table><tbody><tr class="row1"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row2"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row3"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row4"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row5"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr><tr class="row6"><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td><td><button type="button"></button></td></tr></tbody></table><h3 id="whos-turn">Red\'s Turn</h3><div class="reset"><button type="button" id="clearBoard">Clear Board</button><button type="button" id="clearScores">Clear Scores</button></div><ul><li>Red &nbsp;&nbsp;&nbsp;: <span id="red-holder">0</span></li><li>Black : <span id="black-holder">0</span></li><li>Draw &nbsp;: <span id="draw-holder">0</span></li></ul><script type="text/javascript" src="bundle.js"></script></body></html>');
global.window = doc.defaultView;
global.document = doc
