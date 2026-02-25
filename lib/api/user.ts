

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

/**
 * Generic request helper
 */
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include", // 🔥 important for cookies
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

/* =========================
   TYPES
========================= */

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: "user" | "admin";
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin";
};

/* =========================
   AUTH ROUTES
========================= */

export const registerUser = (payload: RegisterPayload) => {
  return request<{ message: string }>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const loginUser = (payload: LoginPayload) => {
  return request<{
    message: string;
    user: User;
  }>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const logoutUser = () => {
  return request<{ message: string }>("/auth/logout", {
    method: "POST",
  });
};

/* =========================
   USER ROUTES
========================= */

export const getCurrentUser = () => {
  return request<User>("auth/user", {
    method: "GET",
  });
};

export const getAllUsers = () => {
  return request<{ count: number; users: User[] }>("/auth/users", {
    method: "GET",
  });
};

/* =========================
   PASSWORD RESET
========================= */

export const forgotPassword = (email: string) => {
  return request<{ message: string }>("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
};

export const resetPassword = (token: string, password: string) => {
  return request<{ message: string }>(`/auth/reset-password/${token}`, {
    method: "POST",
    body: JSON.stringify({ password }),
  });
};