import request from '@/utils/axios'

enum API {
  UPLOAD_URL = '/admin/product/fileUpload',
}

// 上传文件
export const fetchUploadFile = (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  return request.post<any, any>(API.UPLOAD_URL, formData)
}
