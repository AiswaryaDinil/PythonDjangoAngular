from django.shortcuts import render

# Create your views here.
from ecstore.models import products
from rest_framework.views import APIView
from rest_framework.response import Response

class Productview(APIView):
    # def get(self,request,*args,**kwargs):
    #     data=request.data.get("products")
    #     return Response(data=products)

    def post(self,request,*args,**kwargs):
        data = request.data
        products.append(data)
        return Response(data=products)

