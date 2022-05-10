import axios from "axios";

const imgurUrl = 'https://api.imgur.com'
const clientId = 'a2c97b4c7bf5a46'

async function uploadImage(imageData) {
  const response = await axios.postForm(`${imgurUrl}/3/image`, {image: imageData},{
    headers: {
      Authorization: `Client-ID ${clientId}`
    }
  })
  return response.data.data.link
}


export { uploadImage }
