CmdUtils.CreateCommand({
  name: "snipurl",
  synonyms: ["Snipr", "snim", "sn.im", "snurl"],
  icon: "http://snipurl.com/site/favicon.ico",
  description: "Replaces the selected URL with a <a href=\"http://snipr.com\">Snipr</a> URL",
  //help: "how to use your command",
  homepage: "http://code.brianhanifin.com/",
  author: { name: "Brian J. Hanifin", email: "code@brianhanifin.com"},
  license: "GPL",
  takes: {"input": noun_type_url},
  preview: function( pblock, input ){
    pblock.innerHTML = "Replaces the selected URL with a SnipUrl shortened URL.";
    var baseUrl = "http://sn.im/site/snip";
    var params = {
      r: "simple",
      link: input.text
    };
    pblock.innerHTML = "Replaces the selected URL with ",
    jQuery.get( baseUrl, params, function( snipUrl ) {
      if(snipUrl != "Error") pblock.innerHTML += snipUrl;
    });
  },
  execute: function( urlToShorten ) {
    var baseUrl = "http://sn.im/site/snip";
    var params = {
      r: "simple",
      link: input.text
    };
    jQuery.get( baseUrl, params, function( results ) {
      CmdUtils.setSelection( results );
    });
  }
});