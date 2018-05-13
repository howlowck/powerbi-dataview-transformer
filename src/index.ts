// copyright (c) 2018 Hao Luo
//
// this software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {get, zip, assign} from "lodash";

export function categoryTransform<T> (dataview: any): T[] {
  "use strict";
  const categoriesOrg: any[] = get(dataview, "categorical.categories", []);
  const valuesOrg: any[] = get(dataview, "categorical.values", []);
  const parseCategoricalColumnValues = (d: any) => {
    const keyName: string = Object.keys(get(d, "source.roles"))[0];
    const values: any[] = d.values;
    return values.map(v => ({
      [keyName]: v
    }));
  };

  const categories: any[][] = categoriesOrg.map(parseCategoricalColumnValues); // [[{name: 'one'}, {name: 'two'}]]

  const values: any[][] = valuesOrg.map(parseCategoricalColumnValues);

  const preAssigned: any = zip(...categories, ...values);

  return preAssigned.map((d: any) => assign({}, ...d));
}
