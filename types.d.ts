// Copyright (c) 2018 haolu
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export as namespace dataviewTransformer;

/**
 * Transforms your category Data from PBI Dataview to a easily digestible data array
 * 
 * @param dataview Dataview options.dataviews[0]
 * @param selectionIdBuilder host.createSelectionidBuilder
 */
export function categoryTransform<T>(dataview: any, createSelectionIdBuilder?: any): T[];

