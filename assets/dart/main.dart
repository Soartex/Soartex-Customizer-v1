import "dart:html";

main() {
  query("#dartium-check").remove();

  new HttpRequest.get("assets/php/getAccordionItemHtml.php?id=0&parentID=0&title=Title&content=Content", (request) {
    query("#content").appendHtml(request.responseText);
  });
}