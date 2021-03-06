import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
export function Date(props) {
  return (
    <div className="form-group">
      <input type="date" className="form-control" {...props} />
    </div>
  );
}
export function Time(props) { 
  return (
    <div className="form-group"> 
    <input className="form-control" {...props} /> 
    </div>
  );
}
export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function Radio(props) {
  return (
    <div className="form-group radio">
      <input type="radio" value="Available"{...props} /> I am willing to help out!
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
