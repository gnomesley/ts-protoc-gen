"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Printer_1 = require("../Printer");
var util_1 = require("../util");
function printEnum(enumDescriptor, indentLevel) {
    var printer = new Printer_1.Printer(indentLevel);
    printer.printEmptyLn();
    printer.printLn("export enum " + enumDescriptor.getName() + " {");
    enumDescriptor.getValueList().forEach(function (value) {
        var valueName = value.getName() || util_1.throwError("Missing value name");
        printer.printIndentedLn(valueName.toUpperCase() + " = " + value.getNumber() + ",");
    });
    printer.printLn("}");
    return printer.getOutput();
}
exports.printEnum = printEnum;
//# sourceMappingURL=enum.js.map