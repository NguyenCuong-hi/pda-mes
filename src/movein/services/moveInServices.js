import axios from "axios";

export const downloadFile = (transfer) => {
    let url = `https://api.data.gov.in/resource/8d3b6596-b09e-4077-aebf-425193185a5b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=csv`;
  return axios.put(url, transfer);
}