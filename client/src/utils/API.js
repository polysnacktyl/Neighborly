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
  // Gets all resources
  getResources: function () {
    return axios.get("/api/resources");
  },
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
  }
};


