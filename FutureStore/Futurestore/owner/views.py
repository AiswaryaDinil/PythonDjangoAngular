from django.shortcuts import render,redirect
from django.views.generic import TemplateView,ListView,DetailView
from owner.models import Order
from owner.forms import OrderUpdateForm
from django.core.mail import send_mail
# Create your views here.

class AdminDashBoardView(TemplateView):
    template_name = "owner/dashboard.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        count=Order.objects.filter(status="order-placed").count()
        context["count"] = count
        return context

class OrderListView(ListView):
    model=Order  
    context_object_name= "orders"
    template_name='owner/admin-listorder.html'
    def get_queryset(self):
        return Order.objects.filter(status="order-placed")

class OrderDetailView(DetailView):
    model = Order
    template_name = "owner/order-details.html"
    pk_url_kwarg = "id"
    context_object_name = "order"
    def get_context_data(self, **kwargs):
        context=super().get_context_data()
        form=OrderUpdateForm()
        context["form"]=form
        return context
    def post(self,request,*args,**kwargs):
        order=self.get_object()
        form=OrderUpdateForm(request.POST)
        if form.is_valid():
            order.status=form.cleaned_data.get("status")
            order.expected_delivery_date=form.cleaned_data.get("expected_delivery_date")
            dt=form.cleaned_data.get("expected_delivery_date")
            order.save()
            send_mail(
                "order delivery update future store",
                f"your order will be delivered on: {dt}",
                "aiswarya2001ks@gmail.com",
                ["aiswaryaaishu1414@gmail.com"]
            )
            print(form.cleaned_data)
            return redirect("dashboard")
