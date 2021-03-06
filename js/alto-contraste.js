/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            '; path=/',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

jQuery(function() {
  
  jQuery(".alto_contraste").click(function() {
    var a = jQuery.cookie("contraste_site_class");
    if (a == "contraste_on") {
      jQuery.cookie("contraste_site_class", "contraste_off");
      jQuery("body").removeClass(jQuery.cookie("contraste_site"));
      jQuery(".alto_contraste").attr("class", jQuery.cookie("contraste_site_class"));
      jQuery.cookie("contraste_site", "")
    } else {
      jQuery.cookie("contraste_site", "contraste");
      jQuery.cookie("contraste_site_class", "contraste_on");
      jQuery("body").addClass(jQuery.cookie("contraste_site"));
      jQuery(".alto_contraste").attr("class", jQuery.cookie("contraste_site_class"))
    }
  });
  jQuery("body").addClass(jQuery.cookie("contraste"));
  jQuery(".alto_contraste").attr("class", jQuery.cookie("contraste_site_class"))
});