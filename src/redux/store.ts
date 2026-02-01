import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/slice/auth.slice";
import { authApi } from "../auth/admin_auth/api/authApi";
import { newsApi } from "../portals/admin_portal/modules/news/api/news.api";
import { eventApi } from "../portals/admin_portal/modules/events/api/event.api";
import { testimoniesApi } from "../portals/admin_portal/modules/testimonies/api/testimonies.api";
import { admissionApi } from "../landing_page/modules/admission/api/admission.api";
import { applicationApi } from "../portals/admin_portal/modules/application/api/application.api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [testimoniesApi.reducerPath]: testimoniesApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(newsApi.middleware)
      .concat(eventApi.middleware)
      .concat(testimoniesApi.middleware)
      .concat(admissionApi.middleware)
      .concat(applicationApi.middleware),
});

// Types for TypeScript apps
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
