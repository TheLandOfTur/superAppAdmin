// Export specific API calls using the generic function
import axiosInstance from './api.js'
import { apiUrls } from '@/utils/api/apiUrls.js'
import chatAxiosInstance from '@/utils/api/chatApi.js'

export const login = async (params) => {
  return await axiosInstance
    .post(apiUrls.login, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchTariffs = async (params) => {
  return await axiosInstance.get(apiUrls.dashboardTariffs, { params: params }).then((res) => {
    return res.data
  })
}

export const getTicketCities = async (params) => {
  return await axiosInstance.get(apiUrls.getCities, { params: params }).then((res) => {
    return res.data?.data
  })
}

export const getDistricts = async (params) => {
  return await axiosInstance.get(apiUrls.getDistricts, { params: params }).then((res) => {
    return res.data?.data
  })
}

export const getRegions = async (params) => {
  return await axiosInstance.get(apiUrls.getDistricts, { params: params }).then((res) => {
    return res.data?.data
  })
}
export const getRegionTypes = async (params) => {
  return await axiosInstance.get(apiUrls.getRegionTypes, { params: params }).then((res) => {
    return res.data?.data
  })
}

export const fetchTariffsWithConnectedDevices = async (id) => {
  return await axiosInstance.get(apiUrls.products + `/${id}/internet-tariffs`).then((res) => {
    return res.data?.data
  })
}

export const connectTariffToDevice = async ({ id, params }) => {
  return await axiosInstance
    .put(apiUrls.products + `/${id}/updatePosition`, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const connectDeviceToTariff = async ({ id, params }) => {
  return await axiosInstance
    .put(apiUrls.dashboardTariffs + `/${id}/updateDevicePosition`, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchDevicesWithConnectedTariffs = async (id) => {
  return await axiosInstance.get(apiUrls.dashboardTariffs + `/${id}/devices`).then((res) => {
    return res.data?.data
  })
}

export const fetchAnotherTariffList = async (id) => {
  return await axiosInstance.get(apiUrls.dashboardTariffs + `/${id}/devices`).then((res) => {
    return res.data?.data
  })
}

export const fetchCategoryTariffs = async (id) => {
  return await axiosInstance.get(apiUrls.dashboardCategories + `/${id}/tariffs`).then((res) => {
    return res.data
  })
}
export const createTariff = async (params) => {
  return await axiosInstance
    .post(apiUrls.dashboardTariffs, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateTariffs = async (props) => {
  return await axiosInstance
    .put(apiUrls.dashboardTariffs + `/${props.id}`, props.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateCategory = async (props) => {
  return await axiosInstance
    .put(apiUrls.dashboardCategories + `/${props.id}`, props.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteCategory = async (id) => {
  return await axiosInstance
    .delete(apiUrls.dashboardCategories + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const createTariffCategory = async (params) => {
  return await axiosInstance
    .post(apiUrls.dashboardCategories, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchCategories = async (params) => {
  return await axiosInstance.get(apiUrls.dashboardCategories, { params: params }).then((res) => {
    return res.data
  })
}

export const connectTariffToCategory = async (ids) => {
  return await axiosInstance
    .post(`${apiUrls.dashboardCategories}/${ids?.categoryId}/tariffs?tariffId=${ids?.tariffId}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const removeTariffToCategory = async (ids) => {
  return await axiosInstance
    .delete(`${apiUrls.dashboardCategories}/${ids?.categoryId}/tariffs?tariffId=${ids?.tariffId}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const getStories = async (params) => {
  return await axiosInstance
    .get(apiUrls.stories, { params })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createStories = async (params) => {
  return await axiosInstance
    .post(apiUrls.stories, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateStories = async (params) => {
  return await axiosInstance
    .put(apiUrls.stories + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const deleteStories = async (id) => {
  return await axiosInstance
    .delete(apiUrls.stories + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchNavigationCards = async (params) => {
  return await axiosInstance.get(apiUrls.navigationCards, { params: params }).then((res) => {
    return res.data
  })
}

export const createNavigationCards = async (params) => {
  return await axiosInstance
    .post(apiUrls.navigationCards, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateNavigationCards = async (params) => {
  return await axiosInstance
    .put(apiUrls.navigationCards + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const deleteCards = async (id) => {
  return await axiosInstance
    .delete(apiUrls.navigationCards + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const deleteNews = async (id) => {
  return await axiosInstance
    .delete(apiUrls.news + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchNews = async (params) => {
  return await axiosInstance.get(apiUrls.news, { params: params }).then((res) => {
    return res.data
  })
}
export const createNews = async (params) => {
  return await axiosInstance
    .post(apiUrls.news, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateNews = async (params) => {
  return await axiosInstance
    .put(apiUrls.news + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchTickets = async (params) => {
  return await axiosInstance.get(apiUrls.tickets, { params }).then((res) => {
    return res.data
  })
}
export const fetchCallBackRequest = async (params) => {
  return await axiosInstance.get(apiUrls.callBackRequests, { params: params }).then((res) => {
    return res.data
  })
}
export const updateRequest = async (params) => {
  return await axiosInstance
    .patch(apiUrls.callBackRequests + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchRoles = async (params) => {
  return await axiosInstance.get(apiUrls.roles, { params }).then((res) => {
    return res.data
  })
}
export const fetchChannels = async (params) => {
  return await axiosInstance.get(apiUrls.channels, { params: params }).then((res) => {
    return res.data
  })
}
export const updateChannel = async (params) => {
  return await axiosInstance
    .put(apiUrls.channels + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createChannel = async (params) => {
  return await axiosInstance
    .post(apiUrls.channels, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateChannelCategory = async (params) => {
  return await axiosInstance
    .put(apiUrls.channelCategories + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createChannelCategory = async (params) => {
  return await axiosInstance
    .post(apiUrls.channelCategories, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteChannelCategory = async (id) => {
  return await axiosInstance
    .delete(apiUrls.channelCategories + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchChannelCategories = async (params) => {
  return await axiosInstance.get(apiUrls.channelCategories, { params: params }).then((res) => {
    return res.data
  })
}

export const fetchChannelTariffs = async (params) => {
  return await axiosInstance.get(apiUrls.channelTariffs, { params: params }).then((res) => {
    return res.data
  })
}
export const updateChannelTariff = async (params) => {
  return await axiosInstance
    .put(apiUrls.channelTariffs + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createChannelTariff = async (params) => {
  return await axiosInstance
    .post(apiUrls.channelTariffs, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteChannelTariff = async (id) => {
  return await axiosInstance
    .delete(apiUrls.channelTariffs + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchOffice = async (params) => {
  return await axiosInstance.get(apiUrls.offices, { params: params }).then((res) => {
    return res.data
  })
}
export const createOffice = async (params) => {
  return await axiosInstance
    .post(apiUrls.offices, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteOffice = async (id) => {
  return await axiosInstance
    .delete(apiUrls.offices + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateOffice = async (params) => {
  return await axiosInstance
    .put(apiUrls.offices + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchCities = async () => {
  return await axiosInstance.get(apiUrls.officesCity, { limit: 100, offset: 0 }).then((res) => {
    return res.data
  })
}
export const createCity = async (params) => {
  return await axiosInstance
    .post(apiUrls.officesCity, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteCity = async (id) => {
  return await axiosInstance
    .delete(apiUrls.officesCity + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateCity = async (params) => {
  return await axiosInstance
    .put(apiUrls.officesCity + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchWifiDevices = async () => {
  return await axiosInstance.get(apiUrls.products).then((res) => {
    return res.data
  })
}
export const createWifiDevice = async (params) => {
  return await axiosInstance
    .post(apiUrls.products, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteWifiDevice = async (id) => {
  return await axiosInstance
    .delete(apiUrls.products + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateWifiDevice = async (params) => {
  return await axiosInstance
    .put(apiUrls.products + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchDeviceCategory = async (params) => {
  return await axiosInstance.get(apiUrls.productsCategory, { params: params }).then((res) => {
    return res.data
  })
}
export const createDeviceCategory = async (params) => {
  return await axiosInstance
    .post(apiUrls.productsCategory, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteDeviceCategory = async (id) => {
  return await axiosInstance
    .delete(apiUrls.productsCategory + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateDeviceCategory = async (params) => {
  return await axiosInstance
    .put(apiUrls.productsCategory + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchDeviceTag = async (params) => {
  return await axiosInstance.get(apiUrls.productsTags, { params: params }).then((res) => {
    return res.data
  })
}
export const createDeviceTag = async (params) => {
  return await axiosInstance
    .post(apiUrls.productsTags, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteDeviceTag = async (id) => {
  return await axiosInstance
    .delete(apiUrls.productsTags + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateDeviceTag = async (params) => {
  return await axiosInstance
    .put(apiUrls.productsTags + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchBanners = async (params) => {
  return await axiosInstance.get(apiUrls.banners, { params: params }).then((res) => {
    return res.data
  })
}
export const createBanner = async (params) => {
  return await axiosInstance
    .post(apiUrls.banners, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteBanner = async (id) => {
  return await axiosInstance
    .delete(apiUrls.banners + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateBanner = async (params) => {
  return await axiosInstance
    .put(apiUrls.banners + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchFAQs = async (params) => {
  return await axiosInstance
    .get(apiUrls.faqs, { params: params })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createFAQs = async (params) => {
  return await axiosInstance
    .post(apiUrls.faqs, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteFAQs = async (id) => {
  return await axiosInstance
    .delete(apiUrls.faqs + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateFAQs = async (params) => {
  return await axiosInstance
    .put(apiUrls.faqs + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchService = async (params) => {
  return await axiosInstance
    .get(apiUrls.serviceOptions, { params: params })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createService = async (params) => {
  return await axiosInstance
    .post(apiUrls.services, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteService = async (id) => {
  return await axiosInstance
    .delete(apiUrls.services + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateService = async (params) => {
  return await axiosInstance
    .put(apiUrls.services + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchStaff = async (id) => {
  if (id) {
    return await axiosInstance.get(apiUrls.staffs + `/${id}`).then((res) => {
      return res.data?.data
    })
  } else return undefined
}

export const fetchStaffs = async (params) => {
  return await axiosInstance
    .get(apiUrls.staffs, { params: params })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createStaffs = async (params) => {
  return await axiosInstance
    .post(apiUrls.staffs, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteStaffs = async (id) => {
  return await axiosInstance
    .delete(apiUrls.staffs + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateStaffs = async (params) => {
  return await axiosInstance
    .put(apiUrls.staffs + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchServiceOption = async (params) => {
  return await axiosInstance.get(apiUrls.serviceOptions, { params: params }).then((res) => {
    return res.data
  })
}
export const createServiceOption = async (params) => {
  return await axiosInstance
    .post(apiUrls.serviceOptions, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteServiceOption = async (id) => {
  return await axiosInstance
    .delete(apiUrls.serviceOptions + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateServiceOption = async (params) => {
  return await axiosInstance
    .put(apiUrls.serviceOptions + `/${params?.id}`, params?.params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchConnectedServiceOptions = async (id) => {
  return await axiosInstance.get(apiUrls.services + `/${id}/options`).then((res) => {
    return res.data?.data
  })
}

export const connectServiceToOption = async ({ id, serviceId }) => {
  return await axiosInstance
    .post(apiUrls.services + `/${id}/options/${serviceId}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const disConnectServiceToOption = async ({ id, serviceId }) => {
  return await axiosInstance
    .delete(apiUrls.services + `/${id}/options/${serviceId}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchUsersArchiveChats = async (params) => {
  return await chatAxiosInstance.get(apiUrls.userArchivedChats, { params: params }).then((res) => {
    return res.data?.data
  })
}
export const fetchChatFAQs = async (params) => {
  return await chatAxiosInstance
    .get(apiUrls.chatFaqs, { params: params })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createChatFAQs = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.chatFaqs, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteChatFAQs = async (id) => {
  return await chatAxiosInstance
    .delete(apiUrls.chatFaqs, { params: { id } })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const updateChatFAQs = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.updateChatFaq, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const fetchChatOperators = async () => {
  return await chatAxiosInstance
    .get(apiUrls.getOperators)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const fetchChatFAQsCategories = async () => {
  return await chatAxiosInstance
    .get(apiUrls.chatFaqCategoryAdmin)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const createChatFAQsCategories = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.chatFaqCategoryAdmin, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteChatFAQsCategories = async (id) => {
  return await chatAxiosInstance
    .delete(apiUrls.chatFaqCategoryAdmin + `/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateChatFAQsCategories = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.chatFaqCategoryAdminUpdate, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const getActiveChats = async (params) => {
  return chatAxiosInstance.get(apiUrls.chatsActiveChats, { params: params }).then((res) => {
    return res.data.data
  })
}

export const getRoomMessages = async (chatId) => {
  if (chatId)
    return chatAxiosInstance.get(apiUrls.chatMessages + `?chatId=${chatId}`).then((res) => {
      return res.data?.data
    })
  else return []
}
export const getStatistics = async (params) => {
  return chatAxiosInstance.get(apiUrls.getStatistics, { params }).then((res) => {
    return res.data?.data
  })
}

export const getRotFaqs = async (categoryId) => {
  return chatAxiosInstance.get(apiUrls.chatFaqsCreate, { params: { categoryId } }).then((res) => {
    return res.data?.data
  })
}

export const getRateOptions = async () => {
  return chatAxiosInstance.get(apiUrls.ratePatterns).then((res) => {
    return res.data?.data
  })
}
export const createRateOptions = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.createRatePatterns, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
export const deleteRateOptions = async (id) => {
  return await chatAxiosInstance
    .delete(apiUrls.createRatePatterns, { params: { id } })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const updateRateOptions = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.updateRatePatterns, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const archiveCallBacks = async (params) => {
  return await chatAxiosInstance
    .post(apiUrls.updateCallBackStatus, params)
    .then((res) => {
      return res.data?.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const getSubFaqs = async (categoryId, parentFaqId) => {
  return chatAxiosInstance
    .get(apiUrls.chatFaqsCreate, { params: { categoryId, parentFaqId } })
    .then((res) => {
      return res.data?.data
    })
}

export const getRateById = async (reasonIds) => {
  const ids = reasonIds?.join(',')
  return chatAxiosInstance.get(apiUrls.getReasonsByIds, { params: { ids } }).then((res) => {
    return res.data?.data
  })
}

export const getChatCallBackApplications = async (params) => {
  return chatAxiosInstance.get(apiUrls.callback, { params: params }).then((res) => {
    return res.data
  })
}
