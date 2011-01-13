CmdUtils.CreateCommand({
  name: "trim",
  synonyms: ["tr.im"],
  icon: "http://tr.im/favicon.ico",
  description: "Replaces the selected URL with a <a href=\"http://tr.im\">tr.im</a> shortened URL.",
  //help: "how to use your command",
  homepage: "http://code.brianhanifin.com/",
  author: { name: "Brian J. Hanifin", email: "code@brianhanifin.com"},
  license: "GPL",
  takes: {"input": noun_type_url},
  preview: "Replaces the selected URL with a shortened tr.im URL.",
  execute: function( input ) {
    var baseUrl = "http://tr.im/api/trim_url.json";
    var params = {
      url: input.text
    };
    jQuery.get( baseUrl, params, function( results ) {
      results = Utils.decodeJson( results );
      CmdUtils.setSelection( results.url );
    });
  }
});