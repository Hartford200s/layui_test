layui.define([
    'layer',
    'form'
], function(exports) {
    var layer = layui.layer;
    var form = layui.form;
    layer.msg("hello~ this is module1.js");
    exports('module1', {});//注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});


