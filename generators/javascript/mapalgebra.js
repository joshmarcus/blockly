/**
 * @fileoverview Generating JavaScript for map algebra.
 * @author jmarcus@azavea.com (Josh Marcus)
 */
'use strict';

//Blockly.JavaScript = Blockly.Generator.get('JavaScript');
//ping

Blockly.JavaScript.mapalgebra_load_raster = function () {
  var raster = Blockly.JavaScript.quote_(this.getTitleValue('RASTERNAME'));
  var code = 'load_raster(' + raster + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.mapalgebra_local_calculation = function () {
  // Print statement.
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A',
      Blockly.JavaScript.ORDER_NONE);
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B',
      Blockly.JavaScript.ORDER_NONE);
  return ['add(' + argument0 + ', ' + argument1 + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.mapalgebra_renderpng = function() {
  var argument0 = Blockly.JavaScript.valueToCode(this, 'raster', Blockly.JavaScript.ORDER_FUNCTION_CALL);
  return ['render_png(' + argument0 + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

