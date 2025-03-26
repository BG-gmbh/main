import 'dart:io';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart';
import 'package:shelf_static/shelf_static.dart';

void main() async {
  var handler = Pipeline().addMiddleware(logRequests()).addHandler(_handleRequests);
  var server = await serve(handler, 'localhost', 8080);
  print('Server läuft auf http://localhost:8080');
}

Response _handleRequests(Request request) {
  if (request.url.path == 'upload') {
    // Hier könntest du Logik einfügen, um Bilder zu speichern.
    return Response.ok('Bild hochgeladen');
  }

  return Response.notFound('Seite nicht gefunden');
}
