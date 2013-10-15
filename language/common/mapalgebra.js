/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

Blockly.Language.mapalgebra_load_raster = {
  // Comparison operator.
  category: 'Map Algebra',
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("Raster")
        .appendTitle(new Blockly.FieldDropdown([['den_grad', 'den_grad'], ['air_drive', 'air_drive'], ['bike_route', 'bike_route']]), 'RASTERNAME');
    this.setColour(0);
    this.setOutput(true);
   // this.setTooltip("Load a raster as a data source.") 
    // Assign 'this' to a variable for use in the tooltip closure below.
    //var thisBlock = this;
    //this.setTooltip(function() {
    //  var op = thisBlock.getTitleValue('OP');
    //  return thisBlock.TOOLTIPS[op];
    //});
  }
};

Blockly.Language.mapalgebra_local_calculation = {
  category: 'Map Algebra',
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.appendValueInput('A').appendTitle("LocalCalculation");
    this.appendValueInput('B')
        .appendTitle(new Blockly.FieldDropdown(Blockly.Language.mapalgebra_local_calculation.OPS, 'op'));
    this.setColour(220);
    this.setOutput(true);
    this.setTooltip("Load a raster as a data source.");
   // this.setTooltip("Load a raster as a data source.") 
    // Assign 'this' to a variable for use in the tooltip closure below.
    //var thisBlock = this;
    //this.setTooltip(function() {
    //  var op = thisBlock.getTitleValue('OP');
    //  return thisBlock.TOOLTIPS[op];
    //});
  }
};

Blockly.Language.mapalgebra_local_minimum = {
  category: 'Map Algebra',
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.appendValueInput('A').appendTitle("LocalMinimum");
    this.appendValueInput('B');
    this.setColour(220);
    this.setOutput(true);
    this.setTooltip("Set each pixel to the Nth lowest of its values.");
  }
};


Blockly.Language.mapalgebra_local_minimum = {
  category: 'Map Algebra',
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.appendValueInput('A').appendTitle("LocalMinimum");
    this.appendValueInput('B');
    this.setColour(220);
    this.setOutput(true);
    this.setTooltip("Set each pixel to the Nth lowest of its values.");
  }
};


Blockly.Language.mapalgebra_renderpng = {
  // Print statement.
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(160);
    this.appendValueInput("raster")
        .appendTitle("Render image");
    this.appendDummyInput()
        .appendTitle("with")
        .appendTitle(new Blockly.FieldTextInput('10',
            Blockly.FieldTextInput.nonnegativeIntegerValidator), 'numBreaks')
        .appendTitle("classes");
    this.appendDummyInput()
        .appendTitle("with colors")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Language.mapalgebra_colorramps, 'colorRamp'));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_PRINT_TOOLTIP);
  }
};

Blockly.Language.mapalgebra_colorramps = [
  ["Blue to red", "blue to red"]
];

Blockly.Language.mapalgebra_local_calculation.OPS = [
    ['Add', 'Add'],
    ['Subtract', 'Subtract'],
    ['Multiply', 'Multiply'],
    ['Divide', 'Divide'],
    ['Ceil', 'Ceil'],
    ['Floor', 'Floor'],
    ['Sqrt', 'Sqrt'],
    ['Pow', 'Pow'],
    ['Log', 'Log']
]

