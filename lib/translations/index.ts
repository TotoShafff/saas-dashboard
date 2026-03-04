export type Language = "en" | "es";

export type MetricTitleKey =
  | "totalRevenue"
  | "totalCustomers"
  | "monthlyOrders"
  | "conversionRate";

export type ActivityAction =
  | "order_created"
  | "order_shipped"
  | "order_cancelled"
  | "refund_processed"
  | "payment_failed";

export type ActivityStatus = "completed" | "pending" | "failed";

export type TranslationKeys = {
  nav: {
    dashboard: string;
    analytics: string;
    reports: string;
    settings: string;
  };
  navbar: {
    toggleTheme: string;
    toggleLanguage: string;
    profile: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
  };
  metrics: {
    totalRevenue: string;
    totalCustomers: string;
    monthlyOrders: string;
    conversionRate: string;
    vsLastDays: string;
  };
  charts: {
    revenueOverview: string;
    revenueSubtitle: string;
    orderActivity: string;
    orderActivitySubtitle: string;
    orders: string;
  };
  activity: {
    title: string;
    subtitle: string;
    columns: {
      customer: string;
      action: string;
      date: string;
      status: string;
    };
    actions: Record<ActivityAction, string>;
    status: Record<ActivityStatus, string>;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      dashboard: "Dashboard",
      analytics: "Analytics",
      reports: "Reports",
      settings: "Settings",
    },
    navbar: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "ES",
      profile: "Profile",
    },
    dashboard: {
      title: "Admin Dashboard",
      subtitle: "Welcome back! Here's an overview of your store.",
    },
    metrics: {
      totalRevenue: "Total Revenue",
      totalCustomers: "Total Customers",
      monthlyOrders: "Monthly Orders",
      conversionRate: "Conversion Rate",
      vsLastDays: "vs. last 30 days",
    },
    charts: {
      revenueOverview: "Revenue Overview",
      revenueSubtitle: "Monthly revenue for 2024",
      orderActivity: "Order Activity",
      orderActivitySubtitle: "Monthly orders for 2024",
      orders: "orders",
    },
    activity: {
      title: "Recent Activity",
      subtitle: "Latest actions across your store",
      columns: {
        customer: "Customer",
        action: "Action",
        date: "Date",
        status: "Status",
      },
      actions: {
        order_created: "Order created",
        order_shipped: "Order shipped",
        order_cancelled: "Order cancelled",
        refund_processed: "Refund processed",
        payment_failed: "Payment failed",
      },
      status: {
        completed: "Completed",
        pending: "Pending",
        failed: "Failed",
      },
    },
  },
  es: {
    nav: {
      dashboard: "Panel",
      analytics: "Analíticas",
      reports: "Informes",
      settings: "Configuración",
    },
    navbar: {
      toggleTheme: "Cambiar tema",
      toggleLanguage: "EN",
      profile: "Perfil",
    },
    dashboard: {
      title: "Panel de Administración",
      subtitle: "¡Bienvenido de nuevo! Aquí tienes el resumen de tu tienda.",
    },
    metrics: {
      totalRevenue: "Ingresos Totales",
      totalCustomers: "Total de Clientes",
      monthlyOrders: "Pedidos del Mes",
      conversionRate: "Tasa de Conversión",
      vsLastDays: "vs. últimos 30 días",
    },
    charts: {
      revenueOverview: "Resumen de Ingresos",
      revenueSubtitle: "Ingresos mensuales de 2024",
      orderActivity: "Actividad de Pedidos",
      orderActivitySubtitle: "Pedidos mensuales de 2024",
      orders: "pedidos",
    },
    activity: {
      title: "Actividad Reciente",
      subtitle: "Últimas acciones en tu tienda",
      columns: {
        customer: "Cliente",
        action: "Acción",
        date: "Fecha",
        status: "Estado",
      },
      actions: {
        order_created: "Pedido creado",
        order_shipped: "Pedido enviado",
        order_cancelled: "Pedido cancelado",
        refund_processed: "Reembolso procesado",
        payment_failed: "Pago fallido",
      },
      status: {
        completed: "Completado",
        pending: "Pendiente",
        failed: "Fallido",
      },
    },
  },
};
