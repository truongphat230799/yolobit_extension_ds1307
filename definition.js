Blockly.Blocks["ds1307_showtime"] = {
  init: function() {
    this.jsonInit({
      message0: "lấy giá trị thời gian từ cảm biến",
      args0: [
      ],
      colour: "#CFF600",
      tooltip: '',
      helpUrl: ''
    });
  },
  getDeveloperVars: function() {
    return ['ds1307'];
  }
};

Blockly.Python["ds1307_showtime"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_ds1307"] = "from ds1307 import DS1307";
  Blockly.Python.definitions_["import_create_ds1307"] = "ds1307 = DS1307(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "ds1307.datetime()\n";
  return code;
};


Blockly.Blocks["ds1307_settime"] = {
  init: function () {
    this.jsonInit({
      colour: "#CFF600",
      tooltip: "",
      message0: "cài đặt giá trị năm %1 tháng %2 ngày %3 thứ %4 giờ %5 phút %6 giây %7 %8",
      args0: [
        {
          type: "input_value",
          name: "YEAR",
          check: "Number"
        },
        {
          type: "input_value",
          name: "MONTH",
          check: "Number",
          min: 0,
          max: 12
        },
        {
          type: "input_value",
          name: "DATE",
          check: "Number",
          min: 0,
          max: 31
        },
        {
          type: "input_value",
          name: "WEEKDAY"
        },
        {
          type: "input_value",
          name: "HOUR",
          check: "Number",
          min: 0,
          max: 24
        },
        {
          type: "input_value",
          name: "MINUTE",
          check: "Number",
          min: 0,
          max: 60
        },
        {
          type: "input_value",
          name: "SECOND",
          check: "Number",
          min: 0,
          max: 60
        },
        {
          type: "input_dummy"
        },
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function() {
    return ['ds1307'];
  }
};

Blockly.Python["ds1307_settime"] = function (block) {
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_ds1307"] = "from ds1307 import DS1307";
  Blockly.Python.definitions_["import_create_ds1307"] = "ds1307 = DS1307(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var year = Blockly.Python.valueToCode(block, 'YEAR', Blockly.Python.ORDER_ATOMIC);
  var month = Blockly.Python.valueToCode(block, 'MONTH', Blockly.Python.ORDER_ATOMIC);
  var date = Blockly.Python.valueToCode(block, 'DATE', Blockly.Python.ORDER_ATOMIC);
  var weekday = Blockly.Python.valueToCode(block, 'WEEKDAY', Blockly.Python.ORDER_ATOMIC);
  var hour = Blockly.Python.valueToCode(block, 'HOUR', Blockly.Python.ORDER_ATOMIC);
  var minute = Blockly.Python.valueToCode(block, 'MINUTE', Blockly.Python.ORDER_ATOMIC);
  var second = Blockly.Python.valueToCode(block, 'SECOND', Blockly.Python.ORDER_ATOMIC);
  
    // TODO: Assemble Python into code variable.
  var code = "now = (" + year + ", " + month + "," + date + "," + weekday + "," + hour + "," + minute + "," + second +")\n" + "ds.datetime(now)\n";
  return code;
};

Blockly.Blocks["ds1307_gettime"] = {
  init: function() {
    this.jsonInit({
      message0: " lấy giá trị %1 tử cảm biến",
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            ["year", "YEAR"],
            ["month", "MONTH"],
            ["date", "DATE"],
            ["weekday", "WEEKDAY"],
            ["hour", "HOUR"],
            ["minute", "MINUTE"],
            ["second", "SECOND"]
          ]
        }
      ],
      output: null,
      colour: "#CFF600"
    });
  }
};

Blockly.Python["homebit3_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_ds1307"] = "from ds1307 import DS1307";
  Blockly.Python.definitions_["import_create_ds1307"] = "ds1307 = DS1307(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "";
  if (dropdown_data == "YEAR")
    code = "gettime[0]\n";
  else if (dropdown_data == "MONTH")
    code = "gettime[1]\n";
  else if (dropdown_data == "DATE")
    code = "gettime[2]\n"; 
  else if (dropdown_data == "WEEKDAY")
    code = "gettime[3]\n";
  else if (dropdown_data == "HOUR")
    code =  "gettime[4]\n";
  else if (dropdown_data == " MINUTE")
    code = "gettime[5]\n";
  else if (dropdown_data == "SECOND")
    code = "gettime[6]\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
