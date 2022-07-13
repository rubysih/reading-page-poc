import axios from 'axios'
import { ServerUrl, StatusCode } from '../constants'

export const loadMenu = () =>
  axios
    .get(`${ServerUrl}/menu`)
    .then(function ({ data, status, statusText }) {
      if (status === StatusCode.OK) return data
      throw new Error(`${status}: ${statusText}`)
    })
    .catch(function (error) {
      console.log('api err', error)
    })

export const loadContent = subPath =>
  axios
    .get(`contents/general/README_zh-cn.md`)
    .then(res => res)
    .catch(e => console.log('e', e))