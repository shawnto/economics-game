from django.http import HttpResponse


def test_resources(request):
    return HttpResponse("working")