from django.http import HttpResponse

def greeting(request):
    html = "<html><body>Welcome to GoRaceInfo. Check out our API documentation at /api/v1/docs </body></html>"
    return HttpResponse(html)
