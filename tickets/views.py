from django.shortcuts import render, get_object_or_404
from .models import Event

def home(request):
    featured_events = Event.objects.filter(featured=True)[:3]
    return render(request, 'home.html', {'featured_events': featured_events})

def about(request):
    return render(request, 'about.html')

def events_list(request):
    events = Event.objects.all()
    return render(request, 'events_list.html', {'events': events})

def event_detail(request, pk):
    event = get_object_or_404(Event, pk=pk)
    return render(request, 'event_detail.html', {'event': event})

def contact(request):
    return render(request, 'contact.html')

def cart(request):
    return render(request, 'cart.html')
