from django.urls import path
from bookapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register', views.SignUpView.as_view(), name="register"),
    path("", views.LoginView.as_view(), name="signin"),
    path("home", views.IndexView.as_view(), name="home"),
    path("about", views.AboutView.as_view(), name="about"),
    path("contact", views.ContactView.as_view(), name="contact"),
    path("userpage", views.UserPageView.as_view(), name="userpage"),
    path("signout", views.SignOutView.as_view(), name="signout"),
    path("book/add", views.BookAddView.as_view(), name="addbook"),
    path("book/all", views.BookListView.as_view(), name="listbook"),
    path("userbook/all", views.UserBookListView.as_view(), name="userbooklist"),
    path("book/remove/<int:id>", views.delete_book, name="remove-book"),
    path("book/details/<int:id>", views.TodoDetailView.as_view(), name="book-detail"),
    path("book/change/<int:id>", views.BookEditView.as_view(), name="edit-book")

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
