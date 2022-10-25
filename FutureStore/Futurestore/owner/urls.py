from django.urls import path
from owner import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("dashboard", views.AdminDashBoardView.as_view(), name="dashboard"),
    path("orders/new", views.OrderListView.as_view(), name="neworders"),
    path("orders/details/<int:id>", views.OrderDetailView.as_view(), name="order-details"),
    ]
