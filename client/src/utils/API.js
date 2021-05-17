import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  saveUser: function (userData) {
    return axios.post("/api/user", userData)
  },

  //--------------- SHIFTS ---------------//
  getAllShifts: function () {
    return axios.get("/api/shifts");
  },
  getShifts: function (authID) {
    return axios.post("/api/shifts/auth", { authID: authID });
  },
  getShift: function (id) {
    return axios.get("/api/shifts/" + id);
  },
  deleteShift: function (id) {
    return axios.delete("/api/shifts/" + id);
  },
  saveShift: function (shiftData) {
    return axios.post("/api/shifts", shiftData);
  },
  getCommunityShift: function (id) {
    return axios.get("/api/shifts/" + id);
  },

  //--------------- RESOURCES ---------------//
  getAllResources: function () {
    return axios.get("/api/resources");
  },
  // *note!* this GET function is actually a POST route // 
  //             we are living in wild times           // 
  getResources: function (authID) {
    return axios.post("/api/resources/auth", { authID: authID });
  },
  getResource: function (id) {
    return axios.get("/api/resources/" + id);
  },
  deleteResource: function (id) {
    return axios.delete("/api/resources/" + id);
  },
  saveResource: function (resourceData) {
    return axios.post("/api/resources/", resourceData);
  },
  getCommunityResource: function (id) {
    return axios.get("/api/resources/" + id);
  },

  //--------------- REQUESTS ---------------//
  getRequests: function (authID) {
    return axios.post("/api/requests/auth", { authID: authID });
  },
  getAllRequests: function () {
    return axios.get("/api/requests")
  },
  getRequest: function (id) {
    return axios.get("/api/requests/" + id);
  },
  deleteRequests: function (id) {
    return axios.delete("/api/requests/" + id);
  },
  saveRequests: function (requestsData) {
    return axios.post("/api/requests/", requestsData);
  },
  getCommunityRequest: function (id) {
    return axios.get("/api/requests/" + id);
  },
};