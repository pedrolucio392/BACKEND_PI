"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prisma = require('../services/prisma');

 const createUser = async (data) => {
  const user = await _prisma.prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
}; exports.createUser = createUser;

 const getAll = async () => {
  const users = await _prisma.prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return users;
}; exports.getAll = getAll;

 const getById = async (id) => {
  const user = await _prisma.prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
}; exports.getById = getById;

 const updateUser = async (id, data) => {
  const user = await _prisma.prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
}; exports.updateUser = updateUser;

 const deleteUser = async (id) => {
  const user = await _prisma.prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });
  return user;
}; exports.deleteUser = deleteUser;