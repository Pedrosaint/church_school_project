export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "student" | "user";
    token?: string;
    avatar?: string;
}

export interface AuthState {
    user: User | null;
}

export interface Testimony {
    id: string;
    name: string;
    email: string;
    message: string;
    photoUrl?: string;
    status: "pending" | "approved" | "rejected";
    createdAt: string;
}

export interface News {
    id: string;
    title: string;
    category: string;
    body: string;
    summary: string;
    createdAt: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
}

export interface APIResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ErrorResponse {
    data?: {
        message?: string;
    };
    status?: number;
}
