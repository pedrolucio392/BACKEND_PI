import { prisma, Prisma } from "../services/prisma";

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({
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
};

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
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
};

export const getByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
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
};

export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
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
};
