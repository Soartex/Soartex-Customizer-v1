$(document).ready(function() {
    function markMatch(text, term, markup) {
        var match=text.toUpperCase().indexOf(term.toUpperCase()),
            tl=term.length;

        if (match<0) {
            markup.push(text);
            return;
        }
        
        markup.push(text.substring(0, match));
        markup.push("<span class='select2-match'>");
        markup.push(text.substring(match, match + tl));
        markup.push("</span>");
        markup.push(text.substring(match + tl, text.length));
    }
    function formatResult(result, container, query) {
        var markup=[];
        markMatch(result.text, query.term, markup);
        return markup.join("");
    }
    
    $("#texture-selector").select2({
        formatResult: formatResult,
        placeholder: "Select a texture",
        allowClear: true
    });
    $("#file-selector").select2({
        placeholder: "Select a file",
        allowClear: true
    });
});