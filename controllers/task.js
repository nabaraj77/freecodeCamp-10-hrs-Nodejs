const express = require("express");

const getAllItems = (req, res) => {
  res.end("Here are the list of all the tasks");
};

const createTask = (req, res) => {
  res.end("Task Created");
};
const getTask = (req, res) => {
  res.end("Single Task Got");
};

const updateTask = (req, res) => {
  res.end("Single Task Updated");
};

const deleteTask = (req, res) => {
  res.end("Single Task Deleted");
};

module.exports = { getAllItems, createTask, getTask, updateTask, deleteTask };
