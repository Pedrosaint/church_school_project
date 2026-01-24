import type { RouteObject } from "react-router-dom";
import MainLayout from "../general/layout/main_layout";
import HomeView from "../landing_page/modules/home/view/home.view";
import AboutView from "../landing_page/modules/about/view/about.view";
import AcademicView from "../landing_page/modules/academic/view/academic.view";
import AdmissionView from "../landing_page/modules/admission/view/admission.view";
import NewsView from "../landing_page/modules/news/view/news.view";
import StudentAuthView from "../auth/student_auth/view/student_auth.view";
import MoreView from "../landing_page/modules/more/view/more.view";
import AcademicCalendar from "../landing_page/modules/academic/components/academic_calender";
import AcademicPolicies from "../landing_page/modules/academic/components/academic_policies";
import DashboardLayout from "../general/dashboard_layout/layout";
import RoleBasedOutlet from "../general/dashboard_layout/role_based_outlet";
import StudentNewsView from "../portals/student_portal/modules/dashboard/view/student_news.view";
import AdminAuthView from "../auth/admin_auth/view/admin_auth.view";
import AdminLogin from "../auth/admin_auth/components/admin_login";
import ForgotPassword from "../auth/admin_auth/components/forgot_password";
import VerifyCode from "../auth/admin_auth/components/verify_code";
import ResetPassword from "../auth/admin_auth/components/reset_password";
import SignUp from "../auth/admin_auth/components/signup";
import AdminDashboardView from "../portals/admin_portal/modules/dashboard/view/admin_dashboard.view";
import AdminNewsView from "../portals/admin_portal/modules/news/view/admin_news.view";
import CreateNewsPost from "../portals/admin_portal/modules/news/components/create_post";
import NewsManagement from "../portals/admin_portal/modules/news/components/admin_news";
import EditNewsPost from "../portals/admin_portal/modules/news/components/edit_news";
import AdminEventsView from "../portals/admin_portal/modules/events/view/admin_events.view";
import EventManagement from "../portals/admin_portal/modules/events/components/event_management";
import CreateEvent from "../portals/admin_portal/modules/events/components/create_event";
import EditEvent from "../portals/admin_portal/modules/events/components/edit_events";
import AdminTestimonalView from "../portals/admin_portal/modules/testimonies/view/admin_testimonies.view";
import AcademicCalenderView from "../portals/student_portal/modules/academic_calender/view/academic_calender.view";
import StudentForgotPassword from "../auth/student_auth/components/forgot_password";
import StudentVerifyCode from "../auth/student_auth/components/verify_code";
import StudentResetPassword from "../auth/student_auth/components/reset_password";
import AdminApplicationView from "../portals/admin_portal/modules/application/view/admin_application.view";
import AdminApplication from "../portals/admin_portal/modules/application/components/admin_application";
import ViewApplication from "../portals/admin_portal/modules/application/components/view_application";



export default function appRouter(): RouteObject[] {
  return [

    // Student Auth Routes
    {
      path: "/student/portal/login",
      element: <StudentAuthView />,
    },
    {
      path: "/student/portal/forgot-password",
      element: <StudentForgotPassword />,
    },
    {
      path: "/student/portal/verify-code",
      element: <StudentVerifyCode />,
    },
    {
      path: "/student/portal/reset-password",
      element: <StudentResetPassword />,
    },

    // Admin Auth Routes
    {
      path: "/admin/portal",
      element: <AdminAuthView />,
      children: [
        {
          index: true,
          element: <AdminLogin />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "verify-code",
          element: <VerifyCode />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },

    // Landing Page Routes
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "/about",
          element: <AboutView />,
        },
        {
          path: "/academic",
          element: <AcademicView />,
        },
        {
          path: "/admission",
          element: <AdmissionView />,
        },
        {
          path: "/news-updates",
          element: <NewsView />,
        },
        {
          path: "/more",
          element: <MoreView />,
        },
      ],
    },
    {
      path: "/academic-calendar",
      element: <AcademicCalendar />,
    },
    {
      path: "/academic-policies",
      element: <AcademicPolicies />,
    },
    // {
    //     path: "/student-handbook",
    //     element: <StudentHandbook />,
    // },


    //  Dashboard Routes
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          element: <RoleBasedOutlet />,
          children: [
            {
              path: "news",
              element: <StudentNewsView />,
            },
            {
              path: "overview",
              element: <AdminDashboardView />,
            },
            {
              path: "testimonies",
              element: <AdminTestimonalView />,
            },
            {
              path: "calendar",
              element: <AcademicCalenderView />,
            },
            {
              path: "admin-news",
              element: <AdminNewsView />,
              children: [
                {
                  index: true,
                  element: <NewsManagement />,
                },
                {
                  path: "create",
                  element: <CreateNewsPost />,
                },
                {
                  path: "edit/:id",
                  element: <EditNewsPost />,
                },
              ],
            },
            {
              path: "events",
              element: <AdminEventsView />,
              children: [
                {
                  index: true,
                  element: <EventManagement />,
                },
                {
                  path: "create",
                  element: <CreateEvent />,
                },
                {
                  path: "edit/:id",
                  element: <EditEvent />,
                },
              ],
            },
            {
              path: "application",
              element: <AdminApplicationView />,
              children: [
                {
                  index: true,
                  element: <AdminApplication />,
                },
                {
                  path: "view/:id",
                  element: <ViewApplication />,
                },
              ],
            }
          ],
        },
      ],
    },
  ];
}
