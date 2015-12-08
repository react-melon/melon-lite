/**
 * @file main entry file
 * @author ludafa(ludafa@outlook.com)
 */

exports.init = function () {
  var hehe = arguments.length <= 0 || arguments[0] === undefined ? { name: 1 } : arguments[0];
  var name = hehe.name;

  console.log(`hello, edp project ${ name }`);
};