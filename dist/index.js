// copyright (c) 2018 Hao Luo
//
// this software is released under the MIT License.
// https://opensource.org/licenses/MIT
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lodash_1 = require("lodash");
    function categoryTransform(dataview) {
        "use strict";
        var categoriesOrg = lodash_1.get(dataview, "categorical.categories", []);
        var valuesOrg = lodash_1.get(dataview, "categorical.values", []);
        var parseCategoricalColumnValues = function (d) {
            var keyName = Object.keys(lodash_1.get(d, "source.roles"))[0];
            var values = d.values;
            return values.map(function (v) {
                return (_a = {},
                    _a[keyName] = v,
                    _a);
                var _a;
            });
        };
        var categories = categoriesOrg.map(parseCategoricalColumnValues); // [[{name: 'one'}, {name: 'two'}]]
        var values = valuesOrg.map(parseCategoricalColumnValues);
        var preAssigned = lodash_1.zip.apply(void 0, categories.concat(values));
        return preAssigned.map(function (d) { return lodash_1.assign.apply(void 0, [{}].concat(d)); });
    }
    exports.categoryTransform = categoryTransform;
});
