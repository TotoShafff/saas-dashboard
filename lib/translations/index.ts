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
    orders: string;
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
  analytics: {
    title: string;
    subtitle: string;
    summary: {
      title: string;
      subtitle: string;
      totalOrders: string;
      avgOrderValue: string;
      conversionRate: string;
    };
  };
  orders: {
    title: string;
    subtitle: string;
    empty: string;
    columns: {
      id: string;
      customer: string;
      date: string;
      total: string;
      status: string;
    };
    status: {
      pending: string;
      shipped: string;
      cancelled: string;
      refunded: string;
    };
    pagination: {
      previous: string;
      next: string;
      pageOf: string;
    };
    controls: {
      searchPlaceholder: string;
      allStatuses: string;
      search: string;
      sort: {
        dateDesc: string;
        dateAsc: string;
        totalDesc: string;
        totalAsc: string;
      };
    };
  };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      dashboard: "Dashboard",
      analytics: "Analytics",
      orders: "Orders",
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
    analytics: {
      title: "Analytics",
      subtitle: "Deep dive into your store performance for 2024.",
      summary: {
        title: "Year Summary",
        subtitle: "Aggregated totals for the full year",
        totalOrders: "Total Orders",
        avgOrderValue: "Avg. Order Value",
        conversionRate: "Conversion Rate",
      },
    },
    orders: {
      title: "Orders",
      subtitle: "Browse and manage all customer orders.",
      empty: "No orders found.",
      columns: {
        id: "Order ID",
        customer: "Customer",
        date: "Date",
        total: "Total",
        status: "Status",
      },
      status: {
        pending: "Pending",
        shipped: "Shipped",
        cancelled: "Cancelled",
        refunded: "Refunded",
      },
      pagination: {
        previous: "Previous",
        next: "Next",
        pageOf: "of",
      },
      controls: {
        searchPlaceholder: "Search by name or order ID…",
        allStatuses: "All statuses",
        search: "Search",
        sort: {
          dateDesc: "Date: Newest first",
          dateAsc: "Date: Oldest first",
          totalDesc: "Total: High to low",
          totalAsc: "Total: Low to high",
        },
      },
    },
  },
  es: {
    nav: {
      dashboard: "Panel",
      analytics: "Analíticas",
      orders: "Pedidos",
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
    analytics: {
      title: "Analíticas",
      subtitle: "Análisis detallado del rendimiento de tu tienda en 2024.",
      summary: {
        title: "Resumen Anual",
        subtitle: "Totales acumulados del año completo",
        totalOrders: "Total de Pedidos",
        avgOrderValue: "Valor Medio del Pedido",
        conversionRate: "Tasa de Conversión",
      },
    },
    orders: {
      title: "Pedidos",
      subtitle: "Consulta y gestiona todos los pedidos de clientes.",
      empty: "No se encontraron pedidos.",
      columns: {
        id: "N° Pedido",
        customer: "Cliente",
        date: "Fecha",
        total: "Total",
        status: "Estado",
      },
      status: {
        pending: "Pendiente",
        shipped: "Enviado",
        cancelled: "Cancelado",
        refunded: "Reembolsado",
      },
      pagination: {
        previous: "Anterior",
        next: "Siguiente",
        pageOf: "de",
      },
      controls: {
        searchPlaceholder: "Buscar por nombre o N° pedido…",
        allStatuses: "Todos los estados",
        search: "Buscar",
        sort: {
          dateDesc: "Fecha: Más reciente",
          dateAsc: "Fecha: Más antiguo",
          totalDesc: "Total: Mayor a menor",
          totalAsc: "Total: Menor a mayor",
        },
      },
    },
  },
};
