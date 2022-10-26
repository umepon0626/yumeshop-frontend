/* tslint:disable */
/* eslint-disable */
/**
 * yumeshop
 * yumeshopのAPIが定義されています。
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 値段の情報のmodel
 * @export
 * @interface Price
 */
export interface Price {
  /**
   * 割引後の販売価格
   * @type {number}
   * @memberof Price
   */
  selling_price: number;
  /**
   * 元の値段
   * @type {number}
   * @memberof Price
   */
  original_price: number;
  /**
   * 割引が適応されているか
   * @type {boolean}
   * @memberof Price
   */
  discounted: boolean;
  /**
   * 割引の総量
   * @type {number}
   * @memberof Price
   */
  discount_amount: number;
  /**
   * 割引の割合(0-100[%])
   * @type {number}
   * @memberof Price
   */
  discount_percentage: number;
}

export function PriceFromJSON(json: any): Price {
  return PriceFromJSONTyped(json, false);
}

export function PriceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Price {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    selling_price: json['selling_price'],
    original_price: json['original_price'],
    discounted: json['discounted'],
    discount_amount: json['discount_amount'],
    discount_percentage: json['discount_percentage'],
  };
}

export function PriceToJSON(value?: Price | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    selling_price: value.selling_price,
    original_price: value.original_price,
    discounted: value.discounted,
    discount_amount: value.discount_amount,
    discount_percentage: value.discount_percentage,
  };
}
