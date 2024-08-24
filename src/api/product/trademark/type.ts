interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface Trademark {
  id?: number
  tmName: string
  logoUrl: string
  createTime?: string
  updateTime?: string
}

// 包含全部品牌的的数据类型
export type Records = Trademark[]

export interface TradeMarkResponsedata extends ResponseData {
  data: {
    records: Records
    current: number
    hitCount: boolean
    optimizeCountSql: boolean
    pages: number
    searchCount: boolean
    size: number
    total: number
  }
}
