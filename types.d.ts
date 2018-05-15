// Copyright (c) 2018 haolu
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export as namespace dataviewTransformer;

/**
 * Transforms your category Data from PBI Dataview to a easily digestible data array
 * 
 * @param dataview Dataview options.dataviews[0]
 * @param groupingName string The name of the grouping in the capabilities.json file
 * @param selectionIdBuilder host.createSelectionidBuilder
 */
export function categoryTransform<T>(dataview: any, groupingName: string, createSelectionIdBuilder?: any): T[];

