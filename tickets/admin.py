from django.contrib import admin
from .models import Event, Category

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date', 'location', 'price', 'featured')
    list_filter = ('category', 'date', 'featured')
    search_fields = ('title', 'location', 'description')

admin.site.register(Category)
