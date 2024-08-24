import request from '@/utils/axios'
import {
  ResponseData,
  ProductsResponseData,
  AttrsResponseData,
  Attr,
} from './type'

enum API {
  CATEGORY1_URL = '/admin/product/getCategory1', // 一级商品分类
  CATEGORY2_URL = '/admin/product/getCategory2', // 二级商品分类
  CATEGORY3_URL = '/admin/product/getCategory3', // 三级商品分类
  ATTR_INFO_LIST_URL = '/admin/product/attrInfoList', // 获取属性详情列表
  ATTR_ADD_OR_UPDATE_URL = '/admin/product/saveAttrInfo', // 新增或修改属性
  ATTR_DELETE_URL = '/admin/product/deleteAttr', // 删除属性
}

/**
 * 获取一级商品分类
 */
export const fetchProductCategory1 = () => {
  return request.get<any, ProductsResponseData>(`${API.CATEGORY1_URL}`)
}

/**
 * 获取二级商品分类
 * @param category1Id 一级分类id
 */
export const fetchProductCategory2 = (category1Id: number) => {
  return request.get<any, ProductsResponseData>(
    `${API.CATEGORY2_URL}/${category1Id}`,
  )
}

/**
 * 获取三级商品分类
 * @param category2Id 二级分类id
 * */
export const fetchProductCategory3 = (category2Id: number) => {
  return request.get<any, ProductsResponseData>(
    `${API.CATEGORY3_URL}/${category2Id}`,
  )
}

/**
 * 获取属性详情列表
 * @param category1Id 一级分类id
 * @param category2Id 二级分类id
 * @param category3Id 三级分类id
 * */
export const fetchAttrInfoList = (
  category1Id: number,
  category2Id: number,
  category3Id: number,
) => {
  return request.get<any, AttrsResponseData>(
    `${API.ATTR_INFO_LIST_URL}/${category1Id}/${category2Id}/${category3Id}`,
  )
}

// 新增或修改属性
export const fetchAddOrUpdateAttr = (data: Attr) => {
  return request.post<any, ResponseData>(API.ATTR_ADD_OR_UPDATE_URL, data)
}

// 删除属性
export const fetchDeleteAttr = (attrId: number) => {
  return request.delete<any, ResponseData>(`${API.ATTR_DELETE_URL}/${attrId}`)
}
