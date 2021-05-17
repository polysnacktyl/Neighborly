import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  saveUser: function (userData) {
    return axios.post("/api/user", userData)
  },
  getShifts: function () {
    return axios.get("/api/shifts");
  },
  // Gets the book with the given id
  getShift: function (id) {
    return axios.get("/api/shifts/" + id);
  },
  // Deletes the book with the given id
  deleteShift: function (id) {
    return axios.delete("/api/shifts/" + id);
  },
  // Saves a book to the database
  saveShift: function (shiftData) {
    return axios.post("/api/shifts", shiftData);
  },
  // get single community shift detail by id
  getCommunityShift: function (id) {
    return axios.get("/api/community_calendar/" + id);
  },
  // Gets all resources by user

  //-----------------------------------------------//


  getResources: function (authID) {
    return axios.post("/api/resources/auth",  { authID: authID });
  },
// essentially--this had to get changed from GET to POST because post 
// is somehow more secure than get which was thusly not sending back 
// any of the information we were trying to call from the front end
// i swear to jeebus this is the same manner of issue i had last project 
// and i'm gonna be mad about it till i die. 

  //-----------------------------------------------//
  // Gets the resource with the given id
  getResource: function (id) {
    return axios.get("/api/resources/" + id);
  },
  // Deletes the resource with the given id
  deleteResource: function (id) {
    return axios.delete("/api/resources/" + id);
  },
  // Saves a resource to the database
  saveResource: function (resourceData) {
    return axios.post("/api/resources/", resourceData);
  },
  // get single community resource detail by id
  getCommunityResource: function (id) {
    return axios.get("/api/community_resources/" + id);
  },
  getRequests: function () {
    return axios.get("/api/requests");
  },
  // Gets the book with the given id
  getRequest: function (id) {
    return axios.get("/api/requests/" + id);
  },
  // Deletes the book with the given id
  deleteRequests: function (id) {
    return axios.delete("/api/requests/" + id);
  },
  // Saves a book to the database
  saveRequests: function (requestsData) {
    return axios.post("/api/requests/", requestsData);
  },
  // get single community request detail by id
  getCommunityRequest: function (id) {
    return axios.get("/api/community_requests/" + id);
  },
};



