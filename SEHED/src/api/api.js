import axios from './request'

export async function downloadAndroid() {
  const res = await axios.get("https://creditapp.singalariti.com/common/getAndroidPackage")
  return res.data
}

export async function saveContact(data) {
  const res = await axios.post(
    "https://creditadmin.singalariti.com/prod-api/portal/save/contactInfo",
    data
  )
  return res.data
}

export async function subscribe(data) {
  const res = await axios.post(
    "https://creditadmin.singalariti.com/prod-api/portal/save/subscribe",
    data,
    {

    }
  )
  return res.data
}
